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
