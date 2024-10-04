import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaHome, FaInfoCircle, FaListAlt, FaEnvelope } from 'react-icons/fa';
import SearchBar from './SearchBar';  // <-- Ensure this import is correct

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const users = ['Alfredo', 'Alex', 'Jojo', 'Ailyn'];   // Example user data
  const chatrooms = ['General', 'Tech Talk', 'Gaming', 'Random'];  // Example chatrooms
  const messages = ['Hey, how’s it going?', 'Welcome to the chatroom!', 'Let’s talk about tech.', 'Game night!'];  // Example messages

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-500 dark:bg-gray-900 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#top" className="text-3xl font-extrabold text-white hover:text-blue-300">
              Nachtraum
            </a>
          </div>
          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 justify-center px-2 lg:ml-6">
            <div className="w-full max-w-lg lg:max-w-xs">
              <SearchBar
                placeholder="Search users, chatrooms, or messages..."
                users={users}
                chatrooms={chatrooms}
                messages={messages}
              />
            </div>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#top"
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FaHome className="mr-1" /> Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FaInfoCircle className="mr-1" /> About
            </a>
            <a
              href="#features"
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FaListAlt className="mr-1" /> Features
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FaEnvelope className="mr-1" /> Contact
            </a>
          </div>
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-blue-300 focus:outline-none mr-4"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                /* Sun Icon */
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm-7 7a1 1 0 011-1H5a1 1 0 110 2H4a1 1 0 01-1-1zm13 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-6 5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.95-2.536a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm9.9 0a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM6.343 5.657a1 1 0 010 1.414L5.636 7.778a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zm9.9 0a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                /* Moon Icon */
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M17.293 13.293A8 8 0 116.707 2.707a8.003 8.003 0 0010.586 10.586z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white hover:text-blue-300 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {!isOpen ? (
                  /* Hamburger Icon */
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  /* Close Icon */
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#top"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-blue-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
