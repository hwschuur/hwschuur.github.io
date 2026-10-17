# Theme Integration

This document explains how the Minimal Mistakes theme is integrated and customized.

## Remote Theme Setup

The site uses Minimal Mistakes as a remote theme, loaded from GitHub:

```yaml
# _config.yml
remote_theme: mmistakes/minimal-mistakes@4.27.0
```

### Benefits of Remote Theme

- **Smaller repository**: Theme files not stored locally
- **Easy updates**: Change version number to upgrade
- **GitHub Pages compatible**: Works with standard GitHub Pages build
- **Override capability**: Local files take precedence

### How Remote Theme Loading Works

```
Build Process:
1. Jekyll reads _config.yml
2. Downloads theme from GitHub
3. Merges local overrides
4. Builds the site
```

## Theme Version

Current version: **4.27.0**

To update the theme, change the version in `_config.yml`:

```yaml
# Update to a new version
remote_theme: mmistakes/minimal-mistakes@4.28.0
```

> **Warning**: Test updates locally before deploying. Theme updates may introduce breaking changes.

## Skin Configuration

The theme uses skins for color schemes:

```yaml
minimal_mistakes_skin: dirt
```

### Available Skins

| Skin | Description |
|------|-------------|
| air | Light gray, clean |
| aqua | Blue accent |
| contrast | High contrast |
| dark | Dark mode |
| **dirt** | Warm brown (active) |
| neon | Bright colors |
| mint | Green accent |
| plum | Purple accent |
| sunrise | Orange/yellow |

## Local Overrides

Files in this repository override theme files. The following are customized:

### Layouts (/_layouts/)

| File | Customization |
|------|---------------|
| `default.html` | Added copyright notice, customized HTML structure |
| `single.html` | Modified article wrapper, meta display |
| `home.html` | Customized post listing |

### Includes (/_includes/)

| File | Customization |
|------|---------------|
| `masthead.html` | Navigation customization |
| `footer.html` | Custom footer with copyright years |
| `head.html` | Font Awesome kit, custom scripts |
| `author-profile.html` | Modified author display |

### SCSS (/_sass/)

| File | Customization |
|------|---------------|
| `_variables.scss` | Typography, colors, breakpoints |
| `_base.scss` | Base element styling |
| `_page.scss` | Page layout adjustments |
| `_archive.scss` | Archive listing styles |
| `_sidebar.scss` | Sidebar styling |
| `_navigation.scss` | Navigation styles |

## Key Customizations

### 1. Disabled Features

Several theme features are disabled for a cleaner design:

```yaml
# _config.yml
search: false              # No site search
atom_feed:
  hide: true               # No visible feed link

# In defaults
author_profile: false      # No author sidebar
read_time: false           # No reading time
comments: false            # No comments
share: false               # No share buttons
related: false             # No related posts
```

### 2. Typography Adjustments

In `_sass/minimal-mistakes/_variables.scss`:

```scss
// Custom type sizes
$type-size-6x: 0.85em;  // Added intermediate size
$type-size-6: 0.75em;
$type-size-7: 0.7em;

// Breakpoints adjusted
$x-large: 980px;
$max-width: $x-large;
```

### 3. Animation Removal

Transitions are disabled for faster perceived loading:

```scss
// _sass/minimal-mistakes.scss
$intro-transition: none;
$global-transition: none;
```

### 4. Footer Customization

Custom footer with year range in `_includes/footer.html`:

```html
<div class="page__footer-copyright">
  &copy; 2021–{{ site.time | date: '%Y' }} {{ site.name | default: site.title }}
</div>
```

### 5. Font Awesome Integration

Custom Font Awesome kit in `_includes/head.html`:

```html
<script src="https://kit.fontawesome.com/dac1d6028f.js" crossorigin="anonymous"></script>
```

## Theme Components Used

### Active Components

- **Masthead**: Top navigation bar
- **Single layout**: Post/page display
- **Archive single**: Post excerpts in lists
- **Pagination**: Multi-page navigation
- **Footer**: Site footer
- **SEO tags**: Meta tag generation

### Inactive Components

- Author profile sidebar
- Comments (Disqus, Giscus, etc.)
- Search (Algolia, Lunr)
- Social sharing buttons
- Related posts
- Breadcrumbs
- Table of contents

## Default Front Matter

Defaults are set in `_config.yml` to avoid repetition:

```yaml
defaults:
  # Posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: false
      read_time: false
      show_date: true
      comments: false
      share: false
      related: false

  # Pages
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: false
      related: false
```

## How to Override Theme Files

### 1. Find the Original File

Browse the [Minimal Mistakes repository](https://github.com/mmistakes/minimal-mistakes) for the file you want to override.

### 2. Copy to Local Directory

Copy the file to the same relative path in your repository:

```bash
# Example: Override the footer
# Theme file: _includes/footer.html
# Copy to: your-repo/_includes/footer.html
```

### 3. Modify as Needed

Edit the local copy. Jekyll will use your version instead of the theme's.

### 4. Test Locally

```bash
bundle exec jekyll serve
```

## Updating the Theme

### Check for Updates

Visit the [Minimal Mistakes releases page](https://github.com/mmistakes/minimal-mistakes/releases).

### Update Process

1. Read the changelog for breaking changes
2. Update `_config.yml`:
   ```yaml
   remote_theme: mmistakes/minimal-mistakes@NEW_VERSION
   ```
3. Test locally: `bundle exec jekyll serve`
4. Check all pages render correctly
5. Deploy

### Handling Breaking Changes

If an update breaks customizations:

1. Check the changelog for migration notes
2. Compare your overridden files with the new theme versions
3. Update local overrides to match new structure

## Theme Documentation

For comprehensive theme documentation, see:

- [Minimal Mistakes Quick-Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [Configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)
- [Layouts](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)
- [Helpers](https://mmistakes.github.io/minimal-mistakes/docs/helpers/)

---

See also: [Architecture Overview](overview.md) | [Styling Guide](../customization/styling.md)
