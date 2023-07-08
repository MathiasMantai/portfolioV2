<template>
    <main class="sm:w-[60dvw] w-[100dvw] p-4">
        <p class="text-lg mb-8">
            These are some of the projects I have worked on.
        </p>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <div v-for="project in projects" class="">
            <ProjectCard :name="project.name" :description="project.description" :link="project.link" />
        </div>
        </div>
    </main>
</template>

<script setup>
    import projects from '../content/projects/projects.json'

    useHead({
        title: 'Mathias Mantai - Projects',
        meta: {
            keywords: 'mathias, mantai, blog, fullstack, web, development, nuxt'
        }
    })
</script>