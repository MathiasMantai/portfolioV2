<template>
    <table class="">
        <tr v-for="datarow in props.data" class="">
            <td class="w-[20%] text-right pr-3">
                {{ datarow.date }}
            </td>
            <td class="relative w-[2%]">
                <div class="w-[2px] h-full bg-white absolute left-1/2 top-0 transform -translate-x-1/2"></div>
                <div class="w-[10px] h-[10px] bg-[var(--linkColor)] rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </td>
            <td class="w-[40%] p-4">
                <div class="ml-2 p-2 flex flex-col gap-3 bg-[var(--cardBackgroundColor)] shadow-md rounded-md border border-slate-700
                            transition ease-in-out hover:-translate-y-3"
                >
                    <h2 class="text-lg"> 
                        {{datarow.title}} {{ datarow.company != '' ? '-' : ''}} <span class="text-[var(--linkColor)]">{{ datarow.company }}</span>
                    </h2>
                    <div v-if="datarow.languages != ''">
                        <h3 class="text-[var(--linkColor)]">
                            Used programming languages:
                        </h3>
                        <p>
                            {{ datarow.languages }}
                        </p>
                    </div>
                    <div v-if="datarow.frameworks != ''">
                        <h3 class="text-[var(--linkColor)]">
                            Used frameworks:
                        </h3>
                        <p>
                            {{ datarow.frameworks }}
                        </p>
                    </div>
                    <div v-if="datarow.other_technologies != ''">
                        <h3 class="text-[var(--linkColor)]">
                            Other technologies:
                        </h3>
                        <p>
                            {{ datarow.other_technologies }}
                        </p>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
    const props = defineProps<{
        data: {
            date: string,
            title: string,
            company: string,
            languages: string,
            frameworks: string,
            other_technologies: string
        }[]
    }>()
</script>