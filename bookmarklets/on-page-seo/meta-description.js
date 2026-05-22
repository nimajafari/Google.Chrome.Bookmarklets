javascript:(function() {
    var metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
        var metaDescription = metaDescriptionTag.content;
        alert('Meta Description:\n' + metaDescription);
    } else {
        alert('No meta description found on this page.');
    }
})();
