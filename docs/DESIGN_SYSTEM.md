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

**Decision:** We use the Logo.dev API (`https://logo.clearbit.com/:domain`) for all company logos.

**Rationale:**
1.  **Consistency:** Ensures all logos have a consistent, high-quality appearance.
2.  **Automation:** Allows us to fetch logos dynamically based on the company's domain, which is stored in `brands.ts`.
3.  **Simplicity:** Avoids the need to manually source, upload, and manage logo image files.

**Implementation:** The `BrandPage.tsx` and `BrandsDirectoryPage.tsx` components fetch logos using the domain field from the `brands.ts` data file.

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

**Decision:** Live stock prices on the individual `BrandPage.tsx` are cached in `localStorage` with a 10-minute Time-to-Live (TTL).

**Rationale:**
1.  **API Usage:** Reduces the number of API calls to the Twelve Data API, staying within the free tier limits.
2.  **Performance:** Improves the user experience for users who frequently navigate between brand pages.

**Implementation:** The `BrandPage.tsx` component includes logic to check for a cached price in `localStorage` before making a new API call.
