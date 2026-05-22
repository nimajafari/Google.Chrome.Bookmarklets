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
