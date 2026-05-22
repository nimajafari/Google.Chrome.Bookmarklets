javascript:(function() {
    function meta(sel) {
        var m = document.querySelector(sel);
        return m ? (m.getAttribute('content') || '').trim() : '';
    }
    function esc(s) {
        return (s || '').replace(/[&<>"]/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }
    var og = {
        title: meta('meta[property="og:title"]') || document.title,
        desc: meta('meta[property="og:description"]') || meta('meta[name="description"]'),
        image: meta('meta[property="og:image"]'),
        url: meta('meta[property="og:url"]') || window.location.href
    };
    var tw = {
        card: meta('meta[name="twitter:card"]'),
        title: meta('meta[name="twitter:title"]'),
        desc: meta('meta[name="twitter:description"]'),
        image: meta('meta[name="twitter:image"]')
    };
    var domain = (function() {
        try { return new URL(og.url).hostname.replace('www.', ''); }
        catch (e) { return window.location.hostname; }
    })();
    function card(label, title, desc, image, warn) {
        var w = warn ? '<div style="color:#c0392b;font-size:12px;margin-top:6px;">' + esc(warn) + '</div>' : '';
        var img = image
            ? '<div style="background:#eee;height:220px;background-image:url(\'' + image.replace(/'/g, '%27') + '\');background-size:cover;background-position:center;"></div>'
            : '<div style="background:#eee;height:120px;display:flex;align-items:center;justify-content:center;color:#999;font-size:13px;">No image</div>';
        return '<div style="border:1px solid #ddd;border-radius:10px;overflow:hidden;margin-bottom:16px;">'
            + '<div style="font-weight:600;padding:8px 12px;background:#f5f5f7;border-bottom:1px solid #eee;">' + esc(label) + '</div>'
            + img
            + '<div style="padding:12px;">'
            + '<div style="color:#777;font-size:12px;text-transform:uppercase;">' + esc(domain) + '</div>'
            + '<div style="font-weight:600;margin:2px 0;">' + esc(title || '(no title)') + '</div>'
            + '<div style="color:#555;font-size:13px;">' + esc(desc || '(no description)') + '</div>' + w
            + '</div></div>';
    }
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:sans-serif;';
    var modal = document.createElement('div');
    modal.style.cssText = 'background:#fff;color:#1c1b22;max-width:560px;width:92%;max-height:85vh;overflow:auto;border-radius:12px;padding:20px;text-align:left;direction:ltr;';
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;"><strong>Social Preview</strong><button id="__sp_close" style="cursor:pointer;padding:6px 10px;">Close</button></div>';
    html += card('Open Graph (Facebook / LinkedIn)', og.title, og.desc, og.image, og.image ? '' : 'Missing og:image — many platforms will not show a card image.');
    html += card('X / Twitter', tw.title || og.title, tw.desc || og.desc, tw.image || og.image, tw.card ? '' : 'Missing twitter:card.');
    modal.innerHTML = html;
    overlay.appendChild(modal);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) overlay.remove();
    });
    document.body.appendChild(overlay);
    document.getElementById('__sp_close').onclick = function() {
        overlay.remove();
    };
})();
