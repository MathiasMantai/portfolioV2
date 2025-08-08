<template>
  <!-- Die ganze Karte ist ein klickbarer Link. `group` ist für Hover-Effekte im Inneren. -->
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col bg-[var(--cardBackgroundColor)] shadow-lg rounded-lg border border-slate-700 overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-600"
  >
    <!-- Bild-Container -->
    <div class="aspect-video overflow-hidden">
      <img 
        :src="image" 
        :alt="`Screenshot von ${name}`" 
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    
    <!-- Inhalts-Container -->
    <div class="flex flex-col flex-grow p-4">
      <h3 class="text-lg font-semibold text-white group-hover:text-[var(--linkColor)]">
        {{ name }}
      </h3>
      <p class="text-gray-300 mt-2 flex-grow">
        {{ description }}
      </p>
      <div class="flex items-center gap-2 mt-4 text-sm text-gray-400 group-hover:text-[var(--linkColor)]">
        <span>Visit</span>
        <!-- Ein kleines Icon, das anzeigt, dass es ein externer Link ist -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  name: String,
  description: String,
  link: String,
  image: String
});
</script>