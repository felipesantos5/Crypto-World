/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1000px" },
      slg: { max: "920px" },
      md: { max: "750px" },
      sm: { max: "600px" },
      xsm: { max: "300px" },
    },
    minHeight: {
      "80vh": "83.1vh",
    },
    extend: {
      maxWidth: {
        1444: "1444px",
        150: "150px",
      },
      spacing: {
        "10vh": "10vh",
        80: "80vh",
        300: "300px",
        450: "450px",
        500: "500px",
        700: "700px",
      },
    },
  },
  plugins: [],
};
