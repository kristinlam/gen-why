/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#060A0D',
      cream: '#F3E7D7',
      gray: '#9CA3AF',
      green: '#145048',
      blue: '#014BA4',
      purple: '#B25685',
      red: '#CD4022',
      yellow: '#FFAC44',
    },
    fontFamily: {
      sans: ['Golos Text', 'sans-serif'],
      serif: ['Climate Crisis', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
