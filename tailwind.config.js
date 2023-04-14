/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightGray: "#d0d0d0",
      neutralGray: "#4f4f4f",
      darkGray: "#1e1e1e",
    },
    extend: {},
  },
  plugins: [],
}
