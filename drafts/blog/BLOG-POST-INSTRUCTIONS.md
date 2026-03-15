# New Blog Post: "Do New Homes Need Dehumidifiers?"

## Files Ready in This Folder

### Blog Post HTML
- `new-home-humidity-problems-raleigh-nc.html` — Complete blog post with all content, image tags, internal links, and CTA. Ready to convert to Astro.

### Images (optimized WebP, ready for production)
- `new-construction-home-raleigh-nc.webp` — 1200x675, 175 KB — Hero image below H1
- `window-condensation-humidity-new-home.webp` — 1200x675, 81 KB — Before the "Signs" checklist
- `crawl-space-dehumidifier-installation.webp` — 800x600, 39 KB — In the "What Actually Fixes It" section

## What Claude Code Needs to Do

### 1. Copy images to website assets
Copy the 3 `.webp` files into the appropriate image directory in the Astro project (likely `public/blog/images/` or `src/assets/blog/` depending on how the site handles images).

### 2. Create the blog post
Convert `new-home-humidity-problems-raleigh-nc.html` into an Astro blog post at:
```
src/content/blog/new-home-humidity-problems-raleigh-nc.md (or .mdx or .astro)
```

### 3. Frontmatter to include
```yaml
---
title: "Do New Homes Need Dehumidifiers? What Raleigh Homeowners Should Know"
description: "New construction homes in Raleigh, NC often have high indoor humidity despite running the AC. Here's why — and what actually fixes it."
slug: "new-home-humidity-problems-raleigh-nc"
date: 2026-03-05
image: "/blog/images/new-construction-home-raleigh-nc.webp"
imageAlt: "New construction home in Raleigh NC subdivision with fresh sod and young landscaping"
---
```

### 4. Image paths in the HTML
The `<img>` tags in the HTML reference these paths:
- `/blog/images/new-construction-home-raleigh-nc.webp`
- `/blog/images/window-condensation-humidity-new-home.webp`
- `/blog/images/crawl-space-dehumidifier-installation.webp`

Adjust these paths to match however the Astro project serves static images. If using Astro's `<Image>` component, convert the `<img>` tags accordingly.

### 5. Internal links to verify
These internal links are in the post — make sure the slugs match the live site:
- `/whole-house-dehumidifier-raleigh/`
- `/crawlspace-dehumidifier-installation-raleigh/`
- `/service-areas/`
- `/contact/` (CTA button)

### 6. Rebuild and deploy
After adding the post and images, run the Astro build to regenerate the sitemap (which will automatically include the new blog post via `@astrojs/sitemap`).
