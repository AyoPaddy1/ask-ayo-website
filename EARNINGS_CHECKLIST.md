# Earnings Article Checklist

**Use this checklist for EVERY earnings article before publishing.**

---

## Pre-Generation

- [ ] Confirmed earnings have been officially reported (not future/preview)
- [ ] Found official press release or SEC filing URL
- [ ] Verified company reports quarterly data (not just annually)

---

## Data Verification

- [ ] **Revenue matches official source** (within $0.1B)
- [ ] **EPS matches official source** (within $0.01)
- [ ] **Year-over-year growth % matches** (within 1%)
- [ ] **Segment data matches** (if included)
- [ ] **Source URL is from official IR page** (investor.company.com or sec.gov)

---

## Date Validation

- [ ] Report date is correct (not future, not old data)
- [ ] Fiscal year matches requested quarter (e.g., Q1 FY2026 = Oct-Dec 2025)
- [ ] Article date matches actual earnings report date

---

## Narrative Quality

- [ ] Tone is appropriate (beat = positive, miss = neutral/cautious)
- [ ] No fabricated quotes or statements
- [ ] No speculation presented as fact
- [ ] Key metrics are highlighted correctly

---

## Technical Checks

- [ ] Article slug is correct format: `{brand}-{quarter}-{year}-{type}`
- [ ] Article added to `src/data/earnings.ts`
- [ ] Badge is correct: `BEAT`, `MISS`, or `INLINE`
- [ ] Read time is reasonable (5-8 minutes)

---

## Research Audit Trail

- [ ] Research data saved to `/research/{TICKER}-{QUARTER}-{YEAR}-research.json`
- [ ] Source URLs included in research file
- [ ] Raw data preserved for future verification

---

## Final Safety Check

**Before clicking "Deploy":**

- [ ] I have personally verified the revenue against the official press release
- [ ] I have personally verified the EPS against the official press release
- [ ] I have read the entire article and confirmed no fabricated data
- [ ] I understand that publishing wrong data damages user trust

---

## If ANY checkbox is unchecked:

**DO NOT PUBLISH.**

Fix the issue or abort the article generation.

---

## Emergency Stop

If you notice ANY of these red flags:

- ❌ Revenue >$100B for a quarterly report (likely full-year data)
- ❌ EPS outside -$20 to $100 range (likely error)
- ❌ Source URL contains "full-year" when quarter is requested
- ❌ Report date is >3 months in the future
- ❌ Numbers don't match press release

**STOP. DO NOT PUBLISH. Investigate the issue.**

---

## Post-Publication

- [ ] Article is live on ask-ayo.com
- [ ] Numbers are correct on the live site
- [ ] Links work correctly
- [ ] No errors in browser console

---

**Remember:** A missing article is better than a wrong article. When in doubt, don't publish.
