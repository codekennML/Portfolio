/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.green["200"],
        bright: colors.white,
        darkColor: colors.gray["800"],
      },
      fontFamily: {
        primary: ["Manrope", ...defaultTheme.fontFamily.sans],
        secondary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
