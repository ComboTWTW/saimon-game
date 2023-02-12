/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "../src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "veryDark": '#111016',
        "greenCard": '#00bdaa',
        "redCard": '#ff2e63',
        "yellowCard": '#f9ed69',
        "blueCard": '#3490de',
        "cardDark": '#24232b',
      }
    },
    screens: {
      sm: '350px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}
