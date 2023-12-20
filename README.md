# Google Chrome Bookmarklets
## What is a bookmarklet?

A bookmarklet is a small piece of JavaScript code that can be saved as a bookmark in your web browser. When clicked, a bookmarklet performs a specific action or function on the current webpage, such as:

- Modifying the appearance of a web page
- Extracting data from a web page
- Sharing a web page to a social media platform
- Running a search query on the selected text

Bookmarklets are a powerful tool for customizing your web browsing experience and automating tasks.

## How to create a bookmarklet?

To create a bookmarklet, you need to write a small piece of JavaScript code. You can find many examples of bookmarklets here, or you can write your own.

Once you have written your bookmarklet code, you need to save it as a bookmark in your web browser. Then, in the URL field, paste the bookmarklet code. You can also give the bookmark a name and choose a folder to save it in.

Here are a few examples illustrating how bookmarklets can be utilized for auditing purposes. Feel free to modify or develop them.


### 1. Opens Google Search Console performance report and filters the current page using **"URLs containing"** filter

 > Access to the **"URL Prefix"** property within the Google Search Console account associated with the current domain is required.

 ```javascript
javascript: (function() {
    window.open(`https://search.google.com/search-console/performance/search-analytics?resource_id=${encodeURIComponent(window.location.origin)}&page=*${encodeURIComponent(window.location.href)}`)
})();
```
***

### 2. Opens Google Search Console performance report and filters the current page using **"Exact URL"** filter
> Access to the **"URL Prefix"** property within the Google Search Console account associated with the current domain is required.

```javascript
javascript: (function() {
    window.open(`https://search.google.com/search-console/performance/search-analytics?resource_id=${encodeURIComponent(window.location.origin)}&page=!${encodeURIComponent(window.location.href)}`)
})();
```
***

### 3. Sends the current URL to the Google Rich Result Testing tool

```javascript
javascript: (function() {
    window.open(`https://search.google.com/test/rich-results?url=${encodeURIComponent(window.location.href)}`)
})();
```
***

### 4. Sends the current URL to the Google AMP Testing tool

```javascript
javascript: (function() {
    window.open(`https://search.google.com/test/amp?url=${encodeURIComponent(window.location.href)}`)
})();
```
***

### 5. Sends the current URL to Google PageSpeed Insights

```javascript
javascript: (function() {
    window.open(`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(window.location.href)}`)
})();
```
***

### 6. Highlights all `<a>` tags on a page

This bookmarklet visually highlights all anchor elements on a webpage by changing their background color to yellow, adding a blue border, and applying padding. It alerts the user before highlighting `<a>` tags and shows"Links highlighted on the page." if there is at least one `<a>` and shows "No anchor elements found on this page." if there is no `<a>` elements on the page.

```javascript
javascript: (function() {
    var anchorElements = document.querySelectorAll('a');
    anchorElements.forEach(function(anchor) {
        anchor.style.background = 'yellow';
        anchor.style.border = '2px solid blue';
        anchor.style.padding = '2px';
    });
    if (anchorElements.length > 0) {
        alert('Links highlighted on the page.');
    } else {
        alert('No anchor elements found on this page.');
    }
})();
```
***

### 7. Shows the number of `<a>` and highlight them with random colors

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
***

### 8. Shows alt attribute of images on them

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
***

### 9. Shows the `<h>` type at the right side of every heading

```javascript
javascript: (function() {
    var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(function(heading) {
        var headingTypeContainer = document.createElement('div');
        headingTypeContainer.style = 'position: relative; display: inline-block; margin-left: 10px;';
        var headingTypeLabel = document.createElement('div');
        headingTypeLabel.style = 'position: absolute; top: -20px; right: 0; background-color: #000; color: #fff; padding: 5px;border-radius:5px;';
        headingTypeLabel.textContent = heading.tagName.toLowerCase();
        headingTypeContainer.appendChild(headingTypeLabel);
        heading.appendChild(headingTypeContainer);
    });
})();
```
***

### 10. Shows the total number of elements and some other elements separately

When this bookmarklet is executed, it displays an alert with the total number of elements and some other elements like `<h1>` to `<h6>`, `CSS`, `JS`, `a`, `img`, `picture`, `video`, `br` and `canonical`.

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
  
    alert('Elements: ' + elementsCount + ' | ' + 'Resources: ' + resourcesCount + ' | ' + 'Size: ' + totalSizeFormatted + '\n' + 'Meta: ' + metaTagsCount + '\n' + 'Headings: ' + headingsCount + ' | ' + 'H1: ' + h1Count + ' | ' + 'H2: ' + h2Count + ' | ' + 'H3: ' + h3Count + ' | ' + 'H4: ' + h4Count + ' | ' + 'H5: ' + h5Count + ' | ' + 'H6: ' + h6Count + '\n' + 'Anchor: ' + anchorTagsCount+ '\n' + 'CSS: ' + cssTagsCount + '\n' + 'JS: ' + jsTagsCount + '\n' + 'Canonical: ' + canonicalTagsCount + '\n' + 'img: ' + imgCount + ' | ' + 'picture: ' + pictureCount + ' | ' + 'video: ' + videoCount + '\n' + '<br>: ' + breakCount);
  })();
```
***

