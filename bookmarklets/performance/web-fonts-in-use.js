javascript:(function() {
    var allElements = document.querySelectorAll('*');
    var webFonts = new Set();
    allElements.forEach(function(element) {
        var computedStyle = window.getComputedStyle(element);
        var fontFamily = computedStyle.fontFamily;
        fontFamily = fontFamily.replace(/['"]/g, '');
        if (!(/^(serif|sans-serif|monospace)$/i.test(fontFamily))) {
            webFonts.add(fontFamily.trim());
        }
    });
    var webFontsCount = webFonts.size;
    var webFontsList = Array.from(webFonts).join('\n');
    alert('Number of Web Fonts: ' + webFontsCount + '\n\nWeb Font Names:\n' + webFontsList);
})();
