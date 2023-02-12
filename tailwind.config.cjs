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
