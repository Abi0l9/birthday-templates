/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#FFC701",
        "brand-orange": "#FF8403",
        "brand-db": "#1F006D",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        windsong: ["WindSong", "sans-serif"],
        satisfy: ["Satisfy", "sans-serif"],
        dancing: ["'Dancing Script'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
