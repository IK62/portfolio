/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      keyframes: {
        appearIn: {
          from: { transform: 'translateY(100%)', opacity: 0 },
          to: { transform: 'unset', opacity: 1 },
        },
        slideIn: {
          from: { width: '0' },
          to: { width: 'calc(100% - 22px)' },
        },
        fadeOut: {
          from: {
            opacity: '1',
          },
          to: { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
