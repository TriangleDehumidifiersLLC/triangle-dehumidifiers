# Biweekly Performance Review — April 1, 2026

> **Context:** triangledehumidifiers.com launched approximately February 21, 2026. The site is only 38 days old as of this report. There is no full prior 28-day period to compare against — the "previous period" below covers the site's first 11 days (Feb 21–Mar 3). Growth numbers are large because the baseline is near zero. This is expected and healthy for a new site.

---

## Executive Summary

The site is on a strong growth trajectory for its first five weeks of life. Organic impressions jumped from 47 (launch through March 3) to 1,430 in the most recent 28 days — a 2,945% increase driven by Google's expanding crawl and index coverage. Clicks grew from 7 to 21 and average position improved slightly from 13.7 to 12.2. The most urgent issue is not a decline — it's a cluster of pages that are accumulating impressions but generating zero clicks. The `/whole-house-dehumidifier-raleigh/` page alone has 188 impressions at position 14 with 0% CTR and needs title and content work to break onto page 1. A secondary issue is URL canonicalization: several pages are appearing without trailing slashes and picking up independent impressions, which dilutes crawl equity. PageSpeed is strong across the board.

---

## Priority Actions

1. **Rewrite the title/meta for `/whole-house-dehumidifier-raleigh/`** — 188 impressions, position 14, 0 clicks. This page is the biggest traffic opportunity right now. Moving from position 14 to position 8–10 would start generating consistent clicks. Review and strengthen the H1, intro, and internal linking to it.

2. **Fix trailing-slash redirect gaps** — `/contact`, `/crawlspace-dehumidifier-installation-raleigh`, and `/whole-house-dehumidifier-raleigh` (all without trailing slash) are appearing separately in GSC. Confirm these non-slash URLs are returning 301 redirects to their canonical `/trailing-slash/` versions. Each one is diluting authority.

3. **Investigate `/privacy/` appearing in GSC at position 5.0 with 60 impressions** — Per the codebase, the privacy page should be set to `noindex: true`. If that's correctly in place, these impressions may be a GSC lag. If the noindex is missing, add it immediately. A privacy page ranking on page 1 wastes crawl budget and looks unprofessional in SERPs.

---

## GSC Query Trends — 28-Day Comparison

| Period | Clicks | Impressions | CTR | Avg Position | Queries |
|--------|--------|-------------|-----|-------------|---------|
| Feb 21–Mar 3 (launch, 11 days) | 7 | 47 | 14.9% | 13.7 | 5 |
| Mar 4–Mar 31 (recent 28 days) | 21 | 1,430 | 1.5% | 12.2 | 112 |

Note on CTR drop: The decline from 14.9% to 1.5% is normal for a growing site. The early CTR was high because the site only appeared for a handful of branded or highly specific queries. As it's indexed for more queries — most of which are long-tail or moderately competitive — the average CTR naturally dilutes. This is not a concern.

---

### Climbing Queries (Momentum)

| Query | Position Change | Impressions Change | Current Position | Page |
|-------|----------------|-------------------|-----------------|------|
| dehumidifier installation raleigh nc | +9.4 spots | +900% (4 → 40 imp) | 41.8 | /crawlspace-dehumidifier-installation-raleigh/ (likely) |
| crawl space dehumidifier installation near me | New to top results | — | 9.7 | /crawl-space-dehumidifier-raleigh-nc/ (likely) |
| energy recovery ventilator raleigh nc | Stable | New impressions (7) | 9.4 | /erv-installation-raleigh-nc/ |

**Notable:** "dehumidifier installation raleigh nc" improved 9 spots in 28 days — strong momentum. It's still deep (pos 41.8) but gaining quickly. Worth monitoring weekly. At current trajectory, it could reach page 2–3 within another month.

---

### Slipping Queries (Investigate)

No significant declines detected. The site is too new to have established enough query history to show regression. This section will be more meaningful in the next biweekly cycle.

---

### High Impression / Low CTR — Title Fix Candidates

These queries are ranking but getting 0 clicks. For queries at position 1–10 this is a title/description problem. For queries at position 11–20, getting to page 1 first is the fix.

