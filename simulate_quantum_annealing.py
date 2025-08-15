import neal
import pandas as pd
import numpy as np
import time
import math
from collections import defaultdict


def generate_data(num_ships=50, num_berths=50, seed=42):
    """Generate random ship-berth assignment data."""
    np.random.seed(seed)
    ships = [f"Ship{i+1}" for i in range(num_ships)]
    berths = [f"Berth{j+1}" for j in range(num_berths)]

    data = []
    for ship in ships:
        for berth in berths:
            docking_time = np.random.randint(1, 11)  # hours
            data.append((ship, berth, docking_time))

    return pd.DataFrame(data, columns=["Ship", "Berth", "Time"]), ships, berths


def build_qubo(df, ships, berths):
    """Build QUBO with dynamic penalty scaling."""
    Q = {}
    max_time = df["Time"].max()
    num_vars = len(ships) * len(berths)

    # Dynamic penalty scaling based on problem size and max time
    penalty = max_time * (len(ships) ** 3) * 10
    reward = -5  # encourage assignments

    variables = {
        (row["Ship"], row["Berth"]): f"{row['Ship']}_{row['Berth']}"
        for _, row in df.iterrows()
    }

    # Track which variables correspond to which ships/berths
    var_to_ship_berth = {v: (s, b) for (s, b), v in variables.items()}

    # Objective: reward assignment, add time as cost
    for _, row in df.iterrows():
        var = variables[(row["Ship"], row["Berth"])]
        Q[(var, var)] = reward + row["Time"]

    # Constraint 1: Each ship exactly one berth
    for ship in ships:
        ship_vars = [variables[(ship, berth)] for berth in berths]
        for i, v1 in enumerate(ship_vars):
            Q[(v1, v1)] = Q.get((v1, v1), 0) + penalty * (-2)
            for j, v2 in enumerate(ship_vars):
                if i < j:
                    Q[(v1, v2)] = Q.get((v1, v2), 0) + penalty * 2

    # Constraint 2: Each berth exactly one ship
    for berth in berths:
        berth_vars = [variables[(ship, berth)] for ship in ships]
        for i, v1 in enumerate(berth_vars):
            Q[(v1, v1)] = Q.get((v1, v1), 0) + penalty * (-2)
            for j, v2 in enumerate(berth_vars):
                if i < j:
                    Q[(v1, v2)] = Q.get((v1, v2), 0) + penalty * 2

    return Q, variables, var_to_ship_berth, penalty, reward


def analyze_solution(sample, variables, var_to_ship_berth, ships, berths):
    """Analyze solution for constraint violations and calculate metrics."""
    # Track assignments
    ship_assignments = defaultdict(list)
    berth_assignments = defaultdict(list)
    assignments = []

    for var, val in sample.items():
        if val == 1 and var in var_to_ship_berth:
            ship, berth = var_to_ship_berth[var]
            ship_assignments[ship].append(berth)
            berth_assignments[berth].append(ship)
            assignments.append((ship, berth))

    # Check for constraint violations
    violations = {
        "ships_without_berth": [s for s in ships if not ship_assignments[s]],
        "ships_with_multiple_berths": {
            s: b for s, b in ship_assignments.items() if len(b) > 1
        },
        "berths_without_ship": [b for b in berths if not berth_assignments[b]],
        "berths_with_multiple_ships": {
            b: s for b, s in berth_assignments.items() if len(s) > 1
        },
    }

    return violations, assignments


