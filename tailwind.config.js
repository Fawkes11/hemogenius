/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        caribbean: {
          100: "#E9F1F0",
          200: "#A6C7C2",
          300: "#649D95",
          400: "#398176",
          500: "#217367",
          600: "#196358",
          700: "#115348",
          800: "#084239",
          900: "#003229"
        }
      },
    },
  },
  plugins: [heroui()],
  darkMode: "class",
};


