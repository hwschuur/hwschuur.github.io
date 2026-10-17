# Deployment

This site is deployed automatically to GitHub Pages. This guide covers the deployment process and configuration.

## How Deployment Works

The site uses GitHub Pages' built-in Jekyll support:

1. Push changes to the `main` (or `master`) branch
2. GitHub Pages automatically runs `jekyll build`
3. The generated `_site/` is published to the custom domain

**No manual build step or CI/CD configuration is required.**

## Deployment Workflow

```bash
# Make your changes
# ...edit files...

# Check status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add new blog post about AI research"

# Push to GitHub
git push origin main
```

The site typically updates within 1-2 minutes after pushing.

## Custom Domain Configuration

The site uses a custom domain: **hwschuur.nl**

### DNS Configuration

The domain is configured via the `CNAME` file in the repository root:

```
hwschuur.nl
```

DNS records point to GitHub Pages servers. Typical configuration:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hwschuur.github.io |

### Verifying Domain Setup

Check domain status in the GitHub repository:

1. Go to **Settings > Pages**
2. Verify the custom domain is listed
3. Check that HTTPS is enforced

## Build Configuration

GitHub Pages builds are controlled by `_config.yml`:

```yaml
# Theme configuration
remote_theme: mmistakes/minimal-mistakes@4.27.0

# Build settings
markdown: kramdown
timezone: nl

# Plugins recognized by GitHub Pages
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jemoji
  - jekyll-include-cache
  - jekyll-redirect-from
```

### Excluded Files

Files excluded from the build (via `_config.yml`):

```yaml
exclude:
  - _posts/archive/
```

The archive folder contains example posts from the theme that are not published.

## Verifying Deployment

### Check Build Status

1. Go to the GitHub repository
2. Click **Actions** tab (if available) or check **Settings > Pages**
3. View the latest build status

### Check the Live Site

After deployment, verify:

- Homepage loads: https://hwschuur.nl/
- Posts display correctly
- Navigation works
- Images load

### Force a Rebuild

If the site doesn't update:

1. Make a trivial change (add a space to a file)
2. Commit and push
3. This triggers a fresh build

Or use GitHub's interface:
1. **Settings > Pages**
2. Look for "Unpublish site" / "Republish" options

## Pre-Deployment Checklist

Before pushing changes:

- [ ] Run `bundle exec jekyll serve` locally
- [ ] Verify all pages load without errors
- [ ] Check for broken links
- [ ] Confirm images display correctly
- [ ] Review console for JavaScript errors
- [ ] Test on mobile viewport

## Troubleshooting Deployment

### Build Failures

If the build fails:

1. Check email for GitHub build failure notification
2. Review the error message
3. Common issues:
   - YAML syntax errors in front matter
   - Missing closing tags in Liquid
   - Invalid date format in post filename

### Site Not Updating

If changes don't appear:

1. **Clear browser cache** (Cmd+Shift+R / Ctrl+Shift+R)
2. **Wait 5 minutes** - builds can take time
3. **Check build status** in GitHub Actions/Settings
4. **Verify the branch** - ensure you pushed to the correct branch

### CSS Not Updating

SCSS changes require a full rebuild:

1. Make a change to `_config.yml` (add a comment)
2. Push to trigger rebuild
3. Clear browser cache

### 404 Errors

If pages return 404:

1. Check the `permalink` in front matter
2. Verify the file is in the correct directory
3. Ensure the file is not in the `exclude` list

## GitHub Pages Limitations

Be aware of these constraints:

| Limit | Value |
|-------|-------|
| Repository size | 1 GB (soft limit) |
| Site size | 1 GB |
| Build time | 10 minutes |
| Bandwidth | 100 GB/month |
| Builds | 10 per hour |

### Supported Plugins

Only these plugins are supported by GitHub Pages' build process:

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

## Alternative Deployment Methods

If you need unsupported plugins, consider:

### GitHub Actions Custom Build

Create `.github/workflows/jekyll.yml` to build with Jekyll 4.x or custom plugins.

### Netlify

1. Connect repository to Netlify
2. Set build command: `jekyll build`
3. Set publish directory: `_site`

### Vercel

1. Import repository
2. Configure Jekyll build
3. Set output directory: `_site`

---

See also: [Installation](installation.md) | [Troubleshooting](../reference/troubleshooting.md)
