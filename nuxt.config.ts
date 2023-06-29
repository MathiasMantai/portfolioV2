// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/style.css',
    '@/assets/css/main.css',
  ],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: "Mathias Mantai - Fullstack developer",
      meta: [
        {
          charset: "utf-8"
        },
        {
          name: "description",
          content: "Mathias Mantai - Fullstack developer - Portfolio"
        }
      ],
      link: [
        {
          rel: 'icon', 
          type: 'image/svg+xml', 
          href: '/favicon.svg'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat'
        }
      ]
    }
  }
})
