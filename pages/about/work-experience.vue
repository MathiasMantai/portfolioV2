<template>
    <main class="flex grow flex-col items-center sm:w-[60dvw] w-[100dvw] p-4 text-justify">
        <TimeLine :data="data" />
    </main>
</template>

<script setup>
    const data = [
        {
            date: 'since September 2021',
            title: 'Software Developer',
            company: 'Meuser Energy/Meuser IT',
            languages: 'PHP, Javascript, Typescript, Python, Golang',
            frameworks: 'React, Vue, Nuxt, Laravel, Django',
            other_technologies: 'MySQL, PostgreSQL, SQL Server, Docker'
        },
        {
            date: '2019 - 2021',
            title: 'Freelance Software Developer',
            company: '',
            languages: 'PHP, Javascript',
            frameworks: 'React, Vue, Laravel',
            other_technologies: 'MySQL'
        }
    ]
    
    useHead({
        title: "Mathias Mantai - Work Experience",
        meta: [
            {
                name: 'keywords',
                content: 'mathias, mantai, blog, personal, fullstack, web, development, nuxt, vue, projects, portfolio, about, work-experience, work, experience'
            },
            {
                name: 'date', 
                content: Date.now()
            }
        ]
    })
</script>

<style>
</style>