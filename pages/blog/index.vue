<template>
    <main class="flex grow flex-col sm:w-[60dvw] w-[100dvw] p-4 gap-y-8">
        <div class="text-center sm:text-left">
            <h2 class="text-2xl">
                Blog Posts
            </h2>
        </div>

        <hr class="bg-slate-700 border border-slate-700"/>

        <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <ContentList  :query="query" v-slot="{ list }">
            <div v-for="(article, index) in list" :key="article._path" :class="`flex flex-col gap-3 bg-[var(--cardBackgroundColor)] shadow-md rounded-md border border-slate-700 ` + (index >= 3 ? `lg:col-span-3` : ``)">
              <nuxt-link :href="article._path">
                <div v-if="index < 3" class="col-span-1">

                  <Suspense>
                  <div v-if="article.headImg != ''" class="relative hidden md:block">
                    <div class="w-full h-full absolute bg-gradient-to-t from-slate-900 to-transparent">
                    </div>
                    <div class="h-20vh">
                      <img :src="article.headImg" class="w-full  rounded-t-md">
                    </div>
                  </div>
                  <template #fallback>
                      <BlogImageSkeleton />
                  </template>
                  </Suspense>

                  <div class="p-3">
                  
                    <p class="text-lg text-[var(--linkColor)] hover:underline">{{ article.title }}</p>
              

                  <div class="">
                    <p class="">{{ article.description }}</p>
                    <div class="text-sm text-gray-500">
                      <div>{{ convertDate(article.date) }}</div>
                    </div>
                  </div>
                  </div>
                </div>

                <div v-else class="col-span-3 p-3">
                  <nuxt-link :href="article._path">
                    <p class="text-lg text-[var(--linkColor)] hover:underline">{{ article.title }}</p>
                  </nuxt-link>

                  <div class="">
                    <p class="">{{ article.description }}</p>
                    <div class="text-sm text-gray-500">
                      <time>{{ convertDate(article.date) }}</time>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </ContentList>
        </div>
    </main>
</template>

<script setup>
import { convertDate } from '../../util/index'

useHead({
    title: 'Mathias Mantai - Blog'
})

const query = { path: "/blog", sort: [{ date: -1 }] }
</script>