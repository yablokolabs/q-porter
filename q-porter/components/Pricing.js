const Feature = ({ featureText }) => {
  return (
    <li className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 w-4 h-4 mt-1.5 mr-2 text-gray-700 md:h-4 md:w-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div>{featureText}</div>
    </li>
  );
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:pb-32 bg-gradient-to-t from-sky-300 to-sky-100"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 md:mb-28">
          <div className="max-w-3xl mx-auto md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-black rounded-lg bg-[#bbd0dd] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40 mb-4">
              Flexible Pricing
            </div>
            <h2 className="mb-5 text-3xl font-semibold text-gray-800 md:text-5xl">
              Enterprise-Grade Quantum Logistics
            </h2>
            <p className="text-xl md:text-2xl">
              Custom solutions tailored to your port or airport's unique operational needs and scale.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-12 md:mt-0 xl:grid-cols-3">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  Pilot Program
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Starting at $15,000/month</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  For ports and airports evaluating quantum-powered logistics optimization.
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Single terminal optimization" />
                <Feature featureText="Basic quantum route planning" />
                <Feature featureText="Email support" />
                <Feature featureText="Monthly performance reports" />
              </ul>
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                Get Started{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 transform bg-white border border-white border-opacity-50 shadow-2xl rounded-xl bg-opacity-90 md:space-y-6 md:p-8 xl:scale-110">
              <p className="absolute top-0 w-1/2 px-4 py-1 text-sm font-semibold text-center transform -translate-x-1/2 -translate-y-4 rounded-full left-1/2 bg-sky-500 text-sky-100">
                Most preferred
              </p>
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
Regional Hub
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Starting at $45,000/month</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  For regional ports and airports ready to optimize operations at scale.
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Multi-terminal optimization" />
                <Feature featureText="Advanced quantum route planning" />
                <Feature featureText="Real-time resource allocation" />
                <Feature featureText="Predictive maintenance alerts" />
                <Feature featureText="24/7 priority support" />
                <Feature featureText="Custom API access" />
                <Feature featureText="Quarterly business reviews" />
                <Feature featureText="Dedicated success manager" />
              </ul>
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-100 transition duration-300 ease-in-out transform rounded-full shadow bg-gradient-to-t from-sky-800 to-sky-600 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
              >
                Get Started{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  Global Enterprise
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Custom Enterprise Solution</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  For global port operators and airport networks requiring maximum optimization.
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Global network optimization" />
                <Feature featureText="Custom quantum algorithm development" />
                <Feature featureText="End-to-end supply chain integration" />
                <Feature featureText="AI/ML model customization" />
                <Feature featureText="Dedicated engineering team" />
                <Feature featureText="Custom SLAs and 24/7 support" />
                <Feature featureText="Executive business reviews" />
                <Feature featureText="Co-innovation partnership" />
                <Feature featureText="On-site training and enablement" />
                <Feature featureText="Custom security and compliance" />
              </ul>
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                Contact Sales{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
