import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 transition-all duration-700 ease-in-out transform relative overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-red-500"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Title */}
        <h2
          className="text-6xl font-extrabold tracking-tight mb-12 animate-text hover:scale-105 transition-transform duration-500 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-yellow-500 dark:bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"
        >
          Welcome to Nachtraum
        </h2>

        {/* Intro Text */}
        <p className="text-xl mb-8 leading-relaxed opacity-90">
          Nachtraum is an innovative, real-time chat application that delivers a seamless and modern communication experience. Designed for those who love personalization, high performance, and fluid interactions, it redefines how people connect.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Feature 1 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-900">
            <h3 className="text-2xl font-semibold mb-4 dark:text-red-500">Dynamic Avatars</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Customize your presence with vibrant, animated avatars that adapt to your mood and preferences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-900">
            <h3 className="text-2xl font-semibold mb-4 dark:text-red-500">Theme Shifting</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Enjoy a sleek light and dark mode with smooth transitions, designed to fit your environment.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-900">
            <h3 className="text-2xl font-semibold mb-4 dark:text-red-500">Real-Time Chat</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Engage in real-time conversations with instant message delivery and read receipts to keep you in sync.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-900">
            <h3 className="text-2xl font-semibold mb-4 dark:text-red-500">Powered by Modern Tech</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Built with <span className="font-bold text-red-500">React</span>, <span className="font-bold text-red-500">TypeScript</span>, and <span className="font-bold text-red-500">Tailwind CSS</span> for a modern experience.
            </p>
          </div>
        </div>

        {/* Stylish Divider */}
        <div className="mt-16 relative">
          <hr className="border-t-2 border-gray-300 dark:border-gray-700 opacity-50" />
          <div className="absolute inset-x-0 top-[-12px] text-center">
            <span className="px-6 py-2 rounded-lg shadow-sm bg-gray-100 text-gray-700 dark:bg-black dark:text-gray-500 text-sm transition duration-500">
              Crafted with Care
            </span>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-0 right-0 h-72 w-72 opacity-30 rounded-full blur-3xl transform scale-125 rotate-45 animate-float bg-gradient-to-tr from-red-500 to-yellow-500 dark:bg-gradient-to-tr from-red-400 to-purple-600"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 opacity-30 rounded-full blur-3xl transform scale-125 rotate-45 animate-float bg-gradient-to-bl from-red-600 to-purple-700 dark:bg-gradient-to-bl from-pink-500 to-red-600"></div>
    </section>
  );
};

export default AboutSection;
