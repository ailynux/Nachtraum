import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDumbbell, faGlobe } from '@fortawesome/free-solid-svg-icons';

// Badges or icons for platforms
const badges = [
  { name: 'GitHub', url: 'https://github.com/ailynux', icon: faGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ailyndiaz01', icon: faLinkedin },
  { name: 'LeetCode', url: 'https://leetcode.com/u/ailynux/', icon: faCode },
  { name: 'Exercism', url: 'https://exercism.org/profiles/ailynux', icon: faDumbbell },
  { name: 'StackOverflow', url: 'https://stackoverflow.com/users/19919729/ailyn-diaz', icon: faStackOverflow },
  { name: 'Portfolio', url: 'https://ailynux.github.io', icon: faGlobe },
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-300 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-red-500 mb-8 tracking-tight">
          Connect with Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          I'm Ailyn Diaz, a passionate software developer. Find me on the platforms below to explore my work, connect,
          or drop a message.
        </p>

        {/* Icon Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
          {badges.map((badge) => (
            <a
              key={badge.name}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-all"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-md group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transform transition-transform group-hover:scale-105">
                <FontAwesomeIcon
                  icon={badge.icon}
                  className="text-3xl sm:text-4xl text-gray-500 dark:text-gray-300 group-hover:text-red-500 transition-colors"
                />
              </div>
              <p className="text-sm sm:text-base mt-3 font-medium text-gray-600 dark:text-gray-300 group-hover:text-red-500 transition-colors duration-300">
                {badge.name}
              </p>
            </a>
          ))}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Feel free to explore my profiles or contact me through these platforms.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
