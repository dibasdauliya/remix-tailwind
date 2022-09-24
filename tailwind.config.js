/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    fontFamily: {
      sans: ["'Poppins'", 'sans-serif'],
    },
    extend: {
      colors: {
        brand: '#4E2C96',
        light: '#FAF8FE',
        secondary: '#1D1036',
      },
    },
  },
  plugins: [],
}
