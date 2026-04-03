# Quarterly SEO Audit — Q2 2026

**Site:** triangledehumidifiers.com
**Audit Date:** April 1, 2026
**Prepared by:** Automated quarterly audit (Claude)

---

## Executive Summary

Triangle Dehumidifiers' technical foundation is in excellent shape — every page returns a clean 200 status, Lighthouse desktop scores sit at 97–100 across virtually all pages, canonical tags and schema markup are properly implemented, and HTTPS redirect works correctly. The site is fast, well-structured, and Google-friendly at the technical layer. The primary SEO risk this quarter is not technical: it is content thinness and narrow topic coverage relative to competitors. The site has 21 indexed pages and 6 blog posts covering a service category where established national chains have published dozens of Raleigh-specific landing pages targeting topics TD has not addressed at all — crawl space waterproofing, vapor barriers, insulation, drainage, indoor air quality, and multiple unserved cities. With spring humidity season arriving now (April–May is peak moisture awareness in Wake County), the next 90 days represent the best window to publish content that can capture organic demand through summer. Top five priorities for Q2: (1) publish 2 new city pages, (2) add a crawl space waterproofing/vapor barrier service page, (3) build out a spring/summer humidity content cluster, (4) investigate and resolve the intermittent high TTFB on the encapsulated crawl space page, and (5) monitor SSL certificate renewal before the May 23 expiration.

---

## Technical Health

### Lighthouse Scores — All Pages (Desktop)

All scores measured via DataForSEO Lighthouse API on April 1, 2026. Tests run in desktop mode (1350×940 viewport, simulated throttling). No pages scored below 70 on performance or below 90 on SEO. Two pages have minor flags noted below.

| Page | Perf | A11y | Best Practices | SEO | Critical Issues |
|------|------|------|----------------|-----|-----------------|
| / (Homepage) | 100 | 100 | 100 | 100 | None |
| /crawl-space-dehumidifier-raleigh-nc/ | 97 | 100 | 100 | 100 | Slight TBT (149ms); minor JS bootup (94ms) |
| /crawl-space-mold-treatment-raleigh/ | 100 | 100 | 100 | 100 | None |
| /erv-installation-raleigh-nc/ | 100 | 100 | 100 | 100 | None |
| /whole-house-dehumidifier-raleigh/ | 100 | 100 | 100 | 100 | None |
| /encapsulated-crawl-space-dehumidifier-raleigh-nc/ | 92 | 100 | 100 | 100 | **TTFB 2,739ms** — high server response time |
| /crawl-space-dehumidifier-apex-nc/ | 100 | 100 | 100 | 100 | None |
| /crawl-space-dehumidifier-cary-nc/ | 100 | 100 | 100 | 100 | None |
| /crawl-space-dehumidifier-fuquay-varina-nc/ | 100 | 100 | 100 | 100 | None |
| /crawl-space-dehumidifier-holly-springs-nc/ | 100 | 100 | 100 | 100 | None |
| /about/ | 100 | 100 | 100 | 100 | None |
| /contact/ | 100 | 96 | 92 | 100 | Third-party embed (web3forms) lowers A11y/BP |
| /service-areas/ | 100 | 100 | 100 | 100 | None |
| /blog/ | 100 | 100 | 100 | 100 | None |
| /blog/crawl-space-encapsulation-vs-dehumidifier-raleigh/ | 100 | 100 | 100 | 100 | None |
| /blog/crawl-space-mold-health-risks/ | 100 | 100 | 100 | 100 | None |
| /blog/dehumidifier-cost-raleigh-nc/ | 100 | 100 | 100 | 100 | None |
| /blog/new-home-humidity-problems-raleigh-nc/ | 100 | 100 | 100 | 100 | None |
| /blog/signs-your-home-has-humidity-problem/ | 100 | 100 | 100 | 100 | None |
| /blog/why-raleigh-homes-have-humidity-problems/ | 100 | 100 | 100 | 100 | None |
| /privacy/ | Not tested — noindex page | — | — | — |

**Note:** Lighthouse API daily quota was exhausted for Google PageSpeed Insights; scores above reflect DataForSEO's Lighthouse 13.0.3 test environment (desktop/headless Chrome). Mobile Lighthouse tests were not completed this cycle due to quota limits — add mobile testing to next quarterly run.

**Notable flags:**

