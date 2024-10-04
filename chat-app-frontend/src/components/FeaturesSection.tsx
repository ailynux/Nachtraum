// src/components/FeaturesSection.tsx

import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Discover the powerful features that make Nachtraum stand out.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-500 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                {/* Icon SVG Path */}
                <path d="M2 5a2 2 0 012-2h4a2 2 0 012 2v4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4v-4H6a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-Time Messaging</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Communicate instantly with friends and colleagues.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-green-500 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                {/* Icon SVG Path */}
                <path d="M10 2a8 8 0 00-6.32 12.906l-1.357 4.074a1 1 0 001.238 1.238l4.074-1.357A8 8 0 1010 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Customizable Avatars</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Personalize your profile with unique avatars.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-red-500 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                {/* Icon SVG Path */}
                <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v4H4V5z" />
                <path fillRule="evenodd" d="M4 9h12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Responsive Design</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Enjoy a seamless experience on any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
