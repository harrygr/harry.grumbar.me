module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
