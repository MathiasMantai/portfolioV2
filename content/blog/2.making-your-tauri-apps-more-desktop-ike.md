---
title: Making your Tauri Apps more “Desktop” like
desc: Tips to make your Tauri App seem more “Desktop” like
date: 2023-07-24
headImg: /img/blog/tauri_optimize.png
keywords: desktop, tauri, vue, typescript, javascript, key, event, webview, framework
---

Working with Tauri or any other Framework that uses a Webview has one big disadvantage: Your Application still acts like a Webapp even after compiling it into a Binary.

Therefore I have compiled a list of possible optimizations to make your Tauri App seem more “Desktop” like. 
(I will be updating this post when I think of more things to add) 
<br><br>
<h1 class='text-xl text-[var(--linkColor)]'> 1) Remove various Key Events </h1>

There are various Key Events that we don’t want in our Desktop App. The following script will remove:

<ul class="list-disc pl-5">
<li>Refreshing the page with F5</li>
<li>Opening the Search Bar with CTRL + F</li>
</ul>

```js
window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.code == "KeyF") || e.code =="F5") { 
          e.preventDefault();
    }
})
```

<br>

<h1 class='text-xl text-[var(--linkColor)]'> 2) Turn off autocomplete for input fields </h1>

This point can be argued about. I personally don’t like chromium’s autocomplete so I always disable it.
To turn off autocomplete, just add this as an attribute to your input fields:

```html
<input autocomplete="none">
```

<br />

<h1 class='text-xl text-[var(--linkColor)]'> 3) Creating a custom titlebar </h1>

This point is entirely subjective but sometimes the default titlebar of your operating system just does not look with your app's design. Tauri offers you the option to hide the default titlebar and create your own. I have created example components for both React and Vue that you can check out <a class="text-[var(--linkColor)] hover:underline" target="_blank" href="https://github.com/MathiasMantai/tauri-custom-titlebar">here</a>.