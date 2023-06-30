<template>
    <main class="flex grow flex-col gap-8 sm:w-[50vw] w-[100vw] mx-auto py-10 sm:px-0 px-5 sm:text-left text-center">
        <p class="text-lg">
            These are some of the projects I have worked on.
        </p>
        <div v-for="project in projects" class="grid sm:grid-cols-2 grid-cols-1">
            <ProjectCard :name="project.name" :description="project.description" :link="project.link" />
        </div>
    </main>
</template>

<script>
    import projects from '../content/projects/projects.json'
    
    export default {
        data() {
            return {
                projects: projects
            }
        }
    }
</script>