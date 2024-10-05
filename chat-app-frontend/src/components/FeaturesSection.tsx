import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gradient-to-b from-black via-gray-900 to-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-yellow-400 dark:from-red-600 dark:via-pink-500 dark:to-yellow-500 mb-10 animate-pulse">
          App Features
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Discover the innovative features that make <span className="font-bold text-red-500 dark:text-red-400">Nachtraum</span> a standout experience in communication.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center transition-transform transform hover:scale-110">
            <div className="bg-red-500 dark:bg-red-600 p-6 rounded-full mb-6 shadow-2xl group">
              <svg className="w-12 h-12 text-white group-hover:animate-spin" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h4a2 2 0 012 2v4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4v-4H6a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Real-Time Messaging</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stay connected with lightning-fast, real-time messaging.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center transition-transform transform hover:scale-110">
            <div className="bg-pink-500 dark:bg-pink-600 p-6 rounded-full mb-6 shadow-2xl group">
              <svg className="w-12 h-12 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 00-6.32 12.906l-1.357 4.074a1 1 0 001.238 1.238l4.074-1.357A8 8 0 1010 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Customizable Avatars</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Personalize your profile with vibrant, animated avatars.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center transition-transform transform hover:scale-110">
            <div className="bg-yellow-500 dark:bg-yellow-600 p-6 rounded-full mb-6 shadow-2xl group">
              <svg className="w-12 h-12 text-white group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v4H4V5z" />
                <path fillRule="evenodd" d="M4 9h12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Responsive Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enjoy seamless experiences across all devices and platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
