# Installation

This guide walks you through setting up the hwschuur.nl website for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby** (version 2.7 or higher recommended)
- **Bundler** (Ruby gem manager)
- **Git** (for version control)

### Checking Prerequisites

```bash
# Check Ruby version
ruby --version

# Check Bundler
bundle --version

# Check Git
git --version
```

## Step 1: Clone the Repository

```bash
git clone https://github.com/hwschuur/hwschuur.github.io.git
cd hwschuur.github.io
```

## Step 2: Install Dependencies

The project uses Bundler to manage Ruby gems. Install all required dependencies:

```bash
bundle install
```

This reads the `Gemfile` and `Gemfile.lock` to install:

- **jekyll** (v3.10) - Static site generator
- **github-pages** - GitHub Pages compatibility gem bundle
- **jekyll-paginate** - Pagination for blog posts
- **jekyll-sitemap** - Automatic sitemap generation
- **jekyll-gist** - GitHub Gist embedding
- **jekyll-feed** - Atom feed generation
- **jemoji** - GitHub-style emoji support
- **jekyll-include-cache** - Caching for includes
- **jekyll-redirect-from** - URL redirects
- **jekyll-algolia** - Algolia search (optional)
- **kramdown** - Markdown processor
- **liquid** - Template engine

## Step 3: Run the Development Server

Start the local Jekyll server:

```bash
bundle exec jekyll serve
```

The site will be available at: **http://localhost:4000**

### Development Server Options

```bash
# Standard serve
bundle exec jekyll serve

# Include draft posts
bundle exec jekyll serve --drafts

# Live reload (auto-refresh browser)
bundle exec jekyll serve --livereload

# Specify a different port
bundle exec jekyll serve --port 4001

# Build for production (no serve)
bundle exec jekyll build
```

## Step 4: Verify the Installation

Once the server is running, open your browser and navigate to:

- **Homepage**: http://localhost:4000/
- **Work page**: http://localhost:4000/work/
- **Contact page**: http://localhost:4000/contact/

## Troubleshooting Installation

### Bundle Install Fails

If you encounter errors during `bundle install`:

```bash
# Update Bundler
gem update bundler

# Try installing with verbose output
bundle install --verbose

# Clear bundle cache and retry
bundle clean --force
bundle install
```

### Jekyll Version Conflicts

The site uses Jekyll 3.10 for GitHub Pages compatibility. If you have Jekyll 4.x globally installed:

```bash
# Always use bundle exec to ensure correct version
bundle exec jekyll serve
```

### Permission Errors on macOS

If you see permission errors:

```bash
# Install gems to a user directory
bundle config set --local path 'vendor/bundle'
bundle install
```

### Ruby Version Issues

This project works best with Ruby 2.7+. Consider using a Ruby version manager:

```bash
# Using rbenv
rbenv install 3.2.0
rbenv local 3.2.0

# Using rvm
rvm install 3.2.0
rvm use 3.2.0
```

## Generated Files

After running Jekyll, you will see:

- **_site/** - The generated static site (not committed to git)
- **Gemfile.lock** - Locked gem versions (committed to git)
- **.jekyll-cache/** - Jekyll's build cache (not committed)

## Next Steps

- [Quick Start Guide](quick-start.md) - Create your first post
- [Deployment Guide](deployment.md) - Publish to GitHub Pages

---

See also: [Directory Structure](../architecture/directory-structure.md) | [Configuration](../customization/theme-configuration.md)
