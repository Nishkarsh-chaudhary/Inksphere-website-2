/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '200px',
        md: '640px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#ffa500',
        secondary: '#fff',
      },
    },
  },
  plugins: [],
}

