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
