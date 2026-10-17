# Architecture Overview

This document describes the high-level architecture of the hwschuur.nl website.

## Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                      GitHub Pages                           │
│  (Hosting, CDN, SSL, Custom Domain)                        │
├─────────────────────────────────────────────────────────────┤
│                    Jekyll 3.10                              │
│  (Static Site Generator)                                    │
├─────────────────────────────────────────────────────────────┤
│              Minimal Mistakes Theme 4.27.0                  │
│  (Remote Theme via GitHub)                                  │
├─────────────────────────────────────────────────────────────┤
│   SCSS Customizations  │  Custom Layouts  │  Content       │
│   (_sass/)             │  (_layouts/)     │  (_posts/, _pages/)│
└─────────────────────────────────────────────────────────────┘
```

## How Jekyll Works

Jekyll transforms source files into a static HTML website:

```
Source Files                    Build Process                 Output
─────────────                   ─────────────                 ──────
_posts/*.md          ──┐
_pages/*.md          ──┤                                     _site/
_layouts/*.html      ──┼────▶   Jekyll Build   ────▶        ├── index.html
_includes/*.html     ──┤                                     ├── work/
_sass/*.scss         ──┤                                     ├── contact/
_config.yml          ──┘                                     ├── 2025/...
                                                             └── assets/
```

### Build Phases

1. **Configuration Loading**: `_config.yml` is parsed
2. **Content Processing**: Markdown files are converted to HTML
3. **Layout Application**: Content is wrapped in layouts
4. **Include Resolution**: Partials are inserted
5. **SCSS Compilation**: Stylesheets are compiled to CSS
6. **Output Generation**: Static files written to `_site/`

## Remote Theme Architecture

This site uses Minimal Mistakes as a **remote theme**:

```yaml
remote_theme: mmistakes/minimal-mistakes@4.27.0
```

This means:
- Theme files are downloaded from GitHub at build time
- No need to include theme files in the repository
- Theme updates require changing the version number
- Local overrides take precedence over theme files

### Override Priority

When Jekyll looks for a file:

```
1. Local file (in this repository)    ← Highest priority
2. Remote theme file
3. Jekyll default                     ← Lowest priority
```

## Content Architecture

### Posts

Posts live in `_posts/` with date-prefixed filenames:

```
_posts/
├── 2025-06-16-illusionofthinking.md
├── 2025-05-22-io.md
├── 2025-05-15-aconversationwithjonyive.md
└── ... (31 posts total)
```

Each post has:
- **Front matter**: YAML metadata (title, tags, etc.)
- **Content**: Markdown body
- **Optional link**: For link posts pointing to external URLs

### Pages

Static pages live in `_pages/`:

```
_pages/
├── 404.md            # Error page
├── category-archive.md
├── contact.md        # Contact information
├── tag-archive.md
├── work.md           # Publications and talks
└── year-archive.md
```

### Collections Architecture

The site uses Jekyll's default collections:
- `posts` - Blog entries (built-in)
- `pages` - Static pages (included via config)

## Layout Hierarchy

Layouts inherit from each other:

```
default.html
    │
    ├── home.html (extends single.html)
    │       └── index.html uses this
    │
    ├── single.html
    │       └── All posts and pages use this
    │
    └── Other layouts (splash, posts, tags, etc.)
```

### Layout Flow

```
Content (post.md)
       │
       ▼
┌──────────────────┐
│   single.html    │  ← Adds article wrapper, meta, related posts
│   layout: default│
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   default.html   │  ← Adds HTML shell, head, masthead, footer
│   layout: none   │
└──────────────────┘
         │
         ▼
    Final HTML
```

## Styling Architecture

### SCSS Structure

```
_sass/
├── minimal-mistakes.scss      # Main import file
└── minimal-mistakes/
    ├── _variables.scss        # Customized variables
    ├── _base.scss             # Base styles
    ├── _page.scss             # Page layout
    ├── _archive.scss          # Archive listings
    ├── _sidebar.scss          # Sidebar styles
    ├── _navigation.scss       # Navigation styles
    ├── skins/                 # Color skins
    │   └── _dirt.scss         # Active skin
    └── vendor/                # Third-party styles
```

### Skin System

The theme uses a skin system for color schemes:

```yaml
# _config.yml
minimal_mistakes_skin: dirt
```

Available skins: air, aqua, contrast, dark, **dirt**, neon, mint, plum, sunrise

## Data Flow

### Configuration to Templates

```
_config.yml
    │
    ├── site.title ─────────▶ {{ site.title }}
    ├── site.author ────────▶ {{ site.author.bio }}
    └── site.defaults ──────▶ Default front matter
```

### Navigation

```
_data/navigation.yml
    │
    ▼
masthead.html
    │
    ▼
Rendered navigation menu
```

## Plugin Architecture

Plugins extend Jekyll's functionality:

| Plugin | Purpose |
|--------|---------|
| jekyll-paginate | Splits posts across multiple pages |
| jekyll-sitemap | Generates sitemap.xml |
| jekyll-feed | Creates Atom feed |
| jekyll-gist | Embeds GitHub Gists |
| jemoji | GitHub-style emoji support |
| jekyll-include-cache | Caches include files |
| jekyll-redirect-from | URL redirects |

## Request Flow (Production)

```
User Request
    │
    ▼
GitHub Pages CDN
    │
    ▼
hwschuur.nl (Custom Domain)
    │
    ▼
Static HTML/CSS/JS
    │
    ▼
User's Browser
```

## Key Design Decisions

1. **Remote Theme**: Keeps repository clean, easy theme updates
2. **Minimal Customization**: Most theme defaults are used
3. **No Comments**: `comments: false` - reduces complexity
4. **No Search**: `search: false` - keeps site simple
5. **Hidden Author Profile**: Content-focused design
6. **Link Posts**: Allows curating external content
7. **Dirt Skin**: Warm, professional color scheme

---

See also: [Directory Structure](directory-structure.md) | [Theme Integration](theme-integration.md)
