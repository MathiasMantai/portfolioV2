<template>
    <header class="mx-auto py-4 sm:text-lg w-full">
        <nav class="w-full">
            <!-- Desktop Navigation -->
            <ul class="hidden sm:flex gap-4 justify-between items-center text-sm sm:text-base sm:w-[60dvw] mx-auto">
                <li class="sm:mr-[20vw] ml-2">
                    <Logo />
                </li>
                <li>
                    <ul class="flex sm:gap-8 gap-4 mr-4 sm:m-0">
                        <li class="hover:text-[var(--linkColor)] hover:underline">
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
                                    class="focus:outline-none flex items-center group-hover:text-[var(--linkColor)]"
                                    @click="toggleDropdown"
                                >
                                    <span :class="route.fullPath.includes('about') ? 'router-link-active' : ''">About</span>
                                    <svg
                                        :class="`w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform group-hover:stroke-[var(--linkColor)] ` + (route.fullPath.includes('about') ? 'router-link-active' : 'stroke-[var(--textColorNav)]')"
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
                                    class="absolute mt-0 w-48 py-2 bg-[var(--cardBackgroundColor)] border border-slate-700 rounded-md shadow-md z-50"
                                    @mouseenter="openDropdown = true"
                                    @mouseleave="openDropdown = false"
                                >
                                    <NuxtLink to="/about/personal" class="block px-4 py-2 hover:underline hover:text-[var(--linkColor)]">Personal</NuxtLink>
                                    <NuxtLink to="/about/work-experience" class="block px-4 py-2 hover:underline hover:text-[var(--linkColor)]">Work Experience</NuxtLink>
                                </div>
                            </div>
                        </li>
                        <li class="hover:text-[var(--linkColor)] hover:underline">
                            <NuxtLink to="/projects">
                                Projects
                            </NuxtLink>
                        </li>
                        <li>
                            <a href="https://blog.mathiasmantai.de">
                                Blog
                            </a>
                        </li>
                        <li class="hover:text-[var(--linkColor)] hover:underline">
                            <a href="mailto:mathias.mantai@gmail.com" aria-label="mail">
                                <Mail />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <!-- Mobile Navigation -->
            <div class="sm:hidden flex justify-between items-center px-4 w-full">
                <Logo />
                
                <!-- Burger Menu Button -->
                <button
                    @click="toggleMobileMenu"
                    class="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span 
                        class="block w-6 h-0.5 bg-[var(--textColorNav)] transition-all duration-300 ease-out"
                        :class="mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
                    ></span>
                    <span 
                        class="block w-6 h-0.5 bg-[var(--textColorNav)] transition-all duration-300 ease-out my-1"
                        :class="mobileMenuOpen ? 'opacity-0' : ''"
                    ></span>
                    <span 
                        class="block w-6 h-0.5 bg-[var(--textColorNav)] transition-all duration-300 ease-out"
                        :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
                    ></span>
                </button>
            </div>

            <!-- Mobile Menu Overlay -->
            <Transition name="mobile-menu">
                <div
                    v-if="mobileMenuOpen"
                    class="fixed inset-0 z-40 sm:hidden"
                    @click="closeMobileMenu"
                >
                    <!-- Background overlay -->
                    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                    
                    <!-- Menu panel -->
                    <div 
                        class="absolute right-0 top-0 h-full w-64 bg-[var(--cardBackgroundColor)] shadow-lg"
                        @click.stop
                    >
                        <!-- Close button -->
                        <button
                            @click="closeMobileMenu"
                            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                            aria-label="Close menu"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        
                        <!-- Menu items -->
                        <nav class="mt-16 px-6">
                            <ul class="space-y-4">
                                <li>
                                    <NuxtLink 
                                        to="/" 
                                        class="block py-2 text-lg hover:text-[var(--linkColor)] transition-colors"
                                        @click="closeMobileMenu"
                                    >
                                        Home
                                    </NuxtLink>
                                </li>
                                <li>
                                    <button
                                        @click="toggleMobileAbout"
                                        class="w-full text-left py-2 text-lg flex items-center justify-between hover:text-[var(--linkColor)] transition-colors"
                                    >
                                        <span :class="route.fullPath.includes('about') ? 'router-link-active' : ''">About</span>
                                        <svg
                                            :class="`w-4 h-4 transform transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    <Transition name="dropdown">
                                        <ul v-if="mobileAboutOpen" class="ml-4 mt-2 space-y-2">
                                            <li>
                                                <NuxtLink 
                                                    to="/about/personal" 
                                                    class="block py-1 text-base hover:text-[var(--linkColor)] transition-colors"
                                                    @click="closeMobileMenu"
                                                >
                                                    Personal
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink 
                                                    to="/about/work-experience" 
                                                    class="block py-1 text-base hover:text-[var(--linkColor)] transition-colors"
                                                    @click="closeMobileMenu"
                                                >
                                                    Work Experience
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </Transition>
                                </li>
                                <li>
                                    <NuxtLink 
                                        to="/projects" 
                                        class="block py-2 text-lg hover:text-[var(--linkColor)] transition-colors"
                                        @click="closeMobileMenu"
                                    >
                                        Projects
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink 
                                        to="/blog" 
                                        class="block py-2 text-lg hover:text-[var(--linkColor)] transition-colors"
                                        :class="route.fullPath.includes('blog') ? 'router-link-active' : ''"
                                        @click="closeMobileMenu"
                                    >
                                        Blog
                                    </NuxtLink>
                                </li>
                                <li class="pt-4 border-t border-slate-700">
                                    <a 
                                        href="mailto:mathias.mantai@gmail.com" 
                                        class="flex items-center gap-2 py-2 text-lg hover:text-[var(--linkColor)] transition-colors"
                                        @click="closeMobileMenu"
                                    >
                                        <Mail class="w-5 h-5" />
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Transition>
        </nav>
    </header>
</template>

<script setup lang="ts">
const route = useRoute()

const openDropdown = ref(false)
const mobileMenuOpen = ref(false)
const mobileAboutOpen = ref(false)

function toggleDropdown() {
    openDropdown.value = !openDropdown.value
}

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
    if (mobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
        mobileAboutOpen.value = false
    }
}

function closeMobileMenu() {
    mobileMenuOpen.value = false
    mobileAboutOpen.value = false
    document.body.style.overflow = ''
}

function toggleMobileAbout() {
    mobileAboutOpen.value = !mobileAboutOpen.value
}

// Close mobile menu on route change
watch(() => route.fullPath, () => {
    closeMobileMenu()
})

// Cleanup on unmount
onUnmounted(() => {
    document.body.style.overflow = ''
})
</script>

<style scoped>
/* Desktop dropdown animation */
[v-show] {
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

[v-show].enter-active,
[v-show].leave-active {
    display: block;
    opacity: 1;
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
}

.mobile-menu-enter-active > div:last-child,
.mobile-menu-leave-active > div:last-child {
    transition: transform 0.3s ease;
}

.mobile-menu-enter-from > div:last-child {
    transform: translateX(100%);
}

.mobile-menu-leave-to > div:last-child {
    transform: translateX(100%);
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>