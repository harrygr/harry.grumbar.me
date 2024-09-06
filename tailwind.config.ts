import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["var(--font-inter)", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
