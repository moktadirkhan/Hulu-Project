module.exports = {
  
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    
    './component/**/*.{js,ts,jsx,tsx}',
 
  ],
 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      colors: {
        blue: {
          1200: '#06202A'
        },
      },
      screen:{
        "3xl":"2000px",
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
