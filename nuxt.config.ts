// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: 'src/',
  modules: ['@nuxtjs/google-fonts', '@vueuse/motion/nuxt', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  googleFonts: {
    families: {
      'Plus Jakarta Sans': {
        wght: [400, 600, 700]
      }
    },
    subsets: ['latin'],
    display: 'optional',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false
  },
  image: {
    format: ['webp'],
    quality: 80
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      script: [
        // HubSpot
        {
          type: 'text/javascript',
          id: 'hs-script-loader',
          async: true,
          defer: true,
          src: '//js.hs-scripts.com/44399487.js'
        }
      ]
    }
  }
})
