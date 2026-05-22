javascript:(function() {
    if (window.__cwvOverlay) {
        window.__cwvOverlay.remove();
        window.__cwvOverlay = null;
        return;
    }
    var box = document.createElement('div');
    window.__cwvOverlay = box;
    box.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:2147483647;background:#1c1b22;color:#fff;font:13px/1.4 monospace;padding:12px 14px;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.4);min-width:190px;';
    var title = document.createElement('div');
    title.textContent = 'Core Web Vitals (live)';
    title.style.cssText = 'font-weight:bold;margin-bottom:6px;';
    box.appendChild(title);
    function row(label) {
        var d = document.createElement('div');
        d.textContent = label + ': measuring…';
        box.appendChild(d);
        return d;
    }
    var lcpEl = row('LCP'), clsEl = row('CLS'), inpEl = row('INP');
    var close = document.createElement('div');
    close.textContent = '✕ click to close';
    close.style.cssText = 'margin-top:8px;cursor:pointer;opacity:.6;font-size:11px;';
    close.onclick = function() {
        box.remove();
        window.__cwvOverlay = null;
    };
    box.appendChild(close);
    document.body.appendChild(box);
    function rate(v, good, poor) {
        return v <= good ? '🟢' : (v <= poor ? '🟡' : '🔴');
    }
    try {
        new PerformanceObserver(function(list) {
            var es = list.getEntries();
            var last = es[es.length - 1];
            var v = Math.round(last.renderTime || last.loadTime || last.startTime);
            lcpEl.textContent = 'LCP: ' + v + ' ms ' + rate(v, 2500, 4000);
        }).observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
        lcpEl.textContent = 'LCP: unsupported';
    }
    var cls = 0;
    try {
        new PerformanceObserver(function(list) {
            list.getEntries().forEach(function(e) {
                if (!e.hadRecentInput) cls += e.value;
            });
            clsEl.textContent = 'CLS: ' + cls.toFixed(3) + ' ' + rate(cls, 0.1, 0.25);
        }).observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
        clsEl.textContent = 'CLS: unsupported';
    }
    var maxInp = 0;
    try {
        new PerformanceObserver(function(list) {
            list.getEntries().forEach(function(e) {
                if (e.duration > maxInp) {
                    maxInp = e.duration;
                    inpEl.textContent = 'INP: ' + Math.round(maxInp) + ' ms ' + rate(maxInp, 200, 500);
                }
            });
        }).observe({ type: 'event', durationThreshold: 16, buffered: true });
        inpEl.textContent = 'INP: interact with the page…';
    } catch (e) {
        inpEl.textContent = 'INP: unsupported';
    }
})();
