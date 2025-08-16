import React, { useState } from 'react';
import Typing from './Typing';

const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="relative p-8 mx-4 bg-white rounded-2xl max-w-md w-full">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-gray-900">Thank you!</h3>
        <p className="text-gray-600">We've received your submission and will be in touch soon.</p>
      </div>
    </div>
  </div>
);

export default function Action() {
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className="relative max-w-full md:mx-10 lg:mx-20 xl:mx-auto">
      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
      <div
        id="get-started"
        className="px-10 shadow-2xl py-14 md:py-32 md:text-center"
        style={{
          background:
            'radial-gradient(circle, rgb(248 7 89) 21%, rgb(181 61 250) 67%',
        }}
      >
        <h1 className="mb-6 text-3xl font-semibold text-center text-white md:text-6xl">
          Transform your <br className="sm:hidden" />
          <Typing />
        </h1>
        <h2 className="mb-6 text-xl text-center text-gray-200 md:text-2xl">
          Powering next-gen logistics — Q-Porter™ brings quantum optimization to ports and airports.
        </h2>
        
        <div className="max-w-2xl p-8 mx-auto mb-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20">
          <form 
            action="https://formspree.io/f/manbznyq"
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              const formData = new FormData(form);
              
              try {
                const response = await fetch(form.action, {
                  method: 'POST',
                  body: formData,
                  headers: {
                    'Accept': 'application/json'
                  }
                });
                
                if (response.ok) {
                  form.reset();
                  setShowSuccess(true);
                } else {
                  const errorData = await response.json();
                  throw new Error(errorData.error || 'Form submission failed');
                }
              } catch (error) {
                alert(`There was an error: ${error.message}`);
                console.error('Form submission error:', error);
              }
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-3 text-gray-900 transition duration-200 bg-white border-0 rounded-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-5 py-3 text-gray-900 transition duration-200 bg-white border-0 rounded-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-white">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-5 py-3 text-gray-900 transition duration-200 bg-white border-0 rounded-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  placeholder="Company name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="volume" className="block text-sm font-medium text-white">Monthly Logistics Volume</label>
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  className="w-full px-5 py-3 text-gray-900 transition duration-200 bg-white border-0 rounded-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  placeholder="e.g., 10,000"
                  required
                />
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700"
              >
                Get Started with Q-Porter™
              </button>
            </div>
            
            <p className="mt-4 text-sm text-center text-gray-300">
              Join leading ports and airports optimizing their operations
            </p>
          </form>
        </div>
        <div className="flex -ml-4 space-x-4 text-center text-gray-100 md:justify-center md:space-x-8">
          <div className="ml-4">
            Quantum-powered efficiency • For ports & airports • Real-time optimization
          </div>
        </div>
      </div>
    </div>
  );
}
