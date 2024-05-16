/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        navbar: "#222222",
        terang: "#eeeeee",
        bg: "#121212",
        content: "#151515",
      },
      screens: {
        phone: { max: "530px" },
        tablet: { min: "530px", max: "768px" },
        web: { min: "770px" },
      },
    },
  },
  plugins: [],
};
