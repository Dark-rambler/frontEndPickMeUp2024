import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#7b4c46",
        "secondary": "#715b58",
        "tertiary": "#613430",
        "button": "#f53827",
        "tittles-color": "#471d1a",
        "text-color": "#613b3b",
        "white": "#fff",
        "color-menu": "#f95234",
        "icons-primary": "#471d1a",
        "cream":"#fffdd0"
      },
    },
  },
  plugins: [],
};
export default config;
