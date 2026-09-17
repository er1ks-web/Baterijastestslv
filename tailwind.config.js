/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1417',
        paper: '#f7f5f0',
        brand: {
          50: '#eefaf6',
          100: '#d7f2e9',
          200: '#b0e5d4',
          300: '#7fd2bb',
          400: '#49b89e',
          500: '#279c83',
          600: '#1b7c69',
          700: '#186356',
          800: '#164f46',
          900: '#14413a',
        },
        amber: {
          50: '#fff8ea',
          100: '#ffedc2',
          200: '#ffdb8a',
          300: '#ffc250',
          400: '#ffab29',
          500: '#f88d0f',
          600: '#db6b09',
          700: '#b54d0b',
          800: '#933c10',
          900: '#7a3210',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(15, 20, 23, 0.18)',
      },
    },
  },
  plugins: [],
}
