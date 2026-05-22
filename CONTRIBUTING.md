# Contributing

Thanks for your interest in improving **SEO Bookmarklets for Google Chrome**! New tools, fixes, and documentation improvements are all welcome.

## Ways to contribute

- 🐛 **Report a bug** — open an issue describing the tool, the page you ran it on, and what happened.
- 💡 **Suggest a tool** — open an issue describing the SEO/performance check it performs and why it's useful.
- 🔧 **Submit a fix or new tool** — open a pull request following the guidelines below.

## Adding a new bookmarklet

Each tool lives as a single, readable file. To add one:

1. **Create the source file** under the right category folder in [`bookmarklets/`](bookmarklets/):
   - `google-tools/` — opens external Google tools
   - `on-page-seo/` — inspects on-page elements (titles, meta, headings, etc.)
   - `links/` — link analysis
   - `performance/` — resource hints, scripts, fonts, `<head>` order
   - `technical/` — headers, cookies, and other technical signals
   - `accessibility/` — typography and contrast

   Use a short, descriptive `kebab-case.js` filename.

2. **Write the code as a self-contained bookmarklet.** Start it with the `javascript:` prefix and wrap the logic in an IIFE:

   ```javascript
   javascript:(function() {
       // your tool here
   })();
   ```

3. **Register it in [`bookmarklets/manifest.json`](bookmarklets/manifest.json)** under the matching category, with a `name`, `file`, `description`, and an `output` value of one of: `new-tab`, `alert`, `console`, `overlay`, or `modal`. The install page is generated from this file.

4. **Document it in [`README.md`](README.md)** in the same category section, with a heading, a one-line description, a link to the source file, and the code block.

## Style guidelines

- **No dependencies and no build step.** Every tool must run as-is, pasted into a bookmark.
- Keep code **readable** — favour clarity over cleverness, since these double as teaching examples.
- Prefer **2-space indentation** for new files.
- Avoid destructive actions; tools should inspect or open things, not modify or submit data.
- Test in the browser Console (**⌘/Ctrl + Shift + J**) before submitting.

## Pull request checklist

- [ ] The tool runs without errors on at least one real page.
- [ ] A source file exists under the correct `bookmarklets/<category>/` folder.
- [ ] The tool is registered in `manifest.json`.
- [ ] The tool is documented in `README.md`.
- [ ] Any third-party code includes attribution to its original source.

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE). All participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).
