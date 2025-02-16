/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./source/**/*.{njk,md,ejs}", "./source/**/*.{svg,json,yml}"],
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
