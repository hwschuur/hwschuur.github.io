## Why

The site currently uses a fixed "dirt" skin with no support for dark mode. Users who prefer dark mode (either by system preference or personal choice) get no accommodation. Adding dark mode improves readability and matches modern user expectations.

## What Changes

- Add a dark mode toggle button in the masthead navigation
- Persist the user's dark/light preference in `localStorage`
- Automatically respect the OS-level `prefers-color-scheme: dark` media query on first visit
- Swap between the existing `dirt` skin (light) and `dark` skin using CSS class toggling on `<html>` or `<body>`
- Both skins are already available in `_sass/minimal-mistakes/skins/`, so no new skin files are needed

## Capabilities

### New Capabilities

- `dark-mode-toggle`: A toggle button in the site masthead that switches between light and dark mode, persists preference to localStorage, and respects OS dark mode preference on first visit

### Modified Capabilities

<!-- No existing spec-level requirements are changing -->

## Impact

- `_includes/masthead.html`: Add toggle button HTML
- `_includes/head/custom.html`: Add script to apply saved preference before page render (prevent flash)
- `assets/js/dark-mode.js` (new): Toggle logic, localStorage persistence, OS preference detection
- `_sass/minimal-mistakes/skins/_dirt.scss` and `_dark.scss`: Already exist, no changes needed
- `_config.yml`: No changes needed (skin will be controlled by JS class, not config)
- CSS custom properties or class-based overrides to load both skins and switch between them at runtime
