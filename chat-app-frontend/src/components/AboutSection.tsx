// src/components/AboutSection.tsx

import React, { useState, useEffect } from 'react';

const AboutSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle between dark and light modes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark mode class to the HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <section
      id="about"
      className={`py-20 transition-all duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Dark/Light Mode Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full focus:outline-none bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        {/* Title */}
        <h2
          className={`text-5xl font-extrabold tracking-tight mb-8 ${
            darkMode
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-red-400'
          }`}
        >
          Welcome to Nachtraum
        </h2>

        {/* Intro Text */}
        <p className="text-lg mb-6 leading-relaxed">
          Nachtraum is an innovative, real-time chat application that delivers a seamless and modern communication experience. Designed for those who love personalization, high performance, and fluid interactions, it redefines how people connect.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Dynamic Avatars</h3>
            <p>
              Customize your presence with vibrant, animated avatars that adapt to your mood and preferences.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Theme Shifting</h3>
            <p>
              Enjoy a sleek light and dark mode with smooth transitions, designed to fit your environment.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Real-Time Chat</h3>
            <p>
              Engage in real-time conversations with instant message delivery and read receipts to keep you in sync.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Powered by Modern Tech</h3>
            <p>
              Built with <span className="font-bold">React</span>, <span className="font-bold">TypeScript</span>, and <span className="font-bold">Tailwind CSS</span> for a modern experience.
            </p>
          </div>
        </div>

        {/* Cool Divider */}
        <div className="mt-16 relative">
          <hr className="border-t-2 border-gray-700 opacity-40" />
          <div className="absolute inset-x-0 top-[-12px] text-center">
            <span
              className={`px-6 py-2 rounded-lg ${
                darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-700'
              } text-sm`}
            >
              Crafted with Care
            </span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className={`absolute top-0 right-0 h-48 w-48 opacity-20 rounded-full blur-3xl transform scale-150 ${
          darkMode ? 'bg-gradient-to-tr from-teal-400 to-blue-500' : 'bg-gradient-to-tr from-indigo-400 to-pink-500'
        }`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 h-48 w-48 opacity-20 rounded-full blur-3xl transform scale-150 ${
          darkMode ? 'bg-gradient-to-bl from-purple-500 to-blue-700' : 'bg-gradient-to-bl from-yellow-400 to-red-500'
        }`}
      ></div>
    </section>
  );
};

export default AboutSection;
