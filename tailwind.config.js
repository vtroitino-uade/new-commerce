/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#253F55',
        'bg-black': '#09090B',
        'container-white': '#FCFCFC'
      },
      backgroundImage: {
        'bg-footer': "url('../assets/img/degrade-footer.png')",
        'bg-main': "url('../assets/img/Canvas.png')"
      }
    },
  },
  plugins: [],
}