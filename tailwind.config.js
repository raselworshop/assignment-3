/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      'manrope': ['"Manrope"', '"sans-serif"']
    },
    extend: {
      colors: {
        clifford: '#da373d',
        'btn-my': '#ABEF5F',
      }
    },
  },
  plugins: [require('daisyui')],
}

