import React from 'react';

function Billing() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-12 text-gray-800">Upgrade with Monthly Plan</h1>
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-center gap-8">
        {/* Free Plan */}
        <div className="border border-gray-300 p-8 rounded-lg w-full sm:w-1/2 flex flex-col items-center bg-white shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Free Plan</h2>
          <div className="flex items-baseline mt-4">
            <p className="text-gray-800 text-5xl font-bold">$0</p>
            <p className="text-gray-600 ml-1 text-lg">/ month</p>
          </div>
          <p className="mt-4 text-gray-600 text-center">10,000 Words/Month</p>
          <p className="mt-2 text-gray-600 text-center">50+ Content Templates</p>
          <p className="mt-2 text-gray-600 text-center">Unlimited Download & Copy</p>
          <p className="mt-2 text-gray-600 text-center">1 Month of History</p>
          <button className="mt-8 w-full bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none">
            Active Plan
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="border border-gray-300 p-8 rounded-lg w-full sm:w-1/2 flex flex-col items-center bg-white shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Monthly Plan</h2>
          <div className="flex items-baseline mt-4">
            <p className="text-gray-800 text-5xl font-bold">$9</p>
            <p className="text-gray-600 ml-1 text-lg">/ month</p>
          </div>
          <p className="mt-4 text-gray-600 text-center">100,000 Words/Month</p>
          <p className="mt-2 text-gray-600 text-center">50+ Templates Access</p>
          <p className="mt-2 text-gray-600 text-center">Unlimited Download & Copy</p>
          <p className="mt-2 text-gray-600 text-center">1 Year of History</p>
          <button className="mt-8 w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
