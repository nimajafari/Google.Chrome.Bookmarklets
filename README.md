<div align="center">

# 🔖 SEO Bookmarklets for Google Chrome

**One-click tools for technical SEO audits, on-page analysis, and web-performance inspection — straight from your bookmarks bar.**

[![License: MIT](https://img.shields.io/badge/License-MIT-5e4899.svg)](LICENSE)
[![Bookmarklets](https://img.shields.io/badge/tools-27-adf0d6.svg)](#-the-toolkit)
[![No dependencies](https://img.shields.io/badge/dependencies-none-5e4899.svg)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-adf0d6.svg)](CONTRIBUTING.md)
[![Made for SEO](https://img.shields.io/badge/made%20for-SEO-5e4899.svg)](#)

[**Install →**](https://nimajafari.github.io/Google.Chrome.Bookmarklets/) · [The Toolkit](#-the-toolkit) · [Contributing](CONTRIBUTING.md)

</div>

---

A curated, dependency-free collection of **27 bookmarklets** that turn any web page into an instant SEO and performance audit surface. No browser extensions, no tracking, no build step — every tool is a single piece of readable JavaScript you can inspect, copy, and adapt.

Built for SEO consultants, technical SEOs, and anyone teaching or learning how the web is put together.

## Table of Contents

- [What is a bookmarklet?](#what-is-a-bookmarklet)
- [Installation](#installation)
- [The Toolkit](#-the-toolkit)
  - [🔍 Google Search & Performance Tools](#-google-search--performance-tools)
  - [📝 On-Page SEO](#-on-page-seo)
  - [🔗 Links](#-links)
  - [⚡ Web Performance](#-web-performance)
  - [🛠️ Technical & Privacy](#️-technical--privacy)
  - [🎨 Accessibility & Design](#-accessibility--design)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## What is a bookmarklet?

A bookmarklet is a small piece of JavaScript saved as a bookmark in your browser. When clicked, it runs against the current page to perform a specific action — modify the page, extract data, or open a related tool. They're a fast, install-free way to customize your browsing and automate repetitive checks.

Everything in this repository is geared toward SEO and performance auditing. Each tool is also available as an individual file under [`bookmarklets/`](bookmarklets/), and the full catalog lives in [`bookmarklets/manifest.json`](bookmarklets/manifest.json).

## Installation

### Option 1 — Drag-to-install page (recommended)

Open the **[install page](https://nimajafari.github.io/Google.Chrome.Bookmarklets/)** and drag any tool straight onto your bookmarks bar.

1. Show your bookmarks bar — Chrome: **⌘/Ctrl + Shift + B**.
2. Drag the purple **Install** button onto the bar.
3. Open any page and click the bookmark to run the tool.

### Option 2 — Manual install

1. Copy the JavaScript for the tool you want (from this README or the [`bookmarklets/`](bookmarklets/) folder).
2. Create a new bookmark in Chrome.
3. Paste the code into the bookmark's **URL** field, give it a name, and save.

> 💡 A few tools (those marked _Console_) print their output to the browser's DevTools Console. Open it with **⌘/Ctrl + Shift + J** to see the results.

---

## 🧰 The Toolkit

### 🔍 Google Search & Performance Tools

Open Google's testing and reporting tools pre-filled with the current page or domain.

#### 1. Google Search Console — "URLs containing" filter

Opens the GSC performance report filtered to the current page using the **"URLs containing"** filter.

> Requires access to the matching **URL-prefix** property in the Google Search Console account for the current domain.

📄 [`bookmarklets/google-tools/gsc-urls-containing.js`](bookmarklets/google-tools/gsc-urls-containing.js)

```javascript
javascript: (function() {
    window.open(`https://search.google.com/search-console/performance/search-analytics?resource_id=${encodeURIComponent(window.location.origin)}&page=*${encodeURIComponent(window.location.href)}`)
})();
```

#### 2. Google Search Console — "Exact URL" filter

Opens the GSC performance report filtered to the current page using the **"Exact URL"** filter.

> Requires access to the matching **URL-prefix** property in the Google Search Console account for the current domain.

📄 [`bookmarklets/google-tools/gsc-exact-url.js`](bookmarklets/google-tools/gsc-exact-url.js)

```javascript
javascript: (function() {
    window.open(`https://search.google.com/search-console/performance/search-analytics?resource_id=${encodeURIComponent(window.location.origin)}&page=!${encodeURIComponent(window.location.href)}`)
})();
```

#### 3. Rich Results Test

Sends the current URL to Google's Rich Results Test.

📄 [`bookmarklets/google-tools/rich-results-test.js`](bookmarklets/google-tools/rich-results-test.js)

```javascript
javascript: (function() {
    window.open(`https://search.google.com/test/rich-results?url=${encodeURIComponent(window.location.href)}`)
})();
```

#### 4. AMP Test

Sends the current URL to Google's AMP Test.

📄 [`bookmarklets/google-tools/amp-test.js`](bookmarklets/google-tools/amp-test.js)

```javascript
javascript: (function() {
    window.open(`https://search.google.com/test/amp?url=${encodeURIComponent(window.location.href)}`)
})();
```

#### 5. PageSpeed Insights

Runs PageSpeed Insights against the current URL.

📄 [`bookmarklets/google-tools/pagespeed-insights.js`](bookmarklets/google-tools/pagespeed-insights.js)

```javascript
javascript: (function() {
    window.open(`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(window.location.href)}`)
})();
```

#### 6. CrUX Report

Opens the Chrome UX Report dashboard for the current domain.

📄 [`bookmarklets/google-tools/crux-report.js`](bookmarklets/google-tools/crux-report.js)

```javascript
javascript: (function() {
    window.open(`https://lookerstudio.google.com/u/0/reporting/c450f8df-caf7-4d3c-a2aa-12dea55122bf/page/keDQB?params=%7B%22origin%22:%22${encodeURIComponent(window.location.hostname)}%22%7D`)
})();
```

#### 7. CrUX Vis Report

Opens the CrUX Vis visualisation for the current origin.

📄 [`bookmarklets/google-tools/crux-vis-report.js`](bookmarklets/google-tools/crux-vis-report.js)

```javascript
javascript: (function() {
    window.open(`https://cruxvis.withgoogle.com/#/?view=allmetrics&url=${encodeURIComponent(window.location.origin)}%2F&identifier=origin&device=PHONE&periodStart=0&periodEnd=-1&display=p75s`)
})();
```

#### 8. `site:` Search

Runs a `site:` search on Google for the current domain (ignoring `www.`) in a new tab.

📄 [`bookmarklets/google-tools/site-search.js`](bookmarklets/google-tools/site-search.js)

```javascript
javascript: (function() {
    let domain = window.location.hostname.replace('www.', '');
    let searchQuery = encodeURIComponent(`site:${domain}`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
})();
```

---

### 📝 On-Page SEO

Inspect the on-page signals that shape how a page is understood and indexed.

#### 9. Canonical & Meta Robots

Shows the canonical URL and meta robots directive of the current page.

📄 [`bookmarklets/on-page-seo/canonical-and-robots.js`](bookmarklets/on-page-seo/canonical-and-robots.js)

```javascript
javascript:(function() {
    function getMetaContentByName(name) {
        var metaTag = document.querySelector('meta[name="' + name + '"]');
        return metaTag ? metaTag.getAttribute('content') : null;
    }
    var canonicalUrl = getMetaContentByName('canonical');
    var canonicalMessage = canonicalUrl ? 'Canonical URL:' + '\n' + canonicalUrl : 'Canonical URL does not exist! 🤔';
    var metaRobots = getMetaContentByName('robots');
    var robotsMessage = metaRobots ? 'Meta Robots:' + '\n' + metaRobots : 'Meta Robots does not exist! 🤔';
    alert(canonicalMessage + '\n' + '\n' + robotsMessage);
})();
```

#### 10. Meta Description

Shows the meta description of the current page.

📄 [`bookmarklets/on-page-seo/meta-description.js`](bookmarklets/on-page-seo/meta-description.js)

```javascript
javascript:(function() {
    var metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
        var metaDescription = metaDescriptionTag.content;
        alert('Meta Description:\n' + metaDescription);
    } else {
        alert('No meta description found on this page.');
    }
})();
```

#### 11. Title, Description & Keywords (with character counts)

Shows the title tag, meta description, and meta keywords alongside their character counts.

📄 [`bookmarklets/on-page-seo/title-description-keywords.js`](bookmarklets/on-page-seo/title-description-keywords.js)

```javascript
javascript:(function() {
    var title = document.title;
    var metaDescription = document.querySelector('meta[name="description"]');
    var metaKeywords = document.querySelector('meta[name="keywords"]');

    var titleLength = title ? title.length : 0;
    var descriptionLength = metaDescription ? metaDescription.content.length : 0;
    var keywordsLength = metaKeywords ? metaKeywords.content.length : 0;

    var output = 'Title: ' + title + '\nCharacters: ' + titleLength + '\n\n';
    output += 'Meta Description: ' + (metaDescription ? metaDescription.content : 'N/A') + '\nCharacters: ' + descriptionLength + '\n\n';
    output += 'Meta Keywords: ' + (metaKeywords ? metaKeywords.content : 'N/A') + '\nCharacters: ' + keywordsLength;

    alert(output);
})();
```

#### 12. Heading Levels

Labels every heading on the page with its tag (`h1`–`h6`) so you can audit the document outline at a glance.

📄 [`bookmarklets/on-page-seo/heading-levels.js`](bookmarklets/on-page-seo/heading-levels.js)

```javascript
javascript: (function() {
    var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(function(heading) {
        var headingTypeContainer = document.createElement('div');
        headingTypeContainer.style = 'position: relative; display: inline-block; margin-left: 10px;';
        var headingTypeLabel = document.createElement('div');
        headingTypeLabel.style = 'position: absolute; top: -20px; right: 0; background-color: #5e4899; color: #adf0d6; padding: 5px;border-radius:5px;';
        headingTypeLabel.textContent = heading.tagName.toLowerCase();
        headingTypeContainer.appendChild(headingTypeLabel);
        heading.appendChild(headingTypeContainer);
    });
})();
```

#### 13. Image Alt Text

Overlays the `alt` attribute of every image directly on the page.

📄 [`bookmarklets/on-page-seo/image-alt-text.js`](bookmarklets/on-page-seo/image-alt-text.js)

```javascript
javascript: (function() {
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        var altText = img.alt || 'N/A';
        var altOverlay = document.createElement('div');
        altOverlay.style.position = 'absolute';
        altOverlay.style.top = '0';
        altOverlay.style.left = '0';
        altOverlay.style.background = 'rgba(255, 255, 255, 0.9)';
        altOverlay.style.padding = '5px';
        altOverlay.style.border = '1px solid #ccc';
        altOverlay.style.zIndex = '9999';
        altOverlay.textContent = 'Alt Text: ' + altText;
        img.style.position = 'relative';
        img.parentNode.insertBefore(altOverlay, img);
    });
})();
```

#### 14. `<br>` Tags in Content

Counts `<br>` tags and highlights the 20 characters before and after each one — handy for spotting line breaks misused for layout in body copy.

📄 [`bookmarklets/on-page-seo/br-tags.js`](bookmarklets/on-page-seo/br-tags.js)

```javascript
javascript:(function() {
    var brTags = document.querySelectorAll('br');
    if (brTags.length > 0) {
        brTags.forEach(function(brTag) {
            var previousText = getSurroundingText(brTag, 20, 'before');
            var followingText = getSurroundingText(brTag, 20, 'after');
            highlightText(brTag, previousText, followingText);
        });
        alert('Found and highlighted text around <br> tags.');
    } else {
        alert('No <br> tags found on this page.');
    }
    function getSurroundingText(element, characters, direction) {
        var surroundingText = '';
        var currentNode = element[direction === 'before' ? 'previousSibling' : 'nextSibling'];
        while (currentNode && characters > 0) {
            if (currentNode.nodeType === 3) {
                var text = currentNode.textContent;
                surroundingText = (direction === 'before' ? text.slice(-characters) : text.slice(0, characters)) + surroundingText;
                characters -= text.length;
            } else if (currentNode.nodeType === 1) {
                surroundingText = currentNode.textContent + surroundingText;
            }
            currentNode = element[direction === 'before' ? 'previousSibling' : 'nextSibling'];
        }
        return surroundingText;
    }
    function highlightText(element, beforeText, afterText) {
        var parent = element.parentNode;
        var beforeSpan = document.createElement('span');
        beforeSpan.textContent = beforeText;
        beforeSpan.style.backgroundColor = 'red';
        var brSpan = document.createElement('span');
        brSpan.textContent = '<br>';
        brSpan.style.backgroundColor = 'lightgreen';
        var afterSpan = document.createElement('span');
        afterSpan.textContent = afterText;
        afterSpan.style.backgroundColor = 'orange';
        parent.insertBefore(beforeSpan, element);
        parent.insertBefore(brSpan, element);
        parent.insertBefore(afterSpan, element);
        parent.removeChild(element);
    }
})();
```

#### 15. Page Element Overview

Summarises total elements, resources, page weight, meta tags, headings (`h1`–`h6`), links, CSS/JS, canonical, images, and more in a single alert.

📄 [`bookmarklets/on-page-seo/page-element-overview.js`](bookmarklets/on-page-seo/page-element-overview.js)

```javascript
javascript: (function() {
    var elementsCount = document.querySelectorAll('*').length;
    var resourcesCount = window.performance.getEntries().length;
    var totalSize = 0;
    window.performance.getEntries().forEach(function(entry) {
        totalSize += entry.encodedBodySize || 0;
    });
    var totalSizeFormatted = (totalSize / (1024 * 1024)).toFixed(2) + ' MB';
    var metaTagsCount = document.querySelectorAll('meta').length;
    var headingsCount = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
    var h1Count = document.querySelectorAll('h1').length;
    var h2Count = document.querySelectorAll('h2').length;
    var h3Count = document.querySelectorAll('h3').length;
    var h4Count = document.querySelectorAll('h4').length;
    var h5Count = document.querySelectorAll('h5').length;
    var h6Count = document.querySelectorAll('h6').length;
    var anchorTagsCount = document.querySelectorAll('a').length;
    var cssTagsCount = document.querySelectorAll('link[rel="stylesheet"]').length;
    var jsTagsCount = document.querySelectorAll('script[src]').length;
    var canonicalTagsCount = document.querySelectorAll('link[rel="canonical"]').length;
    var imgCount = document.querySelectorAll('img').length;
    var pictureCount = document.querySelectorAll('picture').length;
    var videoCount = document.querySelectorAll('video').length;
    var breakCount = document.querySelectorAll('br').length;

    alert('Elements: ' + elementsCount + ' | ' + 'Resources: ' + resourcesCount + ' | ' + 'Size: ' + totalSizeFormatted + '\n' + 'Meta: ' + metaTagsCount + '\n' + 'Headings: ' + headingsCount + ' | ' + 'H1: ' + h1Count + ' | ' + 'H2: ' + h2Count + ' | ' + 'H3: ' + h3Count + ' | ' + 'H4: ' + h4Count + ' | ' + 'H5: ' + h5Count + ' | ' + 'H6: ' + h6Count + '\n' + 'Anchor: ' + anchorTagsCount + '\n' + 'CSS: ' + cssTagsCount + '\n' + 'JS: ' + jsTagsCount + '\n' + 'Canonical: ' + canonicalTagsCount + '\n' + 'img: ' + imgCount + ' | ' + 'picture: ' + pictureCount + ' | ' + 'video: ' + videoCount + '\n' + '<br>: ' + breakCount);
})();
```

---

### 🔗 Links

Visualise and count the internal and external links on a page.

#### 16. Highlight Links

Highlights every anchor element on the page.

📄 [`bookmarklets/links/highlight-links.js`](bookmarklets/links/highlight-links.js)

```javascript
javascript: (function() {
    var anchorElements = document.querySelectorAll('a');
    anchorElements.forEach(function(anchor) {
        anchor.style.background = '#5e4899';
        anchor.style.border = '1px solid #5e4899';
        anchor.style.padding = '2px';
        anchor.style.borderRadius = '5px';
        anchor.style.color = '#adf0d6';
    });
    if (anchorElements.length > 0) {
        alert('Links highlighted on the page.');
    } else {
        alert('No anchor elements found on this page.');
    }
})();
```

#### 17. Count Links

Counts all links and colour-codes each one, adding a `data-link-index` attribute.

📄 [`bookmarklets/links/count-links.js`](bookmarklets/links/count-links.js)

```javascript
javascript: (function() {
    var anchorElements = document.querySelectorAll('a');
    anchorElements.forEach(function(anchor, index) {
        var backgroundColor = getRandomColor();
        anchor.style.background = backgroundColor;
        anchor.style.border = '2px solid #000';
        anchor.style.padding = '2px';
        anchor.setAttribute('data-link-index', index + 1);
    });
    var totalLinks = anchorElements.length;
    if (totalLinks > 0) {
        alert('Total links on the page: ' + totalLinks);
    } else {
        alert('No anchor elements found on this page.');
    }
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
})();
```

---

### ⚡ Web Performance

Inspect resource hints, script loading, fonts, and `<head>` ordering.

#### 18. Resource Hints — Count & URLs

Shows separate alerts for the count and URLs of `preconnect`, `dns-prefetch`, `preload`, and `prefetch` links.

📄 [`bookmarklets/performance/resource-hints-detail.js`](bookmarklets/performance/resource-hints-detail.js)

```javascript
javascript:(function() {
    function getLinkInfo(linkType) {
        var linkElements = document.querySelectorAll('link[rel="' + linkType + '"]');
        var linkCount = linkElements.length;
        if (linkCount > 0) {
            var linkInfo = Array.from(linkElements).map(function(link) {
                return link.href;
            }).join('\n');
            alert(linkType + ' links (' + linkCount + '):\n' + linkInfo);
        } else {
            alert('No ' + linkType + ' links found on this page! 🤔');
        }
    }
    getLinkInfo('preconnect');
    getLinkInfo('dns-prefetch');
    getLinkInfo('preload');
    getLinkInfo('prefetch');
})();
```

#### 19. Resource Hints — List _(Console)_

Lists every resource hint type — `preload`, `prefetch`, `preconnect`, `dns-prefetch`, `prerender`, `modulepreload` — and whether the page uses it.

📄 [`bookmarklets/performance/resource-hints-list.js`](bookmarklets/performance/resource-hints-list.js)

```javascript
javascript:(function() {
    const rels = [
        "preload",
        "prefetch",
        "preconnect",
        "dns-prefetch",
        "preconnect dns-prefetch",
        "prerender",
        "modulepreload",
    ];
    rels.forEach((element) => {
        const linkElements = document.querySelectorAll(`link[rel="${element}"]`);
        const dot = linkElements.length > 0 ? "🟩" : "🟥";
        console.log(`${dot} ${element}`);
        linkElements.forEach((el) => console.log(el));
    });
})();
```

Source: [Webperf-Snippets](https://webperf-snippets.nucliweb.net/Loading/Resource-Hints)

#### 20. Script Loading Types _(Console)_

Tables every `<script src>` showing whether it is `async`, `defer`, a `module`, and whether it is render-blocking.

📄 [`bookmarklets/performance/script-loading-types.js`](bookmarklets/performance/script-loading-types.js)

```javascript
javascript:(function() {
    const scripts = document.querySelectorAll("script[src]");
    const scriptsLoading = [...scripts].map((obj) => {
        return {
            src: obj.src,
            async: obj.async,
            defer: obj.defer,
            module: obj.type === 'module',
            "render blocking": obj.async || obj.defer || obj.type === 'module' ? "" : "🟥",
        };
    });
    console.table(scriptsLoading);
})();
```

Source: [Webperf-Snippets](https://webperf-snippets.nucliweb.net/Loading/Script-Loading)

#### 21. Web Fonts in Use

Lists the web fonts applied across the page (excluding the generic `serif`, `sans-serif`, and `monospace` families).

📄 [`bookmarklets/performance/web-fonts-in-use.js`](bookmarklets/performance/web-fonts-in-use.js)

```javascript
javascript:(function() {
    var allElements = document.querySelectorAll('*');
    var webFonts = new Set();
    allElements.forEach(function(element) {
        var computedStyle = window.getComputedStyle(element);
        var fontFamily = computedStyle.fontFamily;
        fontFamily = fontFamily.replace(/['"]/g, '');
        if (!(/^(serif|sans-serif|monospace)$/i.test(fontFamily))) {
            webFonts.add(fontFamily.trim());
        }
    });
    var webFontsCount = webFonts.size;
    var webFontsList = Array.from(webFonts).join('\n');
    alert('Number of Web Fonts: ' + webFontsCount + '\n\nWeb Font Names:\n' + webFontsList);
})();
```

#### 22. Fonts Above the Fold _(Console)_

Lists fonts preloaded via resource hints, fonts loaded in the document, and fonts actually used above the fold.

📄 [`bookmarklets/performance/fonts-above-the-fold.js`](bookmarklets/performance/fonts-above-the-fold.js)

```javascript
javascript:(function() {
    const linkElements = document.querySelectorAll(`link[rel="preload"]`);
    const arrayLinks = Array.from(linkElements);
    const preloadedFonts = arrayLinks.filter((link) => link.as === "font");
    console.log(
        "-> Fonts Preloaded via Resources Hints",
        "font-weight: bold; font-size: 1.2em; color: lightcoral",
    );
    preloadedFonts.forEach((font) => console.log(`▸ ${font.href}`));
    console.log("");
    const loadedFonts = [
        ...new Set(
            Array.from(document.fonts.values())
                .map((font) => font)
                .filter((font) => font.status === "loaded")
                .map((font) => `${font.family} - ${font.weight} - ${font.style}`),
        ),
    ];
    console.log(
        "-> Fonts and Weights Loaded in the Document",
        "font-weight: bold; font-size: 1.2em; color: lightcoral",
    );
    loadedFonts.forEach((font) => console.log(`▸ ${font}`));
    console.log("");
    const childrenSlector =
        "body * > *:not(script):not(style):not(link):not(source)";
    const aboveFoldElements = Array.from(
        document.querySelectorAll(childrenSlector),
    ).filter((elm) => {
        const rect = elm.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    });
    const usedFonts = Array.from(
        new Set(
            [...aboveFoldElements].map(
                (e) =>
                    `${getComputedStyle(e).fontFamily} | ${
                        getComputedStyle(e).fontWeight
                    } | ${getComputedStyle(e).fontStyle}`,
            ),
        ),
    );
    console.log(
        "-> Fonts and Weights Used Above the Fold",
        "font-weight: bold; font-size: 1.2em; color: lightcoral",
    );
    usedFonts.forEach((font) => console.log(`▸ ${font}`));
})();
```

Source: [Webperf-Snippets](https://webperf-snippets.nucliweb.net/Loading/Fonts-Preloaded-Loaded-and-used-above-the-fold)

#### 23. `<head>` Order — Capo _(Console)_

Visualises the order of `<head>` elements and flags anything out of order, since `<head>` ordering can affect perceived performance.

📄 [`bookmarklets/performance/head-order-capo.js`](bookmarklets/performance/head-order-capo.js) — the full minified source is in the file. Run it from your bookmarks bar, then open the Console (**⌘/Ctrl + Shift + J**) to see the result.

Source: [capo.js](https://github.com/rviscomi/capo.js) by Rick Viscomi.

---

### 🛠️ Technical & Privacy

Read HTTP response headers and inspect cookies set by the page.

#### 24. HTTP Response Headers _(Modal)_

Displays the HTTP response headers for the current URL in an on-page modal.

📄 [`bookmarklets/technical/http-response-headers.js`](bookmarklets/technical/http-response-headers.js)

```javascript
javascript:(function() {
    var modalContainer = document.createElement('div');
    modalContainer.style.width = '1000px';
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '50%';
    modalContainer.style.left = '50%';
    modalContainer.style.transform = 'translate(-50%, -50%)';
    modalContainer.style.backgroundColor = '#fff';
    modalContainer.style.padding = '20px';
    modalContainer.style.border = '1px solid #ccc';
    modalContainer.style.zIndex = '9999';
    modalContainer.style.direction = 'ltr';
    modalContainer.style.textAlign = 'left';
    modalContainer.style.overflowY = 'auto';
    modalContainer.style.overflowX = 'auto';
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.style.float = 'right';
    closeButton.style.cursor = 'pointer';
    closeButton.style.padding = '5px 10px';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modalContainer);
    });
    modalContainer.appendChild(closeButton);
    var isGray = false;
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', window.location.href, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var headers = xhr.getAllResponseHeaders().split('\n');
            headers.forEach(function(header) {
                var headerLine = header.trim();
                var headerParagraph = document.createElement('p');
                headerParagraph.style.wordWrap = 'break-word';
                headerParagraph.style.marginBottom = '0px';
                headerParagraph.style.paddingBottom = '10px';
                headerParagraph.style.paddingTop = '10px';
                headerParagraph.style.lineHeight = '10px';
                headerParagraph.textContent = headerLine;
                if (isGray) {
                    headerParagraph.style.backgroundColor = '#f5f5f5';
                }
                isGray = !isGray;
                modalContainer.appendChild(headerParagraph);
            });
            document.body.appendChild(modalContainer);
        }
    };
    xhr.send();
})();
```

#### 25. Cookies — Alert

Shows all cookies set by the current page in a simple alert.

📄 [`bookmarklets/technical/cookies-alert.js`](bookmarklets/technical/cookies-alert.js)

```javascript
javascript:(function() {
    function getCookies() {
        var cookies = document.cookie.split(';');
        var cookieInfo = cookies.map(function(cookie) {
            var [name, value] = cookie.trim().split('=');
            return name + ': ' + decodeURIComponent(value);
        }).join('\n');
        return cookieInfo || 'No cookies found.';
    }
    function showCookies() {
        var cookieInfo = getCookies();
        alert('Cookies:\n' + cookieInfo);
    }
    showCookies();
})();
```

#### 26. Cookies — Modal

Shows all cookies set by the current page in a closable on-page modal.

📄 [`bookmarklets/technical/cookies-modal.js`](bookmarklets/technical/cookies-modal.js)

```javascript
javascript:(function() {
    function createCookieModal() {
        var modalContainer = document.createElement('div');
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '50%';
        modalContainer.style.left = '50%';
        modalContainer.style.transform = 'translate(-50%, -50%)';
        modalContainer.style.backgroundColor = 'white';
        modalContainer.style.padding = '20px';
        modalContainer.style.border = '1px solid #222';
        modalContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        modalContainer.style.zIndex = '9999';
        modalContainer.style.width = '1000px';
        modalContainer.style.direction = 'ltr';
        modalContainer.style.textAlign = 'left';
        modalContainer.style.wordWrap = 'break-word';
        var closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.padding = '5px 10px';
        closeButton.style.marginTop = '10px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.right = '10px';
        closeButton.style.top = '10px';
        closeButton.style.position = 'fixed';
        closeButton.addEventListener('click', function() {
            modalContainer.style.display = 'none';
        });
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookieLine = document.createElement('div');
            cookieLine.textContent = cookies[i].trim();
            modalContainer.appendChild(cookieLine);
        }
        modalContainer.appendChild(closeButton);
        document.body.appendChild(modalContainer);
    }
    createCookieModal();
})();
```

---

### 🎨 Accessibility & Design

Inspect typography and colour contrast of selected text.

#### 27. Text Font & Contrast

Select some text, then run the tool to see the font-family, size, weight, colour, and contrast ratio of the selection.

📄 [`bookmarklets/accessibility/text-font-and-contrast.js`](bookmarklets/accessibility/text-font-and-contrast.js)

```javascript
javascript:(function() {
    var selectedText = window.getSelection().toString();

    if (selectedText) {
        var element = window.getSelection().anchorNode.parentElement;

        var fontFamily = window.getComputedStyle(element).fontFamily;
        var fontSize = window.getComputedStyle(element).fontSize;
        var fontWeight = window.getComputedStyle(element).fontWeight;
        var color = window.getComputedStyle(element).color;
        var backgroundColor = window.getComputedStyle(element).backgroundColor;

        var contrastRatio = getContrastRatio(color, backgroundColor);

        alert(
            'Font Family: ' + fontFamily + '\n' +
            'Font Size: ' + fontSize + '\n' +
            'Font Weight: ' + fontWeight + '\n' +
            'Color: ' + color + '\n' +
            'Contrast Ratio: ' + contrastRatio
        );
    } else {
        alert('Please select some text.');
    }

    function getContrastRatio(color1, color2) {
        function getLuminance(color) {
            var rgb = color.match(/\d+/g);
            var r = rgb[0] / 255;
            var g = rgb[1] / 255;
            var b = rgb[2] / 255;
            r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
            g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
            b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }

        var luminance1 = getLuminance(color1) + 0.05;
        var luminance2 = getLuminance(color2) + 0.05;

        var contrastRatio = luminance1 > luminance2 ? luminance1 / luminance2 : luminance2 / luminance1;

        return contrastRatio.toFixed(2);
    }
})();
```

---

## Troubleshooting

If a bookmarklet isn't working:

- **Check the code is complete.** When copying manually, make sure the entire snippet (including the `javascript:` prefix) was pasted into the bookmark's URL field.
- **Test it in the Console first.** Open DevTools (**⌘/Ctrl + Shift + J**) and paste the code. If it runs without errors there, the problem is likely in how the bookmark was saved.
- **Watch for site restrictions.** Some pages enforce a strict Content Security Policy (CSP) that blocks inline scripts — bookmarklets may not run there.
- **Cross-origin limits.** Tools that read response headers or static HTML can be limited by CORS on some sites.
- **Use the right output.** Tools marked _Console_ print to DevTools; tools marked _Modal_ / _On-page_ render directly on the page.

## Contributing

Contributions are welcome — new tools, fixes, and improvements. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request, and note the [Code of Conduct](CODE_OF_CONDUCT.md).

## Author

**Nima Jafari** — SEO consultant and educator.

This toolkit grew out of day-to-day technical SEO audits and teaching. If it saves you time, a ⭐ on the repository is always appreciated.

## License

Released under the [MIT License](LICENSE). You're free to use, modify, and share these tools — attribution is appreciated.

Several performance snippets are adapted from [Webperf-Snippets](https://webperf-snippets.nucliweb.net/) and [capo.js](https://github.com/rviscomi/capo.js); credit remains with their original authors.
