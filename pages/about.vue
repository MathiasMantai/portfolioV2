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
    </main>
</template>

<script setup>
    useHead({
        title: "Mathias Mantai - About",
        meta: {
            keywords: 'mathias, mantai, blog, fullstack, web, development, nuxt, vue, projects, portfolio, about'
        }
    })
</script>
