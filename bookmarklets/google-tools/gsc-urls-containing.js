javascript: (function() {
    window.open(`https://search.google.com/search-console/performance/search-analytics?resource_id=${encodeURIComponent(window.location.origin)}&page=*${encodeURIComponent(window.location.href)}`)
})();
