/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        'sm': '400px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      extend: {
        backgroundImage: {
           'hero-pattern': "linear-gradient(to right bottom, rgba(' #131318',0.5), rgba(' #131318',0.5)), url('../Images/3.png')",
        },
      },
    },
    plugins: [],
  }