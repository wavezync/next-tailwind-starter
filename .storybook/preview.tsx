// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

import "../src/styles/global.scss";
import React from "react";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f9fafb" },
        { name: "dark", value: "#1a202c" },
      ],
    },
    darkMode: {
      current: "dark",
      classTarget: "html",
      stylePreview: true,
      // Override the default dark theme
      dark: { ...themes.dark, appBg: "#1a202c" },
      // Override the default light theme
      light: { ...themes.normal, appBg: "#f9fafb" },
    },
  },
  decorators: [
    (Story) => {
      const isDarkMode = useDarkMode();

      useEffect(() => {
        document.documentElement.dataset["theme"] = isDarkMode
          ? "dark"
          : "light";
      }, [isDarkMode]);

      return (
        <main className="font-sans antialiased">
          <style>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}</style>
          <Story />
        </main>
      );
    },
  ],
};

export default preview;
