/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xsm: '350px', // Now it will work as max-width: 400px, instead default working in min-width
      }
    },
  },
  plugins: [],
}

