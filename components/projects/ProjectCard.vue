<template>
  <div
    class="flex flex-col gap-4 bg-[var(--cardBackgroundColor)] p-4 shadow-lg rounded-lg border border-slate-700 h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-600"
  >
    <!-- Titel -->
    <h3 class="text-lg font-semibold text-white">{{ name }}</h3>
    
    <!-- 
      Die Beschreibung füllt den verfügbaren Platz (`flex-grow`), 
      sodass die Buttons immer am unteren Rand der Karte ausgerichtet sind.
    -->
    <p class="text-gray-300 flex-grow">
      {{ description }}
    </p>
    
    <!-- Container für die Aktions-Buttons -->
    <div class="flex flex-row gap-3 mt-auto pt-2">
      <!-- GitHub-Link -->
      <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-sm text-gray-300 transition-colors hover:bg-slate-800 hover:border-slate-600 hover:text-white"
      >
        <GithubCard />
        <span>Github</span>
      </a>
      
      <!-- Download-Link -->
      <a
        v-if="download"
        :href="download"
        download
        class="flex items-center justify-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-sm text-gray-300 transition-colors hover:bg-slate-800 hover:border-slate-600 hover:text-white"
      >
        <DownloadCard />
        <span>Download</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  link: String,
  download: String,
});
</script>