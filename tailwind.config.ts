import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-vertical': 'linear-gradient(to top, #secondary 0%, #transparent 100%)'
      },
      keyframes: {
        'gradient-vertical': {
          '0%': { backgroundSize: '100% 0' },
          '100%': { backgroundSize: '100% 100%' },
        },
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
        "banner-color":"#f9f8fd"
      },
      animation: {
        'gradient-vertical': 'gradient-vertical 0.5s forwards',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
