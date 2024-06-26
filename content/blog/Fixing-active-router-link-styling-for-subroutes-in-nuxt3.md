---
title: Fixing active router link styling for subroutes in nuxt3
desc: Learn how to style active routes when navigating through subroutes
date: 2023-07-08
headImg: /img/blog/nuxtNav.png
keywords: nuxt3, router, vue, vuejs, fix, subroutes, styling, router link active, router link
---

While creating the blog for this website, I noticed something strange. 

::blog-paragraph
When navigating to a subroute (for blog posts for example), the router doesn’t recognize the main route (”/blog” for example) as an active route. The solution for this is quite simple really. All you have to do is check, whether the current route contains the main route you are on right now:
::blog-paragraph

<br>

<h1 class="text-lg text-[var(--linkColor)]">1. Get the current route with useRoute() </h1>

```vue
<script setup lang="ts">
    const route = useRoute()
</script>
```

<br />

<h1 class="text-lg text-[var(--linkColor)]">2. Add the router-link-active class to your link when the path includes your route</h1>


```vue
<NuxtLink 
    to="/yourRoute" 
    :class="route.fullPath.includes('yourRoute') ? 'router-link-active' : '' "
>
    Your Link
</NuxtLink>
```

<br />

I hope I could help someone with this little trick.


