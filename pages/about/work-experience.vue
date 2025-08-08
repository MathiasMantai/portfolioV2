<template>
    <main class="w-full max-w-4xl mx-auto p-4 sm:p-6 flex grow flex-col gap-y-12">
        <div class="text-center sm:text-left">
            <h1 class="text-3xl font-bold">
                Work Experience
            </h1>
        </div>
        
        <hr class="border-t border-slate-700"/>
        <TimeLine :data="data" />
    </main>
</template>

<script setup>
    const data = [
        {
            date: 'Since Sep. 2021',
            title: 'Software Developer',
            company: 'Meuser Energy / Meuser IT',
            languages: 'PHP, Javascript, Typescript, Python, Go, C#',
            databases: "MySQL, PostgreSQL, SQL Server",
            frameworks: 'React, Vue, Nuxt, Laravel, Django',
            other_technologies: 'Docker'
        },
        {
            date: '2012 - 2021',
            title: 'Freelance Software Developer',
            company: '',
            languages: 'PHP, Javascript',
            frameworks: 'Vue, Laravel',
            databases: "MySQL, MongoDb, SQL Server",
            other_technologies: ''
        }
    ]
    
    useHead({
        title: "Work Experience - Mathias Mantai",
        meta: [
             {
                name: 'description',
                content: 'Work Experience, including used programming languages, frameworks and databases'
            },
            {
                name: 'keywords',
                content: 'mathias, mantai, work experience, berufserfahrung, fullstack, web, development, nuxt, vue, react, portfolio, cv, lebenslauf'
            }
        ]
    })
</script>