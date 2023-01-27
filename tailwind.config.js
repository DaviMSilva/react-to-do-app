/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(212,100%, 37%,1)',
        danger: 'hsla(0,77%, 47%,1)'

      }
    },
  },
  plugins: [],
}
