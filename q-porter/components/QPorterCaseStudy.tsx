import { useState, useEffect } from "react";
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

interface SimulationResult {
  classical: string;
  quantum: string;
  emissions_saved: number;
  turnaround_improvement: number;
  cost_savings: number;
}

const QPorterCaseStudy: React.FC = () => {
  const [vessels, setVessels] = useState(20);
  const [cranes, setCranes] = useState(5);
  const [yard, setYard] = useState(50);
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const runSimulation = async () => {
    setIsSimulating(true);
    
    // Simulate processing time for realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Enhanced simulation with more realistic calculations
    const efficiency_factor = Math.min(cranes / vessels, 1) * (yard / vessels);
    const classical_throughput = vessels * 0.65 * efficiency_factor; // 65% base efficiency
    const quantum_throughput = classical_throughput * (1.2 + Math.random() * 0.15); // 20-35% improvement
    const emissions_saved = Math.floor(Math.random() * 11) + 15; // 15–25% emission cut
    const turnaround_improvement = Math.floor(Math.random() * 21) + 25; // 25-45% faster turnaround
    const cost_savings = Math.floor(Math.random() * 16) + 20; // 20-35% cost reduction

    setResult({
      classical: classical_throughput.toFixed(1),
      quantum: quantum_throughput.toFixed(1),
      emissions_saved,
      turnaround_improvement,
      cost_savings,
    });
    
    setIsSimulating(false);
  };

  const ComparisonTable = () => (
    <div className="mt-8">
      {/* Mobile scroll hint */}
      <div className="md:hidden text-center text-sm text-gray-500 mb-2">
        ← Scroll horizontally to see all data →
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
        <table className="w-full min-w-[640px]">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-3 md:px-6 py-3 md:py-4 text-left font-semibold text-sm md:text-base">KPI</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-center font-semibold text-sm md:text-base">Classical Planning</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-center font-semibold text-sm md:text-base">Q-Porter™ Quantum</th>
              <th className="px-3 md:px-6 py-3 md:py-4 text-center font-semibold text-sm md:text-base">Improvement</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white hover:bg-gray-50 transition-colors">
              <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-gray-900 text-sm md:text-base">Throughput (ships/day)</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-red-600 font-semibold text-sm md:text-base">{result?.classical}</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-green-600 font-semibold text-sm md:text-base">{result?.quantum}</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-blue-600 font-semibold text-sm md:text-base">
                +{((parseFloat(result?.quantum || '0') - parseFloat(result?.classical || '0')) / parseFloat(result?.classical || '1') * 100).toFixed(1)}%
              </td>
            </tr>
            <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
              <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-gray-900 text-sm md:text-base">Emissions Reduction</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-gray-500 text-sm md:text-base">Baseline</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-green-600 font-semibold text-sm md:text-base">-{result?.emissions_saved}%</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-green-600 font-semibold text-sm md:text-base">
                ↓ {result?.emissions_saved}% CO₂
              </td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 transition-colors">
              <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-gray-900 text-sm md:text-base">Turnaround Time</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-red-600 font-semibold text-sm md:text-base">24-48h</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-green-600 font-semibold text-sm md:text-base">16-28h</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-blue-600 font-semibold text-sm md:text-base">
                -{result?.turnaround_improvement}% faster
              </td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
              <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-gray-900 text-sm md:text-base">Operational Costs</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-gray-500 text-sm md:text-base">Baseline</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-green-600 font-semibold text-sm md:text-base">-{result?.cost_savings}%</td>
              <td className="px-3 md:px-6 py-3 md:py-4 text-center text-green-600 font-semibold text-sm md:text-base">
                ${(result?.cost_savings || 0) * 10}K saved/month
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-gradient-to-b from-sky-50 via-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚢 Case Study: Smart, Green, Efficient Ports with Q-Porter™
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ports face berth congestion, crane idle time, and yard bottlenecks. 
            Q-Porter™ uses <span className="font-semibold text-blue-600">Hybrid Quantum + AI optimization</span> to reduce
            waiting times, emissions, and operational costs while improving overall throughput.
          </p>
        </div>

        {/* Pain Points */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Current Port Challenges</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: "🚢", title: "Berth Congestion", desc: "Vessels wait hours, wasting fuel" },
              { icon: "🏗️", title: "Crane Scheduling", desc: "Idle time, reduced throughput" },
              { icon: "📦", title: "Yard Bottlenecks", desc: "Container pile-ups, lost efficiency" },
              { icon: "🚛", title: "Truck Delays", desc: "Port congestion, missed SLAs" },
              { icon: "🌍", title: "Environmental Impact", desc: "High CO₂, regulatory penalties" }
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-semibold">Interactive Port Optimization Simulator</h3>
            <p className="mt-2 opacity-90 text-sm md:text-base">Experience the power of quantum-enhanced logistics optimization</p>
          </div>
          
          <div className="p-4 md:p-8">
            {/* Input Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Incoming Vessels
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={vessels}
                  onChange={(e) => setVessels(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5</span>
                  <span className="font-semibold text-blue-600">{vessels}</span>
                  <span>100</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Available Cranes
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={cranes}
                  onChange={(e) => setCranes(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1</span>
                  <span className="font-semibold text-blue-600">{cranes}</span>
                  <span>20</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Yard Capacity
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={yard}
                  onChange={(e) => setYard(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>10</span>
                  <span className="font-semibold text-blue-600">{yard}</span>
                  <span>200</span>
                </div>
              </div>
            </div>

            {/* Simulation Button */}
            <div className="text-center mb-8">
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSimulating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running Quantum Simulation...
                  </span>
                ) : (
                  "🔬 Run Quantum Optimization"
                )}
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="space-y-8">
                {/* Chart */}
                <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-center text-gray-800">
                    Throughput Comparison
                  </h4>
                  <div className="w-full h-64 md:h-80">
                    <Bar
                      data={{
                        labels: ["Classical Planning", "Q-Porter™ Quantum Planning"],
                        datasets: [
                          {
                            label: "Ships processed per day",
                            data: [parseFloat(result.classical), parseFloat(result.quantum)],
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
                        maintainAspectRatio: false,
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
                              font: { size: isMobile ? 10 : 12 },
                              color: '#6B7280'
                            },
                            grid: {
                              color: 'rgba(0, 0, 0, 0.1)'
                            }
                          },
                          x: { 
                            ticks: { 
                              font: { size: isMobile ? 9 : 12, weight: 'bold' },
                              color: '#374151',
                              maxRotation: isMobile ? 45 : 0
                            },
                            grid: {
                              display: false
                            }
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {result.emissions_saved}%
                    </div>
                    <div className="text-green-800 font-semibold">Lower Emissions</div>
                    <div className="text-sm text-green-600 mt-1">CO₂, NOx, PM reduction</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {result.turnaround_improvement}%
                    </div>
                    <div className="text-blue-800 font-semibold">Faster Turnaround</div>
                    <div className="text-sm text-blue-600 mt-1">Reduced waiting times</div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      ${result.cost_savings * 10}K
                    </div>
                    <div className="text-purple-800 font-semibold">Monthly Savings</div>
                    <div className="text-sm text-purple-600 mt-1">Operational efficiency</div>
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
            <h4 className="text-xl font-semibold text-gray-900 mb-2">25% Higher Throughput</h4>
            <p className="text-gray-600">
              Quantum scheduling reduces berth & crane idle times through optimal resource allocation.
            </p>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-4xl mb-4">🌱</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">15–25% Lower Emissions</h4>
            <p className="text-gray-600">
              Every optimization plan is emission-aware, reducing CO₂, NOx, and particulate matter.
            </p>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Sustainable & Smart</h4>
            <p className="text-gray-600">
              Drone-enabled GreenScope ensures cleaner, compliant port operations with real-time monitoring.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QPorterCaseStudy;