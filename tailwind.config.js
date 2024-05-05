/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'rbt' : 'Roboto Slab'
    },
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 1s ease-in-out infinite',
      },
      colors: {
        "lr" : "#FF007F"
      },
      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}