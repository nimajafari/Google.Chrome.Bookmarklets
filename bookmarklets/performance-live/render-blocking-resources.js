javascript:(function() {
    var blocking = [];
    document.querySelectorAll('head link[rel="stylesheet"]').forEach(function(l) {
        var m = (l.media || '').toLowerCase();
        if (!l.disabled && (m === '' || m === 'all' || m === 'screen')) {
            blocking.push({ type: 'CSS', url: l.href });
        }
    });
    document.querySelectorAll('head script[src]').forEach(function(s) {
        if (!s.async && !s.defer && s.type !== 'module') {
            blocking.push({ type: 'JS', url: s.src });
        }
    });
    if (!blocking.length) {
        alert('No obvious render-blocking resources found in <head>. 🟢');
        return;
    }
    console.group('%cRender-blocking resources (' + blocking.length + ')', 'font-weight:bold;color:#c0392b;');
    console.table(blocking);
    console.groupEnd();
    alert(blocking.length + ' render-blocking resource(s) in <head>.\nSee the Console (⌘/Ctrl + Shift + J) for the full list.');
})();
