export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    "~/assets/css/index.css",
    "~/assets/css/CareServiceModal.css",
    "~/assets/css/CreditInfoModal.css",
    "~/assets/css/LanguageModal.css",
    "~/assets/css/PaymentModal.css",
    "~/assets/css/SocialNetworkModal.css",
    "~/assets/css/creator-pro.css",
    "~/assets/css/creator.css",
    "~/assets/css/download.css",
    "~/assets/css/downloading.css",
    "~/assets/css/gallery-pro.css",
    "~/assets/css/gallery.css",
    "~/assets/css/premium.css",
    "~/assets/css/profile.css",
    "~/assets/css/selection.css",
    "~/assets/css/styles-category.css",
    "~/assets/css/styles-pro.css",
    "~/assets/css/styles-type.css",
    "~/assets/css/styles.css",
    "~/assets/css/success.css",
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
  image: {
    presets: {
      desktop: {
        modifiers: {
          format: 'webp',
          quality: 80,
        },
      },
    },
  },
})