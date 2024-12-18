import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "#ffffff00",
      white: "#f1f3f5",
      lightGray: "#aebbc9",
      mediumGray: "#788ea5",
      darkGray: "#6d8197",
      lightBlue: "#208bfe",
      lightGrayishBlue: "#6c95c0",
      mediumGrayishBlue: "#1e2936",
      darkGrayishBlue: "#161e27",
      coalBlue: "#364b61",
      deepBlue: "#2e4052"
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
