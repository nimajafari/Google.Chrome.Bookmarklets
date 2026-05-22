javascript:(function() {
    function getCookies() {
        var cookies = document.cookie.split(';');
        var cookieInfo = cookies.map(function(cookie) {
            var [name, value] = cookie.trim().split('=');
            return name + ': ' + decodeURIComponent(value);
        }).join('\n');
        return cookieInfo || 'No cookies found.';
    }
    function showCookies() {
        var cookieInfo = getCookies();
        alert('Cookies:\n' + cookieInfo);
    }
    showCookies();
})();
