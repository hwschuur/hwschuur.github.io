# Managing Pages

This guide covers the static pages of the site that are not blog posts.

## Pages vs Posts

| Aspect | Pages | Posts |
|--------|-------|-------|
| Location | `_pages/` | `_posts/` |
| Date-based | No | Yes |
| URL | Custom permalink | Date-based |
| Listed automatically | No | Yes (homepage) |
| Purpose | Static content | Blog entries |

## Current Pages

The site has the following pages:

| Page | File | URL | Purpose |
|------|------|-----|---------|
| Contact | `contact.md` | `/contact/` | Bio and contact info |
| Work | `work.md` | `/work/` | Publications and talks |
| 404 | `404.md` | `/404.html` | Error page |
| Categories | `category-archive.md` | `/categories/` | Category listing |
| Tags | `tag-archive.md` | `/tags/` | Tag listing |
| Year Archive | `year-archive.md` | `/year-archive/` | Posts by year |

## Creating a New Page

### 1. Create the File

Create a new Markdown file in `_pages/`:

```bash
touch _pages/projects.md
```

### 2. Add Front Matter

```yaml
---
permalink: /projects/
title: "Projects"
author_profile: false
---
```

### 3. Add Content

```markdown
---
permalink: /projects/
title: "Projects"
author_profile: false
---

# Current Projects

List of projects...

## Project One

Description...
```

### 4. Add to Navigation (Optional)

Edit `_data/navigation.yml`:

```yaml
main:
  - title: "Home"
    url: /
  - title: "Projects"
    url: /projects/
  - title: "Work"
    url: /work/
  - title: "Contact"
    url: /contact/
```

## Page Front Matter

### Required Fields

```yaml
---
permalink: /page-url/    # URL path (with trailing slash)
title: "Page Title"      # Displayed title
---
```

### Optional Fields

```yaml
---
permalink: /page-url/
title: "Page Title"
author_profile: false    # Hide author sidebar
sidebar: false           # Hide any sidebar
excerpt: "Page description for SEO"
toc: true                # Table of contents
toc_label: "Contents"
toc_sticky: true
sitemap: true            # Include in sitemap (default: true)
---
```

## Page Content Examples

### Contact Page (contact.md)

```markdown
---
permalink: /contact/
title: "Contact"
author_profile: false
sidebar: false
---

Introduction paragraph about yourself.

{% include figure image_path="/assets/images/bio-photo-small.png" alt="Photo" %}

You can download my resume [here][cv].

Contact links:
* [Email][mail]
* [LinkedIn][linkedin]
* [Mastodon][mastodon]

[cv]: /assets/cv-hwschuur.pdf
[mail]: mailto:email@example.com
[linkedin]: https://linkedin.com/in/username
[mastodon]: https://mastodon.social/@username
```

### Work/Portfolio Page (work.md)

Work uses the `work` layout. Keep entries in Markdown under `## YEAR`
headings, newest first. Add a Kramdown paragraph attribute directly after
each entry to select its icon: `publication`, `talk`, `research`, or `lecture`.
Place multi-year lectures under their end year and retain their full period
in the text. The layout supplies the year columns and legend; icons live in
`_includes/work/icon.html`, and styles live in the existing page Sass partial.

```markdown
---
permalink: /work/
title: "Work"
layout: work
author_profile: false
---

## 2025

[Article Title][article-link]. Publication. *Story.*
{: .publication}

## 2024

Author Name. [Paper Title][paper-link]. Conference/Journal, Year.
{: .research}

[article-link]: https://example.com/article
[paper-link]: https://example.com/paper
```

### 404 Error Page (404.md)

```markdown
---
title: "Page Not Found"
excerpt: "Page not found. Your pixels are in another canvas."
sitemap: false
permalink: /404.html
---

Sorry, but the page you were trying to view does not exist.
```

## Including Figures

Use the figure include for images with captions:

```liquid
{% include figure image_path="/assets/images/photo.png" alt="Description" caption="Optional caption" %}
```

Parameters:
- `image_path`: Path to image
- `alt`: Alt text (required for accessibility)
- `caption`: Optional caption below image
- `class`: Optional CSS class

## Reference-Style Links

For pages with many links, use reference-style:

```markdown
Check out [this article][ref1] and [that paper][ref2].

[ref1]: https://example.com/article
[ref2]: https://example.com/paper
```

Benefits:
- Cleaner body text
- Links grouped at bottom
- Easy to update URLs

## Page Sections

Organize content with headings:

```markdown
Main Title
==========

Or use: # Main Title

Section One
-----------

Or use: ## Section One

### Subsection

Content...
```

The `===` and `---` underline syntax is Setext-style; `#` headers are ATX-style. Both work.

## Custom Layouts

Pages use the `single` layout by default. To use a different layout:

```yaml
---
permalink: /splash-page/
title: "Welcome"
layout: splash
---
```

Available layouts:
- `single` - Standard page (default)
- `splash` - Hero-style landing page
- `home` - Posts listing
- `posts` - Post archive
- `categories` - Category archive
- `tags` - Tag archive

## Archive Pages

### Category Archive

```markdown
---
title: "Posts by Category"
layout: categories
permalink: /categories/
author_profile: false
---
```

### Tag Archive

```markdown
---
title: "Posts by Tag"
layout: tags
permalink: /tags/
author_profile: false
---
```

### Year Archive

```markdown
---
title: "Posts by Year"
permalink: /year-archive/
layout: posts
author_profile: false
---
```

## Page Performance

### Keep Pages Fast

- Limit images per page
- Optimize image sizes
- Use lazy loading for below-fold images
- Minimize external embeds

### SEO for Pages

1. Use descriptive titles
2. Add `excerpt` for meta description
3. Include relevant keywords naturally
4. Ensure `sitemap: true` (default)

## Removing a Page

1. Delete the file from `_pages/`
2. Remove from navigation in `_data/navigation.yml`
3. Add redirects if the page had traffic (using jekyll-redirect-from)

### Creating a Redirect

If removing an old page, redirect to a new location:

```yaml
---
permalink: /old-page/
redirect_to: /new-page/
---
```

Or redirect from multiple old URLs to a new page:

```yaml
---
permalink: /new-page/
title: "New Page"
redirect_from:
  - /old-url/
  - /another-old-url/
---
```

---

See also: [Writing Posts](writing-posts.md) | [Media Assets](media-assets.md) | [Navigation](../customization/theme-configuration.md)
