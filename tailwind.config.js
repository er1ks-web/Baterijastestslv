/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1b1613',
        paper: '#faf5ec',
        brand: {
          50: '#fbeee7',
          100: '#f3d5c4',
          200: '#e6b294',
          300: '#d68d67',
          400: '#c26f47',
          500: '#a8542f',
          600: '#8a4126',
          700: '#6f341f',
          800: '#582a1a',
          900: '#492415',
        },
        volt: {
          50: '#f8ffe0',
          100: '#eeffb0',
          200: '#dfff78',
          300: '#cdfa3f',
          400: '#b8ea1f',
          500: '#9fce12',
          600: '#7ea50e',
          700: '#5f7c0e',
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
