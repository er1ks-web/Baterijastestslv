/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Calm light theme. `night` is a muted forest green used for the few dark bands.
        ink: '#16241d',
        paper: '#f4f8f4',
        canvas: '#f6f7f3',
        night: '#16352b',
        surface: '#ffffff',
        brand: {
          50: '#effaf0',
          100: '#d7f3da',
          200: '#aee6b4',
          300: '#78d385',
          400: '#3fb94f',
          500: '#1f9a35',
          600: '#1a7b2d',
          700: '#166227',
          800: '#124d21',
          900: '#0d3a19',
        },
        charge: {
          50: '#f0fde3',
          100: '#8ae844',
          200: '#5dd910',
          300: '#31b006',
          400: '#2a9405',
          500: '#067a1f',
          600: '#01551b',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 36px -20px rgba(22, 36, 29, 0.22)',
      },
    },
  },
  plugins: [],
}