| Query | Impressions | CTR | Position | Likely Page | Action |
|-------|------------|-----|----------|-------------|--------|
| dehumidifier installation | 41 | 0% | 4.8 | Homepage or /crawl-space-dehumidifier-raleigh-nc/ | Position 5 with 0 clicks is a clear title problem. Add specificity: city, brand signal, or a clear service hook. |
| dehumidifier services | 58 | 0% | 10.7 | Homepage (likely) | Just off page 1. Homepage title may be too generic to earn a click when competing with service-specific results. |
| dehumidifier installation near me | 10 | 0% | 5.0 | Homepage or Raleigh page | Same issue as above — position 5, no clicks. |
| home dehumidfier service near me | 34 | 0% | 12.7 | Homepage | Position 13 — needs to reach page 1 before CTR can improve. Note: "dehumidfier" is a misspelling Google is passing through. |
| home dehumidfier service raleigh | 34 | 0% | 16.8 | Raleigh service page | Position 17 — page 2. |
| waterproofing services fuquay-varina | 46 | 0% | 1.0 | GBP local pack (not website) | This is almost certainly a GBP local pack result at #1, not a website ranking. Users see the business name and don't click because it's for a waterproofing search. No action needed on the website — just context. |
| vapor barrier installation holly springs | 17 | 0% | 2.7 | /crawl-space-dehumidifier-holly-springs-nc/ (likely) | Position 3 with 0 clicks from 17 impressions. Could be a meta description issue or mismatch between query intent and page content. |
| crawl space dehumidifier installation near me | 7 | 14.3% | 9.7 | /crawl-space-dehumidifier-raleigh-nc/ | 1 click from 7 impressions — this is the best-performing query. Strengthen this page to push toward top 5. |

---

### New Queries (Emerging Opportunities)

These appeared in March that had zero impressions in the launch period:

| Query | Impressions | Position | Page |
|-------|------------|----------|------|
| dehumidifier services | 58 | 10.7 | Homepage |
| home dehumidfier service near me | 34 | 12.7 | Homepage |
| home dehumidfier service raleigh | 34 | 16.8 | Raleigh service page |
| vapor mitigation system in raleigh | 29 | 64.6 | Unknown — deep ranking |
| vapor barrier installation fuquay-varina | 19 | 2.9 | City page |
| crawl space dehumidifier installation near me | 7 | 9.7 | Raleigh service page |
| energy recovery ventilator raleigh nc | 7 | 9.4 | ERV page |

The sheer volume of new queries (112 total vs. 5 in the launch window) confirms the site is crawling and indexing well. Many long-tail crawl space and moisture queries are appearing for the first time — this is the index building phase.

---

## Page Performance

*Based on full-site data (Feb 21–Mar 30). Comparison vs. prior period not available at page level due to site age.*

| Page | Clicks | Impressions | CTR | Avg Position | Flag |
|------|--------|-------------|-----|-------------|------|
| / (homepage) | 21 | 903 | 2.3% | 8.0 | Driving most traffic. Healthy. |
| /whole-house-dehumidifier-raleigh/ | 0 | 188 | 0% | 14.0 | ⚠️ High impression, zero clicks — top priority |
| /contact/ | 1 | 207 | 0.5% | 10.3 | Low CTR at pos 10 — verify meta description |
| /erv-installation-raleigh-nc/ | 2 | 134 | 1.5% | 10.8 | Solid for a new page |
| /crawl-space-dehumidifier-cary-nc/ | 0 | 91 | 0% | 12.0 | Page 2 — needs optimization push |
| /crawl-space-dehumidifier-raleigh-nc/ | 1 | 91 | 1.1% | 17.2 | Page 2 — ranking but not page 1 yet |
| /encapsulated-crawlspace-dehumidifier-raleigh-nc/ | 0 | 87 | 0% | 27.7 | Deep ranking — possible cannibal with /encapsulated-crawl-space- variant |
| /blog/dehumidifier-cost-raleigh-nc/ | 0 | 77 | 0% | 9.2 | Just off page 1 — best blog opportunity |
| /privacy/ | 0 | 60 | 0% | 5.0 | ⚠️ Should be noindexed — verify |
| /crawlspace-mold-treatment-raleigh/ | 0 | 53 | 0% | 11.2 | Page 2 borderline |
| /crawl-space-dehumidifier-fuquay-varina-nc/ | 0 | 44 | 0% | 10.4 | Just off page 1 |
| /service-areas/ | 1 | 120 | 0.8% | 17.0 | Page 2 — low CTR |
| /crawl-space-dehumidifier-holly-springs-nc/ | 1 | 99 | 1% | 4.7 | Best-positioned city page |
| /crawlspace-dehumidifier-installation-raleigh/ | 1 | 54 | 1.9% | 15.2 | Good CTR for page 2 |
| /blog/dehumidifier-cost-raleigh-nc/ | 0 | 77 | 0% | 9.2 | See above |
| /crawl-space-dehumidifier-apex-nc/ | 0 | 38 | 0% | 7.0 | ⚠️ Position 7, 0 clicks — title issue |

---

## Cannibalization / Mismatch Issues

**1. Encapsulated crawl space — two URL variants**
- `/encapsulated-crawlspace-dehumidifier-raleigh-nc/` — 87 impressions, pos 27.7
- `/encapsulated-crawl-space-dehumidifier-raleigh-nc/` — 17 impressions, pos 21.4

These are likely the same page or near-duplicate content competing for the same queries. Consolidate to one URL with a 301 redirect from the other, and ensure the canonical tag points to the keeper.

