# Writing Posts

This guide covers everything you need to know about creating blog posts for the site.

## Post Basics

### File Location

All posts go in the `_posts/` directory:

```
_posts/
├── 2025-06-16-illusionofthinking.md
├── 2025-05-22-io.md
└── 2025-05-15-aconversationwithjonyive.md
```

### File Naming Convention

Posts must follow this naming pattern:

```
YYYY-MM-DD-slug.md
```

| Component | Description | Example |
|-----------|-------------|---------|
| `YYYY` | Four-digit year | 2025 |
| `MM` | Two-digit month | 06 |
| `DD` | Two-digit day | 16 |
| `slug` | URL-friendly title | illusionofthinking |

**Important**: The date in the filename determines:
- The post's publication date
- The URL path (e.g., `/2025/06/16/illusionofthinking/`)
- Sort order in listings

## Front Matter

Every post begins with YAML front matter between triple dashes:

```yaml
---
title: "The Illusion of Thinking"
tags:
  - ai
  - research
---
```

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Post title | `"My Post Title"` |

### Optional Fields

| Field | Description | Default |
|-------|-------------|---------|
| `tags` | List of tags | none |
| `link` | External URL (for link posts) | none |
| `excerpt` | Custom excerpt | Auto-generated |
| `header` | Header image settings | none |
| `toc` | Show table of contents | false |
| `toc_sticky` | Sticky TOC sidebar | false |
| `last_modified_at` | Last update date | none |
| `published` | Publish status | true |

## Post Types

### Standard Post

A regular blog post with original content:

```markdown
---
title: "Understanding Machine Learning"
tags:
  - ai
  - technology
---

Your original content here. This is a standard blog post
with your own thoughts and analysis.

## Section Heading

More content...
```

### Link Post

A post that references external content:

```markdown
---
title: "The Illusion of Thinking"
link: https://machinelearning.apple.com/research/illusion-of-thinking
tags:
  - link
  - ai
  - apple
---

Brief commentary about the linked article. The title will
link to the external URL.
```

The `link` field:
- Makes the post title link to the external URL
- Adds a "Direct Link" button
- Useful for curating/commenting on external content

## Markdown Syntax

### Basic Formatting

```markdown
**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

### Headings

```markdown
# Heading 1 (rarely used in posts)
## Heading 2
### Heading 3
#### Heading 4
```

### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title text")

<!-- Reference-style links -->
[link text][ref]

[ref]: https://example.com
```

### Lists

```markdown
<!-- Unordered -->
- Item one
- Item two
  - Nested item

<!-- Ordered -->
1. First item
2. Second item
3. Third item
```

### Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.

<!-- With citation -->
> Quote text here.
<cite><a href="https://source.com">Source Name</a></cite>
```

### Code Blocks

````markdown
```python
def hello():
    print("Hello, world!")
```

```javascript
const greeting = "Hello";
console.log(greeting);
```
````

### Images

```markdown
![Alt text](/assets/images/my-image.png)

<!-- With caption using include -->
{% include figure image_path="/assets/images/my-image.png" alt="Description" caption="Figure caption" %}
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

## Tags

Tags help categorize posts and enable filtering:

```yaml
---
title: "Post Title"
tags:
  - ai
  - apple
  - link
---
```

### Existing Tags in Use

Based on current posts:
- `ai` - Artificial intelligence topics
- `apple` - Apple-related content
- `link` - Link posts (external URLs)
- `website` - Site-related updates
- `devops` - DevOps topics
- `talk` - Presentations/talks

### Tag Best Practices

- Use lowercase
- Use hyphens for multi-word tags: `machine-learning`
- Be consistent with existing tags
- Limit to 3-5 tags per post

## Post URL Structure

URLs are generated from the filename and config:

```yaml
# _config.yml
permalink: /:categories/:year/:month/:day/:title/
```

Example:
- Filename: `2025-06-16-illusionofthinking.md`
- URL: `/2025/06/16/illusionofthinking/`

## Excerpts

The excerpt is the preview text shown in listings.

### Automatic Excerpt

By default, Jekyll uses the first paragraph as the excerpt.

### Custom Excerpt

Specify a custom excerpt in front matter:

```yaml
---
title: "Post Title"
excerpt: "A custom summary of this post that appears in listings."
---
```

### Excerpt Separator

Or use a separator in the content:

```yaml
---
excerpt_separator: <!--more-->
---

This text appears in the excerpt.

<!--more-->

This text only appears in the full post.
```

## Drafts

Drafts are posts not yet ready for publication.

### Create a Draft

Put drafts in `_drafts/` without a date prefix:

```
_drafts/
└── my-upcoming-post.md
```

### Preview Drafts

```bash
bundle exec jekyll serve --drafts
```

Drafts will appear with the current date.

### Publish a Draft

Move to `_posts/` and add the date prefix:

```bash
mv _drafts/my-upcoming-post.md _posts/2025-01-31-my-upcoming-post.md
```

## Unpublishing Posts

### Hide a Post

Set `published: false`:

```yaml
---
title: "Hidden Post"
published: false
---
```

### Archive a Post

Move to the `_posts/archive/` directory (excluded from build):

```bash
mv _posts/2025-01-01-old-post.md _posts/archive/
```

## Internal Links

### Link to Another Post

```markdown
[Related post]({% post_url 2025-06-16-illusionofthinking %})
```

Use the filename without extension.

### Link to a Page

```markdown
[Contact page](/contact/)
[Work page](/work/)
```

## Advanced Features

### Table of Contents

Enable TOC for long posts:

```yaml
---
title: "Long Post"
toc: true
toc_label: "Contents"
toc_icon: "file-alt"
toc_sticky: true
---
```

### Header Images

```yaml
---
title: "Post with Header"
header:
  image: /assets/images/header.jpg
  image_description: "Description"
  caption: "Photo credit: [Source](https://example.com)"
---
```

### Last Modified Date

```yaml
---
title: "Updated Post"
last_modified_at: 2025-06-20T12:00:00-00:00
---
```

## Example Posts

### Minimal Post

```markdown
---
title: "Quick Update"
---

A brief update about something interesting.
```

### Full-Featured Post

```markdown
---
title: "Comprehensive Analysis of AI Trends"
tags:
  - ai
  - technology
  - analysis
excerpt: "A deep dive into current AI developments and their implications."
toc: true
last_modified_at: 2025-01-31
---

Introduction paragraph setting the context.

## Background

Historical context and background information.

## Current State

Analysis of the current situation.

### Technical Details

Specific technical information.

### Business Impact

Discussion of business implications.

## Future Outlook

Predictions and expectations.

## Conclusion

Summary and final thoughts.

## References

- [Reference 1](https://example.com)
- [Reference 2](https://example.com)
```

---

See also: [Managing Pages](managing-pages.md) | [Media Assets](media-assets.md) | [Front Matter Reference](../reference/front-matter.md)
