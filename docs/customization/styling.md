# Styling Guide

This guide covers how to customize the visual appearance of the site through SCSS.

## SCSS Architecture

The site uses SCSS (Sass) for styling, organized as follows:

```
_sass/
├── minimal-mistakes.scss     # Main import file
└── minimal-mistakes/
    ├── _variables.scss       # Variables (customized)
    ├── _base.scss            # Base styles
    ├── _page.scss            # Page layout
    ├── _archive.scss         # Archive listings
    ├── _sidebar.scss         # Sidebar
    ├── _navigation.scss      # Navigation
    ├── _masthead.scss        # Header
    ├── _footer.scss          # Footer
    ├── _buttons.scss         # Buttons
    ├── _notices.scss         # Alerts/notices
    ├── _forms.scss           # Form elements
    ├── _tables.scss          # Tables
    ├── _syntax.scss          # Code highlighting
    ├── _utilities.scss       # Utility classes
    ├── _print.scss           # Print styles
    ├── _reset.scss           # CSS reset
    ├── _mixins.scss          # SCSS mixins
    ├── _animations.scss      # Animations
    ├── skins/                # Color skins
    └── vendor/               # Third-party
```

## Variables

The `_variables.scss` file controls most styling options.

### Typography

```scss
// Font sizes
$doc-font-size: 16 !default;

// Font families
$serif: Georgia, Times, serif !default;
$sans-serif: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",
  "Helvetica Neue", "Lucida Grande", Arial, sans-serif !default;
$monospace: Monaco, Consolas, "Lucida Console", monospace !default;

$global-font-family: $sans-serif !default;
$header-font-family: $sans-serif !default;
$caption-font-family: $serif !default;

// Type scale
$type-size-1: 2.441em !default;  // ~39px
$type-size-2: 1.953em !default;  // ~31px
$type-size-3: 1.563em !default;  // ~25px
$type-size-4: 1.25em !default;   // ~20px
$type-size-5: 1em !default;      // ~16px
$type-size-6: 0.75em !default;   // ~12px
$type-size-7: 0.7em !default;    // ~11px
$type-size-8: 0.625em !default;  // ~10px

// Headline scale
$h-size-1: 1.563em !default;     // ~25px
$h-size-2: 1.25em !default;      // ~20px
$h-size-3: 1.125em !default;     // ~18px
$h-size-4: 1.0625em !default;    // ~17px
$h-size-5: 1.03125em !default;   // ~16.5px
$h-size-6: 1em !default;         // ~16px
```

### Colors

```scss
// Gray scale
$gray: #7a8288 !default;
$dark-gray: mix(#000, $gray, 50%) !default;
$darker-gray: mix(#000, $gray, 60%) !default;
$light-gray: mix(#fff, $gray, 50%) !default;
$lighter-gray: mix(#fff, $gray, 90%) !default;

// Page colors
$background-color: #fff !default;
$code-background-color: #fafafa !default;
$text-color: $dark-gray !default;
$border-color: $lighter-gray !default;
$footer-background-color: $lighter-gray !default;

// Accent colors
$primary-color: #6f777d !default;
$success-color: #3fa63f !default;
$warning-color: #d67f05 !default;
$danger-color: #ee5f5b !default;
$info-color: #3b9cba !default;

// Links
$link-color: mix(#000, $info-color, 20%) !default;
$link-color-hover: mix(#000, $link-color, 25%) !default;
$link-color-visited: mix(#fff, $link-color, 15%) !default;
```

### Breakpoints

```scss
$small: 600px !default;
$medium: 768px !default;
$medium-wide: 900px !default;
$large: 1024px !default;
$x-large: 980px !default;
$max-width: $x-large !default;
```

### Layout

```scss
// Sidebar widths
$right-sidebar-width-narrow: 200px !default;
$right-sidebar-width: 225px !default;
$right-sidebar-width-wide: 400px !default;

// Other
$border-radius: 4px !default;
$box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125) !default;
$nav-height: 2em !default;
```

## Customizing Variables

To override a variable:

