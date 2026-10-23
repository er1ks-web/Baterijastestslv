/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme: `ink` is the LIGHT foreground (text, borders, tracks).
        ink: '#e8f0ea',
        paper: '#f4f8f4',
        canvas: '#0a110e',
        night: '#050908',
        surface: '#111b16',
        // Site accent is aqua/teal; the logo itself stays green.
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        charge: {
          50: '#effdfa',
          100: '#5eead4',
          200: '#2dd4bf',
          300: '#14b8a6',
          400: '#0d9488',
          500: '#0f766e',
          600: '#115e59',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px -18px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
}
