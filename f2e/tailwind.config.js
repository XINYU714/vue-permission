/** @type {import('tailwindcss').Config} */
const screens = {
  'xs': '320px',
  'sm': '576px',
  'md': '768px',
  'lg': '992px',
  'xl': '1400px',
  'xxl': '1920px', //xxl  
}
const spacing = {
  '8px': '8px',
  '12px': '12px',
  '16px': '16px',
  '20px': '20px',
  '32px': '32px',
  '40px': '40px',
  '60px': '60px',
  '80px': '80px',
  '120px': '120px',
}
const colors = {
  'gray-1': '#27374D',
  'gray-2': '#526D82',
  'gray-3': '#9DB2BF',
  'gray-4': '#DDE6ED',
  'green-1': '#6B9080',
  'green-2': '#A4C3B2',
  'green-3': '#CCE3DE',
  'green-4': '#F6FFF8',
  'red': '#FF6666',
}
module.exports = {
  content: ['./src/**/*.{vue,js,jsx}', './index.html'],
  theme: {
    container: {
      center:true,
      padding:{
        DEFAULT: '20px',
        md:'40px',
        lg:'60px',
      },
      screens:screens
    },
    extend: {
      colors:colors,
      spacing:spacing
    },
  },
  plugins: [],
}

