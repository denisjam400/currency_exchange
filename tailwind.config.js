/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{html,js,jsx}",
    "./src/scenes/**/*.{html,js,jsx}",
    "./src/Utils/**/*.{html,js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "490px",
      md: "781px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      Centra: ["Centra", "sans-serif"],
      CoffekanRegular: ["CoffekanRegular", "sans-serif"],
      KenokyLight: ["KenokyLight", "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        darkBlue: "#07155E",
        lightBlue: "#2962ff",
        Blue: "#1857de",
        black: "#121212",
        panelBlack: "#222",
        gold: "#ffd700",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
  },
  plugins: [],
};
