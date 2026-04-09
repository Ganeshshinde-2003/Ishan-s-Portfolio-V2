import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#A7AAB4",
        "primary-green": "#00F48D",
      },
      backgroundColor: {
        primary: "#131415",
        "primary-green": "#00F48D",
      },
      textColor: {
        "primary-green": "#00F48D",
      },
      borderColor: {
        "primary-green": "#00F48D",
      },
      boxShadow: {
        "custom-shadow": "0 1px 40px 10px rgba(5, 5, 5, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
