javascript:(function() {
    var modalContainer = document.createElement('div');
    modalContainer.style.width = '1000px';
    modalContainer.style.position = 'fixed';
    modalContainer.style.top = '50%';
    modalContainer.style.left = '50%';
    modalContainer.style.transform = 'translate(-50%, -50%)';
    modalContainer.style.backgroundColor = '#fff';
    modalContainer.style.padding = '20px';
    modalContainer.style.border = '1px solid #ccc';
    modalContainer.style.zIndex = '9999';
    modalContainer.style.direction = 'ltr';
    modalContainer.style.textAlign = 'left';
    modalContainer.style.overflowY = 'auto';
    modalContainer.style.overflowX = 'auto';
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.style.float = 'right';
    closeButton.style.cursor = 'pointer';
    closeButton.style.padding = '5px 10px';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modalContainer);
    });
    modalContainer.appendChild(closeButton);
    var isGray = false;
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', window.location.href, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var headers = xhr.getAllResponseHeaders().split('\n');
            headers.forEach(function(header) {
                var headerLine = header.trim();
                var headerParagraph = document.createElement('p');
                headerParagraph.style.wordWrap = 'break-word';
                headerParagraph.style.marginBottom = '0px';
                headerParagraph.style.paddingBottom = '10px';
                headerParagraph.style.paddingTop = '10px';
                headerParagraph.style.lineHeight = '10px';
                headerParagraph.textContent = headerLine;
                if (isGray) {
                    headerParagraph.style.backgroundColor = '#f5f5f5';
                }
                isGray = !isGray;
                modalContainer.appendChild(headerParagraph);
            });
            document.body.appendChild(modalContainer);
        }
    };
    xhr.send();
})();
