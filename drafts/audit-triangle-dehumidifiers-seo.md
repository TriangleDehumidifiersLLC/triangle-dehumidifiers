# SEO Audit: Triangle Dehumidifiers (triangledehumidifiers.com)

**Date:** 2026-03-15
**Audit Type:** Page Audit (Mode 3) — Schema, Technical SEO, Cannibalization
**Overall Score: 62/100**

---

## SERP Reality Check
- **Query analyzed:** "crawl space dehumidifier installation Raleigh NC"
- **Dominant intent:** local-service
- **Common page type ranking:** service page
- **SERP features present:** local pack, AI overview, PAA
- **Local pack present?** Yes
- **Are city pages ranking, or general service pages?** City-specific service pages
- **Does Google appear to prefer:** locality + authority + structured data

---

## On-Page SEO Checklist — Sitewide

| Element | Status | Issue | Fix |
|---------|--------|-------|-----|
| Schema type consistency | FAIL | Homepage uses `LocalBusiness`, service pages use `HomeAndConstructionBusiness` | Change homepage + service-areas + raleigh-nc page to `HomeAndConstructionBusiness` |
| Schema missing fields | FAIL | No `image`, `logo`, `aggregateRating`, `sameAs`, `geo`, `hasMap` on any page | Add to all business schema instances |
| Blog Article schema | FAIL | Missing `dateModified`; author is Organization, not Person | Add `dateModified`, change author to Person type |
| Contact page schema | FAIL | No LocalBusiness/HomeAndConstructionBusiness schema | Add business schema |
| Canonical trailing slashes | WARNING | Canonicals omit trailing slash (`/contact`) but Astro serves `/contact/` | Add trailing slashes to all canonical values |
| H1 rendering | WARNING | Homepage H1 has `<br />` tags splitting "Dehumidifier Installation in Raleigh, NC" | Remove `<br />` from H1, use CSS for line breaks if needed |
| Keyword cannibalization | FAIL | Two pages compete for "crawl space dehumidifier Raleigh" | 301 redirect one to the other |
| Blog title tag length | FAIL | `/dehumidifier-cost-raleigh-nc/` title is 124 chars (limit ~60) | Shorten title |
| FAQ on homepage | FAIL | No FAQ section or FAQPage schema on homepage | Add FAQ section |

---

## Critical Issue #1: Schema Type Inconsistency

**Pages using `LocalBusiness`:**
- `index.astro` (homepage)
- `crawl-space-dehumidifier-raleigh-nc.astro`
- `service-areas.astro`

**Pages using `HomeAndConstructionBusiness`:**
- `crawl-space-dehumidifier-installation-raleigh.astro`
- `whole-house-dehumidifier-raleigh.astro`
- `encapsulated-crawl-space-dehumidifier-raleigh-nc.astro`
- `erv-installation-raleigh-nc.astro`
- `crawl-space-mold-treatment-raleigh.astro`

**Fix:** Change all to `HomeAndConstructionBusiness` — it's the more specific and correct type for this business category.

---

## Critical Issue #2: Missing Schema Fields

Every business schema instance is missing these fields that directly affect Google Knowledge Panel and AI tool citations:

```json
"image": "https://www.triangledehumidifiers.com/images/hero-livingroom.webp",
"logo": {
  "@type": "ImageObject",
  "url": "https://www.triangledehumidifiers.com/logo.webp"
},
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "XX"
},
"sameAs": [
  "https://www.google.com/maps/place/Triangle+Dehumidifiers,+LLC/",
  "https://maps.app.goo.gl/5ZNkdiqdTqKvNqTH9"
],
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "35.6409",
  "longitude": "-78.8344"
},
"hasMap": "https://maps.app.goo.gl/5ZNkdiqdTqKvNqTH9"
```

**The `sameAs` field is especially important** — it links schema identity to GBP and social profiles, which is how Gemini and ChatGPT tie together web presence.

**Note:** `aggregateRating.reviewCount` needs to be filled with actual Google review count. `[NEEDS VERIFICATION]` — check GBP for current review count.

---

## Critical Issue #3: Keyword Cannibalization

| Page | URL | H1 | Schema Type |
|------|-----|-----|-------------|
| Vented Crawl Space | `/crawl-space-dehumidifier-installation-raleigh` | "...in Wake County & the Raleigh Area" | HomeAndConstructionBusiness |
| Raleigh NC | `/crawl-space-dehumidifier-raleigh-nc` | "...Installation in Raleigh, NC" | LocalBusiness |

Both target "crawl space dehumidifier installation Raleigh NC" — Google will pick one and suppress the other.

**Recommendation:** Keep `/crawl-space-dehumidifier-raleigh-nc` as the primary Raleigh page (better local content, new vs old construction angle). The `/crawl-space-dehumidifier-installation-raleigh` page serves as the "Vented Crawl Space" service page in the nav. These are sufficiently differentiated by intent (location page vs service-type page) BUT the content overlap is significant.