**2. Trailing-slash duplicate URLs getting independent impressions**
- `/contact/` (207 impressions) alongside `/contact` (31 impressions)
- `/crawlspace-dehumidifier-installation-raleigh/` (54 imp) alongside `/crawlspace-dehumidifier-installation-raleigh` (24 imp)
- `/whole-house-dehumidifier-raleigh/` (188 imp) alongside `/whole-house-dehumidifier-raleigh` (1 imp)

Each non-slash URL should 301 to its trailing-slash version. GSC is counting these as separate pages, splitting impressions. According to the codebase notes, `_redirects` (Cloudflare) should handle both variants — verify these are in place.

**3. `/privacy/` at position 5.0 with 60 impressions**
The privacy page should not be appearing in search results. The `BaseLayout` supports a `noindex` prop for exactly this page. Verify the current source has `noindex: true` set.

**4. Query-to-page mismatch candidates**
- "vapor barrier installation" queries (17–19 impressions each across multiple cities) appear to be ranking via city-specific crawl space pages. These pages may not have enough vapor barrier content to satisfy the intent. Consider adding a vapor barrier section or creating a dedicated page.
- "dehumidifier services" (58 impressions, pos 10.7) is ranking via the homepage. A dedicated services page or stronger H1 targeting this phrase could push the position under 10.

---

## PageSpeed Scores

*All tests run via DataForSEO Lighthouse (desktop simulation). Mobile scores not available this cycle — PageSpeed Insights API daily quota was exhausted. Recommend re-running mobile scores manually at pagespeed.web.dev.*

| Page | Desktop Perf | Desktop A11y | Desktop BP | Desktop SEO | Notes |
|------|------------|------------|-----------|-------------|-------|
| Homepage | 100 | 100 | 100 | 100 | LCP 373ms, 138KB total |
| /crawl-space-dehumidifier-raleigh-nc/ | 100 | 100 | 100 | 100 | LCP 360ms, 174KB total |
| /contact/ | 100 | 96 | 92 | 100 | LCP 494ms. A11y (96) and BP (92) deductions likely from web3forms third-party script. |
| /service-areas/ | 100 | 100 | 100 | 100 | LCP 245ms, 49KB — fastest page |
| /blog/dehumidifier-cost-raleigh-nc/ | 100 | 100 | 100 | 100 | LCP 595ms, **430KB total** — heaviest page by 2.5x |

**Takeaway:** Desktop scores are clean across the board. No immediate PageSpeed action needed. The blog post's 430KB page weight is worth watching as the blog grows — it's fine now but images could become an issue. The contact page's best-practices deduction from web3forms is minor and likely unavoidable without replacing the form library.

---

## GBP Insights — March 4–31, 2026

*Data via Business Profile Performance API (location 16020972404210745696).*

| Metric | March 4–31 |
|--------|-----------|
| Total customer interactions | 9 |
| Website clicks | 7 |
| Call clicks | 0 |
| Direction requests | ~2 (estimated: 9 total − 7 website − 0 calls) |
| Profile views, mobile search | 54 |

The GBP is new and generating minimal action volume, consistent with the early stage of the profile. Zero call clicks through March reflects that the profile is being found but not yet driving direct phone leads. This is expected for a listing that hasn't accumulated reviews yet. A few verified reviews would likely begin converting profile views to calls.

---

## Recommendations

**Do this week:**
1. Check `/privacy/` for the `noindex` prop in the Astro source. If it's missing, add it and redeploy. This is a quick code fix.
2. Verify that `_redirects` and `astro.config.mjs` both have trailing-slash redirects for `/contact`, `/crawlspace-dehumidifier-installation-raleigh`, and `/whole-house-dehumidifier-raleigh`. Open each non-slash URL in a browser and confirm a 301 redirect fires.

**Do this month:**
3. Rewrite the title and meta description for `/whole-house-dehumidifier-raleigh/`. This page has 188 impressions at position 14 — the most untapped traffic on the site. A stronger title (something like "Whole-House Dehumidifier Installation in Raleigh | Triangle Dehumidifiers") and a rewritten intro with clearer local and service signals should help push it toward page 1.
4. Audit `/crawl-space-dehumidifier-apex-nc/` — it ranks at position 7 with 38 impressions and 0 clicks. Position 7 should earn some clicks. The title or meta description may be weak or a poor match for what users expect to see.
5. Investigate the two `/encapsulated-*` URLs and consolidate to one with a 301 redirect from the other.
6. Strengthen the `/blog/dehumidifier-cost-raleigh-nc/` post — it ranks at position 9.2 with 77 impressions, just outside page 1 top 8. Adding more local specificity, FAQ schema, or internal links pointing to it could push it into the top 7–8 where clicks begin.

**Track for next cycle:**
- Whether "dehumidifier installation raleigh nc" (now at pos 41.8, improved 9 spots) continues climbing.
- Whether the contact page's 0.5% CTR at position 10 improves — it may be appearing for non-navigational queries that aren't well matched to a contact page.
- First reviews on GBP — the profile needs reviews to convert impressions into calls.
