// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

// Use HEX for normal colors
// USe rgba for colors with opacity

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // add colors here
      colors: {
        'app-primary': {
          DEFAULT: '#00ABB3',
   '50': '#ebfffc',
    '100': '#cdfffb',
    '200': '#a1fffa',
    '300': '#60fff9',
    '400': '#18f8f5',
    '500': '#00dede',
    '600': '#00abb3',
    '700': '#088c96',
    '800': '#10707a',
    '900': '#125d67',
        },
        'app-secondary': {
          DEFAULT: '#3C4048',
'50': '#f4f6f7',
    '100': '#e3e6ea',
    '200': '#cbd0d6',
    '300': '#a6aeba',
    '400': '#7b8795',
    '500': '#606c7a',
    '600': '#525b68',
    '700': '#474d57',
    '800': '#3c4048',
    '900': '#373a42',
        },
      },
      // add fonts here
      fontFamily: {
        // overriding default font
        sans: ['DM Sans', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
