# Ask AYO Site Architecture

**Last updated:** January 31, 2026

---

## Guiding Principle: Use-Case Driven Navigation

Our navigation is organized around the user's intent, not our content types. Instead of a generic "Blog" or "Articles" link, we guide users to the section that best matches their immediate need. This is based on the four core use cases defined in `MESSAGING.md`.

### Primary Navigation Structure

| Navigation Link | URL Path | Page Component | Purpose |
|---|---|---|---|
| Investing | `/investing` | `BrandsDirectoryPage.tsx` | For users who want to understand the companies they invest in. This is the main content hub for brand and earnings analysis. |
| News | `/news` | `NewsPage.tsx` | An explanation page for users who want to make sense of business headlines. It is not a content feed. |
| Work | `/work` | `WorkPage.tsx` | An explanation page for users who want to decode corporate jargon from their job. It is not a content feed. |
| Your Money | `/your-money` | `YourMoneyPage.tsx` | An explanation page for users who want to understand personal finance terms (banking, loans, etc.). It is not a content feed. |

This structure ensures that users immediately understand how Ask AYO can help them in their specific context.

---

## URL Structure and Page Hierarchy

Our URL structure is designed to be logical, hierarchical, and SEO-friendly.

### Investing Section

This is the most complex section of the site, containing the brand directory, individual brand pages, and earnings articles.

| URL Path | Page Component | Description |
|---|---|---|
| `/investing` | `BrandsDirectoryPage.tsx` | The main directory of all 46 brands we cover. |
| `/investing/:slug` | `BrandPage.tsx` | The dedicated page for a single brand (e.g., `/investing/apple`). Contains the stock chart, key metrics, and a list of recent earnings reports. |
| `/investing/:slug/earnings/:earningsSlug` | `EarningsArticlePage.tsx` | The page for a specific earnings report (e.g., `/investing/apple/earnings/q1-2026-results`). |

### Redirects: `/brands` to `/investing`

**Decision:** The `/brands` URL path was permanently redirected (301) to `/investing`.

**Rationale:**
1.  **Use-Case Alignment:** "Investing" is the user's goal; "brands" is just our internal terminology for the companies. The URL should reflect the user's intent.
2.  **Clarity:** `/investing` is a more intuitive and descriptive URL for users looking for information about public companies.
3.  **SEO:** The 301 redirect ensures that any existing SEO value from the old `/brands` URLs is transferred to the new `/investing` URLs.

This redirect is implemented in `src/App.tsx`.

---

## Page-Level Architecture Decisions

### Brand Page (`BrandPage.tsx`)

**Decision:** The brand page is intentionally focused on a stock chart and a list of recent earnings reports. It does not have multiple complex sections.

**Rationale:**
1.  **Information-First:** The primary goal of a user visiting a brand page is to get the latest financial information. The stock price and recent earnings are the most critical data points.
2.  **Simplicity:** Avoid overwhelming the user with too much information at once. The brand page serves as a launchpad to dive deeper into specific earnings reports.
3.  **Performance:** A simpler page structure leads to faster load times.

The detailed information about a company's business model, growth story, and key metrics is contained within the `brands.ts` data file and is intended for use in future, more detailed analyses, not for display on the main brand page.

### Explanation Pages (`NewsPage.tsx`, `WorkPage.tsx`, `YourMoneyPage.tsx`)

**Decision:** These pages are static, high-level explanations of how Ask AYO helps in each context. They are not content hubs or article feeds.

**Rationale:**
1.  **Clarity of Purpose:** The primary goal of these pages is to explain the value proposition of the Ask AYO browser extension for that specific use case.
2.  **Avoid Content Silos:** Instead of creating separate blogs for News, Work, and Your Money, we have a single, unified `/blog` for general financial education. This prevents content from becoming fragmented and hard to find.
3.  **Focus on the Extension:** These pages are designed to drive downloads and usage of the browser extension, which is the core product.
