const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      background: "#CDCDCD",
      color_1: "#D4ECDD",
      color_2: "#345B63",
      color_3: "#233E43",
      dark_hover: "#467b86",
      light_hover: "#e6f4ec",
    },
    fontFamily: {
      bebas: "'Bebas Neue', system-ui, cursive",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
