module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      body: ["var(--font-inter)", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
