export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-400 mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-green-400 mb-2">Q-Porter™</h2>
            <div className="w-12 h-0.5 bg-green-400 mb-3"></div>
            <p className="text-lg">The Quantum Way to Optimal Port & Airport Logistics</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-white uppercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="https://yablokolabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="https://yablokolabs.com/#contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-300">
          &copy; 2025{' '}
          <a
            href="https://yablokolabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
          >
            Yabloko Labs Pvt. Ltd.
          </a>
          {' '}All rights reserved.
        </p>
      </div>
    </footer>
  );
}