def solve_qubo(Q, variables, var_to_ship_berth, ships, berths, num_reads=100):
    """Solve QUBO and return valid solutions."""
    sampler = neal.SimulatedAnnealingSampler()
    start_time = time.time()
    sampleset = sampler.sample_qubo(Q, num_reads=num_reads)
    elapsed_time = time.time() - start_time

    solutions = []
    for sample, energy, num_occurrences in sampleset.record:
        sample_dict = {
            var: int(val) for var, val in zip(sampleset.variables, sample)
        }
        violations, assignments = analyze_solution(
            sample_dict, variables, var_to_ship_berth, ships, berths
        )

        # Calculate total docking time
        total_time = sum(
            int(
                var_to_ship_berth[var][1].split("Berth")[1]
            )  # Get berth number as weight
            for var, val in sample_dict.items()
            if val == 1 and var in var_to_ship_berth
        )

        # Calculate constraint violation score
        constraint_violation = 0
        constraint_violation += len(violations["ships_without_berth"])
        constraint_violation += sum(
            len(berths)
            for berths in violations["ships_with_multiple_berths"].values()
        )
        constraint_violation += len(violations["berths_without_ship"])
        constraint_violation += sum(
            len(ships)
            for ships in violations["berths_with_multiple_ships"].values()
        )

        solutions.append(
            {
                "sample": sample_dict,
                "energy": energy,
                "num_occurrences": num_occurrences,
                "assignments": assignments,
                "total_time": total_time,
                "constraint_violation": constraint_violation,
                "violations": violations,
            }
        )

    # Sort by constraint violations first, then by total time
    solutions.sort(key=lambda x: (x["constraint_violation"], x["total_time"]))

    return solutions, elapsed_time


def print_violations(violations):
    """Print detailed violation report."""
    if violations["ships_without_berth"]:
        print(
            "\n⚠️ Ships without berth assignment:",
            ", ".join(violations["ships_without_berth"]),
        )

    if violations["ships_with_multiple_berths"]:
        print("\n❌ Ships assigned to multiple berths:")
        for ship, berths in violations["ships_with_multiple_berths"].items():
            print(f"  {ship}: {', '.join(berths)}")

    if violations["berths_without_ship"]:
        print(
            "\n⚠️ Berths without ship assignment:",
            ", ".join(violations["berths_without_ship"]),
        )

    if violations["berths_with_multiple_ships"]:
        print("\n❌ Berths assigned to multiple ships:")
        for berth, ships in violations["berths_with_multiple_ships"].items():
            print(f"  {berth}: {', '.join(ships)}")


def print_solution_report(solutions, elapsed_time, num_ships, num_berths):
    """Print comprehensive solution report."""
    best_solution = solutions[0]
    violations = best_solution["violations"]

    print("\n" + "=" * 70)
    print("=== Q-Porter Quantum Annealing Feasibility Report ===")
    print("=" * 70)
    print(f"\n📊 Problem Size: {num_ships} ships × {num_berths} berths")
    print(
        f"🔍 Search Space: {math.factorial(num_ships):.3e} possible assignments"
    )
    print(f"⏱️  Solve Time: {elapsed_time:.2f} seconds")

    print("\n" + "-" * 30 + " Solution Summary " + "-" * 30)
    print(f"🏆 Best Energy: {best_solution['energy']}")
    print(
        f"✅ Valid Assignments: {len(best_solution['assignments'])}/{num_ships}"
    )
    print(f"🚨 Constraint Violations: {best_solution['constraint_violation']}")
    print(f"⏱️  Total Docking Time: {best_solution['total_time']}")

    # Print violations if any
    if best_solution["constraint_violation"] > 0:
        print("\n" + "🚨 Constraint Violations Detected ".ljust(70, "!"))
        print_violations(violations)
    else:
        print("\n✨ Feasible solution found with no constraint violations!")

    # Show top 5 solutions
    print("\n" + "-" * 30 + " Top Solutions " + "-" * 30)
    for i, sol in enumerate(solutions[:5]):
        print(
            f"\nSolution #{i+1} (Energy: {sol['energy']}, "
            f"Violations: {sol['constraint_violation']}, "
            f"Docking Time: {sol['total_time']})"
        )
        print(f"Occurred {sol['num_occurrences']} times in the sample")

    print("\n" + "=" * 70)


def main():
    # Configuration
    num_ships = 50
    num_berths = 50
    num_reads = 100

    # 1. Generate problem data
    print("Generating problem data...")
    df, ships, berths = generate_data(num_ships, num_berths)

    # 2. Build QUBO
    print("Building QUBO model...")
    Q, variables, var_to_ship_berth, penalty, reward = build_qubo(
        df, ships, berths
    )

    # 3. Solve
    print(f"Solving with {num_reads} reads (this may take a while)...")
    solutions, elapsed_time = solve_qubo(
        Q, variables, var_to_ship_berth, ships, berths, num_reads
    )

    # 4. Report results
    print_solution_report(solutions, elapsed_time, num_ships, num_berths)


if __name__ == "__main__":
    main()
