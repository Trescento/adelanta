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
        pjakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      backgroundImage: {
        metallic: 'linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%)'
      },
      colors: {
        brand: {
          DEFAULT: '#6D3EFF',
          primary: '#6D3EFF',
          purple: {
            secondary: '#271948',
            'dark-light': 'rgba(109, 62, 255, 0.30)',
            light: '#D3c5ff'
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
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['light']
  }
}
