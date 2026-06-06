/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Teal accent — PaalDigital "Digital" / D color (#00B8BE)
        brand: {
          50:  '#e6f9fa',
          100: '#b3eef1',
          200: '#80e3e8',
          300: '#4dd8df',
          400: '#26cdd6',
          500: '#00b8be',
          600: '#009298',
          700: '#006d72',
          800: '#00484c',
          900: '#002326',
        },
        // Navy blue — PaalDigital "Paal" / P color (#1D3461)
        navy: {
          50:  '#e8edf5',
          100: '#c5d0e8',
          200: '#a2b3db',
          300: '#7f96ce',
          400: '#5c79c1',
          500: '#1d3461',
          600: '#172a4e',
          700: '#111f3a',
          800: '#0c1427',
          900: '#060a14',
        },
      },
    },
  },
  plugins: [],
}
