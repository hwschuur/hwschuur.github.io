## 1. Copy and Modify Masthead

- [x] 1.1 Copy `_includes/masthead.html` from the remote Minimal Mistakes theme (v4.27.0) into the local `_includes/` directory
- [x] 1.2 Add a dark mode toggle button (with FontAwesome moon/sun icon) to the copied `_includes/masthead.html` in the nav area

## 2. Anti-FOUT Inline Script

- [x] 2.1 Add an inline `<script>` block to `_includes/head/custom.html` that reads `localStorage` (key: `theme`) and falls back to `prefers-color-scheme`, then sets `data-theme` on `<html>` synchronously before first render

## 3. Dark Mode JavaScript

- [x] 3.1 Create `assets/js/dark-mode.js` with a `toggleDarkMode()` function that flips `data-theme` on `<html>`, updates the toggle icon, and saves the preference to `localStorage`
- [x] 3.2 Reference `dark-mode.js` in `_includes/scripts.html` or `_config.yml` so it is loaded on every page

## 4. Dark Mode CSS Overrides

- [x] 4.1 Create `_sass/custom/_dark-override.scss` with color variable overrides scoped under `html[data-theme="dark"]` matching the values from `_sass/minimal-mistakes/skins/_dark.scss` (background, text, primary, border, code, footer, link, masthead colors)
- [x] 4.2 Import `_sass/custom/_dark-override.scss` into the main stylesheet entry point (e.g., `assets/css/main.scss` or equivalent custom file)

## 5. Toggle Button Styling

- [x] 5.1 Add CSS for the toggle button (no background, cursor pointer, icon sizing) in `_sass/custom/_dark-override.scss` or a separate `_sass/custom/_toggle.scss`

## 6. Verification

- [x] 6.1 Test locally with `bundle exec jekyll serve` — verify light mode loads correctly with dirt skin
- [x] 6.2 Verify clicking the toggle switches to dark mode with correct colors and icon change
- [x] 6.3 Verify preference is persisted: reload the page and confirm the previously selected theme is applied without flicker
- [x] 6.4 Verify OS dark mode preference is respected on first visit (clear localStorage and test with OS dark mode enabled)
- [x] 6.5 Verify the site is functional with JavaScript disabled (renders in light mode, no errors)