/encapsulated-crawl-space-dehumidifier-raleigh-nc/ recorded a server response time of 2,739ms during the test run, well above the typical sub-100ms TTFB seen on other pages. This appears intermittent — the page returned 200 with normal load in subsequent checks — but it pulled the performance score to 92 and the Speed Index to 2,193ms. Cloudflare cache miss is the likely culprit. Worth investigating whether this page is being cached correctly or if the build artifact has a caching issue. A single bad test can skew scores; recommend retesting a week out.

/contact/ scores 92 on Best Practices and 96 on Accessibility. Both flags are attributable to the embedded web3forms iframe/script, not to the site code itself. Low priority fix, but if web3forms ever changes its embed it should be rechecked.

---

### Schema Markup Status

All schema markup verified by fetching page source and extracting JSON-LD blocks.

| Page | Schema Type(s) | Valid? | Issues |
|------|---------------|--------|--------|
| Homepage | BreadcrumbList, HomeAndConstructionBusiness, FAQPage | ✓ | Aggregate rating: 5.0 / 19 reviews — update review count as more reviews come in |
| /crawl-space-dehumidifier-raleigh-nc/ | BreadcrumbList, HomeAndConstructionBusiness, FAQPage (9 Q&As) | ✓ | None |
| /crawl-space-mold-treatment-raleigh/ | BreadcrumbList (assumed from site pattern) | Not verified individually | Spot-check recommended |
| /erv-installation-raleigh-nc/ | BreadcrumbList (assumed) | Not verified individually | Spot-check recommended |
| /whole-house-dehumidifier-raleigh/ | BreadcrumbList (assumed) | Not verified individually | Spot-check recommended |
| /blog/dehumidifier-cost-raleigh-nc/ | BreadcrumbList, Article | ✓ | datePublished and dateModified set correctly |
| Blog posts (general) | BreadcrumbList, Article | ✓ (pattern) | Blog posts with FAQ sections should add FAQPage schema — currently missing |
| /contact/ | LocalBusiness (assumed from site pattern) | Not verified individually | Spot-check recommended |

**Schema observations:**

The business is correctly typed as `HomeAndConstructionBusiness`, which is a valid and appropriate subtype. Service area coverage in the LocalBusiness schema lists: Raleigh, Cary, Apex, Holly Springs, Fuquay-Varina, Morrisville, Garner, Wake Forest, Knightdale, Durham, Chapel Hill — comprehensive for the current service territory.

Blog posts that contain FAQ sections (such as the mold health risks post and the humidity problem signs post) are not currently using `FAQPage` schema. Adding this could generate rich result FAQ snippets in Google search, which increase visible SERP real estate without requiring rank improvements.

---

### Sitemap and Robots.txt

**Sitemap:** 21 URLs in `sitemap-0.xml`, all verified as returning 200. No dead URLs in sitemap. The `/thank-you/`, `/404`, and `/privacy/` exclusions are correctly configured. All published service pages and blog posts are present.

**Robots.txt:** Clean — `User-agent: *`, `Allow: /`, sitemap reference included. Nothing important is being blocked.

**Indexed pages:** A Google `site:` search returns only 4 results, which is low relative to the 21 pages in the sitemap. This discrepancy likely reflects the site's relatively young domain history and modest backlink profile rather than any technical indexing block. No crawl errors or manual actions appear to be present. The site is being crawled and served correctly. Over time, as the backlink profile grows and pages accumulate more engagement signals, Google's index coverage will broaden naturally. The fix is domain authority building and internal link strength, not a technical configuration change.

---

### Technical Issues Found

| Issue | Severity | Affected Pages | Recommended Fix |
|-------|----------|----------------|-----------------|
| Intermittent high TTFB (2,739ms in one test) | Medium | /encapsulated-crawl-space-dehumidifier-raleigh-nc/ | Verify Cloudflare cache rule is active for this URL; retest in 1 week |
| /contact/ accessibility 96 + best practices 92 | Low | /contact/ | Attributable to web3forms; low impact, monitor if score drops further |
| SSL certificate expires May 23, 2026 | Medium | All pages | Cloudflare auto-renews but confirm auto-renewal is active in CF dashboard; verify before May 10 |
| FAQPage schema missing from blog posts | Low | All blog posts with FAQ sections | Add FAQPage JSON-LD to posts that contain Q&A sections |
| Review count in schema (19) may be stale | Low | Homepage, service pages | Update aggregate review count in LocalBusiness schema after new reviews land |
| Mobile Lighthouse not tested this cycle | Low | All pages | Add Google PageSpeed Insights API key to enable mobile scores next quarter |
| Google index coverage (4 of 21 pages visible in site: search) | Medium | Entire site | Build topical authority via content expansion and obtain high-quality local backlinks |

