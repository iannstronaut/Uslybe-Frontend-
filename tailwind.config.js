/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      navbar: "#222222",
      terang: "#eeeeee",
      bg: "#121212",
      content: "#151515",
      violet: "#8b5cf6",
    },
    screens: {
      phone: { max: "530px" },
      tablet: { min: "530px", max: "768px" },
      web: { min: "770px" },
    },
  },
  plugins: [],
};
