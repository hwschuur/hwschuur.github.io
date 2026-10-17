# Plugins Reference

This document describes all Jekyll plugins used by the site.

## Plugin Configuration

Plugins are configured in two places:

### _config.yml

```yaml
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jemoji
  - jekyll-include-cache
  - jekyll-redirect-from
```

### Gemfile

```ruby
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-include-cache"
  gem "jekyll-algolia"
  gem "jekyll-redirect-from"
  gem "kramdown"
  gem "liquid"
end
```

## Active Plugins

### jekyll-paginate

**Purpose**: Splits blog posts across multiple pages.

**Configuration**:
```yaml
paginate: 7              # Posts per page
paginate_path: /page:num/  # URL pattern
```

**Output**:
- `/` - First page (posts 1-7)
- `/page2/` - Second page (posts 8-14)
- etc.

**Usage in Templates**:
```liquid
{% for post in paginator.posts %}
  {{ post.title }}
{% endfor %}

{% include paginator.html %}
```

**Paginator Object**:
| Property | Description |
|----------|-------------|
| `paginator.posts` | Posts on current page |
| `paginator.page` | Current page number |
| `paginator.total_pages` | Total number of pages |
| `paginator.previous_page` | Previous page number |
| `paginator.next_page` | Next page number |

---

### jekyll-sitemap

**Purpose**: Automatically generates `sitemap.xml` for search engines.

**Configuration**: No configuration needed.

**Output**: `/sitemap.xml`

**Excluding Pages**:
```yaml
---
sitemap: false
---
```

---

### jekyll-gist

**Purpose**: Embed GitHub Gists in content.

**Usage**:
```liquid
{% gist username/gist_id %}
{% gist username/gist_id file.rb %}
```

**Example**:
```liquid
{% gist hwschuur/abc123def456 %}
```

---

### jekyll-feed

**Purpose**: Generates Atom feed for RSS readers.

**Configuration**:
```yaml
atom_feed:
  hide: true    # Hide feed link in footer
```

**Output**: `/feed.xml`

**Customization**:
```yaml
feed:
  path: atom.xml           # Custom path
  excerpt_only: true       # Only excerpts
  posts_limit: 20          # Limit posts
```

---

### jemoji

**Purpose**: GitHub-style emoji support.

**Usage**:
```markdown
This is great! :+1:
I love Jekyll :heart:
```

**Common Emojis**:
| Code | Emoji |
|------|-------|
| `:+1:` | :+1: |
| `:heart:` | :heart: |
| `:rocket:` | :rocket: |
| `:star:` | :star: |
| `:warning:` | :warning: |

**Full List**: [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

---

### jekyll-include-cache

**Purpose**: Caches include files for faster builds.

**Usage**:
```liquid
{% include_cached masthead.html %}
```

**When to Use**:
- Static includes that don't change per page
- Performance-critical includes

**When NOT to Use**:
- Includes that use page-specific variables
- Dynamic content

---

### jekyll-redirect-from

**Purpose**: Creates redirects from old URLs to new ones.

**Redirect TO another page**:
```yaml
---
permalink: /old-url/
redirect_to: /new-url/
---
```

**Redirect FROM old URLs**:
```yaml
---
permalink: /new-url/
title: "My Page"
redirect_from:
  - /old-url/
  - /another-old-url/
  - /legacy/path/
---
```

**How it Works**:
- Creates HTML files with meta refresh
- Works without server configuration

---

## Available But Not Active

### jekyll-algolia

**Purpose**: Algolia search integration.

**Status**: Listed in Gemfile but not configured.

**To Enable**:
1. Create Algolia account
2. Add to `_config.yml`:
```yaml
algolia:
  application_id: YOUR_APP_ID
  index_name: YOUR_INDEX_NAME
  search_only_api_key: YOUR_SEARCH_KEY
```
3. Run indexing:
```bash
ALGOLIA_API_KEY=your_admin_key bundle exec jekyll algolia
```

---

## GitHub Pages Compatibility

Only certain plugins work with GitHub Pages' built-in build:

### Supported Plugins
- jekyll-coffeescript
- jekyll-default-layout
- jekyll-feed
- jekyll-gist
- jekyll-github-metadata
- jekyll-include-cache
- jekyll-optional-front-matter
- jekyll-paginate
- jekyll-readme-index
- jekyll-redirect-from
- jekyll-relative-links
- jekyll-remote-theme
- jekyll-sass-converter
- jekyll-seo-tag
- jekyll-sitemap
- jekyll-titles-from-headings
- jemoji

### Not Supported (Require Custom Build)
- jekyll-archives
- jekyll-paginate-v2
- jekyll-algolia (indexing)
- Custom plugins

## Plugin Management

### Installing New Plugins

1. Add to `Gemfile`:
```ruby
group :jekyll_plugins do
  gem "new-plugin-name"
end
```

2. Add to `_config.yml`:
```yaml
plugins:
  - new-plugin-name
```

3. Run:
```bash
bundle install
```

### Updating Plugins

```bash
bundle update
```

Or update specific plugin:
```bash
bundle update jekyll-feed
```

### Checking Plugin Versions

```bash
bundle list | grep jekyll
```

## Troubleshooting

### Plugin Not Loading

1. Verify it's in both `Gemfile` and `_config.yml`
2. Run `bundle install`
3. Restart Jekyll server

### Plugin Not Compatible

If a plugin doesn't work with GitHub Pages:
- Use GitHub Actions for custom builds
- Or use alternative deployment (Netlify, Vercel)

### Plugin Conflicts

Check for version conflicts:
```bash
bundle exec gem dependency jekyll-plugin-name
```

---

See also: [Deployment](../getting-started/deployment.md) | [Theme Configuration](../customization/theme-configuration.md)
