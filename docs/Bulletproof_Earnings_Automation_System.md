# Bulletproof Earnings Automation System

## Overview

This system automates the generation of earnings articles while preventing AI hallucination and data fabrication. It uses a 3-layer fallback approach with mandatory human review.

---

## Usage

```bash
cd /home/ubuntu/ask-ayo-website
node scripts/bulletproof-earnings-automation.js "Company Name" "TICKER" "Q#" "FY####" "results|preview"
```

### Examples

```bash
# Generate Apple Q1 FY2026 Results article
node scripts/bulletproof-earnings-automation.js "Apple" "AAPL" "Q1" "FY2026" "results"

# Generate Nike Q2 FY2026 Preview article
node scripts/bulletproof-earnings-automation.js "Nike" "NKE" "Q2" "FY2026" "preview"

# Generate Tesla Q4 2025 Results article
node scripts/bulletproof-earnings-automation.js "Tesla" "TSLA" "Q4" "2025" "results"
```

---

## System Architecture

### Layer 1: Perplexity API (Automated Data Collection)
- Searches for official earnings press releases
- Extracts structured data (revenue, EPS, segments, etc.)
- Returns JSON with source citations
- **Success rate: ~40%**

### Layer 2: HTML Fallback (Direct Parsing)
- Triggers when Perplexity returns nulls
- Fetches source URL directly
- Parses HTML with regex for revenue/EPS
- **Success rate: ~20%** (many sites block scraping)

### Layer 3: Abort + Manual Flag
- Triggers when both Layer 1 and 2 fail
- Aborts generation
- Flags for manual input
- **Success rate: 100%** (prevents fabrication)

### Layer 4: Human Review (Required)
- Every article requires manual review before deployment
- Verify numbers against official sources
- Check narrative tone and accuracy
- Approve or reject for deployment

---

## Safety Features

### 1. Date Validation
- Checks if report date matches requested fiscal year
- Aborts if report date is >3 months in the future
- Prevents using old data for future earnings requests

### 2. Source Verification
- Validates source URL is from official IR page
- Warns if source is not investor.company.com or sec.gov
- Aborts if source URL contains "full-year" when quarter is requested

### 3. Sanity Checks
- Flags quarterly revenue >$100B (likely full-year data)
- Flags EPS outside -$20 to $100 range
- Flags revenue <$0.1B (might be in millions, not billions)

### 4. Fact-Checking
- Extracts all numbers from generated article
- Compares against source data
- Flags discrepancies for human review

### 5. Audit Trail
- Saves research data to `/research/{TICKER}-{QUARTER}-{YEAR}-research.json`
- Includes source URLs, citations, and raw data
- Enables verification and debugging

---

## Expected Automation Rate

**60-80% of earnings articles can be fully automated**

### ✅ Works Well For:
- Apple, Amazon, Google, Microsoft (clear press releases)
- Tesla, Meta, Netflix (simple quarterly reports)
- Most US tech companies

### ❌ Requires Manual Input:
- Nike, Adidas (block scraping - HTTP 403)
- LVMH, Hermès (only report annually, not quarterly)
- Smaller companies with poor IR pages

---

## The Rule (No Exceptions)

Every article requires:
1. ✅ Verified source data (press release, SEC filing)
2. ✅ Fact-check pass (automated)
3. ✅ Human review (manual)

**No article goes live without all 3.**

---

## Workflow

### Step 1: Run Automation
```bash
node scripts/bulletproof-earnings-automation.js "Apple" "AAPL" "Q1" "FY2026" "results"
```

### Step 2: Review Output
- Article saved to: `/public/content/earnings/{slug}.md`
- Research saved to: `/research/{TICKER}-{QUARTER}-{YEAR}-research.json`

### Step 3: Human Review
Check:
- ✅ Revenue matches official press release
- ✅ EPS matches official press release
- ✅ Source URL is correct
- ✅ Narrative tone is appropriate
- ✅ No fabricated data

### Step 4: Add to earnings.ts
```javascript
{
  id: '12',
  brand: 'apple',
  title: 'Apple Q1 FY2026 Earnings Results: ...',
  slug: 'apple-q1-2026-results',
  date: '2026-01-30',
  type: 'results',
  readTime: 7,
  badge: 'BEAT',
  excerpt: '...',
  revenue: '$143.8B',
  eps: '$2.84'
}
```

### Step 5: Deploy
```bash
npm run deploy
```

---

## Troubleshooting

### "Revenue data not found"
**Cause:** Perplexity couldn't find the data, HTML fallback failed
**Solution:** Manual input required - paste press release data into research.json

### "HTTP 403 Forbidden"
**Cause:** Company's IR site blocks automated scraping (Nike, Adidas)
**Solution:** Manual input required - copy data from press release

### "Source URL contains full-year data"
**Cause:** Company only reports annually, not quarterly (LVMH, Hermès)
**Solution:** Use full-year data or skip quarterly article

### "Report date does not match requested fiscal year"
**Cause:** Found old data (e.g., Q2 2025 when Q2 2026 was requested)
**Solution:** Earnings haven't been reported yet - wait or create preview article

---

## API Keys Required

### Perplexity API
- Get key from: https://www.perplexity.ai/settings/api
- Set in environment: `export PERPLEXITY_API_KEY="pplx-..."`
- Cost: ~$0.10 per article

### OpenAI API
- Already configured in project
- Uses GPT-4.1-mini for narrative generation
- Cost: ~$0.05 per article

---

## Files

- `bulletproof-earnings-automation.js` - Main automation script
- `html-earnings-parser.js` - HTML fallback parser
- `/research/*.json` - Audit trail (research data)
- `/public/content/earnings/*.md` - Generated articles

---

## Testing

Run full test suite:
```bash
/home/ubuntu/run-all-tests.sh
```

Expected: 5/5 passes (including safe aborts)

---

## Version History

### v1.0 (Jan 31, 2026)
- ✅ 3-layer fallback system
- ✅ Date validation
- ✅ Source verification
- ✅ Sanity checks
- ✅ Fact-checking
- ✅ Audit trail
- ✅ 5/5 test passes

### v0.1 (Jan 30, 2026)
- ❌ No web search (AI hallucination)
- ❌ Fabricated Apple Q1 FY2026 data
- ❌ Not production-ready

---

## Support

For issues or questions, check:
1. `/home/ubuntu/BULLETPROOF_SYSTEM_FINAL_RESULTS.md` - Test results
2. `/home/ubuntu/earnings_audit_root_cause_analysis.md` - Root cause analysis
3. `/home/ubuntu/PERPLEXITY_INTEGRATION_TEST_RESULTS.md` - Integration tests
