# hwschuur.nl Documentation

This folder contains comprehensive documentation for the hwschuur.nl Jekyll website.

## Viewing the Documentation

### Option 1: Read Markdown Files Directly

The documentation is written in Markdown and can be read directly on GitHub or in any Markdown viewer:

- Start with [index.md](index.md) for an overview
- Navigate through the folders for specific topics

### Option 2: MkDocs (Recommended)

For the best browsing experience, use MkDocs with the Material theme:

```bash
# Install MkDocs and the Material theme
pip install mkdocs mkdocs-material

# Navigate to the docs directory
cd docs

# Start the local server
mkdocs serve
```

Then open http://localhost:8000 in your browser.

### Option 3: Grip (GitHub-Flavored Markdown)

For a quick preview with GitHub styling:

```bash
# Install grip
pip install grip

# Navigate to docs and serve
cd docs
grip
```

Then open http://localhost:6419 in your browser.

### Option 4: VS Code or IDE

Most IDEs have built-in Markdown preview:
- VS Code: Cmd+Shift+V (Mac) or Ctrl+Shift+V (Windows)
- IntelliJ/WebStorm: Right-click > Open in Browser

## Documentation Structure

```
docs/
├── index.md                    # Home page and overview
├── getting-started/
│   ├── installation.md         # Setting up local development
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
├── reference/
│   ├── front-matter.md         # YAML front matter reference
│   ├── plugins.md              # Jekyll plugins used
│   └── troubleshooting.md      # Common issues and fixes
├── mkdocs.yml                  # MkDocs configuration
└── README.md                   # This file
```

## Quick Links

- **New to the project?** Start with [Installation](getting-started/installation.md)
- **Want to add content?** See [Writing Posts](content/writing-posts.md)
- **Need to customize?** Check [Theme Configuration](customization/theme-configuration.md)
- **Having issues?** Visit [Troubleshooting](reference/troubleshooting.md)

## Contributing to Documentation

To update the documentation:

1. Edit the relevant Markdown file
2. Preview your changes using one of the methods above
3. Commit and push to the repository

Documentation guidelines:
- Use clear, concise language
- Include code examples where helpful
- Add cross-references to related pages
- Keep the table of contents updated in mkdocs.yml
