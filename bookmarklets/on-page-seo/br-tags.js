javascript:(function() {
    var brTags = document.querySelectorAll('br');
    if (brTags.length > 0) {
        brTags.forEach(function(brTag) {
            var previousText = getSurroundingText(brTag, 20, 'before');
            var followingText = getSurroundingText(brTag, 20, 'after');
            highlightText(brTag, previousText, followingText);
        });
        alert('Found and highlighted text around <br> tags.');
    } else {
        alert('No <br> tags found on this page.');
    }
    function getSurroundingText(element, characters, direction) {
        var surroundingText = '';
        var currentNode = element[direction === 'before' ? 'previousSibling' : 'nextSibling'];
        while (currentNode && characters > 0) {
            if (currentNode.nodeType === 3) {
                var text = currentNode.textContent;
                surroundingText = (direction === 'before' ? text.slice(-characters) : text.slice(0, characters)) + surroundingText;
                characters -= text.length;
            } else if (currentNode.nodeType === 1) {
                surroundingText = currentNode.textContent + surroundingText;
            }
            currentNode = element[direction === 'before' ? 'previousSibling' : 'nextSibling'];
        }
        return surroundingText;
    }
    function highlightText(element, beforeText, afterText) {
        var parent = element.parentNode;
        var beforeSpan = document.createElement('span');
        beforeSpan.textContent = beforeText;
        beforeSpan.style.backgroundColor = 'red';
        var brSpan = document.createElement('span');
        brSpan.textContent = '<br>';
        brSpan.style.backgroundColor = 'lightgreen';
        var afterSpan = document.createElement('span');
        afterSpan.textContent = afterText;
        afterSpan.style.backgroundColor = 'orange';
        parent.insertBefore(beforeSpan, element);
        parent.insertBefore(brSpan, element);
        parent.insertBefore(afterSpan, element);
        parent.removeChild(element);
    }
})();
