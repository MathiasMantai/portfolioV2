<template>
    <header class="mx-auto py-4 sm:text-lg sm:w-[60dvw] w-[100dvw]">
        <nav>
            <ul class="flex gap-4 justify-between items-center text-sm sm:text-base">
                <li class="sm:mr-[20vw] ml-2">
                    <Logo />
                </li>
                <li>
                    <ul class="flex sm:gap-8 gap-4 mr-4 sm:m-0">
                        <li>
                            <NuxtLink to="/">
                                Home
                            </NuxtLink>
                        </li>
                        <li>
                            <div
                                class="group relative inline-block"
                                @mouseenter="openDropdown = true"
                                @mouseleave="openDropdown = false"
                            >
                                <button
                                    class=" focus:outline-none flex items-center group-hover:text-[var(--linkColor)]"
                                    @click="toggleDropdown"
                                >
                                    <span :class="route.fullPath.includes('about') ? 'router-link-active' : '' ">About</span>
                                    <svg
                                    :class="`w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform group-hover:stroke-[var(--linkColor)] ` + (route.fullPath.includes('about') ? 'router-link-active' : 'stroke-[var(--textColorNav)]' )"
                                    fill="none"
                                    stroke=""
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <div
                                    v-show="openDropdown"
                                    class="absolute mt-0 w-48 py-2 bg-[var(--cardBackgroundColor)] border border-slate-700 rounded-md shadow-md"
                                    @mouseenter="openDropdown = true"
                                    @mouseleave="openDropdown = false"
                                >
                                    <NuxtLink to="/about/personal" class="block px-4 py-2 hover:underline hover:text-[var(--linkColor)]">Personal</NuxtLink>
                                    <NuxtLink to="/about/work-experience" class="block px-4 py-2 hover:underline hover:text-[var(--linkColor)]">Work Experience</NuxtLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NuxtLink to="/projects">
                                Projects
                            </NuxtLink>
                        </li>
                        <li>
                            <a href="https://blog.mathiasmantai.de">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mathias.mantai@gmail.com" aria-label="mail">
                                <Mail />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
    const route = useRoute()

    const openDropdown = ref(false)

    function toggleDropdown() {
        openDropdown.value = !openDropdown.value
    }
</script>

<style>
[v-show] {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

[v-show].enter-active, [v-show].leave-active {
  display: block;
  opacity: 1;
}
</style>