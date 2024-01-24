import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        regal:"#000000e3",
      },
      fontFamily: {
        courier: ["Courier New", "Courier", "monospace"],
        franklin: [
          "Franklin Gothic Medium",
          "Arial Narrow",
          "Arial",
          "sans-serif",
        ],
        gill: [
          "Gill Sans",
          "Gill Sans MT",
          "Calibri",
          "Trebuchet MS",
          "sans-serif",
        ],
        lucida: [
          "Trebuchet MS",
          "Lucida Sans Unicode",
          "Lucida Grande",
          "Lucida Sans",
          "Arial",
          "sans-serif",
        ],
        quick: ["Quicksand", "sans-serif"],
        pt: ["PT Serif", "serif"],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