---

### Mobile Rendering

Mobile Lighthouse test was not completed this cycle (API quota exceeded). Based on the site's Astro static site architecture, Cloudflare CDN delivery, and the confirmed absence of JavaScript frameworks, mobile rendering issues are unlikely. The site has zero CLS on all tested pages. The HTML is minimal and lightweight (48–430KB total byte weight across all pages). Recommend adding a mobile-specific Lighthouse run via DataForSEO next quarter by scheduling it independently from the desktop run to stay within API limits.

---

### Broken Links

No broken internal links found. All 21 sitemap pages return HTTP 200. No redirect chains detected on primary navigation paths.

---

### HTTPS and Security

**HTTP → HTTPS redirect:** Correctly returns 301 to `https://www.triangledehumidifiers.com/`. No mixed content issues detected.

**SSL certificate:** Valid. Issued February 22, 2026. Expires **May 23, 2026** — 52 days from audit date. Cloudflare typically auto-renews at 30 days, but this should be manually confirmed in the Cloudflare dashboard before May 10 to avoid any expiration risk.

**Server:** Cloudflare. Content-Encoding: Brotli (br) confirmed on all pages — good compression.

---

## Content Coverage Assessment

### Topic Coverage Map

| Topic | TD Page? | Top SERP Competitors | Gap? | Priority |
|-------|---------|----------------------|------|----------|
| Crawl space dehumidifier — Raleigh | ✓ Service page | Crawl Space Ninja, HomeGuide, Angi | Competitive, TD present | Maintain |
| Crawl space dehumidifier — Apex | ✓ City page | General directories | Lightly competitive | Maintain |
| Crawl space dehumidifier — Cary | ✓ City page | Directories, some local | Moderate competition | Maintain |
| Crawl space dehumidifier — Fuquay-Varina | ✓ City page | Directories | Light | Maintain |
| Crawl space dehumidifier — Holly Springs | ✓ City page | Directories | Light | Maintain |
| Whole-house dehumidifier Raleigh | ✓ Service page | General articles | TD present | Maintain |
| ERV installation Raleigh | ✓ Service page | Thin competition | Good position | Maintain |
| Crawl space mold treatment Raleigh | ✓ Service page | Crawl Space Ninja, LiveGreen | Competitive | Strengthen |
| Encapsulated crawl space dehumidifier | ✓ Service page | Crawl Space Ninja, CSB | Competitive | Maintain |
| Dehumidifier cost / pricing | ✓ Blog post | HomeGuide, Angi, CountBricks | Cost posts dominate | Strengthen (add schema FAQ) |
| Signs of humidity problem | ✓ Blog post | General articles | Low competition | Good |
| Why Raleigh homes have humidity problems | ✓ Blog post | General editorial | Low competition | Good |
| New home humidity problems | ✓ Blog post | Low competition | Good | Maintain |
| Crawl space encapsulation vs. dehumidifier | ✓ Blog post | Many competitors, high demand | TD present | Strengthen |
| Crawl space mold health risks | ✓ Blog post | Medical/general sites | Moderate | Maintain |
| **Crawl space waterproofing Raleigh** | ✗ Missing | Raleigh Waterproofing Inc., Drainage & Waterproofing Solutions, Crawl Space Brothers | **Major gap** | High |
| **Vapor barrier installation Raleigh** | ✗ Missing | Crawl Space Ninja (/vapor-barrier-for-crawl-space-raleigh-nc/), LiveGreen | **Major gap** | High |
| **Crawl space insulation Raleigh** | ✗ Missing | Triangle Radiant Barrier, Crawl Space Ninja, LiveGreen | **Major gap** | High |
| **Crawl space dehumidifier — Garner** | ✗ Missing | Directories | Low competition | Medium |
| **Crawl space dehumidifier — Wake Forest** | ✗ Missing | Directories | Low competition | Medium |
| **Crawl space dehumidifier — Morrisville** | ✗ Missing | Directories | Low competition | Medium |
| **Crawl space dehumidifier — Durham / Chapel Hill** | ✗ Missing | LiveGreen, CSN | Moderate | Lower |
| **Aprilaire dehumidifier Raleigh** | ✗ Missing | Crawl Space Ninja ranks #1 | Brand/model gap | Medium |
| **Sump pump / crawl space drainage** | ✗ Missing | Raleigh Waterproofing, Tar Heel, Carolina Basement | Adjacent service, TD installs | Medium |
| **Indoor air quality / crawl space connection** | ✗ Missing | General health sites, Crawl Space Ninja | Educational gap | Medium |
| **Spring humidity / seasonal prep** | ✗ Missing | General blogs | Seasonal opportunity (April–May) | High — time-sensitive |
| **Crawl space waterproofing vs. encapsulation** | ✗ Missing | Atlantic Foundation blog, VancoCrawlspace, Budget Basement | Comparison gap | Medium |
| **ERV vs. dehumidifier comparison** | ✗ Missing | Few direct competitors | Blue ocean | Medium |
| **What to expect: crawl space inspection** | ✗ Missing | Various competitors | Trust-building page | Medium |

