<template>
    <header class="sm:w-[50vw] w-[80vw] m-auto py-4 text-lg">
        <nav>
            <ul class="flex justify-between items-center">
                <li class="mr-[20vw]">
                    <Logo />
                </li>
                <li>
                    <ul class="flex gap-8">
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
                            <a href="mailto:mathias.mantai@gmail.com">
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