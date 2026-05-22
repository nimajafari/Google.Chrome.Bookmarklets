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
