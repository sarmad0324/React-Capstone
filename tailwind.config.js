/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '650px',
      // => @media (min-width: 576px) { ... }

      'md': '870px',
      // => @media (min-width: 960px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1500px',
    },
  },
  plugins: [],
}