1. Open `_sass/minimal-mistakes/_variables.scss`
2. Find the variable to change
3. Modify the value (keep `!default` to allow further overrides)

Example - changing the primary color:

```scss
$primary-color: #3498db !default;  // Changed to blue
```

## Animations

Animations are disabled for faster perceived loading:

```scss
// _sass/minimal-mistakes.scss
$intro-transition: none;
$global-transition: none;
```

To re-enable:

```scss
$global-transition: all 0.2s ease-in-out;
$intro-transition: intro 0.3s both;
```

## Skin Colors

The active skin is `dirt`. Skin files are in `_sass/minimal-mistakes/skins/`.

Each skin sets color variables:

```scss
// _dirt.scss example structure
$primary-color: #946b2d !default;
$masthead-link-color: $primary-color !default;
$footer-background-color: mix(#fff, $primary-color, 90%) !default;
```

### Creating a Custom Skin

1. Copy an existing skin file:
   ```bash
   cp _sass/minimal-mistakes/skins/_dirt.scss _sass/minimal-mistakes/skins/_custom.scss
   ```

2. Modify the colors in `_custom.scss`

3. Update `_config.yml`:
   ```yaml
   minimal_mistakes_skin: custom
   ```

## Common Customizations

### Changing Link Colors

In `_variables.scss`:

```scss
$link-color: #0066cc !default;
$link-color-hover: darken($link-color, 15%) !default;
$link-color-visited: lighten($link-color, 10%) !default;
```

### Adjusting Content Width

In `_variables.scss`:

```scss
$max-width: 1200px !default;  // Increase content width
```

### Changing Fonts

In `_variables.scss`:

```scss
$global-font-family: "Open Sans", sans-serif !default;
$header-font-family: "Montserrat", sans-serif !default;
```

Remember to include the fonts in `_includes/head/custom.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Montserrat:wght@600&display=swap" rel="stylesheet">
```

### Adjusting Masthead Height

In `_masthead.scss`:

```scss
.masthead {
  padding: 1em 0;  // Adjust padding
}
```

### Footer Styling

In `_footer.scss`:

```scss
.page__footer {
  background-color: $footer-background-color;
  padding: 2em 0;
}
```

## Adding Custom CSS

### Method 1: Modify Existing Files

Edit the relevant partial in `_sass/minimal-mistakes/`.

### Method 2: Create a Custom File

1. Create `_sass/minimal-mistakes/_custom.scss`

2. Add your styles:
   ```scss
   // Custom styles
   .my-custom-class {
     color: red;
   }
   ```

3. Import in `_sass/minimal-mistakes.scss`:
   ```scss
   // At the end of the file
   @import "minimal-mistakes/custom";
   ```

## Responsive Design

### Media Queries

Use the breakpoint mixin:

```scss
.element {
  font-size: 14px;

  @include breakpoint($medium) {
    font-size: 16px;
  }

  @include breakpoint($large) {
    font-size: 18px;
  }
}
```

### Mobile-First Approach

The theme is mobile-first. Base styles are for mobile, media queries add desktop styles.

## Debugging CSS

### Browser DevTools

1. Right-click element, select "Inspect"
2. View computed styles
3. Edit live to test changes
4. Copy working styles to SCSS

### SCSS Source Maps

Jekyll generates source maps for easier debugging:

1. Styles show original SCSS file location
2. Easier to find where to make changes

## CSS Reset

The theme includes a CSS reset in `_reset.scss` that normalizes browser defaults.

Key resets:
- Box-sizing: border-box
- Margin/padding defaults
- Image max-width
- Form element normalization

## Print Styles

Print-specific styles are in `_print.scss`:

- Removes navigation
- Adjusts colors for printing
- Handles page breaks
- Shows link URLs

## Performance Tips

1. **Minimize custom CSS**: Use theme variables when possible
2. **Avoid deep nesting**: Keeps selectors short
3. **Use existing classes**: Theme has many utility classes
4. **Compress images**: CSS can only do so much

---

See also: [Theme Configuration](theme-configuration.md) | [Layouts](layouts.md) | [Theme Integration](../architecture/theme-integration.md)
