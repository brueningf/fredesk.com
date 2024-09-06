---
title: "Sticky matrix table"
description: "How to make a sticky side and head bar on a HTML table"
publishDate: "05 Sept 2024"
tags: ["html", "css", "table", "matrix"]
---


## The problem
Let's say you have a table where you want the first column to remain visible when you scroll horizontally and the header to remain visible when you scroll vertically.
In my case I have a table with students and a checkbox for each student, and each date. A sort of attendance matrix.
Just use the position: sticky; property in CSS and you are good to go. Check out my CodePen example below.

I've used AlpineJS to make populate the table with data. You can use any other framework or vanilla JS to do the same.
The important part is the CSS. Watch out for the top, left, and z-index property. They are important to make the side and head bars sticky.
The z-index property is important to make the side and head bars appear above the table content.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-slug-hash="ZEdVRvd" data-pen-title="Sticky side/header table" data-user="brueningf" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/brueningf/pen/ZEdVRvd">
    Sticky side/header table</a> by ExoticRoots (<a href="https://codepen.io/brueningf">@brueningf</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
