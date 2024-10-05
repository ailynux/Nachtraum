const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        // Simplified and focused on a red/black theme
        primary: {
          light: '#ff6b6b',
          DEFAULT: '#ff0000', // Main red color
          dark: '#b20000', // Darker red
        },
        secondary: {
          light: '#c4c4c4',
          DEFAULT: '#424242', // Dark gray for contrast
          dark: '#1b1b1b', // Darker for a deeper black effect
        },
        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#9e9e9e',
          dark: '#212121',
        },
        accent: {
          light: '#ff4081',
          DEFAULT: '#f50057',
          dark: '#c51162',
        },
        background: {
          light: '#fdfdfd', // Light background for light mode
          dark: '#0a0a0a', // Deep black background for dark mode
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
        '200%': '200% 200%',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 5s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '50% 50%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: theme => ({
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-light': "linear-gradient(-45deg, #f3ec78, #af4261)",
        'gradient-dark': "linear-gradient(-45deg, #200122, #6f0000)", // Deep red/black gradient for dark mode
      }),
      boxShadow: {
        'neon': '0 0 10px rgba(255, 0, 0, 0.7)', // Neon red shadow
        'neon-primary': '0 0 10px rgba(255, 0, 0, 0.8)', // Neon red for primary elements
        'neon-accent': '0 0 10px rgba(245, 0, 87, 0.7)', // Neon accent for a secondary effect
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.dark'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.dark'),
              },
            },
            h1: {
              color: theme('colors.primary.DEFAULT'),
            },
            h2: {
              color: theme('colors.neutral.dark'),
            },
            h3: {
              color: theme('colors.neutral.dark'),
            },
            code: {
              backgroundColor: theme('colors.neutral.light'),
              color: theme('colors.accent.dark'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.light'),
            a: {
              color: theme('colors.primary.light'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT'),
              },
            },
            h1: {
              color: theme('colors.primary.light'),
            },
            h2: {
              color: theme('colors.neutral.light'),
            },
            h3: {
              color: theme('colors.neutral.light'),
            },
            code: {
              backgroundColor: theme('colors.neutral.dark'),
              color: theme('colors.accent.light'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      backgroundImage: ['dark'],
      typography: ['dark'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Improved form styles
    require('@tailwindcss/typography'), // Prose classes
    require('@tailwindcss/aspect-ratio'), // Aspect ratio utilities
    require('@tailwindcss/line-clamp'), // Truncate text utilities
    plugin(function({ addUtilities }) {
      // Custom 3D transform utilities
      const newUtilities = {
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective': {
          perspective: '1000px',
        },
        '.transform-3d': {
          transform: 'translateZ(0)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
