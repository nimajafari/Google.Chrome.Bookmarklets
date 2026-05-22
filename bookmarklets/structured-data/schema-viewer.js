javascript:(function() {
    var blocks = document.querySelectorAll('script[type="application/ld+json"]');
    if (!blocks.length) {
        alert('No JSON-LD structured data found on this page. 🤔');
        return;
    }
    var types = [];
    var pretty = [];
    blocks.forEach(function(b, i) {
        var raw = b.textContent.trim();
        try {
            var data = JSON.parse(raw);
            (function collect(node) {
                if (Array.isArray(node)) node.forEach(collect);
                else if (node && typeof node === 'object') {
                    if (node['@type']) types.push([].concat(node['@type']).join(', '));
                    Object.values(node).forEach(collect);
                }
            })(data);
            pretty.push('/* Block ' + (i + 1) + ' */\n' + JSON.stringify(data, null, 2));
        } catch (e) {
            pretty.push('/* Block ' + (i + 1) + ' — invalid JSON */\n' + raw);
        }
    });
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2147483647;display:flex;align-items:center;justify-content:center;';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#fff;color:#1c1b22;max-width:800px;width:90%;max-height:80vh;overflow:auto;border-radius:12px;padding:20px;font-family:monospace;text-align:left;direction:ltr;';
    var head = document.createElement('div');
    head.style.cssText = 'font-family:sans-serif;display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px;';
    var title = document.createElement('strong');
    title.textContent = blocks.length + ' JSON-LD block(s) — types: ' + (types.length ? Array.from(new Set(types)).join(', ') : 'none');
    var btns = document.createElement('div');
    var validate = document.createElement('button');
    validate.textContent = 'Open Rich Results Test';
    validate.style.cssText = 'cursor:pointer;margin-right:8px;padding:6px 10px;';
    validate.onclick = function() {
        window.open('https://search.google.com/test/rich-results?url=' + encodeURIComponent(window.location.href));
    };
    var close = document.createElement('button');
    close.textContent = 'Close';
    close.style.cssText = 'cursor:pointer;padding:6px 10px;';
    close.onclick = function() {
        overlay.remove();
    };
    btns.appendChild(validate);
    btns.appendChild(close);
    head.appendChild(title);
    head.appendChild(btns);
    var pre = document.createElement('pre');
    pre.style.cssText = 'white-space:pre-wrap;word-break:break-word;margin:0;';
    pre.textContent = pretty.join('\n\n');
    modal.appendChild(head);
    modal.appendChild(pre);
    overlay.appendChild(modal);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) overlay.remove();
    });
    document.body.appendChild(overlay);
})();
