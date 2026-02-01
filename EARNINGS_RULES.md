# EARNINGS RULES — READ THIS FIRST

**Last updated:** January 31, 2026
**Status:** MANDATORY — No exceptions

---

## Why This File Exists

On January 30, 2026, an automated earnings article about Apple Q1 FY2026 was published on ask-ayo.com with completely fabricated data. The AI (GPT-4.1-mini) hallucinated every number because it had no access to real data sources.

**What was published vs. what was true:**

| Metric | Published (WRONG) | Actual (Apple PR) |
|--------|-------------------|-------------------|
| Revenue | $154.3B (+6.8%) | $143.8B (+16%) |
| EPS | $2.95 (+8.2%) | $2.84 (+19%) |
| iPhone Revenue | $78.5B | $85.3B (+23%) |
| China | "crashed 17%" | **+38% (record)** |

The story said Apple was struggling. Apple actually had a record quarter. Every number was wrong. The narrative was backwards.

**Root cause:** The original automation script asked GPT to "research" earnings data without giving it any real data source. GPT made up plausible-sounding numbers from training data.

This file exists so this never happens again — even if the developer, chat history, or sandbox resets.

---

## The Three Rules

### Rule 1: Verified Source Data
Every article must be based on data from an official source: company press release, investor relations page, or SEC filing. No exceptions.

If the system cannot find an official source, it must ABORT. It must never generate an article using estimated, guessed, or AI-recalled data.

### Rule 2: Automated Fact-Check
After the article is generated, the system must extract all numbers from the text and compare them against the verified source data. Any discrepancy must be flagged.

### Rule 3: Human Review
Every article must be reviewed by a human before publishing. No article goes live without someone confirming the numbers match the official source.

**All three rules apply to every article. No exceptions. No shortcuts.**

---

## What "Safe" Means

The system has two safe outcomes:

1. **Extract correct data** → generate article → fact-check → human review → publish
2. **Cannot find data** → abort → flag for manual input → human enters data → generate → review → publish

The unsafe outcome (which must never happen):

3. ~~Cannot find data → guess / hallucinate → publish~~

**If in doubt, abort. A missing article is better than a wrong article.**

---

## The Bulletproof System

The current automation uses a 3-layer fallback:

**Layer 1: Perplexity API** — Searches for official press release, extracts structured data. Works for ~40% of companies.

**Layer 2: HTML Fallback** — If Perplexity returns nulls but provides a source URL, fetches the page directly and parses it. Works for ~20% more.

**Layer 3: Abort** — If both layers fail, the system stops and flags the article for manual data entry. This is not a failure — this is the system working correctly.

After data is collected (by any layer), GPT generates the narrative using ONLY the verified data. Then the fact-checker runs. Then a human reviews.

---

## Date Validation

The system must abort if:

- The requested quarter has not been reported yet (future earnings)
- The data found is from a different fiscal year than requested (e.g., finding Q2 2025 data when Q2 2026 was requested)
- The report date is more than 3 months in the future

This prevents the most dangerous error: presenting old data as current data.

---

## Known Limitations

These are NOT bugs. The system correctly handles them by aborting:

| Company | Issue | System Response |
|---------|-------|----------------|
| Nike, Adidas | Block automated scraping (HTTP 403) | Aborts, flags for manual input |
| LVMH, Hermès | Only report annually, not quarterly | Aborts, flags for manual input |
| Smaller companies | Poor investor relations pages | Aborts, flags for manual input |

**Expected automation rate: 60-80%.** The remaining 20-40% require manual data entry. Both paths produce safe, accurate articles.

---

## Test Suite

Before any changes to the automation system, run the 5-test suite. All 5 must pass.

| Test | Input | Expected Outcome |
|------|-------|-----------------|
| 1 | Apple Q1 FY2026 | Extract correct data ($143.8B revenue, $2.84 EPS) |
| 2 | Nike Q2 FY2026 | Extract correct data OR abort safely |
| 3 | LVMH Q4 2025 | Abort (no quarterly data exists) |
| 4 | FakeCompany Q1 2026 | Abort (company doesn't exist) |
| 5 | Apple Q2 FY2026 (future) | Abort (not yet reported) |

**"Pass" means: correct data OR safe abort. Never fabrication.**

5/5 required. No exceptions.

---

## If You're Reading This After a Reset

If you've lost context about this project, here's what you need to know:

1. **Read this file first.** It explains why the system works the way it does.
2. **Read `Bulletproof_Earnings_Automation_System.md`** for how to use the system.
3. **Never bypass the 3 rules** (verified data, fact-check, human review).
4. **Never modify the automation to skip safety checks** — they exist because fabricated data was published once and it must not happen again.
5. **Run the 5-test suite** before deploying any changes. 5/5 or it doesn't ship.

---

## Files Reference

| File | Purpose |
|------|---------|
| `EARNINGS_RULES.md` | This file — the rules (read first) |
| `Bulletproof_Earnings_Automation_System.md` | How to use the system |
| `bulletproof-earnings-automation.js` | The automation script |
| `html-earnings-parser.js` | HTML fallback parser |
| `/research/*.json` | Audit trail for every article |

---

## Contact

This system was designed by Paddy (AYO founder).

If anything is unclear, the answer is always: **don't publish until you're sure the numbers are right.**
