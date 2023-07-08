<template>
    <div class="bg-[#060B16] pt-8 pb-8 pl-4 relative rounded-sm mt-4 break-all">
        <span v-if="languageText" :style="{color: languageColor ?? null}" :class="`absolute top-0 right-0 p-2`">
            {{ languageText }}
        </span>
        <div class="break-all" style="">
        <slot />
        </div>
        <div class="absolute bottom-0 right-0 p-2">
            <span v-if="copied" class="mb-4">
                Code Copied
            </span>
            <button @click=copy(code)><Copy /></button>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useClipboard } from '@vueuse/core'

    const props = withDefaults(
        defineProps<{
            code?: string,
            language?: string | null,
            filename?: string | null,
            highlights?: any
        }>(),
        {
            code: '',
            language: null,
            filename: null,
            highlights: []
        }
    )

    const languages: {[key: string] : {language: string, textColor: string}} = {
        'js': {
            language: 'js',
            textColor: "#E8DD30"
        },
        'vue': {
            language: 'vue',
            textColor: "#42B883"
        },
        'ts': {
            language: 'ts',
            textColor: "#2F74C0"
        },
    }

    const languageText = computed(() => props.language ? languages[props.language!].language : null)
    const languageColor: any = computed(() => props.language ? languages[props.language!].textColor : null)

    const { copy, copied} = useClipboard()
</script>

<style>
    pre {
        overflow-x: auto;
    }
</style>