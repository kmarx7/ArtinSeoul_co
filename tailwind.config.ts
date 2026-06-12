import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fluxBg: "#e4e3e0",
        fluxDark: "#141414",
        fluxNeon: "#e2ff46",
        fluxGray: "#8f8f8f",
        fluxWine: "#7c203a",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px rgba(20,20,20,1)",
        brutalSm: "2px 2px 0px 0px rgba(20,20,20,1)",
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(rgba(20,20,20,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,20,.06) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
