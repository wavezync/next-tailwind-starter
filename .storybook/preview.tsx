// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from "@storybook/react";
import { Inter } from "next/font/google";

import "../src/styles/global.scss";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const preview: Preview = {
  parameters: {},
  decorators: [
    (Story) => (
      <main className="font-sans antialiased">
        <style>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}</style>
        <Story />
      </main>
    ),
  ],
};

export default preview;
