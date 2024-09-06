// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],
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
        '/projects',
        '/blog'
      ]
    }
  },
  sitemap: {
    siteUrl: 'https://mathiasmantai.de',
    sitemaps: {
      posts: {
        include: ['/blog/**'],
        defaults: { priority: 0.7 }
      },
      pages: {
        exclude: [
          '/blog/**'
        ]
      }
    }
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