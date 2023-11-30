/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'gradientDark1': 'rgba(77, 80, 82, 1)',
        'gradientDark2': 'rgba(51, 62, 67, 1)',
        'gradientDark3': 'rgba(27, 46, 54, 1)',
        'bronzeDark': '#D0C0BD',
        'darkDark': 'rgba(24, 26, 26, 1)',
        'inputTextPlaceholderDark': 'rgba(98, 106, 106, 1)',
        'inputTextDark': 'rgba(204, 204, 204, 1)',
      },
      fontFamily: {
        custom: ['Shentox', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