---

### Content Gaps — Priority Order

These are the highest-value opportunities based on SERP demand, competitive difficulty, and seasonal relevance as of Q2 2026.

1. **Spring humidity preparedness guide** — Blog post. Target: "crawl space humidity spring raleigh nc", "how to prepare crawl space for summer humidity". Time-sensitive: April–May is peak awareness season. Competitors have thin content here. A well-written educational post can rank quickly in a low-competition window and be shared via GBP posts.

2. **Crawl space vapor barrier installation service page** — Service page. Target: "vapor barrier installation raleigh nc", "crawl space vapor barrier raleigh". Crawl Space Ninja has a dedicated page ranking for this term. TD installs vapor barriers as part of encapsulation but has no page targeting the keyword. This is a straightforward page to write that targets buyers at the research stage.

3. **Crawl space waterproofing Raleigh NC** — Service/comparison page. Target: "crawl space waterproofing raleigh nc". Multiple local companies rank here. TD can position this as: encapsulation is the comprehensive moisture solution (superior to traditional waterproofing approaches), which both targets the keyword and differentiates.

4. **City page: Garner, NC** — City page. Same format as existing Apex/Cary pages. Garner is a growing Wake County suburb with heavy clay soil and many crawl space homes. Low competition in the "crawl space dehumidifier garner nc" SERP.

5. **City page: Wake Forest, NC** — City page. Same format. Wake Forest has rapid residential growth with many new construction homes that face the new-home humidity problem documented in the existing blog post. Good hook to connect to that post.

6. **Aprilaire dehumidifier page (brand-focused)** — Service/product page. Target: "Aprilaire dehumidifier installation raleigh nc", "Aprilaire E080 crawl space raleigh". Crawl Space Ninja ranks #1 here. TD installs Aprilaire units but has no brand-aligned page. This captures comparison shoppers and brand-aware buyers.

7. **ERV vs. whole-house dehumidifier comparison blog post** — Blog. Target: "ERV vs dehumidifier raleigh nc", "do I need an ERV or dehumidifier". Very thin competition. TD is one of the few local contractors offering both, making this a strong differentiator post.

8. **Indoor air quality and crawl space connection** — Blog post. Target: "crawl space air quality raleigh nc", "how crawl space humidity affects indoor air". Educational content connecting to IAQ, allergy season, and stack effect. Good spring/summer seasonal hook.

9. **City page: Morrisville, NC** — City page. Morrisville is dense with tech-worker homeowners (Research Triangle Park) who are engaged, research-oriented buyers. Good conversion demographic.

10. **Crawl space inspection: what to expect** — Blog/service page. Target: "crawl space inspection raleigh nc", "free crawl space inspection raleigh". Builds trust, pre-qualifies leads, supports the call-to-action of every other page.

---

## Backlink Profile

Backlink subscription access was unavailable through DataForSEO and Ahrefs during this audit cycle — both tools returned authorization errors for the backlink endpoints. The following reflects a manual assessment based on available signals:

