<template>
    <main class="flex grow flex-col sm:w-[80dvw] lg:w-[50dvw] w-full p-4 sm:p-6 gap-y-12">
        <!-- Der Titelbereich wurde etwas luftiger gestaltet -->
        <div class="text-center sm:text-left">
            <h1 class="text-3xl font-bold">
                Blog Posts
            </h1>
            <p class="mt-2 text-gray-400">
                Gedanken, Tutorials und Updates aus der Welt der Webentwicklung.
            </p>
        </div>
        
        <!-- Ein einfacherer, eleganterer Trennstrich -->
        <hr class="border-t border-slate-700"/>

        <!--
            Wir verwenden hier `v-if` und `v-else` für den Fall, dass keine Artikel gefunden werden.
            Das ist eine gute User Experience.
        -->
        <ContentList :query="query" v-slot="{ list }">
            <div v-if="list.length > 0" class="flex flex-col gap-12">
                <!--
                    Die gesamte Karte ist jetzt ein klickbarer Link. Das ist besser für die UX.
                    Der `v-for` Loop ist auf dem Link, nicht mehr auf einem äußeren div.
                -->
                <nuxt-link
                    v-for="article in list"
                    :key="article._path"
                    :href="article._path"
                    class="group flex flex-col lg:flex-row bg-[var(--cardBackgroundColor)] shadow-lg rounded-lg border border-slate-700 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-600"
                >
                    <!-- Bild-Container -->
                    <div class="lg:w-1/3 w-full">
                        <!--
                            Das Bild-Styling ist jetzt konsistenter.
                            - Auf kleinen Bildschirmen (mobil): Bild oben, Ecken oben abgerundet.
                            - Auf großen Bildschirmen (`lg`): Bild links, Ecken links abgerundet.
                            `object-cover` stellt sicher, dass das Bild den Bereich füllt, ohne sich zu verzerren.
                        -->
                        <img
                            :src="article.headImg"
                            :alt="`Titelbild für ${article.title}`"
                            class="w-full h-48 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                        >
                    </div>

                    <!-- Text-Container -->
                    <div class="flex flex-col flex-1 p-6">
                        <!--
                            Der Titel unterstreicht sich jetzt nur beim Hovern über die Karte (`group-hover`),
                            was sauberer aussieht.
                        -->
                        <h2 class="text-xl font-semibold text-[var(--linkColor)] group-hover:underline">
                            {{ article.title }}
                        </h2>

                        <!--
                            Die Beschreibung hat etwas mehr vertikalen Abstand für bessere Lesbarkeit.
                            `line-clamp` sorgt dafür, dass der Text nach 3 Zeilen mit "..." abgeschnitten wird,
                            was für ein einheitliches Layout sorgt.
                        -->
                        <p class="flex-grow py-4 text-gray-300 line-clamp-3">
                            {{ article.desc }}
                        </p>

                        <!--
                            Datum: Verwendung des semantisch korrekten `<time>`-Tags.
                            Das ist besser für SEO und Barrierefreiheit.
                        -->
                        <div class="text-sm text-gray-500 mt-auto">
                            <time :datetime="article.date">{{ convertDate(article.date) }}</time>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            
            <!-- Fallback-Nachricht, wenn keine Artikel vorhanden sind -->
            <div v-else class="text-center text-gray-400 py-16">
                <p class="text-lg">Hier gibt es im Moment noch nichts zu sehen.</p>
                <p>Schau bald wieder vorbei!</p>
            </div>
        </ContentList>
    </main>
</template>

<script setup>
    import { convertDate } from '../../util/index';

    useHead({
        // Titel ist jetzt etwas prägnanter
        title: 'Blog - Mathias Mantai',
        meta: [
            {
                name: 'description',
                content: 'Blog von Mathias Mantai. Gedanken, Tutorials und Updates über Fullstack-Webentwicklung mit Nuxt, Vue und mehr.'
            },
            {   
                name: 'keywords',
                content: 'mathias, mantai, blog, fullstack, web, development, nuxt, portfolio, vue, javascript'
            },
            // Das 'date' Meta-Tag ist kein Standard, kann aber drin bleiben, wenn du es für etwas Bestimmtes nutzt.
            // {
            //     name: 'date', 
            //     content: new Date().toISOString() // Besser ISO-Format verwenden
            // }
        ]
    })

    // Die Query bleibt gleich, sie war bereits optimal.
    const query = { path: "/blog", sort: [{ date: -1 }] }
</script>

<style scoped>
/*
   Der Style-Block wird nicht mehr benötigt, da wir keine speziellen Überschreibungen
   mehr brauchen. Die `group-hover`-Funktionalität von Tailwind ersetzt die Notwendigkeit
   für `.router-link-active`.
*/
</style>