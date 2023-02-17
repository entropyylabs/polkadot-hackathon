/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: { 100: "#262626", 200: "rgba(0, 0, 0, 0.54)" },
        orangered: "#f24e1e",
        black: "#000",
        goldenrod: "#ffc022",
      },
      fontFamily: { "work-sans": "'Work Sans'" },
    },
    fontSize: { xs: "12px", sm: "16px", base: "20px", lg: "24px" },
  },
  corePlugins: { preflight: false },
};