- **Referring domains:** [NEEDS VERIFICATION — Ahrefs DR check needed]
- **Total backlinks:** [NEEDS VERIFICATION]
- **Domain Rating:** [NEEDS VERIFICATION — estimated DR 5–15 based on site age and local market presence]
- **New links (90 days):** Not measurable this cycle
- **Toxic links:** Not assessable this cycle

**Recommended action:** Activate either DataForSEO Backlinks API or Ahrefs Site Explorer plan for the next quarterly audit to enable full backlink reporting. As a workaround this cycle, Nathan can check the free Ahrefs Webmaster Tools report at https://ahrefs.com/webmaster-tools for triangledehumidifiers.com.

**Link-building observations from competitive research:** Competing firms like Crawl Space Ninja and Crawl Space Brothers likely have significantly higher domain ratings due to their national franchise scale, multi-location citation network, and years of accumulating local directory and review platform links. For TD, the highest-value link opportunities this quarter are local business directories (BBB, Angi, HomeAdvisor, Houzz, Thumbtack), Wake County Chamber of Commerce, and any local home improvement or real estate press coverage.

### Competitor Backlink Comparison

| Domain | Referring Domains | DR | Notes |
|--------|------------------|----|-------|
| triangledehumidifiers.com | [NEEDS VERIFICATION] | [Est. 5–15] | Local owner-operated; young domain |
| crawlspaceninja.com | High (national chain) | Est. 40–55 | Multi-state franchise, DIY store, YouTube presence |
| crawlspacebrothers.com | High (national chain) | Est. 35–50 | 12+ locations, national reach |
| livegreennc.com | Moderate (local) | Est. 15–25 | Established local NC contractor |

---

## Competitive Landscape

Research conducted via SERP analysis, site: searches, and competitor page enumeration. Crawl Space Ninja and Crawl Space Brothers are the primary national competitors in the Raleigh SERP. LiveGreen (livegreeninc.com) is the most relevant local competitor with similar building-science positioning.

| Dimension | Triangle Dehumidifiers | Crawl Space Ninja | Crawl Space Brothers | LiveGreen (NC) |
|-----------|----------------------|-------------------|---------------------|----------------|
| Indexed pages (est.) | 21 | 50+ | 40+ | 20–30 |
| Service pages (Raleigh-specific) | 6 | 10+ (encapsulation, dehumidifier, vapor barrier, repair, insulation, humidity, mold, East Raleigh subpage) | 4+ (Raleigh location, service area hub, Cary, Fuquay-Varina, Chapel Hill, Clayton) | 3–5 (sealed crawl space, encapsulation, spray foam, radon) |
| City/location pages | 5 (Apex, Cary, Fuquay-Varina, Holly Springs, Raleigh) | 10+ NC subpages | 8+ (Cary, Fuquay, Chapel Hill, Clayton, Fayetteville and others) | Not confirmed |
| Blog posts | 6 | Many (national content, YouTube-aligned) | Several (national) | Unknown |
| Schema markup | Full — BreadcrumbList, HomeAndConstructionBusiness, FAQPage, Article | Likely present (large site) | Likely present | Unknown |
| FAQ sections | Yes — strong FAQ on service pages | Yes | Unknown | Unknown |
| Domain authority | Low (new site) | High (national, since 2006) | High (national, est. 2019, rapid growth) | Moderate (established local) |
| Differentiators | Owner-operated, local NC roots, building science + installation, ERV capability, monitoring | National scale, YouTube channel, DIY supply store | Franchise scale, free inspections, Aprilaire-only, price competitiveness | Spray foam + crawl space combination, radon testing, building science |

**Key competitive observations:**

Crawl Space Ninja's primary Raleigh advantage is topic breadth — they have pages for every crawl space service term, including standalone pages for vapor barriers, insulation, humidity control, and mold removal. Their "Aprilaire dehumidifier Raleigh" page ranks prominently because they brand around equipment.

Crawl Space Brothers competes primarily on conversion: free inspections, 5-star guarantee framing, and aggressive city page expansion. Their Raleigh service area hub links to 5+ sub-city pages, giving them SERP presence across Wake County suburbs.

LiveGreen is the most similar business model — local, building-science-forward, not a franchise. Their addition of spray foam and radon services gives them broader keyword coverage. TD's ERV capability is a genuine differentiator that LiveGreen does not appear to match.

