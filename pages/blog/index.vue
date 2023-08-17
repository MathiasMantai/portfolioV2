<template>
    <main class="flex grow flex-col sm:w-[80dvw] lg:w-[50dvw] w-[100dvw] p-4 gap-y-8">
        <div class="text-center sm:text-left">
            <h2 class="text-2xl">
                Blog Posts
            </h2>
        </div>

        <hr class="bg-slate-700 border border-slate-700"/>

            <ContentList  :query="query" v-slot="{ list }">
                <div v-for="article in list" :key="article._path" class="flex flex-row gap-3 bg-[var(--cardBackgroundColor)] shadow-md rounded-md border border-slate-700 transition ease-in-out hover:-translate-y-3">
                <nuxt-link :href="article._path">
                    <div class="flex flex-col lg:flex-row">
                    <img :src="article.headImg" class="lg:w-1/3  rounded-tl-md rounded-tr-md sm:rounded-bl-md sm:rounded-tr-none">

                    <div class="flex flex-col p-4">
                        <h2 class="text-lg text-[var(--linkColor)] hover:underline">
                            {{ article.title }}
                        </h2>

                        <p class="flex grow py-2">
                            {{ article.desc }}...
                        </p>

                        <div class="text-sm text-gray-500">
                            <div>{{ convertDate(article.date) }}</div>
                        </div>
                    </div>
                    
                    </div>
                </nuxt-link>
                </div>
            </ContentList>

    </main>
</template>

<script setup>
import { convertDate } from '../../util/index';

useHead({
    title: 'Mathias Mantai - Fullstack Developer - Blog',
    meta: [
        {   
            name: 'keywords',
            content: 'mathias, mantai, blog, fullstack, web, development, nuxt, portfolio'
        },
        {name: 'date', content: Date.now()}
    ]
})

const query = { path: "/blog", sort: [{ date: -1 }] }
</script>

<style scoped>
    .router-link-active
{
    text-decoration: none;
}


</style>