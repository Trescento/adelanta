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
    }
  },
  image: {
    format: ['webp']
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
