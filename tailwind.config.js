/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./source/**/*.{njk,md}", "./source/**/*.{svg,json}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#58a7db',
          dark: '#013c63',
          neutral: '#add4ed',
        },
      },
    },
  },
  plugins: [],
};
