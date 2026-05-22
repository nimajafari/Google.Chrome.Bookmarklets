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
