/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        pjakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#6D3EFF',
          primary: '#6D3EFF',
          secondary: {
            purple: '#271948'
          },
          black: '#150D26',
          gray90: '#F6F6F6'
        }
      },
      container: {
        center: true,
        padding: '1.5rem'
      }
    }
  },
  plugins: []
}
