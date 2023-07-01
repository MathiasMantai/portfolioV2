<template>
    <main class="flex grow flex-col sm:w-[60dvw] w-[100dvw] p-4 gap-y-8">
        <div class="text-center sm:text-left">
            <h2 class="text-2xl">
                Recent Blog Posts
            </h2>
        </div>

        <hr class="bg-slate-700 border border-slate-700"/>

        <div class="grid lg:grid-cols-3 gap-8">
          <ContentList path="/blog" v-slot="{ list }">
            <div v-for="(article, index) in list" :key="article._path" class="flex flex-col gap-3 bg-[var(--cardBackgroundColor)] p-4 shadow-md rounded-md border border-slate-700">

                <div v-if="index < 3">
                  <nuxt-link :href="article._path">
                    <p class="text-lg text-[var(--linkColor)]">{{ article.title }}</p>
                    <p class="">{{ article.description }}</p>
                  </nuxt-link>
                  <div class="">
                    <div class="text-sm text-gray-500">
                      <div>{{ convertDate(article.date) }}</div>
                    </div>
                  </div>
                </div>

                <div v-else class="lg:col-span-3">
                  <nuxt-link :href="article._path">
                    <p class="text-lg text-[var(--linkColor)]">{{ article.title }}</p>
                    <p class="">{{ article.description }}</p>
                  </nuxt-link>
                  <div class="">
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
  }
}
</script>