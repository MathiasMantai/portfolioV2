<template>
    <div class="bg-[#060B16] pt-4 pb-4 relative rounded-sm mt-4">
        <span v-if="languageText" :class="`absolute top-0 right-0 p-2 text-[${languageColor}]`">
            {{ languageText }}
        </span>
        <slot />
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
            textColor: '#E8DD30'
        },
        'vue': {
            language: 'vue',
            textColor: "#42B883"
        },
    }

    const languageText = computed(() => languages[props.language!].language ? languages[props.language!].language : null)
    const languageColor = computed(() => languages[props.language!].textColor ? languages[props.language!].textColor : null)

    const { copy, copied} = useClipboard()
</script>