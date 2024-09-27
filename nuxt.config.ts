// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: "2024-09-06",
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
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
        '/about/personal',
        '/about/work-experience',
        '/projects'
      ]
    }
  },
  site: {
    url: 'https://mathiasmantai.de',
    name: "Mathias Mantai - Fullstack developer - Portfolio",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      script: [
                {
                  async: true,
                  src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4346636750892358",
                  crossorigin: "anonymous"
                }
            ],
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
          href: '/favicon3.svg'
        },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Rubik'
        // },
      ]
    }
  }
})