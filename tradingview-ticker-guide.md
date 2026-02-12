# TradingView Ticker Format Guide for Ask Ayo

## Quick Reference: When to Use Exchange Prefixes

**Rule of thumb:** US stocks don't need prefixes. Non-US stocks MUST include exchange prefix in format `EXCHANGE:SYMBOL`

## Exchange Prefix Directory

| Exchange | Prefix | Example Company | Correct Format |
|----------|--------|-----------------|----------------|
| **US Markets** |
| NYSE/NASDAQ | None | Apple | `AAPL` |
| NASDAQ | None | Spotify | `SPOT` |
| NYSE | None | Nike | `NKE` |
| **European Markets** |
| Euronext Paris | `EURONEXT:` | L'Oréal | `EURONEXT:OR` |
| Euronext Amsterdam | `EURONEXT:` | ASML | `EURONEXT:ASML` |
| London Stock Exchange | `LSE:` | Unilever | `LSE:ULVR` |
| Frankfurt/XETRA | `XETR:` | Siemens | `XETR:SIE` |
| Swiss Exchange | `SIX:` | Nestlé | `SIX:NESN` |
| Stockholm (OMX) | `OMXSTO:` | H&M | `OMXSTO:HM-B` |
| **Asian Markets** |
| Korea Exchange | `KRX:` | Samsung | `KRX:005930` |
| Tokyo Stock Exchange | `TSE:` | Toyota | `TSE:7203` |
| Hong Kong Exchange | `HKEX:` | Tencent | `HKEX:0700` |
| Shanghai Stock Exchange | `SSE:` | ICBC | `SSE:601398` |
| **Other Markets** |
| Toronto Stock Exchange | `TSX:` | Shopify | `TSX:SHOP` |
| Australian Securities Exchange | `ASX:` | BHP | `ASX:BHP` |

## How to Find the Correct Ticker

### Method 1: TradingView Search (Most Reliable)
1. Go to https://www.tradingview.com/
2. Search for the company name
3. Look at the ticker format in the search results
4. Copy the EXACT format including exchange prefix

### Method 2: Company's Investor Relations Page
1. Visit the company's official investor relations page
2. Look for "Stock Information" or "Share Price"
3. Note the exchange where they're listed
4. Use the exchange prefix table above

### Method 3: Wikipedia
1. Search "[Company Name] stock" on Wikipedia
2. Look for the "Traded as" field in the infobox
3. Note the exchange abbreviation
4. Use the exchange prefix table above

## Common Mistakes to Avoid

❌ **Wrong:** `OR.PA` (Yahoo Finance format)  
✅ **Correct:** `EURONEXT:OR` (TradingView format)

❌ **Wrong:** `HM-B.ST` (Yahoo Finance format)  
✅ **Correct:** `OMXSTO:HM-B` (TradingView format)

❌ **Wrong:** `005930.KS` (Yahoo Finance format)  
✅ **Correct:** `KRX:005930` (TradingView format)

## Checklist for Adding New Companies

When adding a new company to the Ask Ayo website:

- [ ] Determine if the company is US-listed (no prefix) or international (needs prefix)
- [ ] Look up the correct TradingView ticker format using Method 1 above
- [ ] Add to **brands.ts** with correct ticker format
- [ ] Add to **companies.ts** with IDENTICAL ticker format
- [ ] Verify both entries match exactly (copy-paste to avoid typos)
- [ ] Test on the live site after deployment to confirm chart and price load correctly

## Why This Matters

TradingView widgets require specific ticker formats. Using the wrong format causes:
- Charts to not load or show wrong company data
- Live prices to fail ("$—" displayed)
- Unprofessional appearance (e.g., Apple data showing on Samsung page)

**Always use TradingView format, not Yahoo Finance or Google Finance format.**
