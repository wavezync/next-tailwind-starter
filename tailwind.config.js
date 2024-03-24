// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // add colors here
      // use heirarchical colors to define colors with same prefix
      colors: {
        "app-primary": {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)", // default color when no suffix is used
          focus: "hsl(var(--color-primary-focus) / <alpha-value>)",
          hover: "hsl(var(--color-primary-hover) / <alpha-value>)",
          text: "hsl(var(--color-primary-text) / <alpha-value>)",
        },
        "app-secondary": {
          DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
          focus: "hsl(var(--color-secondary-focus) / <alpha-value>)",
          hover: "hsl(var(--color-secondary-hover) / <alpha-value>)",
          text: "hsl(var(--color-secondary-text) / <alpha-value>)",
        },
        "app-tertiary": {
          DEFAULT: "hsl(var(--color-tertiary) / <alpha-value>)",
          focus: "hsl(var(--color-tertiary-focus) / <alpha-value>)",
          hover: "hsl(var(--color-tertiary-hover) / <alpha-value>)",
          text: "hsl(var(--color-tertiary-text) / <alpha-value>)",
        },
        "app-success": {
          DEFAULT: "hsl(var(--color-success) / <alpha-value>)",
          focus: "hsl(var(--color-success-focus) / <alpha-value>)",
          hover: "hsl(var(--color-success-hover) / <alpha-value>)",
          text: "hsl(var(--color-success-text) / <alpha-value>)",
        },
        "app-warning": {
          DEFAULT: "hsl(var(--color-warning) / <alpha-value>)",
          focus: "hsl(var(--color-warning-focus) / <alpha-value>)",
          hover: "hsl(var(--color-warning-hover) / <alpha-value>)",
          text: "hsl(var(--color-warning-text) / <alpha-value>)",
        },
        "app-danger": {
          DEFAULT: "hsl(var(--color-danger) / <alpha-value>)",
          focus: "hsl(var(--color-danger-focus) / <alpha-value>)",
          hover: "hsl(var(--color-danger-hover) / <alpha-value>)",
          text: "hsl(var(--color-danger-text) / <alpha-value>)",
        },
        "app-muted": {
          DEFAULT: "hsl(var(--color-muted) / <alpha-value>)",
          focus: "hsl(var(--color-muted-focus) / <alpha-value>)",
          hover: "hsl(var(--color-muted-hover) / <alpha-value>)",
          text: "hsl(var(--color-muted-text) / <alpha-value>)",
        },

        "app-disabled": "hsl(var(--color-disabled) / <alpha-value>)",
        "app-bg": "hsl(var(--color-background) / <alpha-value>)",
        "app-textbox": "hsl(var(--color-textbox) / <alpha-value>)",
      },
      // add fonts here
      fontFamily: {
        // overriding default font
        sans: ["var(--font-inter)", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
