// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxtjs/google-fonts', '@vueuse/motion/nuxt'],
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
    }
  },
  app: {
    head: {
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
