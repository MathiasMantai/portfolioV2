<template>
    <main class="container max-w-3xl mx-auto prose-md flex grow flex-col sm:w-[60dvw] w-[100dvw] p-4">
    <nuxt-link class="block cursor-pointer" href="/blog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        Back
    </nuxt-link>

    <ContentDoc v-slot="{ doc }">
        <h2 class="text-2xl text-[var(--linkColor)]">
            {{ doc.title }}
        </h2>
        <p class="">
            {{ convertDate(doc.date) }}
        </p>
        <!-- <div class="mx-auto w-[100%] flex justify-center">
            <img :src="doc.headImg" class="w-[80%]" />
        </div> -->
        <div class="mt-8 text-justify text-[var(--textColorNav)]">
            <ContentRenderer :value="doc" />
        </div>
    </ContentDoc>
  </main>
</template>

<script setup>
  import { convertDate } from '../util/index'
  const route = useRoute()
  console.log(route.fullPath)
  const query = await queryContent(route.fullPath).findOne()
  console.log(query.keywords)
  useHead({
    title: 'Mathias Mantai - Blog',
    meta: [
      {
        keywords: query.keywords
      }
    ]
  })
</script>
