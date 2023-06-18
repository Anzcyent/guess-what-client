/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      redHat: ["Red Hat Display", "sans-serif"],
    },
    colors: {
      saddleBrown: "#8B4513",
      tan: "#D2B48C",
      sienna: "#A0522D ",
      white: "#fff",
      black: "#000",
      tomato: "#FF6347",
      lime: "#32CD32",
      gray: "#A7A7A7"
    },
    screens: {
      ss: "340px",
      sm: "550px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      xl2: "1500px",
    },
  },
  plugins: [],
};
