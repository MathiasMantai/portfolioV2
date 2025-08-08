<template>
	<main class="w-full max-w-5xl mx-auto p-4 sm:p-6 flex grow flex-col gap-y-12">
		<div class="text-center sm:text-left">
		<h1 class="text-3xl font-bold">
			Projects
		</h1>
		<p class="mt-2 text-gray-400">

		</p>
		</div>

		<div v-for="section in projectSections" :key="section.title" class="flex flex-col gap-y-4">
		<h2 class="text-2xl font-semibold">{{ section.title }}</h2>
		<hr class="border-t border-slate-700" />
		
		<div v-if="section.items.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
			<component
			v-for="item in section.items"
			:key="item.name"
			:is="section.component"
			v-bind="item"
			/>
		</div>
		<div v-else class="text-gray-400 mt-4">
			<p>Hier gibt es zurzeit nichts zu sehen.</p>
		</div>
		</div>
	</main>
</template>

<script setup>
	import { shallowRef, computed } from 'vue';
	import projects from "../content/projects/projects.json";
	import WebsiteProjectCard from '../components/projects/WebsiteProjectCard.vue';
	import ProjectCard from '../components/projects/ProjectCard.vue';

	const projectSections = computed(() => [
	{
		title: 'Websites',
		items: projects.websites,
		component: WebsiteProjectCard
	},
	{
		title: 'Apps',
		items: projects.apps,
		component: ProjectCard
	},
	{
		title: 'Packages',
		items: projects.packages,
		component: ProjectCard
	}
	]);

	useHead({
		title: "Projects - Mathias Mantai",
		meta: [
			{
				name: "description",
				content: "Projects, including websites, apps and projects on github"
			},
			{
				name: "keywords",
				content: "mathias, mantai, projects, portfolio, github, fullstack, web, development, nuxt, vue, react, go, php, websites"
			},
		],
	});
</script>