/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#1a2238',
          700: '#111827',
          800: '#0d1321',
          900: '#0a0e1a',
        },
        gold: {
          400: '#dfaf4c',
          500: '#c9952e',
          600: '#a67b26',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}