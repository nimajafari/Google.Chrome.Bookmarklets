javascript:(function() {
    const scripts = document.querySelectorAll("script[src]");
    const scriptsLoading = [...scripts].map((obj) => {
        return {
            src: obj.src,
            async: obj.async,
            defer: obj.defer,
            module: obj.type === 'module',
            "render blocking": obj.async || obj.defer || obj.type === 'module' ? "" : "🟥",
        };
    });
    console.table(scriptsLoading);
})();
