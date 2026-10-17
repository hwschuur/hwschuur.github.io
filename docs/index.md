# hwschuur.nl Documentation

Welcome to the documentation for **hwschuur.nl**, the personal website and portfolio of Dr. Henk van der Schuur. This Jekyll-based static site is hosted on GitHub Pages using the Minimal Mistakes theme.

## Quick Links

- [Getting Started](getting-started/installation.md) - Set up your local development environment
- [Architecture Overview](architecture/overview.md) - Understand how the site is structured
- [Content Guide](content/writing-posts.md) - Learn how to create and manage content
- [Customization](customization/theme-configuration.md) - Customize the look and feel

## Site Overview

| Property | Value |
|----------|-------|
| **Framework** | Jekyll 3.10 |
| **Theme** | Minimal Mistakes 4.27.0 (remote) |
| **Skin** | dirt |
| **Hosting** | GitHub Pages |
| **Domain** | hwschuur.nl |
| **Posts** | 31 published articles |

## Technology Stack

- **Static Site Generator**: Jekyll
- **Theme**: Minimal Mistakes (remote theme via GitHub)
- **Styling**: SCSS with customized Minimal Mistakes partials
- **Analytics**: Google Analytics (gtag)
- **Hosting**: GitHub Pages
- **Build Tools**: Ruby Bundler, GitHub Actions (implicit via GitHub Pages)

## Key Features

- **Blog/Posts**: Paginated homepage with latest posts (7 per page)
- **Work Portfolio**: Comprehensive listing of publications, talks, and academic work
- **Contact Page**: Professional contact information and social links
- **Responsive Design**: Mobile-friendly layout via Minimal Mistakes theme
- **SEO Optimized**: Built-in SEO tags and meta descriptions

## Documentation Structure

```
docs/
├── index.md                    # This file - Home page
├── getting-started/
│   ├── installation.md         # Local development setup
│   ├── quick-start.md          # Fast-track guide
│   └── deployment.md           # Publishing to GitHub Pages
├── architecture/
│   ├── overview.md             # High-level architecture
│   ├── directory-structure.md  # File organization
│   └── theme-integration.md    # Minimal Mistakes theme details
├── content/
│   ├── writing-posts.md        # Creating blog posts
│   ├── managing-pages.md       # Static pages guide
│   └── media-assets.md         # Images and files
├── customization/
│   ├── theme-configuration.md  # _config.yml settings
│   ├── styling.md              # SCSS customizations
│   └── layouts.md              # Layout overrides
└── reference/
    ├── front-matter.md         # YAML front matter reference
    ├── plugins.md              # Jekyll plugins used
    └── troubleshooting.md      # Common issues and fixes
```

## Navigation

The site uses a simple three-page navigation structure:

1. **Home** (`/`) - Blog post listing with pagination
2. **Work** (`/work/`) - Publications, talks, and academic credentials
3. **Contact** (`/contact/`) - Bio, resume, and contact links

## Quick Commands

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build

# Run with drafts visible
bundle exec jekyll serve --drafts
```

## Contributing to This Documentation

This documentation lives in the `/docs` folder of the repository. To update:

1. Edit the relevant Markdown file
2. Preview locally using a Markdown viewer or MkDocs
3. Commit and push changes

---

**Last Updated**: January 2026
**Site Owner**: Dr. Henk van der Schuur
**Repository**: hwschuur/hwschuur.github.io
