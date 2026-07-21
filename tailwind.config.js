/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#070a0e',
          900: '#0c1117',
          850: '#101720',
          800: '#1a2330'
        },
        teal: {
          300: '#52f3e5',
          400: '#00c4b4',
          500: '#00c4b4',
          600: '#00a19d',
          700: '#00877c',
          950: '#021e1b'
        }
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
