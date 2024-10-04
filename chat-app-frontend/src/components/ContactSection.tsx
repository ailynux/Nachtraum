// src/components/ContactSection.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDumbbell } from '@fortawesome/free-solid-svg-icons'; // Import from solid icons

// Badges or icons for platforms
const badges = [
  { name: 'GitHub', url: 'https://github.com/ailynux', icon: faGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ailyndiaz01', icon: faLinkedin },
  { name: 'LeetCode', url: 'https://leetcode.com/u/ailynux/', icon: faCode },
  { name: 'Exercism', url: 'https://exercism.org/profiles/ailynux', icon: faDumbbell },
  { name: 'StackOverflow', url: 'https://stackoverflow.com/users/19919729/ailyn-diaz', icon: faStackOverflow },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Connect with Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          I'm Ailyn Diaz, a software developer. Find me on the platforms below to check out my work or get in touch.
        </p>

        {/* Icon Badges */}
        <div className="flex justify-center space-x-8 mb-12">
          {badges.map((badge) => (
            <a
              key={badge.name}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block text-gray-700 dark:text-gray-300 hover:text-white transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-md group-hover:bg-blue-500 dark:group-hover:bg-blue-500 transform group-hover:scale-105 transition-transform duration-300 ease-out">
                <FontAwesomeIcon icon={badge.icon} className="text-3xl text-gray-600 dark:text-gray-200 group-hover:text-white" />
              </div>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                {badge.name}
              </p>
            </a>
          ))}
        </div>

        <p className="text-gray-500 dark:text-gray-400">
          Feel free to explore my profiles or drop me a message on any of these platforms.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
