/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      screens: {
        'sm': { 'max': '600px' },   // Small devices (phones)
        'md': { 'min': '810px' },   // Medium devices (tablets)
        'lg': { 'min': '850px' },  // Large devices (desktops)
        'xl': { 'min': '1279px' },  // Extra large devices (large desktops)
        '2xl': { 'max': '1535px' }, // 2X extra large devices
      },
      colors: {
        primary: "#2A8E9E",
        primaryLight: "#E9F3F4",
        primaryDark: "#180D39",
        darkGray: "#1D1E20",
      },
      boxShadow:{
        color: '-16px -13px 20px #180D39' ,
        colorTop:  '0px -4px 5px rgba(0, 0, 0, 0.5), 0px 0px 5px rgba(0, 0, 0, 0.5)',
        colorz:  '0px -4px 5px rgba(0, 0, 0, 0.5), 0px 6px 5px rgba(0, 0, 0, 0.2)',

      },
      fontFamily: {
        yourFont: ['Helvetica', 'sans-serif'], 
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}

