<template>
    <main class="container max-w-3xl flex grow flex-col sm:w-[60dvw] w-[100dvw] p-4 text-justify">
        <h2 class="text-2xl text-[var(--linkColor)]">About me</h2>
        <br />
        <blog-paragraph >
            Welcome to my portfolio website! My name is Mathias Mantai, and I am a full-stack developer based in Germany. I have been programming for over 10 Years, professionally for more than 3 Years now.
        </blog-paragraph>
        <blog-paragraph>
            I thrive on bringing ideas to life through code and enjoy the challenges that come with solving complex problems. As a developer, I constantly seek opportunities to expand my knowledge and stay up-to-date with the latest industry trends and technologies. From frontend development using modern JavaScript frameworks to backend solutions with databases and server-side technologies, I embrace the full-stack approach to deliver robust and scalable applications.
        </blog-paragraph>
        <blog-paragraph>
            Beyond coding, I have a variety of hobbies that keep me inspired and balanced. When I'm not immersed in lines of code, you can find me tinkering with electronics, indulging in video games, reading books, or experimenting with new recipes in the kitchen.
        </blog-paragraph>

        <br />

        <h2 class="text-2xl text-[var(--linkColor)]">Favourite Languages</h2>
        
        <br /> 

        <h3 class="text-xl">PHP</h3>
        <blog-paragraph>
            The first "real" programming language I have learned. To this day I still use this language for most projects (professionally and for hobby projects). With PHP Version 8, we got a bunch of cool features and optimizations that made PHP a lot better. Don't believe phrases like "PHP is dead"!!!
        </blog-paragraph>

        <br />

        <h3 class="text-xl">Go (Golang)</h3>
        <blog-paragraph>
            My newest obsession. It's just so easy to learn and build projects with. While it is not without problems I highly receommend learning this language
        </blog-paragraph>
    </main>
</template>

<script setup>
    useHead({
        title: "Mathias Mantai - About",
        meta: [
            {
                name: 'keywords',
                content: 'mathias, mantai, blog, fullstack, web, development, nuxt, vue, projects, portfolio, about'
            },
            {
                name: 'date', 
                content: Date.now()
            }
        ]
    })
</script>
