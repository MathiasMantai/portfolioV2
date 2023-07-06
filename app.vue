<template>
    <div class="h-[100dvh] flex flex-col items-center sm:w-[70dvw] w-[100dvw] mx-auto">
        <Navigation />
        <NuxtPage class="py-8" :transition="{
            name: 'bounce',
            mode: 'out-in'
        }" />
        <Footer />
    </div>
</template>
