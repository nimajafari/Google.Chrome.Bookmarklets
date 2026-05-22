javascript: (function() {
    let domain = window.location.hostname.replace('www.', '');
    let searchQuery = encodeURIComponent(`site:${domain}`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
})();
