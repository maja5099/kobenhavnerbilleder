const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      background: "#CDCDCD",
      h2: "#114E60",
      h3: "#325288",
      p: "#5a5a5a",
      button: "#F5CEBE",
      hover: "#FEDDCF",
      dark: "#565656",
      color_1: "#D4ECDD",
      color_2: "#345B63",
      color_3: "#152D35",
      color_4: "#112031",
      color_hover: "#4a818c",
    },
    fontFamily: {
      bebas: "'Bebas Neue', system-ui, cursive",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
