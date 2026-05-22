javascript:(function() {
    const linkElements = document.querySelectorAll(`link[rel="preload"]`);
    const arrayLinks = Array.from(linkElements);
    const preloadedFonts = arrayLinks.filter((link) => link.as === "font");
    console.log(
        "-> Fonts Preloaded via Resources Hints",
        "font-weight: bold; font-size: 1.2em; color: lightcoral",
    );
    preloadedFonts.forEach((font) => console.log(`▸ ${font.href}`));
    console.log("");
    const loadedFonts = [
        ...new Set(
            Array.from(document.fonts.values())
                .map((font) => font)
                .filter((font) => font.status === "loaded")
                .map((font) => `${font.family} - ${font.weight} - ${font.style}`),
        ),
    ];
    console.log(
        "-> Fonts and Weights Loaded in the Document",
        "font-weight: bold; font-size: 1.2em; color: lightcoral",
    );
    loadedFonts.forEach((font) => console.log(`▸ ${font}`));
    console.log("");
    const childrenSlector =
        "body * > *:not(script):not(style):not(link):not(source)";
    const aboveFoldElements = Array.from(
        document.querySelectorAll(childrenSlector),
    ).filter((elm) => {
        const rect = elm.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    });
    const usedFonts = Array.from(
        new Set(
            [...aboveFoldElements].map(
                (e) =>
                    `${getComputedStyle(e).fontFamily} | ${
                        getComputedStyle(e).fontWeight
                    } | ${getComputedStyle(e).fontStyle}`,
            ),
        ),
    );
    console.log(
        "-> Fonts and Weights Used Above the Fold",
        "font-weight: bold; font-size: 1.2em; color: lightcoral",
    );
    usedFonts.forEach((font) => console.log(`▸ ${font}`));
})();
