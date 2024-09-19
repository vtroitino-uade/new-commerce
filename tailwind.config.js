/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#253F55',
        'bg-black': '#09090B',
        'bg-button': '#0077B6',
        'container-white': '#FCFCFC',
        'link-hover': '#90E0EF'
      },
      backgroundImage: {
        'bg-footer': "url('../assets/img/degrade-footer.png')",
        'bg-main': "url('../assets/img/Canvas.png')",
        'bg-gradient': "url('../assets/img/top-gradient.png')"
      }
    },
  },
  plugins: [],
}