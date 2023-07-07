<template>
    <main class="container max-w-3xl flex grow flex-col sm:w-[60dvw] w-[100dvw] p-4 text-justify">
        <h2 class="text-2xl text-[var(--linkColor)]">About me</h2>
        <br />
        <blog-paragraph >
            Welcome to my portfolio website! My name is Mathias Mantai, and I am a passionate full-stack developer based in Germany. With over [X years] of experience in the field, I have developed a strong proficiency in designing and building web applications that deliver exceptional user experiences.
        </blog-paragraph>

        <blog-paragraph>
            I thrive on bringing ideas to life through code and enjoy the challenges that come with solving complex problems. As a developer, I constantly seek opportunities to expand my knowledge and stay up-to-date with the latest industry trends and technologies. From frontend development using modern JavaScript frameworks to backend solutions with databases and server-side technologies, I embrace the full-stack approach to deliver robust and scalable applications.
        </blog-paragraph>
        <blog-paragraph>
            Beyond coding, I have a variety of hobbies that keep me inspired and balanced. When I'm not immersed in lines of code, you can find me tinkering with electronics, indulging in video games, exploring new worlds through books, or experimenting with new recipes in the kitchen. These diverse interests fuel my creativity and help me approach development from different perspectives.
        </blog-paragraph>
        <blog-paragraph>
            I am always excited to collaborate on innovative projects and contribute to the growth of dynamic teams. Feel free to explore my portfolio and get in touch to discuss potential opportunities or to simply connect and share ideas. Let's create something amazing together!
        </blog-paragraph>
    </main>
</template>

<script setup>
    useHead({
        title: "Mathias Mantai - About"
    })
</script>