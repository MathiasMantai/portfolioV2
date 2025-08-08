<template>
    <main class="flex grow flex-col sm:w-[80dvw] lg:w-[50dvw] w-full p-4 sm:p-6 gap-y-12">
        <!-- Titelbereich -->
        <div class="text-center sm:text-left">
            <h1 class="text-3xl font-bold">
                Blog Posts
            </h1>
            <p class="mt-2 text-gray-400">
                Mainly ideas or problems I had while programming
            </p>
        </div>
        
        <!-- Trennstrich -->
        <hr class="border-t border-slate-700"/>

        <!-- Blog Posts mit Pagination -->
        <ContentList 
            :query="contentQuery" 
            v-slot="{ list }"
        >
            <div v-if="list && list.length > 0" class="space-y-8">
                <!-- Blog Posts Grid -->
                <div class="flex flex-col gap-8">
                    <article
                        v-for="article in list"
                        :key="article._path"
                        class="group"
                    >
                        <NuxtLink
                            :to="article._path"
                            class="flex flex-col lg:flex-row bg-[var(--cardBackgroundColor)] shadow-lg rounded-lg border border-slate-700 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-slate-600 block"
                        >
                            <!-- Bild-Container -->
                            <div v-if="article.headImg" class="lg:w-1/3 w-full">
                                <img
                                    :src="`/img/blog/${article.headImg}`"
                                    :alt="`Titelbild für ${article.title}`"
                                    class="w-full h-48 lg:h-full object-cover"
                                    loading="lazy"
                                >
                            </div>

                            <!-- Text-Container -->
                            <div class="flex flex-col flex-1 p-6">
                                <h2 class="text-xl font-semibold text-[var(--linkColor)] group-hover:underline">
                                    {{ article.title }}
                                </h2>

                                <p v-if="article.description || article.desc" class="flex-grow py-4 text-gray-300 line-clamp-3">
                                    {{ article.description || article.desc }}
                                </p>

                                <!-- Meta-Informationen -->
                                <div class="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                                    <time v-if="article.date" :datetime="article.date">
                                        {{ formatDate(article.date) }}
                                    </time>
                                    <span v-if="article.readingTime" class="flex items-center gap-1">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {{ article.readingTime.text || `${article.readingTime.minutes} min read` }}
                                    </span>
                                </div>
                            </div>
                        </NuxtLink>
                    </article>
                </div>

                <!-- Pagination -->
                <nav v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12">
                    <!-- Vorherige Seite -->
                    <button
                        @click="currentPage = Math.max(1, currentPage - 1)"
                        :disabled="currentPage === 1"
                        class="px-3 py-2 rounded-lg border border-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800"
                        aria-label="Vorherige Seite"
                    >   
                    PREVIOUSPAGE    
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <!-- Seitenzahlen -->
                    <div class="flex gap-1">
                        <button
                            v-for="page in displayedPages"
                            :key="page"
                            @click="currentPage = page"
                            :class="[
                                'px-4 py-2 rounded-lg border transition-colors',
                                currentPage === page 
                                    ? 'bg-[var(--linkColor)] text-white border-[var(--linkColor)]' 
                                    : 'border-slate-700 hover:bg-slate-800'
                            ]"
                            :aria-label="`Seite ${page}`"
                            :aria-current="currentPage === page ? 'page' : undefined"
                        >
                            {{ page }}
                        </button>
                    </div>

                    <!-- Nächste Seite -->
                    <button
                        @click="currentPage = Math.min(totalPages, currentPage + 1)"
                        :disabled="currentPage === totalPages"
                        class="px-3 py-2 rounded-lg border border-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800"
                        aria-label="Nächste Seite"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </nav>
            </div>
            
            <!-- Fallback-Nachricht -->
            <div v-else class="text-center text-gray-400 py-16">
                <p class="text-lg">Hier gibt es im Moment noch nichts zu sehen.</p>
                <p class="mt-2">Schau bald wieder vorbei!</p>
            </div>
        </ContentList>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// SEO Meta-Tags
useHead({
    title: 'Blog - Mathias Mantai',
    meta: [
        {
            name: 'description',
            content: 'Blog von Mathias Mantai. Gedanken, Tutorials und Updates über Fullstack-Webentwicklung mit Nuxt, Vue und mehr.'
        },
        {   
            name: 'keywords',
            content: 'mathias, mantai, blog, fullstack, web, development, nuxt, portfolio, vue, javascript'
        }
    ]
})

// Pagination State
const currentPage = ref(1)
const postsPerPage = 2

// Query für Content
const contentQuery = computed(() => ({
    path: '/blog',
    where: {
        _type: 'markdown',
        _draft: false
    },
    sort: [{ date: -1 }],
    skip: (currentPage.value - 1) * postsPerPage,
    limit: postsPerPage
}))

// Gesamtanzahl der Posts für Pagination berechnen
const { data: allPosts } = await useAsyncData('blog-count', () => 
    queryContent('/blog')
        .where({ _type: 'markdown', _draft: false })
        .count()
)

const totalPages = computed(() => {
    console.log("total pages", allPosts.value, postsPerPage, Math.ceil((allPosts.value || 0) / postsPerPage))
    return Math.ceil((allPosts.value || 0) / postsPerPage)
})

// Angezeigte Seitenzahlen berechnen (max 5 Seiten anzeigen)
const displayedPages = computed(() => {
    const pages = []
    const maxVisible = 5
    
    let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
    let end = Math.min(totalPages.value, start + maxVisible - 1)
    
    if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1)
    }
    
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }
    
    return pages
})

// Datum formatieren
const formatDate = (dateString) => {
    if (!dateString) return ''
    
    const date = new Date(dateString)
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }
    
    return date.toLocaleDateString('de-DE', options)
}

// Optional: URL-Parameter für Seitenzahl
const route = useRoute()
const router = useRouter()

// Seite aus URL-Parameter lesen
onMounted(() => {
    const page = parseInt(route.query.page) || 1
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page
    }
})

// URL aktualisieren bei Seitenwechsel
watch(currentPage, (newPage) => {
    router.push({
        query: newPage > 1 ? { page: newPage } : {}
    })
})
</script>

<style scoped>
/* Line-clamp Utility für Tailwind (falls nicht verfügbar) */
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>