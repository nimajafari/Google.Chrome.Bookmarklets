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
