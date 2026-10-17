# Front Matter Reference

This document provides a complete reference for all YAML front matter options.

## What is Front Matter?

Front matter is YAML metadata at the beginning of content files, enclosed by triple dashes:

```yaml
---
title: "My Post Title"
tags:
  - topic
---

Content starts here...
```

## Universal Options

These options work for both posts and pages.

### Basic Metadata

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `title` | string | Page/post title | Filename |
| `excerpt` | string | Custom excerpt for listings | First paragraph |
| `date` | datetime | Publication date | From filename |
| `last_modified_at` | datetime | Last update timestamp | none |

### Layout and Display

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `layout` | string | Layout template to use | From defaults |
| `classes` | array | CSS classes for body | none |
| `permalink` | string | Custom URL path | From config |

### Sidebar

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `author_profile` | boolean | Show author sidebar | false |
| `sidebar` | array/boolean | Custom sidebar content | none |

### Table of Contents

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `toc` | boolean | Enable table of contents | false |
| `toc_label` | string | TOC heading text | "On this page" |
| `toc_icon` | string | Font Awesome icon | "file-alt" |
| `toc_sticky` | boolean | Sticky TOC on scroll | false |

### Header/Hero

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `header.image` | string | Header image path | none |
| `header.image_description` | string | Alt text for image | none |
| `header.caption` | string | Image caption/credit | none |
| `header.overlay_image` | string | Overlay background image | none |
| `header.overlay_color` | string | Overlay color | none |
| `header.overlay_filter` | number | Overlay opacity (0-1) | none |
| `header.teaser` | string | Teaser image for listings | none |
| `header.actions` | array | CTA buttons | none |

### Publishing

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `published` | boolean | Publish this content | true |
| `sitemap` | boolean | Include in sitemap | true |

## Post-Specific Options

These options are primarily for blog posts.

### Categorization

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `categories` | array | Post categories | none |
| `tags` | array | Post tags | none |

### Display Features

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `show_date` | boolean | Show publication date | true |
| `read_time` | boolean | Show reading time | false |
| `share` | boolean | Show share buttons | false |
| `related` | boolean | Show related posts | false |
| `comments` | boolean | Enable comments | false |

### Link Posts

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `link` | string | External URL for link posts | none |

## Page-Specific Options

These options are primarily for static pages.

### Redirects

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `redirect_to` | string | Redirect to URL | none |
| `redirect_from` | array | Old URLs that redirect here | none |

## Examples

### Minimal Post

```yaml
---
title: "Quick Update"
---
```

### Standard Post

```yaml
---
title: "Understanding Machine Learning"
tags:
  - ai
  - technology
show_date: true
---
```

### Link Post

```yaml
---
title: "Interesting Article"
link: https://example.com/article
tags:
  - link
  - technology
---
```

### Post with All Options

```yaml
---
title: "Comprehensive Guide to YAML"
excerpt: "Everything you need to know about YAML front matter."
date: 2025-01-31 10:00:00 +0100
last_modified_at: 2025-02-01 14:30:00 +0100
categories:
  - tutorials
tags:
  - yaml
  - jekyll
  - documentation
layout: single
author_profile: false
read_time: true
show_date: true
comments: false
share: false
related: true
toc: true
toc_label: "Guide Contents"
toc_icon: "book"
toc_sticky: true
header:
  image: /assets/images/yaml-header.jpg
  image_description: "YAML code on screen"
  teaser: /assets/images/yaml-teaser.jpg
  caption: "Photo by [Photographer](https://example.com)"
---
```

### Standard Page

```yaml
---
permalink: /about/
title: "About"
author_profile: false
---
```

### Page with Sidebar

```yaml
---
permalink: /resources/
title: "Resources"
sidebar:
  - title: "Quick Links"
    text: "Helpful resources and tools"
  - title: "Categories"
    nav: sidebar-nav
---
```

### Page with Hero

```yaml
---
permalink: /welcome/
title: "Welcome"
layout: splash
header:
  overlay_image: /assets/images/hero.jpg
  overlay_color: "#5e616c"
  overlay_filter: 0.5
  actions:
    - label: "Get Started"
      url: "/getting-started/"
    - label: "Learn More"
      url: "/about/"
---
```

### 404 Page

```yaml
---
title: "Page Not Found"
excerpt: "The page you're looking for doesn't exist."
sitemap: false
permalink: /404.html
---
```

### Redirect Page

```yaml
---
permalink: /old-url/
redirect_to: /new-url/
---
```

### Page Receiving Redirects

```yaml
---
permalink: /new-url/
title: "New Page"
redirect_from:
  - /old-url/
  - /another-old-url/
  - /legacy/page/
---
```

## Header Actions

For splash pages with call-to-action buttons:

```yaml
header:
  actions:
    - label: "Primary Action"
      url: "/primary/"
    - label: "Secondary Action"
      url: "/secondary/"
```

## Sidebar Navigation

For pages with custom sidebar navigation:

1. Define navigation in `_data/navigation.yml`:

```yaml
sidebar-nav:
  - title: "Section One"
    children:
      - title: "Page A"
        url: /page-a/
      - title: "Page B"
        url: /page-b/
  - title: "Section Two"
    children:
      - title: "Page C"
        url: /page-c/
```

2. Reference in front matter:

```yaml
---
sidebar:
  nav: "sidebar-nav"
---
```

## Date Formats

Dates can be specified in several formats:

```yaml
# Full ISO 8601
date: 2025-01-31T10:30:00+01:00

# Date only
date: 2025-01-31

# Date with time
date: 2025-01-31 10:30:00
```

## YAML Tips

### Multiline Strings

```yaml
# Literal block (preserves newlines)
excerpt: |
  First line.
  Second line.

# Folded block (joins lines)
excerpt: >
  This becomes
  a single line.
```

### Arrays

```yaml
# Inline
tags: [ai, technology, news]

# Block
tags:
  - ai
  - technology
  - news
```

### Escaping Titles

If title contains special characters:

```yaml
title: "What's New in 2025"
title: 'Question: How Does This Work?'
title: "Title with \"quotes\""
```

---

See also: [Writing Posts](../content/writing-posts.md) | [Managing Pages](../content/managing-pages.md) | [Theme Configuration](../customization/theme-configuration.md)
