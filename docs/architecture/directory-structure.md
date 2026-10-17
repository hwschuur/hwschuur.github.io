# Directory Structure

This document provides a detailed breakdown of every directory and key file in the project.

## Root Directory

```
hwschuur.github.io/
├── _config.yml           # Main Jekyll configuration
├── index.html            # Homepage (uses home layout)
├── Gemfile               # Ruby dependencies
├── Gemfile.lock          # Locked dependency versions
├── CNAME                 # Custom domain for GitHub Pages
├── README.md             # Repository readme
├── .gitignore            # Git ignore rules
│
├── _data/                # Data files
├── _includes/            # Reusable HTML partials
├── _layouts/             # Page templates
├── _pages/               # Static pages
├── _posts/               # Blog posts
├── _sass/                # SCSS stylesheets
├── _site/                # Generated site (not in git)
├── assets/               # Static assets
└── docs/                 # This documentation
```

## Configuration Files

### _config.yml

The main Jekyll configuration file containing:

```yaml
# Site metadata
locale: "en-US"
title: Henk van der Schuur
email: hwschuur@gmail.com
description: Henk van der Schuur

# Theme settings
minimal_mistakes_skin: dirt
remote_theme: mmistakes/minimal-mistakes@4.27.0

# Build settings
markdown: kramdown
permalink: /:categories/:year/:month/:day/:title/
paginate: 7

# Plugins
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-feed
  # ... more plugins

# Author information
author:
  avatar: "/assets/images/bio-photo.png"
  bio: "Customer Director at Schuberg Philis..."
  twitter: "hwschuur"
  linkedin: "hwschuur"

# Default front matter
defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      # ... more defaults
```

### Gemfile

Ruby dependencies for local development:

```ruby
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "jekyll", "~> 3.10"
```

### CNAME

Contains the custom domain:

```
hwschuur.nl
```

## _data/ Directory

Data files in YAML format accessible via `site.data.*`:

```
_data/
├── navigation.yml    # Site navigation menu
└── ui-text.yml       # UI text translations (from theme)
```

### navigation.yml

```yaml
main:
  - title: "Home"
    url: /
  - title: "Work"
    url: /work/
  - title: "Contact"
    url: /contact/
```

## _includes/ Directory

Reusable HTML partials included in layouts:

```
_includes/
├── analytics-providers/    # Analytics scripts
│   ├── google-gtag.html
│   └── custom.html
├── comments-providers/     # Comment system scripts
│   ├── disqus.html
│   └── giscus.html
├── footer/
│   └── custom.html         # Custom footer content
├── head/
│   └── custom.html         # Custom head content
├── search/
│   └── search_form.html
│
├── analytics.html          # Analytics wrapper
├── archive-single.html     # Single post in archive
├── author-profile.html     # Author sidebar
├── breadcrumbs.html        # Breadcrumb navigation
├── comments.html           # Comments wrapper
├── footer.html             # Footer template
├── head.html               # Head section
├── masthead.html           # Header/navigation
├── page__hero.html         # Hero image
├── page__meta.html         # Post metadata
├── paginator.html          # Pagination controls
├── scripts.html            # JavaScript includes
├── seo.html                # SEO meta tags
├── sidebar.html            # Sidebar wrapper
├── social-share.html       # Social sharing buttons
└── toc.html                # Table of contents
```

## _layouts/ Directory

Page templates that wrap content:

```
_layouts/
├── default.html      # Base HTML template
├── single.html       # Single post/page
├── home.html         # Homepage with posts
├── posts.html        # Posts archive
├── collection.html   # Collection pages
├── splash.html       # Splash/landing pages
├── category.html     # Category archive
├── categories.html   # All categories
├── tag.html          # Single tag archive
└── tags.html         # All tags
```

### Layout Inheritance

```
default.html          # HTML shell
    └── single.html   # Article wrapper
        └── home.html # Posts listing
```

## _pages/ Directory

