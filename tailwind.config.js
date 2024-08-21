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
        'btn-my-bg': 'rgba(171, 239, 95, 0.5)',
        'title-my': 'rgba(33, 33, 33, 1)',
      }
    },
  },
  plugins: [require('daisyui')],
}

