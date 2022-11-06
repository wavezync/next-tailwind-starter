import '../src/styles/global.scss'
import { create } from '@storybook/theming';

const lightTheme = create({
  base: 'light',
  brandTitle: 'Analyst Builder'
})

const darkTheme = create({
  base: 'dark',
  appBg: '#04061f',
  appContentBg: '#04061f',
  barBg: '#04061f',
  brandTitle: 'Analyst Builder',
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme
  }
}