javascript:(function() {
    var selectedText = window.getSelection().toString();

    if (selectedText) {
        var element = window.getSelection().anchorNode.parentElement;

        var fontFamily = window.getComputedStyle(element).fontFamily;
        var fontSize = window.getComputedStyle(element).fontSize;
        var fontWeight = window.getComputedStyle(element).fontWeight;
        var color = window.getComputedStyle(element).color;
        var backgroundColor = window.getComputedStyle(element).backgroundColor;

        var contrastRatio = getContrastRatio(color, backgroundColor);

        alert(
            'Font Family: ' + fontFamily + '\n' +
            'Font Size: ' + fontSize + '\n' +
            'Font Weight: ' + fontWeight + '\n' +
            'Color: ' + color + '\n' +
            'Contrast Ratio: ' + contrastRatio
        );
    } else {
        alert('Please select some text.');
    }

    function getContrastRatio(color1, color2) {
        function getLuminance(color) {
            var rgb = color.match(/\d+/g);
            var r = rgb[0] / 255;
            var g = rgb[1] / 255;
            var b = rgb[2] / 255;
            r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
            g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
            b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }

        var luminance1 = getLuminance(color1) + 0.05;
        var luminance2 = getLuminance(color2) + 0.05;

        var contrastRatio = luminance1 > luminance2 ? luminance1 / luminance2 : luminance2 / luminance1;

        return contrastRatio.toFixed(2);
    }
})();
