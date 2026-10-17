# Quick Start Guide

Get the site running locally and make your first changes in under 5 minutes.

## The 60-Second Setup

```bash
# Clone and enter directory
git clone https://github.com/hwschuur/hwschuur.github.io.git
cd hwschuur.github.io

# Install dependencies
bundle install

# Start the server
bundle exec jekyll serve
```

Open **http://localhost:4000** in your browser.

## Making Your First Changes

### 1. Create a New Blog Post

Create a new file in `_posts/` with the naming convention: `YYYY-MM-DD-title.md`

```bash
# Example: Create a post for today
touch _posts/2026-01-31-my-new-post.md
```

Add the following content:

```markdown
---
title: "My New Post"
tags:
  - general
---

This is my first blog post!

Here is some **bold text** and *italic text*.

> This is a blockquote.
```

Save the file, and the development server will automatically rebuild. Refresh your browser to see the new post.

### 2. Edit the Contact Page

Open `_pages/contact.md` and modify the content:

```markdown
---
permalink: /contact/
title: "Contact"
author_profile: false
sidebar: false
---

Your updated contact information here.
```

### 3. Update Navigation

Edit `_data/navigation.yml` to modify the site navigation:

```yaml
main:
  - title: "Home"
    url: /
  - title: "Work"
    url: /work/
  - title: "Contact"
    url: /contact/
  # Add new items here
  - title: "Projects"
    url: /projects/
```

## Understanding the Layout

The site has three main sections:

| Page | URL | File Location | Purpose |
|------|-----|---------------|---------|
| Home | `/` | `index.html` | Blog post listing |
| Work | `/work/` | `_pages/work.md` | Portfolio/publications |
| Contact | `/contact/` | `_pages/contact.md` | Bio and contact info |

## Post Types

### Standard Post

```markdown
---
title: "Post Title"
tags:
  - topic1
  - topic2
---

Your content here.
```

### Link Post (External)

```markdown
---
title: "Interesting Article"
link: https://example.com/article
tags:
  - link
  - topic
---

Brief commentary about the linked article.
```

The `link` front matter creates a post that links to an external URL.

## Common Tasks

### Add an Image to a Post

1. Place image in `assets/images/posts/`
2. Reference in your post:

```markdown
![Alt text](/assets/images/posts/my-image.png)
```

### Add a Figure with Caption

Use the Jekyll include:

```liquid
{% include figure image_path="/assets/images/my-image.png" alt="Description" caption="Figure caption text" %}
```

### Create a Blockquote with Citation

```markdown
> The quote text here.
<cite><a href="https://source.com">Source Name</a></cite>
```

### Link to Another Post

```markdown
[Link text]({% post_url 2025-06-16-illusionofthinking %})
```

## Configuration Quick Reference

Key settings in `_config.yml`:

| Setting | Current Value | Purpose |
|---------|---------------|---------|
| `title` | Henk van der Schuur | Site title |
| `minimal_mistakes_skin` | dirt | Color scheme |
| `paginate` | 7 | Posts per page |
| `search` | false | Site search disabled |
| `author_profile` | false | Author sidebar hidden |

## File Quick Reference

| Task | File to Edit |
|------|--------------|
| Site title/description | `_config.yml` |
| Navigation menu | `_data/navigation.yml` |
| Create new post | `_posts/YYYY-MM-DD-title.md` |
| Edit pages | `_pages/*.md` |
| Custom styles | `_sass/minimal-mistakes/_*.scss` |
| Author info | `_config.yml` (author section) |

## Next Steps

- [Writing Posts](../content/writing-posts.md) - Detailed post authoring guide
- [Theme Configuration](../customization/theme-configuration.md) - Full configuration reference
- [Deployment](deployment.md) - Publishing changes

---

See also: [Installation](installation.md) | [Directory Structure](../architecture/directory-structure.md)
