<template>
    <main class="flex grow flex-col sm:w-[60dvw] w-[100dvw] p-4 gap-y-8">
        <div class="text-center sm:text-left">
            <h2 class="text-2xl">
                Recent Blog Posts
            </h2>
        </div>

        <hr class="bg-slate-700 border border-slate-700"/>

        <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <ContentList  :query="query" v-slot="{ list }">
            <div v-for="(article, index) in list" :key="article._path" :class="`flex flex-col gap-3 bg-[var(--cardBackgroundColor)] p-4 shadow-md rounded-md border border-slate-700 ` + (index >= 3 ? `lg:col-span-3` : ``)">

                <div v-if="index < 3" class="col-span-1">
                  <nuxt-link :href="article._path">
                    <p class="text-lg text-[var(--linkColor)] hover:underline">{{ article.title }}</p>
                  </nuxt-link>

                  <div class="">
                    <p class="">{{ article.description }}</p>
                    <div class="text-sm text-gray-500">
                      <div>{{ convertDate(article.date) }}</div>
                    </div>
                  </div>
                </div>

                <div v-else class="col-span-3">
                  <nuxt-link :href="article._path">
                    <p class="text-lg text-[var(--linkColor)] hover:underline">{{ article.title }}</p>
                  </nuxt-link>

                  <div class="">
                    <p class="">{{ article.description }}</p>
                    <div class="text-sm text-gray-500">
                      <div>{{ convertDate(article.date) }}</div>
                    </div>
                  </div>
                </div>

            </div>
          </ContentList>
        </div>
    </main>
  </template>

<script>
import { convertDate } from '../../util/index'

export default {
  methods: {
    convertDate: convertDate
  },
  data() {
    return {
      query: { path: '/blog', sort: [{ date: -1 }] }
    }
  }
}
</script>