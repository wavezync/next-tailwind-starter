// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // add colors here
      // use heirarchical colors to define colors with same prefix
      colors: {
        'app-primary': {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)', // default color when no variant is used
          focus: 'hsl(var(--color-primary-focus) / <alpha-value>)',
          hover: 'hsl(var(--color-primary-hover) / <alpha-value>)',
        },
        'app-secondary': {
          DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
          focus: 'hsl(var(--color-secondary-focus) / <alpha-value>)',
          hover: 'hsl(var(--color-secondary-hover) / <alpha-value>)',
        },
        'app-disabled': 'hsl(var(--color-disabled) / <alpha-value>)',
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
