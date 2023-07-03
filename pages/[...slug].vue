<template>
    <main class="flex grow flex-col sm:w-[60dvw] w-[100dvw] p-4">
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
        <div class="mx-auto prose prose-md text-justify first-letter:text-3xl text-[var(--textColorNav)]">
            <ContentRenderer :value="doc" />
        </div>
    </ContentDoc>
  </main>
</template>

<script>
  import { convertDate } from '../util/index'

  export default {
    methods: {
      convertDate: convertDate
    }
  }
</script>