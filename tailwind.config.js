/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      
      colors: {
        reddish: '#b22020',
        creamish: '#f8f1e8',
        darkBrownish: '#320000',
        greyish: '#d9d9d9'
      },

      fontFamily: {
        'mont-font': ['Montserrat', 'Arial', 'sans-serif'],
      },

      height: {
        '120': '30rem', // or 480px
        '140': '35rem',
      },
    },
  },
  plugins: [],
}

