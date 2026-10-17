# Media Assets

This guide covers managing images, PDFs, and other media files.

## Asset Directory Structure

```
assets/
├── cv-hwschuur.pdf           # Resume PDF
├── favicon/                  # Favicon files
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   └── site.webmanifest
└── images/
    ├── bio-photo.png         # Main author avatar
    ├── bio-photo-small.png   # Small avatar for pages
    └── posts/                # Post-specific images
```

## Images

### Image Location

Store images in `assets/images/`:

- **Author photos**: `assets/images/bio-photo.png`
- **Post images**: `assets/images/posts/`
- **Page images**: `assets/images/`

### Adding Images to Posts

#### Basic Markdown Image

```markdown
![Alt text](/assets/images/posts/my-image.png)
```

#### Figure Include (Recommended)

```liquid
{% include figure image_path="/assets/images/posts/my-image.png" alt="Description of image" caption="Optional caption text" %}
```

Parameters:
| Parameter | Required | Description |
|-----------|----------|-------------|
| `image_path` | Yes | Path to image |
| `alt` | Yes | Alt text for accessibility |
| `caption` | No | Caption below image |
| `class` | No | CSS class for styling |

#### Full-Width Image

```liquid
{% include figure image_path="/assets/images/wide-image.png" alt="Wide image" class="full" %}
```

### Image Optimization

Before uploading images:

1. **Resize**: Scale to reasonable dimensions (max 1200px width for content)
2. **Compress**: Use tools like ImageOptim, TinyPNG, or Squoosh
3. **Format**:
   - JPEG for photos
   - PNG for graphics/screenshots
   - WebP for modern browsers (with fallback)

### Recommended Image Sizes

| Use Case | Dimensions | Format |
|----------|------------|--------|
| Author avatar | 200x200 | PNG |
| Post image (inline) | 800px wide | JPEG/PNG |
| Hero/header | 1200x400 | JPEG |
| Thumbnail | 300x200 | JPEG |

## PDFs and Documents

### Location

Store documents in `assets/`:

```
assets/
├── cv-hwschuur.pdf
└── papers/
    └── research-paper.pdf
```

### Linking to PDFs

```markdown
Download my [resume](/assets/cv-hwschuur.pdf).

Read the [full paper](/assets/papers/research-paper.pdf).
```

### PDF Best Practices

- Keep file sizes reasonable (under 5MB)
- Use descriptive filenames
- Consider linking to external hosting for large files

## Favicons

The site uses multiple favicon formats for cross-browser/device support:

```
assets/favicon/
├── apple-touch-icon.png      # iOS home screen
├── favicon.ico               # Classic browsers
├── favicon.svg               # Modern browsers
├── favicon-96x96.png         # Android/Chrome
├── web-app-manifest-192x192.png  # PWA small
├── web-app-manifest-512x512.png  # PWA large
└── site.webmanifest          # PWA manifest
```

### site.webmanifest

```json
{
    "name": "Henk van der Schuur",
    "short_name": "hwschuur",
    "icons": [
        {
            "src": "/assets/favicon/web-app-manifest-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/assets/favicon/web-app-manifest-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

### Generating Favicons

Use a favicon generator like [RealFaviconGenerator](https://realfavicongenerator.net/):

1. Upload your source image (SVG or high-res PNG)
2. Configure options for each platform
3. Download the package
4. Extract to `assets/favicon/`

## External Media

### Hosting Considerations

For large files or many images, consider external hosting:

- **Images**: Cloudinary, Imgix, or GitHub LFS
- **Videos**: YouTube, Vimeo (embed)
- **PDFs**: Own domain (`content.hwschuur.nl`) or cloud storage

### Embedding External Images

```markdown
![External image](https://external-site.com/image.png)
```

### Embedding Videos

YouTube:
```liquid
{% include video id="VIDEO_ID" provider="youtube" %}
```

Vimeo:
```liquid
{% include video id="VIDEO_ID" provider="vimeo" %}
```

## Image Paths

### Absolute vs Relative Paths

Use absolute paths from the site root:

```markdown
<!-- Correct: Absolute from root -->
![Image](/assets/images/photo.png)

<!-- Avoid: Relative paths -->
![Image](../assets/images/photo.png)
```

### In Front Matter

```yaml
---
header:
  image: /assets/images/header.jpg
author:
  avatar: /assets/images/bio-photo.png
---
```

## Asset Organization

### Naming Conventions

- Use lowercase
- Use hyphens for spaces: `my-image-name.png`
- Be descriptive: `2025-conference-presentation.pdf`
- Include dates for versioned files: `cv-2025-01.pdf`

### Folder Structure for Large Sites

```
assets/images/
├── posts/
│   ├── 2025/
│   │   ├── january/
│   │   └── february/
│   └── 2024/
├── pages/
│   ├── about/
│   └── work/
├── headers/
└── icons/
```

## Git and Large Files

### .gitignore

The following are typically ignored:

```
*.psd
*.ai
*.sketch
```

### GitHub File Size Limits

- Individual files: 100 MB max
- Repository: 1 GB recommended limit
- Consider Git LFS for large files

### Git LFS (If Needed)

For repositories with many large files:

```bash
# Install Git LFS
git lfs install

# Track large file types
git lfs track "*.pdf"
git lfs track "*.psd"

# Commit .gitattributes
git add .gitattributes
git commit -m "Configure Git LFS"
```

## Accessibility

### Alt Text Guidelines

Every image should have meaningful alt text:

```markdown
<!-- Good: Descriptive -->
![Screenshot of the application dashboard showing user statistics](/assets/images/dashboard.png)

<!-- Poor: Non-descriptive -->
![Image](/assets/images/dashboard.png)

<!-- Decorative images: Empty alt -->
![](/assets/images/decorative-divider.png)
```

### Image Captions

Use captions for context:

```liquid
{% include figure
   image_path="/assets/images/chart.png"
   alt="Bar chart showing growth from 2020 to 2025"
   caption="Figure 1: Annual growth metrics" %}
```

---

See also: [Writing Posts](writing-posts.md) | [Managing Pages](managing-pages.md)