### 11. Shows the `canonical` address and meta `robots` 

Displays an alert with the canonical URL and meta robots of the current page.

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
***

### 12. Shows the numnbers and URLs of `preconnect`, `preload`, `prefetch`, and `dns-prefetch` links

 Shows separate alerts for the numbers and URLs of preconnect, preload, prefetch, and dns-prefetch links on the current page.

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
***

### 13. Shows the meta description of the current page

Displays an alert with the meta description of the current page.

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
***

### 14. Shows title tag, meta description and meta keywords, and their number of characters

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
***

### 15. Display information about the cookies set by the current webpage

Displays an alert containing details about the cookies set on the current webpage:

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

Displays cookies in a modal:

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
***

### 16. Display information about web fonts used on the current webpage

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
***

### 17. Display the HTTP response header in a modal

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
***

### 18. Display the number of `<br>` and highlight 20 characters before and after them

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
***

### 19. List all scripts and their loading types in the browser console

Scan all <scripts> in the DOM and create a table that displays whether they are loaded asynchronously, deferred, or have the type="module" attribute.

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
})
console.table(scriptsLoading);
})();

```
Source: [Webperf-Snippets](https://webperf-snippets.nucliweb.net/Loading/Script-Loading)

***
### 20. List all resource hints

List all "preload", "prefetch", "preconnect", "dns-prefetch", "preconnect dns-prefetch", "prerender" and "modulepreload".
  
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
})})();
```
Source: [Webperf-Snippets](https://webperf-snippets.nucliweb.net/Loading/Resource-Hints)

***

### 21. Show the font-family, font-size, font-weight, color and contrast ratio of the selected text

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

***

### 22. List all FONTS preloaded, loaded, and used above the fold of the page

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
usedFonts.forEach((font) => console.log(`▸ ${font}`))})();
```
Source: [Webperf-Snippets](https://webperf-snippets.nucliweb.net/Loading/Fonts-Preloaded-Loaded-and-used-above-the-fold)

***

### 23. Get your ‍`<head>‍` in order

Ordering elements in the <head> can impact perceived page performance.
This script is designed to assist you in identifying elements that are out of order.

 > Run this snippet in your browser console to see the result.

```javascript
(() => {
  function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
      get: v,
      set: s,
      enumerable: true,
      configurable: true,
    });
  }
  const $eb5be8077a65b10b$var$Hues = {
    PINK: 320,
    BLUE: 200,
  };
  function $eb5be8077a65b10b$export$921514c0345db5eb(hue) {
    return [
      `oklch(5% .1 ${hue})`,
      `oklch(13% .2 ${hue})`,
      `oklch(25% .2 ${hue})`,
      `oklch(35% .25 ${hue})`,
      `oklch(50% .27 ${hue})`,
      `oklch(67% .31 ${hue})`,
      `oklch(72% .25 ${hue})`,
      `oklch(80% .2 ${hue})`,
      `oklch(90% .1 ${hue})`,
      `oklch(99% .05 ${hue})`,
      "#ccc",
    ];
  }
  const $eb5be8077a65b10b$export$e6952b12ade67489 = [
    "#9e0142",
    "#d53e4f",
    "#f46d43",
    "#fdae61",
    "#fee08b",
    "#e6f598",
    "#abdda4",
    "#66c2a5",
    "#3288bd",
    "#5e4fa2",
    "#cccccc",
  ];
  const $eb5be8077a65b10b$export$d68d0fda4a10dbc2 =
    $eb5be8077a65b10b$export$921514c0345db5eb($eb5be8077a65b10b$var$Hues.PINK);
  const $eb5be8077a65b10b$export$738c3b9a44c87ecc =
    $eb5be8077a65b10b$export$921514c0345db5eb($eb5be8077a65b10b$var$Hues.BLUE);
  const $eb5be8077a65b10b$export$9a82c28ef488e918 = {
    DEFAULT: $eb5be8077a65b10b$export$e6952b12ade67489,
    PINK: $eb5be8077a65b10b$export$d68d0fda4a10dbc2,
    BLUE: $eb5be8077a65b10b$export$738c3b9a44c87ecc,
  };
  function $eb5be8077a65b10b$export$18c940335d915715(elementColor) {
    let invalidColor = "#cccccc";
    if (elementColor == invalidColor) invalidColor = "red";
    return `repeating-linear-gradient(45deg, ${elementColor}, ${elementColor} 3px, ${invalidColor} 3px, ${invalidColor} 6px)`;
  }
 
  var $d410929ede0a2ee4$exports = {};
 
  $parcel$export(
    $d410929ede0a2ee4$exports,
    "IO",
    () => $d410929ede0a2ee4$export$8f8422ac5947a789,
  );
 
  class $d410929ede0a2ee4$export$8f8422ac5947a789 {
    constructor(document1, options, output = window.console) {
      this.document = document1;
      this.options = options;
      this.console = output;
      this.isStaticHead = false;
      this.head = null;
    }
    async init() {
      if (this.head) return;
      if (this.options.prefersDynamicAssessment()) {
        this.head = this.document.querySelector("head");
        return;
      }
      try {
        let html = await this.getStaticHTML();
        html = html.replace(/(\<\/?)(head)/gi, "$1static-head");
        const staticDoc =
          this.document.implementation.createHTMLDocument("New Document");
        staticDoc.documentElement.innerHTML = html;
        this.head = staticDoc.querySelector("static-head");
        if (this.head) this.isStaticHead = true;
        else this.head = this.document.head;
      } catch (e) {
        this.console.error(
          `${this.options.loggingPrefix}An exception occurred while getting the static <head>:`,
          e,
        );
        this.head = this.document.head;
      }
      if (!this.isStaticHead)
        this.console.warn(
          `${this.options.loggingPrefix}Unable to parse the static (server-rendered) <head>. Falling back to document.head`,
          this.head,
        );
    }
    async getStaticHTML() {
      const url = this.document.location.href;
      const response = await fetch(url);
      return await response.text();
    }
    getHead() {
      return this.head;
    }
    stringifyElement(element) {
      return element.getAttributeNames().reduce((id, attr) => {
        return (id += `[${CSS.escape(attr)}=${JSON.stringify(
          element.getAttribute(attr),
        )}]`);
      }, element.nodeName);
    }
    getLoggableElement(element) {
      if (!this.isStaticHead) return element;
      const selector = this.stringifyElement(element);
      const candidates = Array.from(
        this.document.head.querySelectorAll(selector),
      );
      if (candidates.length == 0) return element;
      if (candidates.length == 1) return candidates[0];
      // The way the static elements are parsed makes their innerHTML different.
      // Recreate the element in DOM and compare its innerHTML with those of the candidates.
      // This ensures a consistent parsing and positive string matches.
      const candidateWrapper = this.document.createElement("div");
      const elementWrapper = this.document.createElement("div");
      elementWrapper.innerHTML = element.innerHTML;
      const candidate = candidates.find((c) => {
        candidateWrapper.innerHTML = c.innerHTML;
        return candidateWrapper.innerHTML == elementWrapper.innerHTML;
      });
      if (candidate) return candidate;
      return element;
    }
    // Note: AI-generated function.
    createElementFromSelector(selector) {
      // Extract the tag name from the selector
      const tagName = selector.match(/^[A-Za-z]+/)[0];
      if (!tagName) return;
      // Create the new element
      const element = document.createElement(tagName);
      // Extract the attribute key-value pairs from the selector
      const attributes = selector.match(/\[([A-Za-z-]+)="([^"]+)"\]/g) || [];
      // Set the attributes on the new element
      attributes.forEach((attribute) => {
        const [key, value] = attribute
          .replace("[", "")
          .replace("]", "")
          .split("=");
        element.setAttribute(key, value.slice(1, -1));
      });
      return element;
    }
    logElementFromSelector({
      weight: weight,
      selector: selector,
      innerHTML: innerHTML,
      isValid: isValid,
      customValidations: customValidations = {},
    }) {
      weight = +weight;
      const viz = this.getElementVisualization(weight);
      let element = this.createElementFromSelector(selector);
      element.innerHTML = innerHTML;
      element = this.getLoggableElement(element);
      this.logElement({
        viz: viz,
        weight: weight,
        element: element,
        isValid: isValid,
        customValidations: customValidations,
      });
    }
    logElement({
      viz: viz,
      weight: weight,
      element: element,
      isValid: isValid,
      customValidations: customValidations,
      omitPrefix: omitPrefix = false,
    }) {
      if (!omitPrefix)
        viz.visual = `${this.options.loggingPrefix}${viz.visual}`;
      let loggingLevel = "log";
      const args = [viz.visual, viz.style, weight + 1, element];
      if (!this.options.isValidationEnabled()) {
        this.console[loggingLevel](...args);
        return;
      }
      const { payload: payload, warnings: warnings } = customValidations;
      if (payload) args.push(payload);
      if (warnings?.length) {
        // Element-specific warnings.
        loggingLevel = "warn";
        warnings.forEach((warning) => args.push(`❌ ${warning}`));
      } else if (
        !isValid &&
        (this.options.prefersDynamicAssessment() || this.isStaticHead)
      ) {
        // General warnings.
        loggingLevel = "warn";
        args.push(`❌ invalid element (${element.tagName})`);
      }
      this.console[loggingLevel](...args);
    }
    logValidationWarnings(warnings) {
      if (!this.options.isValidationEnabled()) return;
      warnings.forEach(
        ({ warning: warning, elements: elements = [], element: element }) => {
          elements = elements.map(this.getLoggableElement.bind(this));
          this.console.warn(
            `${this.options.loggingPrefix}${warning}`,
            ...elements,
            element || "",
          );
        },
      );
    }
    getColor(weight) {
      return this.options.palette[10 - weight];
    }
    getHeadVisualization(elements) {
      let visual = "";
      const styles = [];
      elements.forEach(({ weight: weight, isValid: isValid }) => {
        visual += "%c ";
        const color = this.getColor(weight);
        let style = `padding: 5px; margin: 0 -1px; `;
        if (isValid) style += `background-color: ${color};`;
        else
          style += `background-image: ${(0,
          $eb5be8077a65b10b$export$18c940335d915715)(color)}`;
        styles.push(style);
      });
      return {
        visual: visual,
        styles: styles,
      };
    }
    getElementVisualization(weight) {
      const visual = `%c${new Array(weight + 1).fill("█").join("")}`;
      const color = this.getColor(weight);
      const style = `color: ${color}`;
      return {
        visual: visual,
        style: style,
      };
    }
    visualizeHead(groupName, headElement, headWeights) {
      const headViz = this.getHeadVisualization(headWeights);
      this.console.groupCollapsed(
        `${this.options.loggingPrefix}${groupName} %chead%c order\n${headViz.visual}`,
        "font-family: monospace",
        "font-family: inherit",
        ...headViz.styles,
      );
      headWeights.forEach(
        ({
          weight: weight,
          element: element,
          isValid: isValid,
          customValidations: customValidations,
        }) => {
          const viz = this.getElementVisualization(weight);
          this.logElement({
            viz: viz,
            weight: weight,
            element: element,
            isValid: isValid,
            customValidations: customValidations,
            omitPrefix: true,
          });
        },
      );
      this.console.log(
        `${groupName} %chead%c element`,
        "font-family: monospace",
        "font-family: inherit",
        headElement,
      );
      this.console.groupEnd();
    }
  }
 
  var $5b739339de321a37$exports = {};
 
  $parcel$export(
    $5b739339de321a37$exports,
    "Options",
    () => $5b739339de321a37$export$c019608e5b5bb4cb,
  );
 
  class $5b739339de321a37$export$c019608e5b5bb4cb {
    constructor({
      preferredAssessmentMode:
        preferredAssessmentMode = $5b739339de321a37$export$c019608e5b5bb4cb
          .AssessmentMode.STATIC,
      validation: validation = true,
      palette: palette = $eb5be8077a65b10b$export$e6952b12ade67489,
      loggingPrefix: loggingPrefix = "Capo: ",
    } = {}) {
      this.setPreferredAssessmentMode(preferredAssessmentMode);
      this.setValidation(validation);
      this.setPalette(palette);
      this.setLoggingPrefix(loggingPrefix);
    }
    static get AssessmentMode() {
      return {
        STATIC: "static",
        DYNAMIC: "dynamic",
      };
    }
    static get Palettes() {
      return $eb5be8077a65b10b$export$9a82c28ef488e918;
    }
    prefersStaticAssessment() {
      return (
        this.preferredAssessmentMode ===
        $5b739339de321a37$export$c019608e5b5bb4cb.AssessmentMode.STATIC
      );
    }
    prefersDynamicAssessment() {
      return (
        this.preferredAssessmentMode ===
        $5b739339de321a37$export$c019608e5b5bb4cb.AssessmentMode.DYNAMIC
      );
    }
    isValidationEnabled() {
      return this.validation;
    }
    setPreferredAssessmentMode(preferredAssessmentMode) {
      if (!this.isValidAssessmentMode(preferredAssessmentMode))
        throw new Error(
          `Invalid option: preferred assessment mode, expected AssessmentMode.STATIC or AssessmentMode.DYNAMIC, got "${preferredAssessmentMode}".`,
        );
      this.preferredAssessmentMode = preferredAssessmentMode;
    }
    setPreferredAssessmentModeToStatic(prefersStatic) {
      let mode =
        $5b739339de321a37$export$c019608e5b5bb4cb.AssessmentMode.STATIC;
      if (!prefersStatic)
        mode = $5b739339de321a37$export$c019608e5b5bb4cb.AssessmentMode.DYNAMIC;
      this.setPreferredAssessmentMode(mode);
    }
    setValidation(validation) {
      if (!this.isValidValidation(validation))
        throw new Error(
          `Invalid option: validation, expected boolean, got "${validation}".`,
        );
      this.validation = validation;
    }
    setPalette(palette) {
      if (!this.isValidPalette(palette))
        throw new Error(
          `Invalid option: palette, expected [${Object.keys(
            $eb5be8077a65b10b$export$9a82c28ef488e918,
          ).join("|")}] or an array of colors, got "${palette}".`,
        );
      if (typeof palette === "string") {
        this.palette = $eb5be8077a65b10b$export$9a82c28ef488e918[palette];
        return;
      }
      this.palette = palette;
    }
    setLoggingPrefix(loggingPrefix) {
      if (!this.isValidLoggingPrefix(loggingPrefix))
        throw new Error(
          `Invalid option: logging prefix, expected string, got "${loggingPrefix}".`,
        );
      this.loggingPrefix = loggingPrefix;
    }
    isValidAssessmentMode(assessmentMode) {
      return Object.values(
        $5b739339de321a37$export$c019608e5b5bb4cb.AssessmentMode,
      ).includes(assessmentMode);
    }
    isValidValidation(validation) {
      return typeof validation === "boolean";
    }
    isValidPalette(palette) {
      if (typeof palette === "string")
        return Object.keys($eb5be8077a65b10b$export$9a82c28ef488e918).includes(
          palette,
        );
      if (!Array.isArray(palette)) return false;
      return (
        palette.length === 11 &&
        palette.every((color) => typeof color === "string")
      );
    }
    isValidLoggingPrefix(loggingPrefix) {
      return typeof loggingPrefix === "string";
    }
    isPreferredPalette(palette) {
      return JSON.stringify(this.palette) == JSON.stringify(palette);
    }
    valueOf() {
      return {
        preferredAssessmentMode: this.preferredAssessmentMode,
        validation: this.validation,
        palette: this.palette,
        loggingPrefix: this.loggingPrefix,
      };
    }
  }
 
  var $9c3989fcb9437829$exports = {};
 
  $parcel$export(
    $9c3989fcb9437829$exports,
    "ElementWeights",
    () => $9c3989fcb9437829$export$881088883fcab450,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "ElementDetectors",
    () => $9c3989fcb9437829$export$6ade8bb3620eb74b,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isMeta",
    () => $9c3989fcb9437829$export$daeb0db0c224decd,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isTitle",
    () => $9c3989fcb9437829$export$e55aad21605f020a,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isPreconnect",
    () => $9c3989fcb9437829$export$a3316bd0a640eb8b,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isAsyncScript",
    () => $9c3989fcb9437829$export$20e2051ffd813ee3,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isImportStyles",
    () => $9c3989fcb9437829$export$be443fc6335656f0,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isSyncScript",
    () => $9c3989fcb9437829$export$65983fc0a5543400,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isSyncStyles",
    () => $9c3989fcb9437829$export$9d6cdbffb13bee21,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isPreload",
    () => $9c3989fcb9437829$export$226ad5ba23be83f0,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isDeferScript",
    () => $9c3989fcb9437829$export$3d269f86e8bd1d24,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isPrefetchPrerender",
    () => $9c3989fcb9437829$export$4d2ed086e1fec499,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "META_HTTP_EQUIV_KEYWORDS",
    () => $9c3989fcb9437829$export$b7417cf4a2235f73,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isOriginTrial",
    () => $9c3989fcb9437829$export$38a04d482ec50f88,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "isMetaCSP",
    () => $9c3989fcb9437829$export$14b1a2f64a600585,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "getWeight",
    () => $9c3989fcb9437829$export$de32fe5d64aee40c,
  );
  $parcel$export(
    $9c3989fcb9437829$exports,
    "getHeadWeights",
    () => $9c3989fcb9437829$export$5cc4a311ddbe699c,
  );
  const $9c3989fcb9437829$export$881088883fcab450 = {
    META: 10,
    TITLE: 9,
    PRECONNECT: 8,
    ASYNC_SCRIPT: 7,
    IMPORT_STYLES: 6,
    SYNC_SCRIPT: 5,
    SYNC_STYLES: 4,
    PRELOAD: 3,
    DEFER_SCRIPT: 2,
    PREFETCH_PRERENDER: 1,
    OTHER: 0,
  };
  const $9c3989fcb9437829$export$6ade8bb3620eb74b = {
    META: $9c3989fcb9437829$export$daeb0db0c224decd,
    TITLE: $9c3989fcb9437829$export$e55aad21605f020a,
    PRECONNECT: $9c3989fcb9437829$export$a3316bd0a640eb8b,
    ASYNC_SCRIPT: $9c3989fcb9437829$export$20e2051ffd813ee3,
    IMPORT_STYLES: $9c3989fcb9437829$export$be443fc6335656f0,
    SYNC_SCRIPT: $9c3989fcb9437829$export$65983fc0a5543400,
    SYNC_STYLES: $9c3989fcb9437829$export$9d6cdbffb13bee21,
    PRELOAD: $9c3989fcb9437829$export$226ad5ba23be83f0,
    DEFER_SCRIPT: $9c3989fcb9437829$export$3d269f86e8bd1d24,
    PREFETCH_PRERENDER: $9c3989fcb9437829$export$4d2ed086e1fec499,
  };
  const $9c3989fcb9437829$export$b7417cf4a2235f73 = [
    "accept-ch",
    "content-security-policy",
    "content-type",
    "default-style",
    "delegate-ch",
    "origin-trial",
    "x-dns-prefetch-control",
  ];
  function $9c3989fcb9437829$export$daeb0db0c224decd(element) {
    const httpEquivSelector = $9c3989fcb9437829$export$b7417cf4a2235f73
      .map((keyword) => {
        return `[http-equiv="${keyword}" i]`;
      })
      .join(", ");
    return element.matches(
      `meta:is([charset], ${httpEquivSelector}, [name=viewport]), base`,
    );
  }
  function $9c3989fcb9437829$export$e55aad21605f020a(element) {
    return element.matches("title");
  }
  function $9c3989fcb9437829$export$a3316bd0a640eb8b(element) {
    return element.matches("link[rel=preconnect]");
  }
  function $9c3989fcb9437829$export$20e2051ffd813ee3(element) {
    return element.matches("script[src][async]");
  }
  function $9c3989fcb9437829$export$be443fc6335656f0(element) {
    const importRe = /@import/;
    if (element.matches("style")) return importRe.test(element.textContent);
    /* TODO: Support external stylesheets.
  if (element.matches('link[rel=stylesheet][href]')) {
    let response = fetch(element.href);
    response = response.text();
    return importRe.test(response);
  } */ return false;
  }
  function $9c3989fcb9437829$export$65983fc0a5543400(element) {
    return element.matches(
      "script:not([src][defer],[src][type=module],[src][async],[type*=json])",
    );
  }
  function $9c3989fcb9437829$export$9d6cdbffb13bee21(element) {
    return element.matches("link[rel=stylesheet],style");
  }
  function $9c3989fcb9437829$export$226ad5ba23be83f0(element) {
    return element.matches("link:is([rel=preload], [rel=modulepreload])");
  }
  function $9c3989fcb9437829$export$3d269f86e8bd1d24(element) {
    return element.matches(
      "script[src][defer], script:not([src][async])[src][type=module]",
    );
  }
  function $9c3989fcb9437829$export$4d2ed086e1fec499(element) {
    return element.matches(
      "link:is([rel=prefetch], [rel=dns-prefetch], [rel=prerender])",
    );
  }
  function $9c3989fcb9437829$export$38a04d482ec50f88(element) {
    return element.matches('meta[http-equiv="origin-trial"i]');
  }
  function $9c3989fcb9437829$export$14b1a2f64a600585(element) {
    return element.matches(
      'meta[http-equiv="Content-Security-Policy" i], meta[http-equiv="Content-Security-Policy-Report-Only" i]',
    );
  }
  function $9c3989fcb9437829$export$de32fe5d64aee40c(element) {
    for (let [id, detector] of Object.entries(
      $9c3989fcb9437829$export$6ade8bb3620eb74b,
    )) {
      if (detector(element))
        return $9c3989fcb9437829$export$881088883fcab450[id];
    }
    return $9c3989fcb9437829$export$881088883fcab450.OTHER;
  }
  function $9c3989fcb9437829$export$5cc4a311ddbe699c(head) {
    const headChildren = Array.from(head.children);
    return headChildren.map((element) => {
      return {
        element: element,
        weight: $9c3989fcb9437829$export$de32fe5d64aee40c(element),
      };
    });
  }
 
  var $580f7ed6bc170ae8$exports = {};
 
  $parcel$export(
    $580f7ed6bc170ae8$exports,
    "VALID_HEAD_ELEMENTS",
    () => $580f7ed6bc170ae8$export$79e124b7caef7aa9,
  );
  $parcel$export(
    $580f7ed6bc170ae8$exports,
    "PRELOAD_SELECTOR",
    () => $580f7ed6bc170ae8$export$5540ac2a18901364,
  );
  $parcel$export(
    $580f7ed6bc170ae8$exports,
    "isValidElement",
    () => $580f7ed6bc170ae8$export$a8257692ac88316c,
  );
  $parcel$export(
    $580f7ed6bc170ae8$exports,
    "hasValidationWarning",
    () => $580f7ed6bc170ae8$export$eeefd08c3a6f8db7,
  );
  $parcel$export(
    $580f7ed6bc170ae8$exports,
    "getValidationWarnings",
    () => $580f7ed6bc170ae8$export$b01ab94d0cd042a0,
  );
  $parcel$export(
    $580f7ed6bc170ae8$exports,
    "getCustomValidations",
    () => $580f7ed6bc170ae8$export$6c93e2175c028eeb,
  );
 
  const $580f7ed6bc170ae8$export$79e124b7caef7aa9 = new Set([
    "base",
    "link",
    "meta",
    "noscript",
    "script",
    "style",
    "template",
    "title",
  ]);
  const $580f7ed6bc170ae8$export$5540ac2a18901364 =
    'link:is([rel="preload" i], [rel="modulepreload" i])';
  function $580f7ed6bc170ae8$export$a8257692ac88316c(element) {
    return $580f7ed6bc170ae8$export$79e124b7caef7aa9.has(
      element.tagName.toLowerCase(),
    );
  }
  function $580f7ed6bc170ae8$export$eeefd08c3a6f8db7(element) {
    // Element itself is not valid.
    if (!$580f7ed6bc170ae8$export$a8257692ac88316c(element)) return true;
    // Children are not valid.
    if (
      element.matches(
        `:has(:not(${Array.from($580f7ed6bc170ae8$export$79e124b7caef7aa9).join(
          ", ",
        )}))`,
      )
    )
      return true;
    // <title> is not the first of its type.
    if (element.matches("title:is(:nth-of-type(n+2))")) return true;
    // <base> is not the first of its type.
    if (element.matches("base:has(~ base), base ~ base")) return true;
    // CSP meta tag anywhere.
    if ((0, $9c3989fcb9437829$export$14b1a2f64a600585)(element)) return true;
    // Origin trial expired or cross-origin.
    if ($580f7ed6bc170ae8$var$isInvalidOriginTrial(element)) return true;
    // Preload is unnecessary.
    if ($580f7ed6bc170ae8$var$isUnnecessaryPreload(element)) return true;
    return false;
  }
  function $580f7ed6bc170ae8$export$b01ab94d0cd042a0(head) {
    const validationWarnings = [];
    const titleElements = Array.from(head.querySelectorAll("title"));
    const titleElementCount = titleElements.length;
    if (titleElementCount != 1)
      validationWarnings.push({
        warning: `Expected exactly 1 <title> element, found ${titleElementCount}`,
        elements: titleElements,
      });
    const baseElements = Array.from(head.querySelectorAll("base"));
    const baseElementCount = baseElements.length;
    if (baseElementCount > 1)
      validationWarnings.push({
        warning: `Expected at most 1 <base> element, found ${baseElementCount}`,
        elements: baseElements,
      });
    const metaCSP = head.querySelector(
      'meta[http-equiv="Content-Security-Policy" i]',
    );
    if (metaCSP)
      validationWarnings.push({
        warning:
          "CSP meta tags disable the preload scanner due to a bug in Chrome. Use the CSP header instead. Learn more: https://crbug.com/1458493",
        element: metaCSP,
      });
    head.querySelectorAll("*").forEach((element) => {
      if ($580f7ed6bc170ae8$export$a8257692ac88316c(element)) return;
      let root = element;
      while (root.parentElement != head) root = root.parentElement;
      validationWarnings.push({
        warning: `${element.tagName} elements are not allowed in the <head>`,
        element: root,
      });
    });
    const originTrials = Array.from(
      head.querySelectorAll('meta[http-equiv="Origin-Trial" i]'),
    );
    originTrials.forEach((element) => {
      const metadata = $580f7ed6bc170ae8$var$validateOriginTrial(element);
      if (metadata.warnings.length == 0) return;
      validationWarnings.push({
        warning: `Invalid origin trial token: ${metadata.warnings.join(", ")}`,
        elements: [element],
        element: metadata.payload,
      });
    });
    return validationWarnings;
  }
  function $580f7ed6bc170ae8$export$6c93e2175c028eeb(element) {
    if ((0, $9c3989fcb9437829$export$38a04d482ec50f88)(element))
      return $580f7ed6bc170ae8$var$validateOriginTrial(element);
    if ((0, $9c3989fcb9437829$export$14b1a2f64a600585)(element))
      return $580f7ed6bc170ae8$var$validateCSP(element);
    if ($580f7ed6bc170ae8$var$isUnnecessaryPreload(element))
      return $580f7ed6bc170ae8$var$validateUnnecessaryPreload(element);
    return {};
  }
  function $580f7ed6bc170ae8$var$validateCSP(element) {
    const warnings = [];
    if (
      element.matches(
        'meta[http-equiv="Content-Security-Policy-Report-Only" i]',
      )
    )
      //https://w3c.github.io/webappsec-csp/#meta-element
      warnings.push("CSP Report-Only is forbidden in meta tags");
    else if (element.matches('meta[http-equiv="Content-Security-Policy" i]'))
      warnings.push("meta CSP discouraged. See https://crbug.com/1458493.");
    return {
      warnings: warnings,
    };
  }
  function $580f7ed6bc170ae8$var$isInvalidOriginTrial(element) {
    if (!(0, $9c3989fcb9437829$export$38a04d482ec50f88)(element)) return false;
    const { warnings: warnings } =
      $580f7ed6bc170ae8$var$validateOriginTrial(element);
    return warnings.length > 0;
  }
  function $580f7ed6bc170ae8$var$validateOriginTrial(element) {
    const metadata = {
      payload: null,
      warnings: [],
    };
    const token = element.getAttribute("content");
    try {
      metadata.payload = $580f7ed6bc170ae8$var$decodeOriginTrialToken(token);
      if (metadata.payload.expiry < new Date())
        metadata.warnings.push("expired");
      if (
        !metadata.payload.isThirdParty &&
        !$580f7ed6bc170ae8$var$isSameOrigin(
          metadata.payload.origin,
          document.location.href,
        )
      )
        metadata.warnings.push("invalid origin");
    } catch {
      metadata.warnings.push("invalid token");
    }
    return metadata;
  }
  // Adapted from https://glitch.com/~ot-decode.
  function $580f7ed6bc170ae8$var$decodeOriginTrialToken(token) {
    const buffer = new Uint8Array([...atob(token)].map((a) => a.charCodeAt(0)));
    const view = new DataView(buffer.buffer);
    const length = view.getUint32(65, false);
    const payload = JSON.parse(
      new TextDecoder().decode(buffer.slice(69, 69 + length)),
    );
    payload.expiry = new Date(payload.expiry * 1000);
    return payload;
  }
  function $580f7ed6bc170ae8$var$isSameOrigin(a, b) {
    return new URL(a).origin === new URL(b).origin;
  }
  function $580f7ed6bc170ae8$var$isUnnecessaryPreload(element) {
    if (!element.matches($580f7ed6bc170ae8$export$5540ac2a18901364))
      return false;
    const href = element.getAttribute("href");
    if (!href) return false;
    const preloadedUrl = $580f7ed6bc170ae8$var$absolutifyUrl(href);
    return (
      $580f7ed6bc170ae8$var$findElementWithSource(
        element.parentElement,
        preloadedUrl,
      ) != null
    );
  }
  function $580f7ed6bc170ae8$var$findElementWithSource(root, sourceUrl) {
    const linksAndScripts = Array.from(
      root.querySelectorAll(
        `link:not(${$580f7ed6bc170ae8$export$5540ac2a18901364}), script`,
      ),
    );
    return linksAndScripts.find((e) => {
      const src = e.getAttribute("href") || e.getAttribute("src");
      if (!src) return false;
      return sourceUrl == $580f7ed6bc170ae8$var$absolutifyUrl(src);
    });
  }
  function $580f7ed6bc170ae8$var$absolutifyUrl(href) {
    return new URL(href, document.baseURI).href;
  }
  function $580f7ed6bc170ae8$var$validateUnnecessaryPreload(element) {
    const href = element.getAttribute("href");
    const preloadedUrl = $580f7ed6bc170ae8$var$absolutifyUrl(href);
    const preloadedElement = $580f7ed6bc170ae8$var$findElementWithSource(
      element.parentElement,
      preloadedUrl,
    );
    if (!preloadedElement)
      throw new Error("Expected an invalid preload, but none found.");
    return {
      warnings: [
        `This preload has little to no effect. ${href} is already discoverable by another ${preloadedElement.tagName} element.`,
      ],
    };
  }
 
  function $0eec6c831ab0f90a$export$8679af897d1c058e(io, validation) {
    const validationWarnings = validation.getValidationWarnings(io.getHead());
    io.logValidationWarnings(validationWarnings);
  }
  function $0eec6c831ab0f90a$export$b65597cffe09aebc(io, validation, rules) {
    const headElement = io.getHead();
    const headWeights = rules
      .getHeadWeights(headElement)
      .map(({ element: element, weight: weight }) => {
        return {
          weight: weight,
          element: io.getLoggableElement(element),
          isValid: !validation.hasValidationWarning(element),
          customValidations: validation.getCustomValidations(element),
        };
      });
    io.visualizeHead("Actual", headElement, headWeights);
    const sortedWeights = Array.from(headWeights).sort(
      (a, b) => b.weight - a.weight,
    );
    const sortedHead = document.createElement("head");
    sortedWeights.forEach(({ element: element }) => {
      sortedHead.appendChild(element.cloneNode(true));
    });
    io.visualizeHead("Sorted", sortedHead, sortedWeights);
    return headWeights;
  }
 
  const $fd3091053c5dfffc$var$CAPO_GLOBAL = "__CAPO__";
  async function $fd3091053c5dfffc$var$run() {
    const options = new $5b739339de321a37$exports.Options(
      self[$fd3091053c5dfffc$var$CAPO_GLOBAL],
    );
    const io = new $d410929ede0a2ee4$exports.IO(document, options);
    await io.init();
    $0eec6c831ab0f90a$export$8679af897d1c058e(io, $580f7ed6bc170ae8$exports);
    $0eec6c831ab0f90a$export$b65597cffe09aebc(
      io,
      $580f7ed6bc170ae8$exports,
      $9c3989fcb9437829$exports,
    );
  }
  $fd3091053c5dfffc$var$run();
})();
```
Source: [capo.js](https://github.com/rviscomi/capo.js)

***

## Troubleshooting bookmarklets

If a bookmarklet is not working properly, there are a few things you can check:

- Make sure that the bookmarklet code is correct.
- You can test the code by opening the JavaScript console in your web browser and pasting the code into it. If the code executes without errors, then the problem is likely elsewhere.
- Make sure that the bookmarklet has the necessary permissions.
