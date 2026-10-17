# Theme Configuration

This guide covers all configuration options in `_config.yml`.

## Configuration File Location

The main configuration file is `_config.yml` in the repository root.

> **Note**: Changes to `_config.yml` require restarting the Jekyll server. The file is not hot-reloaded.

## Site Metadata

### Basic Information

```yaml
locale: "en-US"                    # Site language
title: Henk van der Schuur         # Site title (appears in header)
email: hwschuur@gmail.com          # Contact email
description: Henk van der Schuur   # Site description (for SEO)
```

### SEO Settings

```yaml
seo_description: dr. Henk van der Schuur   # Meta description
seo_title: dr. Henk van der Schuur         # Title tag override
```

## Theme Configuration

### Theme Source

```yaml
remote_theme: mmistakes/minimal-mistakes@4.27.0
```

This loads the Minimal Mistakes theme from GitHub. Change the version number to update.

### Skin Selection

```yaml
minimal_mistakes_skin: dirt
```

Available skins:
| Skin | Description |
|------|-------------|
| `air` | Light, minimal |
| `aqua` | Blue accent |
| `contrast` | High contrast |
| `dark` | Dark mode |
| `dirt` | Warm brown |
| `neon` | Bright, bold |
| `mint` | Green accent |
| `plum` | Purple accent |
| `sunrise` | Orange/warm |

## Features

### Search

```yaml
search: false    # Enable/disable site search
```

If enabled, options include:
```yaml
search_full_content: true   # Search full post content
search_provider: lunr       # lunr, algolia, google
```

### Atom Feed

```yaml
atom_feed:
  hide: true     # Hide feed link in footer
  path: feed.xml # Custom feed path
```

## Analytics

### Google Analytics

```yaml
analytics:
  provider: google-gtag
  google:
    tracking_id: G-M8FJLTPT2Q
    anonymize_ip: true
```

Providers available:
- `google-gtag` (recommended)
- `google-universal`
- `google` (legacy)
- `custom`

## Build Settings

### Markdown Processor

```yaml
markdown: kramdown
```

Kramdown options:
```yaml
kramdown:
  input: GFM                  # GitHub Flavored Markdown
  syntax_highlighter: rouge
  syntax_highlighter_opts:
    default_lang: plaintext
```

### Permalink Structure

```yaml
permalink: /:categories/:year/:month/:day/:title/
```

Produces URLs like: `/2025/06/16/post-title/`

Other formats:
| Pattern | Example |
|---------|---------|
| `pretty` | `/post-title/` |
| `date` | `/2025/06/16/post-title.html` |
| `none` | `/post-title.html` |

### Pagination

```yaml
paginate: 7              # Posts per page
paginate_path: /page:num/  # URL pattern for pages
```

### Timezone

```yaml
timezone: nl    # Timezone for dates
```

## Include and Exclude

### Include Directories

```yaml
include:
  - _pages   # Include _pages directory
```

### Exclude from Build

```yaml
exclude:
  - _posts/archive/   # Exclude archived posts
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
```

## Plugins

```yaml
plugins:
  - jekyll-paginate       # Pagination
  - jekyll-sitemap        # Sitemap generation
  - jekyll-gist           # GitHub Gist embedding
  - jekyll-feed           # Atom feed
  - jemoji                # GitHub emoji
  - jekyll-include-cache  # Include caching
  - jekyll-redirect-from  # URL redirects
```

## Author Information

```yaml
author:
  avatar: "/assets/images/bio-photo.png"   # Author photo
  bio: "Customer Director at Schuberg Philis. Software Production Enthusiast. Pragmatic Perfectionist."
  twitter: "hwschuur"
  linkedin: "hwschuur"
  email: hwschuur@gmail.com
  descriptions: false                       # Show author descriptions
```

### Author Links

Add more social links:
```yaml
author:
  links:
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/hwschuur"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/hwschuur"
```

## Default Front Matter

Set defaults for posts and pages:

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

### Scope Options

| Field | Description |
|-------|-------------|
| `path` | File path pattern (empty = all) |
| `type` | Content type: `posts`, `pages`, or collection name |

### Value Options

| Option | Type | Description |
|--------|------|-------------|
| `layout` | string | Default layout |
| `author_profile` | boolean | Show author sidebar |
| `read_time` | boolean | Show reading time |
| `show_date` | boolean | Show post date |
| `comments` | boolean | Enable comments |
| `share` | boolean | Show share buttons |
| `related` | boolean | Show related posts |
| `toc` | boolean | Table of contents |
| `toc_sticky` | boolean | Sticky TOC |
| `classes` | array | CSS classes |

## Archives

### Category Archive

```yaml
category_archive:
  type: liquid
  path: /categories/
```

### Tag Archive

```yaml
tag_archive:
  type: liquid
  path: /tags/
```

Types:
- `liquid` - Uses Jekyll includes (no plugin)
- `jekyll-archives` - Plugin-based (not GitHub Pages compatible)

## Comments (Disabled)

If you want to enable comments:

```yaml
comments:
  provider: giscus    # or disqus, discourse, facebook, etc.
  giscus:
    repo_id: YOUR_REPO_ID
    category_name: Comments
    category_id: YOUR_CATEGORY_ID
```

## Footer Configuration

```yaml
footer:
  links:
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/hwschuur"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/hwschuur"
```

## Full Configuration Example

Here is the complete `_config.yml` for this site:

```yaml
# Site settings
locale: "en-US"
title: Henk van der Schuur
email: hwschuur@gmail.com
description: Henk van der Schuur
seo_description: dr. Henk van der Schuur
seo_title: dr. Henk van der Schuur
minimal_mistakes_skin: dirt
search: false

atom_feed:
  hide: true

analytics:
  provider: google-gtag
  google:
    tracking_id: G-M8FJLTPT2Q
    anonymize_ip: true

# Build settings
markdown: kramdown
remote_theme: mmistakes/minimal-mistakes@4.27.0
permalink: /:categories/:year/:month/:day/:title/
paginate: 7
paginate_path: /page:num/
timezone: nl

include:
  - _pages

exclude:
  - _posts/archive/

plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jemoji
  - jekyll-include-cache
  - jekyll-redirect-from

author:
  avatar: "/assets/images/bio-photo.png"
  bio: "Customer Director at Schuberg Philis. Software Production Enthusiast. Pragmatic Perfectionist."
  twitter: "hwschuur"
  linkedin: "hwschuur"
  email: hwschuur@gmail.com
  descriptions: false

defaults:
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
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: false
      related: false

category_archive:
  type: liquid
  path: /categories/

tag_archive:
  type: liquid
  path: /tags/
```

---

See also: [Styling](styling.md) | [Layouts](layouts.md) | [Theme Integration](../architecture/theme-integration.md)