Static pages (not date-based):

```
_pages/
├── 404.md             # Custom 404 page
├── category-archive.md
├── contact.md         # Contact/bio page
├── tag-archive.md
├── work.md            # Publications page
└── year-archive.md
```

## _posts/ Directory

Blog posts with date-prefixed filenames:

```
_posts/
├── 2025-06-16-illusionofthinking.md
├── 2025-05-22-io.md
├── 2025-05-15-aconversationwithjonyive.md
├── 2025-04-15-onthestateofappleintelligence.md
├── 2025-02-17-elegntluxobyapple.md
├── 2024-12-04-buildingllmsbusiness.md
├── ... (31 total posts)
│
└── archive/           # Excluded example posts
    ├── 2010-01-07-post-standard.md
    └── ... (not published)
```

### Post Filename Format

```
YYYY-MM-DD-slug.md
│    │  │   │
│    │  │   └── URL slug (lowercase, hyphens)
│    │  └────── Day
│    └───────── Month
└────────────── Year
```

## _sass/ Directory

SCSS stylesheets:

```
_sass/
├── minimal-mistakes.scss     # Main import file
└── minimal-mistakes/
    ├── _animations.scss      # CSS animations
    ├── _archive.scss         # Archive page styles
    ├── _base.scss            # Base element styles
    ├── _buttons.scss         # Button styles
    ├── _footer.scss          # Footer styles
    ├── _forms.scss           # Form styles
    ├── _masthead.scss        # Header styles
    ├── _mixins.scss          # SCSS mixins
    ├── _navigation.scss      # Navigation styles
    ├── _notices.scss         # Notice/alert styles
    ├── _page.scss            # Page layout styles
    ├── _print.scss           # Print styles
    ├── _reset.scss           # CSS reset
    ├── _search.scss          # Search styles
    ├── _sidebar.scss         # Sidebar styles
    ├── _syntax.scss          # Code syntax highlighting
    ├── _tables.scss          # Table styles
    ├── _utilities.scss       # Utility classes
    ├── _variables.scss       # SCSS variables (customized)
    ├── skins/                # Color skins
    │   ├── _air.scss
    │   ├── _dirt.scss        # Active skin
    │   └── ...
    └── vendor/               # Third-party SCSS
        ├── breakpoint/
        ├── magnific-popup/
        └── susy/
```

## assets/ Directory

Static assets (images, PDFs, etc.):

```
assets/
├── cv-hwschuur.pdf           # Resume PDF
├── favicon/                  # Favicon files
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   └── site.webmanifest
└── images/
    ├── bio-photo.png         # Author avatar
    ├── bio-photo-small.png   # Small avatar
    ├── blue-h.png            # Logo/icon
    └── posts/                # Post images
```

## _site/ Directory (Generated)

The compiled static site (not committed to git):

```
_site/
├── index.html
├── page2/
├── page3/
├── work/
│   └── index.html
├── contact/
│   └── index.html
├── 2025/
│   └── 06/
│       └── 16/
│           └── illusionofthinking/
│               └── index.html
├── assets/
├── feed.xml
├── sitemap.xml
└── robots.txt
```

## Hidden Files

```
.gitignore            # Excludes _site/, .jekyll-cache/, etc.
.DS_Store             # macOS metadata (ignored)
.claude/              # Claude Code configuration
```

### .gitignore Contents

```
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
vendor/
```

## File Size Reference

| Directory | Approximate Size | Purpose |
|-----------|------------------|---------|
| _includes/ | ~100 KB | HTML partials |
| _layouts/ | ~20 KB | Page templates |
| _sass/ | ~100 KB | Stylesheets |
| _posts/ | ~50 KB | Blog content |
| assets/images/ | ~2 MB | Images |
| assets/cv-hwschuur.pdf | ~1.4 MB | Resume |

---

See also: [Architecture Overview](overview.md) | [Theme Integration](theme-integration.md)
