export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    "~/assets/css/index.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },
  modules: ['@nuxt/image'],
})