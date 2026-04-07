# Reusable Blog Template Notes

These notes accompany `crawl-space-mold-health-risks-premium.html` and explain which blocks can be reused across future blog posts and service articles.

---

## Reusable blocks (use on any post)

| Block | CSS class | What it does | Best for |
|---|---|---|---|
| Article Hero | `.article-hero` | Navy gradient header with H1, subtitle, meta, back link | Every blog post. Change H1, subtitle, date. |
| Featured Image | `.article-featured-img` | Full-width image overlapping the hero bottom | Every post with a hero image. Swap `src` and `alt`. |
| Key Takeaways | `.callout-takeaways` | Green-bordered summary box with bullet points | Every post. Swap the 4-6 bullets. |
| Table of Contents | `.toc` | Numbered clickable H2 links | Any post with 4+ H2 sections. Update `href` and link text. |
| Symptom Checklist | `.checklist-card` | Gray card with checkbox-style list | Symptom lists, warning signs, comparison checklists. Add `--two-col` modifier for 2-column layout. |
| Info Callout | `.callout--info` | Blue-bordered box | Data points, stats, technical explanations. |
| Tip Callout | `.callout--tip` | Green-bordered box | Pro tips, best practices, layered approaches. |
| Warning Callout | `.callout--warning` | Amber-bordered box | Warning signs, things to watch for, risks. |
| Local Callout | `.callout--local` | Navy-bordered box with gradient background | Raleigh/Triangle-specific local factors. Swap city names and climate details per topic. |
| Process Steps | `.process-steps` + `.process-step` | Numbered circles with content blocks | Any multi-step process (how it works, what to expect). |
| Cost Snapshot | `.cost-snapshot` | Table in a gray card | Cost/pricing sections. Swap table rows. |
| Article Figure | `.article-figure` | Image with optional caption | Any in-article photo. |
| FAQ Section | `.faq-section` + `.faq-item` | Toggle FAQ with chevron animation | Every post. Change questions and answers. |
| Related Articles | `.related-section` + `.related-grid` | Card links to other blog posts | Every post. Update hrefs and titles. |
| Related Services | `.related-section` + `.related-grid--2col` | 2-column card links to service pages | Every post. Update hrefs and titles. |
| Final CTA | `.article-cta` | Navy gradient card with buttons | Every post. Update headline and supporting copy. |

---

## Which blocks work best for which post types

**Service-focused blog posts** (e.g., "Crawl Space Mold Health Risks," "Dehumidifier Cost"):
- All blocks. Heavy use of process steps, cost snapshot, warning callout, local callout.

**Educational / informational posts** (e.g., "Why Raleigh Homes Have Humidity Problems"):
- Key takeaways, TOC, info callouts, local callout, article figures, FAQ. Skip cost snapshot.

**Comparison posts** (e.g., "Encapsulation vs. Dehumidifier"):
- Key takeaways, TOC, checklist cards (side-by-side), cost snapshot, FAQ. Consider a comparison table in place of process steps.

**City/location pages** (e.g., a Holly Springs or Apex blog variant):
- Local callout is essential. Swap city names. Reduce FAQ to 3 questions. Add service area emphasis in CTA.

---

## What to swap for a different topic

1. **Hero**: Change H1, subtitle, and meta date. Keep the same layout.
2. **Key Takeaways**: Replace the 5 bullets with topic-specific summary points.
3. **TOC**: Update to match the H2 headings in the new article.
4. **Body sections**: Write new H2/H3 content. Drop in callout blocks where useful (you do not need every callout type in every post).
5. **Checklist card**: Replace symptom list with whatever list fits the topic (warning signs, what's included, comparison checklist).
6. **Cost snapshot**: Update the table rows with the relevant service and price ranges.
7. **Process steps**: Adjust the 3-step flow to match the service or topic (could be 2-step or 4-step).
8. **FAQ**: Replace questions and answers. Keep 4-6 questions for SEO value.
9. **Related Articles and Services**: Update the links and titles to match the topic.
10. **Final CTA**: Update the headline and body copy. Keep the phone number and contact link.

---

## CSS integration notes

- The CSS uses the same design tokens as `theme.css` (colors, fonts, radii, shadows). If you paste this into your Astro site, you can either add the blog-specific styles to `theme.css` or keep them in a separate `premium-blog.css` file and import it in `BlogPost.astro`.
- Class names are prefixed to avoid collisions: `article-`, `callout-`, `toc-`, `faq-`, `related-`, `process-`, `cost-snapshot`, `checklist-card`.
- The FAQ toggle script is vanilla JS, no dependencies. It works with any number of FAQ items.
- All blocks are responsive down to 320px. The checklist two-column layout collapses to single column below 520px.
