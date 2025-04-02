/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#f9f9f9',
        text: '#333',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '32px',
      },
      fontSize: {
        sm: '14px',
        md: '16px',
        lg: '20px',
      },
    },
  },
  plugins: [],
};