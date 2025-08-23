import { useState } from 'react';
import QPorterCaseStudy from './QPorterCaseStudy';
import QPorterAirportCaseStudy from './QPorterAirportCaseStudy';

const CombinedCaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ports' | 'airports'>('ports');

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tab Navigation */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Q-Porter™ Case Studies
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            See how Q-Porter™'s quantum-enhanced optimization transforms logistics across different transportation hubs
          </p>
          
          <div className="inline-flex bg-white rounded-xl border border-gray-200 shadow-lg p-1">
            <button
              onClick={() => setActiveTab('ports')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'ports'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              🚢 Smart Ports
            </button>
            <button
              onClick={() => setActiveTab('airports')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'airports'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              ✈️ Smart Airports
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300 ease-in-out">
          {activeTab === 'ports' && (
            <div className="animate-fadeIn">
              <QPorterCaseStudy />
            </div>
          )}
          {activeTab === 'airports' && (
            <div className="animate-fadeIn">
              <QPorterAirportCaseStudy />
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default CombinedCaseStudies;