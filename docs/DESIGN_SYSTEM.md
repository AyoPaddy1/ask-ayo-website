# Ask AYO Design System

**Last updated:** January 31, 2026

---

## Guiding Principle: Clean, Approachable, Information-First

Our design aesthetic is professional enough to be trusted with financial data, but simple enough that anyone can use it. We prioritize clarity and readability over flashy design trends. We avoid gimmicks and focus on presenting information in the most intuitive way possible.

## Color Palette

Our color palette is built around a primary brand color (Teal) and a set of secondary colors used for sector identification and chart visualizations.

### Primary Colors

| Color | Hex | Usage |
|---|---|---|
| Teal | `#14B8A6` | Primary brand color, used for links, buttons, and highlights. |
| Yellow | `#FBBF24` | Accent color, used for highlights and call-to-action elements. |
| Dark Gray | `#1F2937` | Primary text color. |
| Medium Gray | `#6B7280` | Secondary text color, used for descriptions and less important information. |
| Light Gray | `#F3F4F6` | Background color for pages and sections. |

### Sector Colors

These colors are used for the border on brand cards in the Investing directory, providing a subtle visual cue for each sector.

| Sector | Color | Hex |
|---|---|---|
| Tech | Purple | `#8B5CF6` |
| Consumer | Pink | `#EC4899` |
| Luxury | Indigo | `#6366F1` |
| Automotive | Red | `#EF4444` |
| Sportswear | Blue | `#3B82F6` |
| Financial Services | Green | `#10B981` |
| Industrial | Orange | `#F97316` |

## Logos

**Current Implementation:** We use the Logo.dev API to fetch real brand logos dynamically.

**API Pattern:**
```
https://img.logo.dev/${brand.domain}?token=pk_ZsKdfCf9SJqbryuxYrFPDA&format=png&size=128
```

**Data Structure:** Each brand in `brands.ts` has a `domain` field (e.g., `domain: 'apple.com'`) that is used to fetch the logo from Logo.dev.

**Implementation:**
- `BrandsDirectoryPage.tsx`: Displays 12x12 (48px) logos on brand cards
- `BrandPage.tsx`: Displays 16x16 (64px) logos on individual brand pages

**Rationale:**
1.  **Professionalism:** Real brand logos provide immediate recognition and look more professional than emojis or letter circles.
2.  **Consistency:** Ensures all logos have a consistent, high-quality appearance across the site.
3.  **Automation:** Logos are fetched dynamically based on the company's domain, no manual image management needed.

**Note:** The `logo` field in `brands.ts` still contains emoji characters for backwards compatibility, but these are not displayed on the site.

## Charts

Our stock charts are designed for clarity and immediate visual comprehension.

- **Chart Type:** We use a simple line chart to display historical stock performance.
- **Chart Colors:**
    -   **Up Trend:** Teal (`#14B8A6`)
    -   **Down Trend:** Red (`#EF4444`)
- **Implementation:** The `StockChart.tsx` component uses a charting library (e.g., Chart.js, Recharts) to render the charts with these color conventions.

## UI Principles

### No Live Prices on Directory Cards

**Decision:** The brand cards on the `/investing` directory page do not display live stock prices.

**Rationale:**
1.  **API Rate Limiting:** Fetching live prices for all 46 brands simultaneously would quickly exhaust our API rate limits with the Twelve Data API.
2.  **Performance:** Making 46 separate API calls on page load would significantly slow down the user experience.
3.  **Focus on Discovery:** The purpose of the directory is to help users discover and explore brands, not to provide a real-time stock ticker. Live prices are available on the individual brand pages.

### Caching

**Current Implementation:** Live stock prices are fetched fresh on every page load from the Twelve Data API.

**Rationale:** This ensures users always see the most up-to-date stock prices, which is critical for financial data accuracy.

**Future Optimization:** If API rate limits become an issue, we may implement `localStorage` caching with a short Time-to-Live (TTL) of 5-10 minutes. However, this is not currently necessary as the Twelve Data free tier provides sufficient API calls for our traffic.
