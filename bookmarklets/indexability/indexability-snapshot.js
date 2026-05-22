javascript:(function() {
    var metaRobots = (document.querySelector('meta[name="robots"]') || {}).content || '';
    var canonical = (document.querySelector('link[rel="canonical"]') || {}).href || '';
    var here = window.location.href.split('#')[0];
    var selfCanon = canonical
        ? (canonical.split('#')[0] === here ? 'self-referencing ✅' : 'points elsewhere → ' + canonical)
        : 'none';
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', window.location.href, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        var xRobots = xhr.getResponseHeader('X-Robots-Tag') || '';
        var noindex = /noindex/i.test(metaRobots) || /noindex/i.test(xRobots);
        var verdict = noindex
            ? '❌ NOT indexable (noindex directive found)'
            : '✅ Indexable (no noindex directive found)';
        if (!noindex && selfCanon.indexOf('points elsewhere') === 0) {
            verdict = '⚠️ Indexable, but the canonical points to another URL — this page may be consolidated into that one.';
        }
        alert('Indexability Snapshot\n\n' + verdict + '\n\n'
            + 'Meta robots: ' + (metaRobots || '(none)') + '\n'
            + 'X-Robots-Tag: ' + (xRobots || '(none)') + '\n'
            + 'Canonical: ' + selfCanon);
    };
    xhr.send();
})();
