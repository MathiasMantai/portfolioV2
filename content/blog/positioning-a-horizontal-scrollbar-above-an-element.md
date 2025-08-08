---
title: Positioning a horizontal scrollbar above an element
description: Positioning a horizontal scrollbar above an element
date: 2023-12-18
headImg: scroll_upper.png
keywords: positioning, horizontal, scrollbar, above, element, html, css, property
---

::blog-paragraph
For a recent project I had to create a pretty big table with many columns, making navigation a bit cumbersome. My client suggested positioning the scrollbar above the table in order to make navigating it a bit easier.
::blog-paragraph

<br />

::blog-paragraph
However I have never seen a css property for this purpose. You can customize the scrollbar to a certain degree but as far as I have known there is no property to change its position relative to the element.
::blog-paragraph

<br />

::blog-paragraph
After a few experiments I came up with a solution. I noticed that rotating an element will also rotate the scrollbar, meaning that if you rotate an element with a horizontal scrollbar by 180 degrees, the scrollbar will be on top of the element. Of course this would also mean that all the content would be rotated making this useless.
::blog-paragraph

<br />

::blog-paragraph
Instead, we put the scrollable element inside a div container while making sure that the element is as big as its parent. That way the parent container will have the scrollbar instead of the target element.
::blog-paragraph

<br />

```html
<div class="parent">
		<div class="element">
				<!-- content -->
		</div>
</div>
```

<br />

::blog-paragraph
The last step is to rotate the both the parent and the target element. This will first rotate the parent, positioning the scrollbar at the top, and then rotate the target element making the content readable.
::blog-paragraph

<br />

```css
.parent {
    transform: rotateX(180deg);
}

.element {
    transform: rotateX(180deg);
}
```

<br />
