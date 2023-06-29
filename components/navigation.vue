<template>
    <header class="sm:w-[50vw] w-[100vw] mx-auto py-4 sm:text-lg">
        <nav>
            <ul class="flex justify-between items-center">
                <li class="sm:mr-[20vw] ml-2">
                    <Logo />
                </li>
                <li>
                    <ul class="flex sm:visible sm:gap-8 gap-4 mr-4 sm:m-0">
                        <li>
                            <NuxtLink to="/">
                                Home
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about">
                                About
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/projects">
                                Projects
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog">
                                Blog
                            </NuxtLink>
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

<style>

</style>