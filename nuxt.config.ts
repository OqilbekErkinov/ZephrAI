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
      },
      link: [
        {
          rel: 'preload',
          href: '/fonts/Gropled-Bold.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous',
        },
      ],
    }
  },
  modules: ['@nuxt/image'],
})