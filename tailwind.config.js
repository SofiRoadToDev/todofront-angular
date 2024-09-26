/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        wine: '#991d5d',
        lightcoffe:'#dec87a',
        salmon:'#f07951',
        lila:'#471754',
        rose:'#f2445e'
      },
      backgroundImage:{
        'pattern1':"url('./assets/img/patron1.png')"
      }
    },
  },
 
  plugins: [],
}