**Options:**
1. **301 redirect** the installation-raleigh page → raleigh-nc page, and merge unique content (installation process, equipment details) into the raleigh-nc page
2. **Differentiate more clearly** — retitle installation-raleigh to focus purely on "vented crawl space dehumidifier" without Raleigh geo-targeting, let raleigh-nc own the Raleigh keyword

Option 2 is safer since the installation-raleigh page is the nav link for "Vented Crawl Space" service.

---

## Critical Issue #4: Blog Article Schema

**Current (`BlogPost.astro`):**
```javascript
author: {
  '@type': 'Organization',
  name: 'Triangle Dehumidifiers, LLC',
}
// No dateModified field
```

**Should be:**
```javascript
author: {
  '@type': 'Person',
  name: 'Nathan Rider',
  url: 'https://www.triangledehumidifiers.com',
},
dateModified: dateModified || date,
```

Also need to add `dateModified` field to `content.config.ts` schema and all blog post frontmatter.

---

## Critical Issue #5: Canonical Trailing Slashes

Astro serves URLs with trailing slashes (default behavior). But all canonicals are set without:
- `canonical="/contact"` → serves as `/contact/`
- `canonical="/blog"` → serves as `/blog/`

**Fix in BaseLayout.astro:**
```javascript
// Add trailing slash if not root and doesn't already have one
const canonicalURL = canonical
  ? `https://www.triangledehumidifiers.com${canonical === '/' ? '' : canonical}${canonical !== '/' && !canonical.endsWith('/') ? '/' : ''}`
  : undefined;
```

Or simpler: just add `/` to every canonical prop value in each page.

---

## Issue #6: Blog Title Tag Too Long

**Current:** "How Much Does a Dehumidifier Cost in Raleigh, NC? (Crawl Space & Whole-Home Pricing Guide) | Triangle Dehumidifiers Blog" (124 chars)

**Recommended:** "Dehumidifier Cost in Raleigh NC | Triangle Dehumidifiers" (55 chars)

The BlogPost layout appends ` | Triangle Dehumidifiers Blog` automatically, so the frontmatter title itself needs to be short enough that the full rendered title stays under 60.

**Fix:** Change blog post title in frontmatter to something like: "Dehumidifier Cost in Raleigh, NC"
Then rendered: "Dehumidifier Cost in Raleigh, NC | Triangle Dehumidifiers Blog" = 62 chars (close enough)

---

## Issue #7: H1 Tags with `<br />` Elements

**Pages affected:**
- Homepage: `<h1>Dehumidifier<br />Installation in<br />Raleigh, NC</h1>`
- Contact: `<h1>Request a Free Home<br />Humidity Evaluation</h1>`
- Service Areas: `<h1>Dehumidifier, Crawl Space Mold & Ventilation<br />Services in Wake County & the Triangle</h1>`
- Installation Raleigh: `<h1>Crawl Space Dehumidifier Installation in<br />Wake County & the Raleigh Area</h1>`

Google reads the concatenated text fine but `<br />` in H1 is considered a minor negative signal. Use CSS `word-break` or `max-width` to control line breaks visually instead.

---

## Issue #8: Contact Page Missing Business Schema

The contact page only has BreadcrumbList schema (from BaseLayout). It should repeat the HomeAndConstructionBusiness schema since this is where users land to verify business legitimacy.

---

## Issue #9: No FAQ on Homepage

The homepage has no FAQ section — this is a missed opportunity for featured snippets and AI citations. Service pages all have FAQs; the homepage should too.

---

## Positive Findings
- BreadcrumbList schema is implemented consistently on all pages
- FAQPage schema is present on all service pages with well-written Q&A
- Internal linking is strong (16–19 links per page)
- Meta descriptions are well-written and within length limits
- Image alt text is descriptive and includes location keywords
- Cache headers properly set for static assets (1-year immutable)
- Reviews carousel provides strong social proof on homepage
- Service pages have deep, authoritative content

---

## Priority Fix List

### P1 — Fix This Week
1. Unify schema type to `HomeAndConstructionBusiness` on all pages
2. Add missing schema fields: `image`, `logo`, `aggregateRating`, `sameAs`, `geo`, `hasMap`
3. Fix canonical trailing slashes
4. Address keyword cannibalization between the two Raleigh pages

### P2 — Fix This Month
1. Add `author` (Person) and `dateModified` to blog Article schema
2. Add business schema to contact page
3. Fix blog title tag on dehumidifier-cost post
4. Clean up `<br />` tags in H1 elements
5. Add FAQ section to homepage
6. Add `dateModified` field to content.config.ts and all blog frontmatter
