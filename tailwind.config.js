/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tracka-main': '#2C14DD',
        'primary-dark': '#240F51',
        'dark': '#131313',
        'light': '#fff',
        'paper': '#F5F7FF',
        'grey': '#292B2D'
      },
    },
  },
  plugins: [],
  darkMode: true,
}

