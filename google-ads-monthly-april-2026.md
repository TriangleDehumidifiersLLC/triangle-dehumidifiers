# Triangle Dehumidifiers — Monthly Google Ads Optimization Report
**Date:** April 1, 2026
**Account:** Triangle Dehumidifiers, LLC (444-382-6409)
**Budget:** $30/day (~$900/month)
**Report period:** March 2 – April 1, 2026

---

## Data Access Note

Live campaign metrics (impressions, clicks, CPA, CTR) could not be pulled this session due to two simultaneous blockers: an ad blocker extension in Chrome prevents the Google Ads dashboard from rendering its data tables, and the Google Ads API developer token is still pending Basic Access approval (applied March 30, Case #4-7108000040036). This report is built from the March 20 deep-dive baseline, the billing page (which loaded successfully), and the Recommendations tab. Raw metric data should be verified manually when access is restored.

---

## What We Know: Data Confirmed

### March Baseline (March 20, 2026 deep dive)
At the time of the March 20 analysis:
- 1 campaign active: "Triangle Dehumidifiers" (Performance Max)
- All-time performance: 1 impression, 0 clicks, $0.00 spent, 0 conversions
- Campaign status: "Bid strategy learning"
- 5 critical issues identified that were preventing ad delivery

### What Changed Since March 20

**Billing — Fixed**
The account has an active payment method (Visa ending 7811) with automatic payments enabled. A $50.00 threshold charge posted on March 29, which confirms the campaign began spending at some point between March 20 and March 29. The billing issue was one of the five critical problems. It's resolved.

**Second Campaign — Created**
The campaigns list now shows "Campaigns (2)" — up from one on March 20. This aligns with the March 20 recommendation to add a dedicated Search campaign alongside PMax.

**Current Balance:** $58.24 outstanding from March
**April spend (day 1):** $0.00 — ads have not run yet today

### Optimization Score
Google currently rates the account at **96.8%** — high for a new account. The primary recommendations open are:

| Category | Score Lift Available |
|---|---|
| Keywords & targeting | +3% |
| AI Essentials | +3% |
| Upload Customer Match lists | +2.2% |
| Ads & assets | +0.4% |
| Automated campaigns | +0.3% |

The high optimization score suggests the account structure is largely well-configured. The remaining points are enhancements, not fixes.

---

## Performance Estimate: March

Because I can't pull exact figures, here's a conservative reconstruction based on billing:

| Metric | Estimate | Basis |
|---|---|---|
| March spend | ~$50–$108 | $50 threshold hit March 29; balance of $58.24 outstanding |
| Days with active spend | ~2–5 days | At $30/day budget; PMax typically under-delivers early in learning |
| Conversions | Unknown — likely 0 | No conversion tag confirmed installed as of March 20 |
| CPA | Not calculable | Conversion data unavailable |

**Bottom line on March:** The account came to life after being essentially dead since launch. Billing was fixed. The campaign ran for a short window in late March. But without a working conversion tag, Google's algorithm had no signal to optimize toward — it was spending blind. That changes what April needs to look like.

---

## Critical Unresolved Issue: Conversion Tracking

This was flagged March 20 and remains the most important unresolved item. The diagnostics page said at that time: *"You haven't set up any measurement features yet."* If that's still true, then every dollar spent in March generated no usable learning data for the algorithm.

**What's needed:**
The Google tag (gtag.js) needs to be installed on triangledehumidifiers.com. The conversion action for phone calls exists in the account — it just has no tag sending it data. This is a one-file code change to the Astro site.

Until this is fixed, PMax is optimizing toward nothing. It will show ads but won't improve over time.

---

## Seasonal Context: April Urgency

April 1 is the first day of peak season for moisture and crawl space services in Wake County. The seasonal pattern for this business:

- **March–May (Spring):** Humidity rises, rain increases, homeowners start noticing musty smells and wet crawl spaces. This is when demand picks up fastest. High-intent "crawl space problem" searches spike.
- **June–August (Summer):** Peak demand, sustained high humidity, highest search volume.
- **The window:** Every week that ads run ineffectively in April costs real leads during the highest-demand period of the year.

At $30/day, spending is already constrained. Running that budget without a conversion tag — or letting April slip without full-budget utilization — compounds the cost significantly. A $30/day budget that's 60% utilized during peak season is effectively a $18/day budget when it matters most.

---

## Month-Over-Month Summary

| Metric | Feb 2026 | March 2026 | Change |
|---|---|---|---|
| Total spend | $0 | ~$50–$108 (est.) | First real spend |
| Impressions | ~1 (all time) | Unknown | Campaign live |
| Clicks | 0 | Unknown | Campaign live |
| Conversions | 0 | 0 (likely) | No tag installed |
| CPA | — | — | Not measurable yet |
| Campaigns | 1 (PMax) | 2 (PMax + Search est.) | +1 campaign |
| Billing | Broken | Fixed | Critical fix done |
| Optimization score | Unknown | 96.8% | Strong foundation |

---

## Top 5 Optimization Actions for April

### 1. Install the Google Ads conversion tag — this week
This is the single highest-impact action. Without it, the campaign's bidding algorithm (Target CPA or Maximize Conversions) has no data. Every dollar spent before this is installed is partially wasted.

The tag goes in the `<head>` of the Astro site's `BaseLayout.astro`. The phone call conversion action already exists in the account. This is approximately a 20-minute code change. Say the word and it can be done in this session.

### 2. Verify the Search campaign is running and correctly structured
The account now shows 2 campaigns. Confirm the second one is:
- Campaign type: Search (not Display or PMax)
- Budget: $15/day (if splitting with PMax) or separate
- Keywords: Phrase and exact match on high-intent local terms (per March 20 structure)
- Ad groups: Separated by service (crawl space dehumidifier, encapsulation, mold, whole-house)
- Negative keywords loaded: jobs, DIY, portable, amazon, reviews

If the second campaign was set up differently, now is the time to check and correct it.

### 3. Add audience signals to PMax — this week
The AI Essentials (+3%) and Automated campaigns (+0.3%) recommendations suggest audience signals are still missing or weak. For PMax to learn faster, add:
- In-market: Home improvement, Home services, HVAC
- Interests: Homeowners, home maintenance
- Demographics: Ages 30–65, homeowners
- Location: Wake County / 25-mile radius from Holly Springs
- Customer data: Any past customer phone numbers or emails (links to Customer Match recommendation, +2.2%)

### 4. Increase budget to $40–45/day for April and May
Spring is the highest-demand period of the year for this service. If CPA comes in under $75/lead once conversion tracking is active, this is the highest-ROI moment to scale. An extra $10–15/day during March–June could generate 2–3 additional leads per month. At a $3,000–5,000 job value, each additional lead is worth 30–50× the additional daily spend.

Recommendation: Increase to $45/day for April and May, reassess in June.

### 5. Accept Call and Messaging Ads Terms if not yet done
If the yellow banner ("Accept Call and Messaging Ads Terms") is still showing, this must be accepted. Call ads are critical for home services — phone calls convert at a much higher rate than form fills. This is a one-click action that must be done manually in the account.

---

## Budget Analysis and ROI Estimate

**Current budget:** $30/day × 30 days = $900/month possible spend
**Estimated March actual:** $50–$108 (low utilization — expected during learning phase)
**April target:** $900 full utilization

If average job value is $4,000 (midpoint of $3,000–$5,000 range) and CPA is $50–$75/lead (achievable for local home services once conversion tracking is live):
- 12–18 leads per month at $900 spend → $48,000–$72,000 in potential revenue per month
- ROAS would be 53:1 to 80:1 if even a portion of those leads convert to booked jobs

Even at a conservative 20–30% lead-to-close rate, a single booked job from ads more than pays for an entire month of spend.

**Budget recommendation:** Increase to $45/day in April. Monitor actual CPA once conversion tracking is active. If CPA stays under $75, increase to $60/day in May (peak summer season).

---

## Asset Review and Ad Strength

The March 20 session brought ad strength from "Poor" to "Good" by adding a 15th headline and improving the CTA. The account now shows "Ads & assets +0.4%" as a remaining opportunity, which is minor — suggesting assets are in reasonable shape.

**Recommended asset checks (manual review needed):**
- Confirm 14–15 unique headlines with a mix of service, location, and benefit terms
- Verify 4–5 descriptions are in place
- Check that sitelinks (Crawl Space Dehumidifiers, Encapsulation, Free Inspection, Whole-House, Service Areas) are all active and approved
- Confirm at least 10–15 images uploaded, including real job photos
- Consider adding a short video — even a 30-second smartphone walkthrough of a crawl space. Video significantly boosts PMax performance and unlocks YouTube placements.

---

## Competitor and Auction Insights

Auction insights data was not accessible this session. Based on the competitive landscape documented in March, the primary competitors in Wake County remain: Glover Environmental, Crawl Space Ninja, Triangle Crawl Space Solutions, Tar Heel Basement Systems, Live Green Inc, and Crawl Spaces and Beyond.

All have active local pages and established Google Business Profiles. As spring ramps up, these competitors will be increasing budgets as well. Being in-market with a properly configured, conversion-tracked campaign in April gives Triangle Dehumidifiers a real window to gain ground before the competition fully saturates May and June.

---

## GBP Health Check

Maps placement drives a significant share of local home services conversions. Before increasing budget, verify:

- GBP is linked to the Google Ads account (Admin → Linked accounts → Google Business Profile)
- At least one post in the last 7 days
- Photos are current and match the ad images
- Reviews are being actively requested from customers
- Service area includes: Holly Springs, Raleigh, Cary, Apex, Fuquay-Varina, Garner, Angier
- Category: Dehumidifier Installation or Crawl Space Repair (whichever GBP allows closest match)

Use GMBMantra (free) or Merchynt (free) for a more detailed GBP audit if needed.

---

## Google Ads API Access — Follow Up

Developer token Basic Access was applied for March 30, 2026 (Case #4-7108000040036). Check email for approval status. Once approved:
1. Add developer token to the Zapier Google Ads connection
2. This unlocks automated keyword monitoring, search term audits, and report generation

Until then, weekly and monthly report pulls require the Chrome browser approach (which currently requires disabling the ad blocker in Chrome for ads.google.com to function properly).

**Ad blocker fix:** In Chrome, navigate to the ad blocker extension settings and add `ads.google.com` to the whitelist/allowlist. This will allow the Google Ads dashboard to load its data tables normally.

---

## Seasonal Strategy Update

**April messaging (update ad copy if not yet done):**

Current focus should be on spring humidity and moisture problems. Suggested headline additions or swaps:
- "Spring Humidity Hitting Your Crawl Space?"
- "NC Humidity Season Has Arrived"
- "Protect Your Home This Spring"
- "Crawl Space Issues Start in Spring"

**May/June messaging (prepare now):**
- "Summer Humidity Under Control"
- "Beat the NC Summer Humidity"
- "Mold Season in NC Crawl Spaces"

---

## Summary: Priority Order for April

1. **Install conversion tag on the website** — highest impact, unblocks everything else
2. **Verify the Search campaign structure and keywords**
3. **Add audience signals to PMax** — AI Essentials recommendation
4. **Accept Call and Messaging Ads terms** if not yet done
5. **Increase budget to $45/day** once conversion tracking is confirmed live
6. **Post a GBP update** for spring season
7. **Whitelist ads.google.com** in Chrome ad blocker for future monitoring
8. **Follow up on developer token approval** (Case #4-7108000040036)

---

*Report generated April 1, 2026. Live metric data (impressions, clicks, CPA, CTR) could not be pulled due to ad blocker and pending API access. Figures marked as estimates should be verified in the Google Ads dashboard directly.*
