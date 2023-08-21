/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1000px" },
      md: { max: "750px" },
      sm: { max: "450px" },
      xsm: { max: "500px" },
    },
    extend: {
      maxWidth: {
        1444: "1444px",
        150: "150px",
      },
      spacing: {
        10: "10vh",
        80: "80vh",
        500: "500px",
      },
    },
  },
  plugins: [],
};
