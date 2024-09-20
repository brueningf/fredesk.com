---
title: "Why CSS is important?"
description: "A brief overview of why CSS is important for web design and development."
publishDate: "20 September 2024"
tags: ["css", "web-design", "web-development"]
---

### Why CSS?

CSS is important for web design because it allows for the styling and presentation of web pages. Without CSS, websites would be plain text. While HTML provides structure to a document, CSS enables styling.
According to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS), "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML, or XHTML). CSS describes how elements should be rendered."

### Are there alternatives?

There is no true alternative to CSS at this point. CSS is widely supported and is a web standard.
As [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) explains, "CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications."

However, there have been some attempts to replace CSS over time. Below are a few examples:

#### 1. JavaScript-Based Style Sheets
Back in 1996, some members of the Netscape team proposed using JavaScript to style websites.
"This document specifies a method to attach styles to HTML documents using the existing property-based language JavaScript" ([JavaScript-Based Style Sheets, 1996](https://www.w3.org/submissions/1996/1/WD-jsss-960822)).

#### 2. XSL and CSS
Leigh Dodds (2000) noted, "A hot topic in the XML community was the Extensible Stylesheet Language (XSL)—specifically, the aspects relating to text layout, so-called Formatting Objects (XSL-FO)."
This was seen as an alternative to CSS for XML use cases ([XSL and CSS: One year later, 2000](https://www.xml.com/pub/a/2000/06/21/deviant/index.html)).

#### 3. GSS
GSS was an alternative that never gained much popularity.
"GSS reimagines CSS layout and replaces the browser’s layout engine with one that harnesses the Cassowary Constraint Solver—the same algorithm Apple uses to compute native layout" ([CSS polyfills from the future | GSS](http://gss.github.io/)).

In my opinion, GSS is more of an extension to CSS than a competitor. Grid functionality eventually became part of CSS as a module, rendering GSS unnecessary.

### Best practices for using CSS?

1. **Manage your CSS**
   Poorly written CSS can be hard to maintain, read, and optimize for performance. A good piece of advice from Nielsen (1997) is to centralize your CSS:
   "Use a single style sheet for all of the pages on your site."
   If you're building a single-page app, embedding a style tag in the document head is acceptable. For websites, centralizing CSS is ideal. Avoid inline styles unless necessary.

2. **Build your site to work without CSS**
   Nielsen (1997) also advises that "Pages must continue to work when style sheets are disabled."
   This is crucial for accessibility and web standards compliance.

3. **Do not use absolute font sizes**
   Even in 1997, responsive design principles were already being considered.
   "Use relative font sizes so that users can resize the text if they want to."

4. **Use classes**
   While this seems obvious, it’s worth emphasizing.
   "Use classes to define styles that can be reused throughout the site."

Finally, on the modern web, my advice is to stay up-to-date with new CSS modules, check browser support for features, and consider minimalistic frameworks like Tailwind or reset styles like Remedy.

5. **Use cascade layers**
   Although beyond the scope of this course, cascade layers are worth mentioning:
   "A CSS feature that allows us to define explicit contained layers of specificity, so that we have full control over which styles take priority in a project without relying on specificity hacks or !important" ([Cascade Layers Guide, 2024](https://css-tricks.com/css-cascade-layers/)).
   If you've ever had CSS styles that wouldn’t apply until you comb through the entire CSS file, you'll appreciate cascade layers.

### References
- *Cascade Layers Guide* (2024, August 12). CSS-Tricks. [https://css-tricks.com/css-cascade-layers/](https://css-tricks.com/css-cascade-layers/)
- *CSS: Cascading style sheets* | MDN. (n.d.). MDN Web Docs. [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- *CSS polyfills from the future | GSS* (n.d.). [http://gss.github.io/](http://gss.github.io/)
- *JavaScript-Based style sheets* (1996). W3C. [https://www.w3.org/submissions/1996/1/WD-jsss-960822](https://www.w3.org/submissions/1996/1/WD-jsss-960822)
- Nielsen, J. (1997, July 1). *Effective use of style sheets*. Nielsen Norman Group. [https://www.nngroup.com/articles/effective-use-of-style-sheets/](https://www.nngroup.com/articles/effective-use-of-style-sheets/)
- *XSL and CSS: One year later* (2000, June 21). XML.com. [https://www.xml.com/pub/a/2000/06/21/deviant/index.html](https://www.xml.com/pub/a/2000/06/21/deviant/index.html)
