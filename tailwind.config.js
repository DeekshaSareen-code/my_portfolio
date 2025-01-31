/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

module.exports = {
  content: ["./src/**/*.{js,jsx,html}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
