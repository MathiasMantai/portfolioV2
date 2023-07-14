<template>
    <div class="h-[100dvh] flex flex-col items-center sm:w-[70dvw] w-[100dvw] mx-auto">
        <Navigation />
        <NuxtPage class="py-8" :transition="{
            name: 'page',
            mode: 'out-in'
        }" />
        <Footer />
    </div>
</template>




<style>
    .page-enter-active,
    .page-leave-active {
      transition: all 0.25s;
    }
    .page-enter-from,
    .page-leave-to {
      opacity: 0;
      filter: blur(1rem);
    }
</style>