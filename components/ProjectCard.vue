<template>
    <div class="flex flex-col gap-3 bg-[var(--cardBackgroundColor)] p-4 shadow-md rounded-md border border-slate-700">
        <b class="text-2x text-[var(--linkColor)]">{{ name }}</b>
        {{ description }}
        <a v-if="link != ''" class="bg-[#1F2B54] p-2 border border-slate-700 rounded-md flex gap-2 w-fit group" :href="link" target="_blank">
            <GithubCard />
            <div  class="text-white group-hover:text-[var(--linkColor)]" target="_blank">
                Github
            </div>
        </a>
    </div>
</template>

<script setup>
    const props = defineProps({
        name: String,
        link: String,
        description: String
    })
</script>