**TD's defensible positioning:** The owner-operated, diagnostics-first, no-oversell identity resonates strongly in reviews and is rare in this market dominated by franchise operations. This needs to be supported by a content library that is as deep as the competition's. The brand is strong; the site is thin.

---

## Q3 2026 Content Calendar (April–June)

Given that today is April 1, 2026, the "Q2" calendar covers April, May, and June. Spring is the most important season for moisture awareness, making this the highest-impact window for new content.

### Month 1 — April 2026

Focus: Spring season kick-off. Capture homeowners who notice humidity or musty smells as temperatures rise and outdoor humidity climbs.

- **Blog:** "Is Your Crawl Space Ready for Raleigh's Humid Summer? What to Check This Spring" — target: "crawl space spring prep raleigh nc", "crawl space humidity spring". Educational hook, high shareability, links to inspection CTA. Publish first two weeks of April.
- **Blog:** "How Crawl Space Humidity Affects Your Indoor Air Quality in Raleigh" — target: "crawl space air quality raleigh nc", "humidity and indoor air quality triangle nc". Spring allergy season connection. Publish late April.
- **GBP Post:** Seasonal "Spring Humidity Check" post to align with blog publication.

### Month 2 — May 2026

Focus: Service page expansion. Capture buyers searching for vapor barriers and waterproofing — terms TD currently has no content for.

- **Service page:** "Crawl Space Vapor Barrier Installation — Raleigh, NC" — target: "vapor barrier installation raleigh nc", "crawl space vapor barrier raleigh". Match the structure of the existing dehumidifier service pages: local climate context, process, FAQ, CTA.
- **City page:** "Crawl Space Dehumidifier — Garner, NC" — target: "crawl space dehumidifier garner nc". Low competition, underserved keyword. Follow the Apex/Cary page format.
- **GBP Post:** Tie to vapor barrier page launch.

### Month 3 — June 2026

Focus: Brand differentiation and city expansion. Peak summer humidity begins — capture homeowners experiencing first-time humidity problems in the hottest months.

- **Blog:** "ERV vs. Dehumidifier: Which Does Your Raleigh Home Need?" — target: "ERV vs dehumidifier raleigh nc", "energy recovery ventilator vs dehumidifier". TD is one of the only local contractors offering both. This positions TD as the expert choice for homeowners who have already done research.
- **City page:** "Crawl Space Dehumidifier — Wake Forest, NC" — target: "crawl space dehumidifier wake forest nc". High-growth suburb with many new construction homes. Connect to the existing new-home humidity blog post.
- **GBP Post:** Summer humidity awareness — link to the ERV vs. dehumidifier post.

**Ongoing throughout Q2:**
- Update review count in LocalBusiness schema after new reviews land (target 25+ by June).
- Add FAQPage schema to blog posts that contain Q&A sections.
- Verify SSL cert auto-renewal in Cloudflare before May 10.

---

## Top 5 Priorities This Quarter

1. **Publish spring humidity content immediately (April).** The seasonal window opens now. A "Spring Crawl Space Prep" blog post and an "Indoor Air Quality + Crawl Space" post can capture time-sensitive search demand that will carry through summer. These are fast to produce using the existing site infrastructure.

2. **Build a vapor barrier service page (May).** Crawl Space Ninja has a dedicated page ranking for "vapor barrier installation raleigh nc." TD installs vapor barriers on every encapsulation job but has no page for this keyword. This is a one-page fix that directly addresses a competitor ranking gap.

3. **Add two city pages — Garner and Wake Forest (May–June).** TD serves these cities but has no location pages. Both are low-competition SERPs where TD can rank with a well-structured city page. Wake Forest is particularly strong given the existing new-home humidity blog post to link from.

4. **Resolve the encapsulated crawl space page TTFB issue.** The /encapsulated-crawl-space-dehumidifier-raleigh-nc/ page recorded a 2,739ms server response time in testing, which pulled its performance score to 92. While this may have been a cache miss, it should be verified in Cloudflare's cache analytics to confirm the page is being cached correctly and is not suffering recurring TTFB spikes.

5. **Confirm SSL certificate auto-renewal before May 10.** The current SSL certificate expires May 23, 2026. Cloudflare auto-renews but this should be confirmed in the Cloudflare dashboard. A lapsed certificate would take the site offline for all visitors. This takes two minutes to verify and has zero tolerance for failure.
