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
