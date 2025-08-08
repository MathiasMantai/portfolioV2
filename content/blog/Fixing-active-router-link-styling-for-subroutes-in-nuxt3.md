---
title: Fixing active router link styling for subroutes in nuxt3
description: Learn how to style active routes when navigating through subroutes
date: 2023-07-08
headImg: nuxtNav.png
keywords: nuxt3, router, vue, vuejs, fix, subroutes, styling, router link active, router link
---

<br />

::blog-paragraph
While creating the blog for this website, I noticed something strange. When navigating to a subroute (for blog posts for example), the router doesn't recognize the main route ("/blog" for example) as an active route.
::blog-paragraph

<br />

::blog-paragraph
The solution for this is quite simple really. All you have to do is check, whether the current route contains the main route you are on right now:
::blog-paragraph

<br />

::blog-paragraph
1) Get the current route with useRoute()
::blog-paragraph

```ts
<script setup lang="ts">
    const route = useRoute()
</script>
```

<br />

::blog-paragraph
2) Add the router-link-active class to your link when the path includes your route
::blog-paragraph

```ts
<NuxtLink to="/blog" :class="route.fullPath.includes('blog') ? 'router-link-active' : '' ">
    Your Link
</NuxtLink>
```

<br />

::blog-paragraph
I hope I could help someone with this little trick
::blog-paragraph

<br />
