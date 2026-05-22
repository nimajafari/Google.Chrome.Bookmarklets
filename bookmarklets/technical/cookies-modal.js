javascript:(function() {
    function createCookieModal() {
        var modalContainer = document.createElement('div');
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '50%';
        modalContainer.style.left = '50%';
        modalContainer.style.transform = 'translate(-50%, -50%)';
        modalContainer.style.backgroundColor = 'white';
        modalContainer.style.padding = '20px';
        modalContainer.style.border = '1px solid #222';
        modalContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        modalContainer.style.zIndex = '9999';
        modalContainer.style.width = '1000px';
        modalContainer.style.direction = 'ltr';
        modalContainer.style.textAlign = 'left';
        modalContainer.style.wordWrap = 'break-word';
        var closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.padding = '5px 10px';
        closeButton.style.marginTop = '10px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.right = '10px';
        closeButton.style.top = '10px';
        closeButton.style.position = 'fixed';
        closeButton.addEventListener('click', function() {
            modalContainer.style.display = 'none';
        });
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookieLine = document.createElement('div');
            cookieLine.textContent = cookies[i].trim();
            modalContainer.appendChild(cookieLine);
        }
        modalContainer.appendChild(closeButton);
        document.body.appendChild(modalContainer);
    }
    createCookieModal();
})();
