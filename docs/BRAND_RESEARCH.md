# Ask AYO Brand Research Process

**Last updated:** January 31, 2026

---

## Guiding Principle: From Complexity to Clarity

Our brand research process is designed to distill vast amounts of complex financial information into a clear, concise, and engaging narrative for our users. We are not just reporting data; we are telling the story of a business in a way that anyone can understand.

## Brand Selection

We currently cover 46 of the world's most well-known and influential public companies. The selection is based on a combination of factors:

- **Consumer Recognition:** Brands that are a part of our users' daily lives (e.g., Apple, Nike, Netflix).
- **Market Influence:** Companies that have a significant impact on the global economy (e.g., Nvidia, Tesla, LVMH).
- **Investor Interest:** Stocks that are widely held and followed by retail investors.

## Brand Organization

Brands are organized by **Sector** and **Category** to help users discover and compare companies.

- **Sector:** A traditional industry classification (e.g., Tech, Consumer, Automotive).
- **Category:** A more user-friendly, thematic grouping that reflects how people think about brands (e.g., Your Digital Life, The Fit, Cravings).

This dual classification system allows us to provide both a traditional financial view and a more relatable, consumer-focused perspective.

## Data Collection and Structure

For each brand, we collect a standardized set of data points, which are stored in the `src/data/brands.ts` file. This ensures consistency across all brand pages and allows for scalable content creation.

### Key Data Points

| Field | Type | Description |
|---|---|---|
| `name` | `string` | The official name of the company. |
| `ticker` | `string` | The company's stock ticker symbol. |
| `logo` | `string` | The company's logo (emoji or URL). |
| `sector` | `enum` | The traditional industry sector. |
| `category` | `enum` | The user-friendly thematic category. |
| `slug` | `string` | The URL-friendly identifier for the brand. |
| `tagline` | `string` | A one-sentence hook for the brand card. |
| `irUrl` | `string` | The URL of the company's investor relations page. |
| `insight` | `string` | The "killer hook" or core insight about the business model. |
| `howTheyMakeMoney` | `object` | A breakdown of the company's revenue streams. |
| `growthStory` | `string` | A 2-3 sentence summary of the company's growth strategy. |
| `whatProsWatch` | `array` | The key metrics that professional investors use to evaluate the company. |
| `rightNow` | `string` | The latest news or context affecting the company. |
| `lastUpdated` | `string` | The date the brand data was last updated. |

## Source Hierarchy

When researching a brand, we prioritize official and primary sources to ensure accuracy and avoid speculation.

1.  **10-K Annual Reports:** The most comprehensive and reliable source of information about a company's business, strategy, risks, and financial performance.
2.  **Quarterly Earnings Reports (10-Q):** Provide the most up-to-date financial data and management commentary.
3.  **Investor Presentations:** Often contain a simplified and more visual representation of the company's strategy and performance.
4.  **Official Company Blog/Newsroom:** For product announcements and other company news.
5.  **Reputable Financial News Sources (e.g., Bloomberg, Reuters, Wall Street Journal):** For broader market context and analysis.

We use the **Bulletproof Earnings Automation System** (see `docs/Bulletproof_Earnings_Automation_System.md`) to fetch and verify data from earnings reports, ensuring that all financial data is accurate and sourced correctly.
