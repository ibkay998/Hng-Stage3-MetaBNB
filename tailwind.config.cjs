/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'rose': ['"Red Rose"', 'cursive'],
        'sora': ['"Sora"', 'sans-serif']
      },
    },
  },
  plugins: [],
};
