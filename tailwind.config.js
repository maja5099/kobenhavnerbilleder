const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#CDCDCD",
      h2: "#114E60",
      h3: "#325288",
    },
    fontFamily: {
      caveat: "'Caveat', system-ui, sans-serif",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
