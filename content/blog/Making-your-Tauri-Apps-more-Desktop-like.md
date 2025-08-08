---
title: Making your Tauri Apps more Desktop like
description: Tips to make your Tauri App seem more 'Desktop' like
date: 2023-07-24
headImg: tauri_optimize.png
keywords: desktop, tauri, vue, typescript, javascript, key, event, webview, framework
---

::blog-paragraph
Working with Tauri or any other Framework that uses a Webview has one big disadvantage: Your Application still acts like a Webapp even after compiling it into a Binary.
::blog-paragraph

<br />

::blog-paragraph
Therefore I have compiled a list of possible optimizations to make your Tauri App seem more "Desktop" like. 
(I will be updating this post when I think of more things to add) 
::blog-paragraph

<br />

::blog-paragraph
There are various Key Events that we don't want in our Desktop App. The following script will remove:
::blog-paragraph

```ts
window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.code == "KeyF") || e.code =="F5") { 
          e.preventDefault();
    }
})
```

<br />

::blog-paragraph
This point can be argued about. I personally don't like chromium's autocomplete so I always disable it.
::blog-paragraph

::blog-paragraph
To turn off autocomplete, just add this as an attribute to your input fields:
::blog-paragraph



```
<input autocomplete="none">
```

