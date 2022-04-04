module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        primary: '#10B981',
        secondary: "#F97316"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}