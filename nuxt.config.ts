// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/projects',
        '/blog'
      ]
    }
  },
  sitemap: {
    siteUrl: 'https://mathiasmantai.de',
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
      ]
    }
  }
})
