<template>
  <main class="sm:w-[60dvw] w-[100dvw] p-4 grow">
    <p class="text-lg mb-8">
      These are some of the apps/packages I am working on.
    </p>

    <div>
      <h2 class="text-2xl text-white">Apps</h2>
      <hr class="bg-slate-700 border border-slate-700 mt-4" />
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-4">
        <div v-for="app in apps">
          <ProjectCard
            :name="app.name"
            :description="app.description"
            :link="app.link"
            :download="app.download ?? ''"
          />
        </div>
      </div>
      <br />
      <h2 class="text-2xl text-white">Packages</h2>
      <hr class="bg-slate-700 border border-slate-700 mt-4" />
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-4">
        <div v-for="pkg in packages">
          <ProjectCard
            :name="pkg.name"
            :description="pkg.description"
            :link="pkg.link"
            :download="pkg.download ?? ''"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import projects from "../content/projects/projects.json";

const apps = ref(projects.apps);
const packages = ref(projects.packages);

useHead({
  title: "Mathias Mantai - Projects",
  meta: [
    {
      name: "keywords",
      content:
        "mathias, mantai, blog, fullstack, web, development, nuxt, vue, projects, portfolio, about, projects",
    },
    {
      name: "date",
      content: Date.now(),
    },
  ],
});
</script>
