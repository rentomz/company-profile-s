/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/image/hero-img.png')",
        'hero-web': "url('/src/assets/image/building.jpg')",
      }
    },
  },
  plugins: [],
}
