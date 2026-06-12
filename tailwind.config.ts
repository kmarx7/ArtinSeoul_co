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
        night: "#080b14",
        ink: "#101827",
        wine: "#7c203a",
        gold: "#d7ae61",
        brass: "#a77a39",
        pearl: "#f6efe2",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(215, 174, 97, 0.18)",
        wine: "0 24px 70px rgba(124, 32, 58, 0.26)",
      },
      backgroundImage: {
        "radial-stage":
          "radial-gradient(circle at 18% 18%, rgba(215,174,97,.22), transparent 32%), radial-gradient(circle at 76% 12%, rgba(124,32,58,.24), transparent 34%), radial-gradient(circle at 62% 74%, rgba(33,60,112,.30), transparent 38%)",
      },
    },
  },
  plugins: [],
};

export default config;
