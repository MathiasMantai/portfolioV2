<template>
    <main class="flex grow justify-center mb-20 flex-col sm:w-[60dvw] w-[100dvw] p-4 transition ease-in ">
        <div class="text-center sm:text-left">Hi, my name is</div>
        <br />
        <div class="text-[var(--linkColor)] text-4xl px-2 sm:px-0 text-center sm:text-left">Mathias Mantai</div>
        <br />
        <div class="text-center sm:text-left">I'm a fullstack developer from germany.</div>
        <br />
        <div class="px-2 sm:px-0 text-center sm:text-left">
            Currently I'm working for 
            <a class="text-[var(--linkColor)] hover:underline" href="https://www.meuser.it" target="_blank">Meuser IT</a> 
            / 
            <a class="text-[var(--linkColor)] hover:underline" href="https://www.meuser.energy" target="_blank">Meuser Energy</a>
            , <br /> creating and maintaining business software.
        </div>
    </main>
</template>

<script setup>
    useHead({
        title: "Mathias Mantai - Fullstack Developer",
        meta: [
            {
                name: 'keywords',
                keywords: 'mathias, mantai, blog, fullstack, web, development, nuxt'
            },
            {
                name: 'date', 
                content: Date.now()
            }
        ]
    })
</script>