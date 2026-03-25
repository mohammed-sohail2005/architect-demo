/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0D0D0D",
        gold: "#C5A059",
        "gold-light": "#E0C08C",
        "gold-dark": "#8C6E3D",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.3em",
      },
    },
  },
  plugins: [],
}
