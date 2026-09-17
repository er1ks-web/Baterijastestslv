/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15141a',
        paper: '#f5f4f7',
        brand: {
          50: '#f2effc',
          100: '#e1dbf7',
          200: '#c3b6ef',
          300: '#a48fe3',
          400: '#8467d3',
          500: '#6b4ec0',
          600: '#573ea2',
          700: '#463184',
          800: '#392869',
          900: '#302358',
        },
        iris: {
          50: '#f5f2fd',
          100: '#e9e2fb',
          200: '#cabdf7',
          300: '#af9cf2',
          400: '#9376e8',
          500: '#7a58d9',
          600: '#6544bc',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', '"Georgia"', 'serif'],
      },
      boxShadow: {
        soft: '0 14px 34px -14px rgba(27, 22, 19, 0.25)',
      },
    },
  },
  plugins: [],
}
