/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#601818',
        'darkest': '#281010',
      },
      fontFamily: {
        'logo': ['"Cinzel Decorative"', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}
