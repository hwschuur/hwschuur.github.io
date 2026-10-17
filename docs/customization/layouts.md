# Layouts Guide

This guide explains the layout system and how to customize page templates.

## Layout Hierarchy

Layouts inherit from each other:

```
default.html
    │
    ├── single.html
    │   ├── home.html
    │   ├── posts.html
    │   ├── categories.html
    │   └── tags.html
    │
    ├── splash.html
    ├── collection.html
    └── (other layouts)
```

## Available Layouts

| Layout | Purpose | Used For |
|--------|---------|----------|
| `default` | Base HTML template | Inherited by all |
| `single` | Standard page/post | Posts and pages |
| `home` | Homepage with posts | index.html |
| `posts` | Post archive | Year archive |
| `categories` | Category listing | Category pages |
| `tags` | Tag listing | Tag pages |
| `splash` | Hero landing page | Special pages |
| `collection` | Collection pages | Custom collections |

## Using Layouts

### In Front Matter

```yaml
---
layout: single
title: "My Page"
---
```

### Default Layouts

Defaults are set in `_config.yml`:

```yaml
defaults:
  - scope:
      type: posts
    values:
      layout: single
  - scope:
      path: "_pages"
    values:
      layout: single
```

## Layout Details

### default.html

The base HTML template providing the document shell:

```html
<!doctype html>
<html lang="{{ site.locale | slice: 0,2 }}">
  <head>
    {% include head.html %}
  </head>
  <body class="layout--{{ page.layout }}">
    {% include masthead.html %}
    <div class="initial-content">
      {{ content }}
    </div>
    <footer>
      {% include footer.html %}
    </footer>
    {% include scripts.html %}
  </body>
</html>
```

**Provides**:
- HTML document structure
- Head section (meta, CSS)
- Masthead (navigation)
- Content area
- Footer
- Scripts

### single.html

The standard layout for posts and pages:

```html
---
layout: default
---
{% if page.header.overlay_image %}
  {% include page__hero.html %}
{% endif %}

<div id="main" role="main">
  {% include sidebar.html %}
  <article class="page">
    <header>
      <h1>{{ page.title }}</h1>
      {% include page__meta.html %}
    </header>
    <section class="page__content">
      {{ content }}
    </section>
    <footer class="page__meta">
    </footer>
  </article>

  {% if page.related %}
    <!-- Related posts -->
  {% endif %}
</div>
```

**Features**:
- Hero image support
- Sidebar
- Article wrapper
- Page meta
- Related posts

### home.html

Homepage with paginated post listing:

```html
---
layout: single
---
{{ content }}

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
```

**Features**:
- Inherits from single
- Post iteration
- Pagination

### splash.html

Full-width landing page:

```html
---
layout: default
---
{% include page__hero.html %}

<div id="main" role="main">
  <article class="splash">
    {{ content }}
  </article>
</div>
```

**Features**:
- Full-width hero
- No sidebar
- Large text

## Customizing Layouts

### Overriding a Layout

To customize a theme layout:

1. Find the original in the [Minimal Mistakes repo](https://github.com/mmistakes/minimal-mistakes/tree/master/_layouts)
2. Copy to your `_layouts/` directory
3. Modify as needed

### Example: Customizing single.html

The local `_layouts/single.html` includes customizations:

```html
---
layout: default
---
<!-- Customized single layout -->
{% if page.header.overlay_color or page.header.overlay_image %}
  {% include page__hero.html %}
{% endif %}

<div id="main" role="main">
  {% include sidebar.html %}
  <article class="page h-entry" itemscope itemtype="https://schema.org/CreativeWork">
    <!-- Custom modifications here -->
    <div class="page__inner-wrap">
      <header>
        {% if page.title %}
          <h1 class="page__title">
            <a href="{{ page.url | absolute_url }}">{{ page.title }}</a>
          </h1>
        {% endif %}
        {% include page__meta.html %}
      </header>
      <section class="page__content">
        {{ content }}
      </section>
    </div>
  </article>
</div>
```

## Layout Components

### Hero Section

Add a hero image to any page:

```yaml
---
layout: single
header:
  image: /assets/images/header.jpg
  image_description: "Description"
  caption: "Photo credit"
---
```

Or an overlay:

```yaml
---
header:
  overlay_image: /assets/images/header.jpg
  overlay_color: "#333"
  overlay_filter: 0.5
  actions:
    - label: "Button Text"
      url: "/link/"
---
```

### Sidebar

Enable author profile sidebar:

```yaml
---
author_profile: true
---
```

Custom sidebar content:

```yaml
---
sidebar:
  - title: "Title"
    text: "Some text"
  - title: "Another Title"
    text: "More text"
---
```

### Table of Contents

Enable TOC for long content:

```yaml
---
toc: true
toc_label: "Contents"
toc_icon: "file-alt"
toc_sticky: true
---
```

## Creating Custom Layouts

### Step 1: Create the File

```bash
touch _layouts/custom-layout.html
```

### Step 2: Add Layout Code

```html
---
layout: default
---
<div class="custom-layout">
  <header class="custom-header">
    <h1>{{ page.title }}</h1>
  </header>

  <main class="custom-content">
    {{ content }}
  </main>

  {% if page.show_footer %}
  <footer class="custom-footer">
    Custom footer content
  </footer>
  {% endif %}
</div>
```

### Step 3: Add Styles

In `_sass/minimal-mistakes/_page.scss`:

```scss
.custom-layout {
  max-width: 800px;
  margin: 0 auto;

  .custom-header {
    text-align: center;
    margin-bottom: 2em;
  }

  .custom-content {
    line-height: 1.8;
  }
}
```

### Step 4: Use the Layout

```yaml
---
layout: custom-layout
title: "My Custom Page"
show_footer: true
---

Content here.
```

## Liquid Templating

### Variables

```liquid
{{ page.title }}      <!-- Page title -->
{{ page.content }}    <!-- Page content -->
{{ site.title }}      <!-- Site title -->
{{ content }}         <!-- Rendered content -->
```

### Conditionals

```liquid
{% if page.header.image %}
  <img src="{{ page.header.image }}">
{% endif %}

{% unless page.hide_title %}
  <h1>{{ page.title }}</h1>
{% endunless %}
```

### Loops

```liquid
{% for post in site.posts limit:5 %}
  <li>{{ post.title }}</li>
{% endfor %}
```

### Includes

```liquid
{% include masthead.html %}
{% include_cached footer.html %}
```

## Includes Used in Layouts

| Include | Purpose |
|---------|---------|
| `head.html` | Head section |
| `masthead.html` | Navigation |
| `sidebar.html` | Sidebar wrapper |
| `page__hero.html` | Hero section |
| `page__meta.html` | Post metadata |
| `footer.html` | Footer |
| `scripts.html` | JavaScript |
| `paginator.html` | Pagination |
| `archive-single.html` | Post excerpt |
| `comments.html` | Comments |

## Debugging Layouts

### Check Which Layout is Used

Add to any layout:

```html
<!-- Layout: {{ page.layout }} -->
```

### View Content Structure

```liquid
<pre>{{ page | jsonify }}</pre>
```

### List Available Includes

```bash
ls _includes/
```

---

See also: [Theme Configuration](theme-configuration.md) | [Styling](styling.md) | [Directory Structure](../architecture/directory-structure.md)
