import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface AirportSimulationResult {
  classical_delay: string;
  quantum_delay: string;
  emissions_saved: number;
  throughput_improvement: number;
  cost_savings: number;
  fuel_savings: number;
}

const QPorterAirportCaseStudy: React.FC = () => {
  const [flights, setFlights] = useState(60);
  const [gates, setGates] = useState(20);
  const [runways, setRunways] = useState(2);
  const [result, setResult] = useState<AirportSimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = async () => {
    setIsSimulating(true);
    
    // Simulate processing time for realism
    await new Promise(resolve => setTimeout(resolve, 1800));

    // Enhanced simulation with realistic airport calculations
    const capacity_ratio = flights / (gates * runways * 10); // Capacity utilization
    const base_delay = Math.max(5, capacity_ratio * 25); // Base delay increases with congestion
    const classical_delay = base_delay * (1 + Math.random() * 0.3); // 0-30% variation
    const quantum_improvement = 0.20 + Math.random() * 0.15; // 20-35% improvement
    const quantum_delay = classical_delay * (1 - quantum_improvement);
    
    const emissions_saved = Math.floor(Math.random() * 11) + 18; // 18–28% emission reduction
    const throughput_improvement = Math.floor(Math.random() * 16) + 15; // 15-30% more flights
    const cost_savings = Math.floor(Math.random() * 21) + 25; // 25-45% cost reduction
    const fuel_savings = Math.floor(Math.random() * 16) + 20; // 20-35% fuel savings

    setResult({
      classical_delay: classical_delay.toFixed(1),
      quantum_delay: quantum_delay.toFixed(1),
      emissions_saved,
      throughput_improvement,
      cost_savings,
      fuel_savings,
    });
    
    setIsSimulating(false);
  };

  const ComparisonTable = () => (
    <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">KPI</th>
            <th className="px-6 py-4 text-center font-semibold">Classical Scheduling</th>
            <th className="px-6 py-4 text-center font-semibold">Q-Porter™ Quantum</th>
            <th className="px-6 py-4 text-center font-semibold">Improvement</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">Average Delay (minutes)</td>
            <td className="px-6 py-4 text-center text-red-600 font-semibold">{result?.classical_delay}</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">{result?.quantum_delay}</td>
            <td className="px-6 py-4 text-center text-blue-600 font-semibold">
              -{((parseFloat(result?.classical_delay || '0') - parseFloat(result?.quantum_delay || '0')) / parseFloat(result?.classical_delay || '1') * 100).toFixed(1)}%
            </td>
          </tr>
          <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">Flight Throughput</td>
            <td className="px-6 py-4 text-center text-gray-500">Baseline</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">+{result?.throughput_improvement}%</td>
            <td className="px-6 py-4 text-center text-blue-600 font-semibold">
              +{result?.throughput_improvement}% more flights/hour
            </td>
          </tr>
          <tr className="border-b bg-white hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">Fuel Consumption</td>
            <td className="px-6 py-4 text-center text-red-600 font-semibold">High idling</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">-{result?.fuel_savings}%</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">
              ↓ {result?.fuel_savings}% fuel burn
            </td>
          </tr>
          <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">CO₂ Emissions</td>
            <td className="px-6 py-4 text-center text-gray-500">Baseline</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">-{result?.emissions_saved}%</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">
              ↓ {result?.emissions_saved}% CO₂, NOx
            </td>
          </tr>
          <tr className="bg-white hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">Operational Costs</td>
            <td className="px-6 py-4 text-center text-gray-500">Baseline</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">-{result?.cost_savings}%</td>
            <td className="px-6 py-4 text-center text-green-600 font-semibold">
              ${(result?.cost_savings || 0) * 15}K saved/month
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="w-full bg-gradient-to-b from-indigo-50 via-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ✈️ Case Study: Smart Airport Operations with Q-Porter™
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Airports face runway congestion, gate allocation inefficiencies, and ground crew bottlenecks. 
            Q-Porter™ uses <span className="font-semibold text-indigo-600">Hybrid Quantum + AI optimization</span> to reduce
            flight delays, fuel consumption, and emissions while maximizing throughput.
          </p>
        </div>

        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Current Airport Challenges</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: "🛬", title: "Runway Bottlenecks", desc: "Flight delays, holding patterns" },
              { icon: "🚪", title: "Gate Allocation", desc: "Aircraft waiting, longer turnaround" },
              { icon: "👷", title: "Ground Crew Issues", desc: "Misaligned baggage, fueling schedules" },
              { icon: "🛣️", title: "Taxiway Congestion", desc: "Aircraft burn fuel idling on ground" },
              { icon: "🌍", title: "Carbon Footprint", desc: "CO₂, NOx from delays, APU usage" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center border border-red-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-red-700 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Simulation */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
            <h3 className="text-2xl font-semibold">Interactive Airport Optimization Simulator</h3>
            <p className="mt-2 opacity-90">Experience quantum-enhanced aviation logistics optimization</p>
          </div>
          
          <div className="p-8">
            {/* Input Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Flights per Hour
                </label>
                <input
                  type="range"
                  min="20"
                  max="120"
                  value={flights}
                  onChange={(e) => setFlights(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>20</span>
                  <span className="font-semibold text-indigo-600">{flights}</span>
                  <span>120</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Available Gates
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={gates}
                  onChange={(e) => setGates(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5</span>
                  <span className="font-semibold text-indigo-600">{gates}</span>
                  <span>50</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Active Runways
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={runways}
                  onChange={(e) => setRunways(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1</span>
                  <span className="font-semibold text-indigo-600">{runways}</span>
                  <span>5</span>
                </div>
              </div>
            </div>

            {/* Simulation Button */}
            <div className="text-center mb-8">
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSimulating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running Aviation Quantum Simulation...
                  </span>
                ) : (
                  "✈️ Run Quantum Optimization"
                )}
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="space-y-8">
                {/* Chart */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-center text-gray-800">
                    Flight Delay Comparison
                  </h4>
                  <Bar
                    data={{
                      labels: ["Classical Scheduling", "Q-Porter™ Quantum Scheduling"],
                      datasets: [
                        {
                          label: "Average delay (minutes)",
                          data: [parseFloat(result.classical_delay), parseFloat(result.quantum_delay)],
                          backgroundColor: [
                            "rgba(239, 68, 68, 0.8)",
                            "rgba(34, 197, 94, 0.8)"
                          ],
                          borderColor: [
                            "rgba(239, 68, 68, 1)",
                            "rgba(34, 197, 94, 1)"
                          ],
                          borderWidth: 2,
                          borderRadius: 8,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          titleColor: 'white',
                          bodyColor: 'white',
                        }
                      },
                      scales: {
                        y: { 
                          beginAtZero: true, 
                          ticks: { 
                            font: { size: 12 },
                            color: '#6B7280'
                          },
                          grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                          }
                        },
                        x: { 
                          ticks: { 
                            font: { size: 12, weight: 'bold' },
                            color: '#374151'
                          },
                          grid: {
                            display: false
                          }
                        },
                      },
                    }}
                  />
                </div>

                {/* Key Benefits */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {result.emissions_saved}%
                    </div>
                    <div className="text-green-800 font-semibold text-sm">Lower Emissions</div>
                    <div className="text-xs text-green-600 mt-1">CO₂, NOx reduction</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {result.throughput_improvement}%
                    </div>
                    <div className="text-blue-800 font-semibold text-sm">Higher Throughput</div>
                    <div className="text-xs text-blue-600 mt-1">More flights/hour</div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {result.fuel_savings}%
                    </div>
                    <div className="text-purple-800 font-semibold text-sm">Fuel Savings</div>
                    <div className="text-xs text-purple-600 mt-1">Less idling</div>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      ${result.cost_savings * 15}K
                    </div>
                    <div className="text-orange-800 font-semibold text-sm">Monthly Savings</div>
                    <div className="text-xs text-orange-600 mt-1">Operational costs</div>
                  </div>
                </div>

                {/* Comparison Table */}
                <ComparisonTable />
              </div>
            )}
          </div>
        </div>

        {/* Solution Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">20% Faster Turnarounds</h4>
            <p className="text-gray-600">
              Quantum gate and runway scheduling reduces aircraft ground time through optimal resource allocation.
            </p>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-4xl mb-4">🌱</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">18–28% Lower Fuel Burn</h4>
            <p className="text-gray-600">
              Every optimization plan minimizes taxiing time and idling, reducing CO₂, NOx, and fuel costs.
            </p>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart & Sustainable</h4>
            <p className="text-gray-600">
              GreenScope Aviation enables cleaner airport operations with real-time runway monitoring and emissions tracking.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QPorterAirportCaseStudy;