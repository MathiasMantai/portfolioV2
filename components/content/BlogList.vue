<template>
    <main class="flex grow flex-col sm:w-[50vw] w-[100vw] mx-auto py-10">
        <ContentList :query="query" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
                <div>
                    {{ article.description }}
                </div>
            </div>
        </ContentList>
    </main>
</template>

<script setup>
const query =  { path: '/blog', limit: 5, sort: [{ date: -1 }] }
</script>