export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              See Q-Porter™ in Action
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              Experience Quantum-Powered Logistics
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              Q-Porter's™ hybrid quantum-classical AI transforms port and airport operations, 
              delivering unprecedented efficiency and cost savings.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Quantum Technology
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Powered by Quantum Computing
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Q-Porter's™ hybrid quantum-classical AI solves complex logistics problems in real-time, optimizing port and airport operations with unprecedented speed and accuracy.
        </p>
        <img
          src="images/product.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <img
          src="images/product1.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Quantum Advantage in Logistics
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Our quantum algorithms process millions of variables simultaneously, finding optimal solutions for:
              </p>
              <ul className="list-disc pl-5 mt-1 text-gray-800 text-md">
                <li>Berth and gate scheduling</li>
                <li>Yard planning and optimization</li>
                <li>Equipment routing and deployment</li>
                <li>Workforce management</li>
                <li>Energy consumption reduction</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
Real-time Decision Making
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Process complex logistics scenarios in seconds, not hours. Our hybrid architecture ensures you get quantum-powered insights with the reliability of classical systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Real-World Impact
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Delivering Measurable Results
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          See how Q-Porter™ has helped leading ports and airports achieve 30-45% improvement in operational efficiency, reduce equipment idle time by up to 60%, and cut carbon emissions by 25% through quantum-powered optimization.
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                30%+ Efficiency Gains
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Our customers typically see a 30-45% improvement in operational efficiency, with some achieving up to 60% reduction in equipment idle time.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Seamless Integration
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Q-Porter™ integrates with your existing TOS, ERP, and IoT infrastructure, providing a unified view of your operations without disrupting current workflows.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Sustainability Impact
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Reduce your carbon footprint by up to 25% through optimized equipment routing, reduced idling times, and energy-efficient operations planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
