<template>
    <main class="flex grow flex-col sm:w-[60dvw] w-[100dvw] gap-y-8 p-4">
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