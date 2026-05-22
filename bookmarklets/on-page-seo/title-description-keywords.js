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
