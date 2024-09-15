/** @type {import('tailwindcss').Config} */

const colors = {
  veryDarkGray: "#030712",
  darkGray: "#111827",
  gray: "#1f2937",
  lightGray: "rgb(75 85 99)",
  purple: "#4f46e5",
  black: "#000",
  white: "#fff",
  offWhite: "#FBFBFB",
  high: "rgb(220 38 38)",
  normal: "rgb(22 163 74)",
  medium: "rgb(234 88 12)",
  low: "rgb(37 99 235)",
  overlay: "hsl(0deg 0% 0% / 70.5%)",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      backgroundColor: colors,
      colors: colors,
      screens: {
        sm: { max: "767px" },
        md: { min: "768px", max: "991px" },
        lg: { min: "992px", max: "1199px" },
        xl: { min: "1200px", max: "1440px" },
        "2xl": { min: "1440px" },
      },
      fontFamily: {},
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
