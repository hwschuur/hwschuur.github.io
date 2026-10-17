## Context

The site is a Jekyll static site using the Minimal Mistakes theme (v4.27.0, loaded as a remote theme). The theme ships with multiple pre-built SCSS skins, including `dirt` (currently active, light mode) and `dark`. Both skins are already compiled into the CSS output — the active skin is selected at build time via `minimal_mistakes_skin` in `_config.yml`.

Since the site is static, runtime skin-switching cannot rely on server-side logic. The solution must be entirely client-side: inject the dark skin's CSS variables alongside the default, and toggle a class on `<html>` to activate them.

## Goals / Non-Goals

**Goals:**
- Toggle between light (dirt) and dark appearance at runtime without a page reload
- Persist user preference across sessions via `localStorage`
- Respect OS `prefers-color-scheme: dark` on first visit (before any user choice)
- Avoid flash of wrong theme (FOUT) on page load
- Minimal footprint — no external libraries

**Non-Goals:**
- Supporting more than two themes (light and dark only)
- Changing the theme build system or replacing the SCSS skin mechanism
- Auto-switching on OS preference changes after the user has made an explicit choice

## Decisions

### 1. CSS class toggle on `<html>` rather than swapping `<link>` stylesheets

**Decision**: Add dark-mode color overrides as a `[data-theme="dark"]` CSS block in a custom stylesheet. Toggling the `data-theme` attribute on `<html>` activates dark mode.

**Rationale**: Swapping `<link>` tags causes a flash and a second network request. A class/attribute toggle on an already-loaded stylesheet is instant and FOUT-free when the script runs in `<head>`.

**Alternative considered**: Changing `minimal_mistakes_skin` per-page via front matter — this would require a full page reload and cannot be user-toggled at runtime.

### 2. Inline script in `<head>` to prevent FOUT

**Decision**: Place a small inline `<script>` in `_includes/head/custom.html` that reads `localStorage` (and falls back to `prefers-color-scheme`) and sets `data-theme` on `<html>` synchronously before the browser renders anything.

**Rationale**: Async or deferred scripts run after layout/paint, causing the wrong theme to flash. An inline script in `<head>` blocks rendering briefly but eliminates FOUT entirely.

### 3. CSS variable overrides instead of a full compiled dark skin

**Decision**: Keep `minimal_mistakes_skin: dirt` in `_config.yml` (the compiled light skin). Add a custom `_sass/custom/_dark-override.scss` (included via `assets/css/main.scss`) that overrides color variables when `[data-theme="dark"]` is set on `<html>`.

**Rationale**: The Minimal Mistakes remote theme compiles a single skin per build. We cannot inject a second skin at build time without forking the theme. CSS custom properties (or SCSS-compiled overrides with high specificity) achieve the same visual result without forking.

**Alternative considered**: Forking the theme to output two skin stylesheets — too much maintenance overhead.

### 4. Toggle button in masthead

**Decision**: Add a button to `_includes/masthead.html` (in the nav area) with a sun/moon icon that calls `toggleDarkMode()`.

**Rationale**: The masthead is persistent across all pages and the most conventional location for a theme toggle.

## Risks / Trade-offs

- **Remote theme overrides**: `_includes/masthead.html` must be copied locally to modify. Any upstream masthead changes in future theme versions will not be picked up automatically → Mitigation: Track the theme version (`4.27.0`) and review the file on upgrades.
- **CSS specificity**: Dark override rules must outcompete the skin's compiled CSS → Mitigation: Scope all overrides under `[data-theme="dark"]` with sufficient specificity; test visually.
- **localStorage unavailable** (private browsing, CSP): Script falls back to OS preference → acceptable degradation.
- **No JS**: Toggle button does not appear; site remains in light mode → acceptable, no broken layout.

## Migration Plan

1. Copy `_includes/masthead.html` from the remote theme into the local `_includes/` directory (so it can be modified).
2. Add toggle button HTML to the copied masthead.
3. Create `assets/js/dark-mode.js` with toggle, persistence, and OS-preference logic.
4. Create `_sass/custom/_dark-override.scss` with color variable overrides under `[data-theme="dark"]`.
5. Import the new SCSS file in `assets/css/main.scss` (or equivalent custom entry point).
6. Add the inline anti-FOUT script to `_includes/head/custom.html`.
7. Test locally with `bundle exec jekyll serve`.

**Rollback**: Remove the added files and revert `_includes/masthead.html` and `_includes/head/custom.html`. No database or config changes to undo.

## Open Questions

- Which icon set is available in the theme for sun/moon icons? (FontAwesome is included — `fa-sun` / `fa-moon` are available.)
- Should the toggle also appear in the mobile nav menu, or only the desktop masthead?
