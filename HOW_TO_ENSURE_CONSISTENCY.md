# How to Ensure Consistency in Every Earnings Article

**Last updated:** February 5, 2026  
**Purpose:** This document explains the system for ensuring every earnings article follows the same structure, voice, and quality standards.

---

## The Problem We Solved

On previous attempts, earnings articles were inconsistent:
- Some included stock market reactions, others didn't
- Structure varied between articles
- Voice and tone were inconsistent
- No clear distinction between previews and results

This document ensures that **never happens again**.

---

## The Three-Layer System

### Layer 1: Template Documentation

**File:** `EARNINGS_ARTICLE_TEMPLATE.md`

This is the master template that defines:
- The exact 6-section structure for results articles
- Voice and style rules (what to do, what NOT to do)
- Preview vs Results distinction (hardwired)
- Formatting guidelines
- Quality checklist

**When to use it:** Before writing ANY earnings article, open this file and follow it exactly.

### Layer 2: Data Verification Rules

**File:** `EARNINGS_RULES.md`

This file explains the data verification system:
- Rule 1: Verified source data only
- Rule 2: Automated fact-check
- Rule 3: Human review before publishing

**When to use it:** When gathering data for an earnings article. Never skip the verification steps.

### Layer 3: Pre-Publishing Checklist

**File:** `EARNINGS_CHECKLIST.md`

This is the final safety check before hitting publish:
- Data verification checkboxes
- Date validation
- Narrative quality checks
- Technical checks
- Emergency stop criteria

**When to use it:** Before every single publish. If ANY checkbox is unchecked, DO NOT PUBLISH.

---

## The Workflow (Step-by-Step)

### Step 1: Data Collection
1. Find official press release or SEC filing
2. Extract verified numbers (revenue, EPS, segment data)
3. Save research data to `/research/{TICKER}-{QUARTER}-{YEAR}-research.json`
4. Run automated fact-check

### Step 2: Article Writing
1. Open `EARNINGS_ARTICLE_TEMPLATE.md`
2. Follow the 6-section structure exactly:
   - Opening paragraph with hook
   - The Numbers section
   - Business segment breakdowns (2-4 sections)
   - What's Coming Next section
   - The Bottom Line for Investors
   - References
3. Use the voice guidelines (conversational, no jargon, no stock reactions for results)
4. Add AYO widget callout (already built into the page template)

### Step 3: Quality Check
1. Open `EARNINGS_CHECKLIST.md`
2. Go through every checkbox
3. Verify numbers against official source
4. Check for encoding issues (smart quotes, dashes)
5. Ensure bull/bear balance in "The Bottom Line" section

### Step 4: Publish
1. Add article to `src/data/earnings.ts`
2. Update article metadata (title, description, date)
3. Commit with descriptive message
4. Push to GitHub
5. Vercel auto-deploys

---

## How to Make This Automatic

### For Future Manus Sessions

When starting a new earnings article task, Manus should:

1. **Read the template first**
   ```
   Read /home/ubuntu/ask-ayo-website/EARNINGS_ARTICLE_TEMPLATE.md
   ```

2. **Check if it's a preview or results article**
   - Preview: Can include predictions and market sentiment
   - Results: Must be factual and business-focused

3. **Follow the structure exactly**
   - Don't deviate from the 6-section format
   - Use the voice guidelines
   - Include the AYO widget callout (already in the page component)

4. **Run the checklist before committing**
   ```
   Read /home/ubuntu/ask-ayo-website/EARNINGS_CHECKLIST.md
   ```

### For Automated Systems

If you build an automated earnings article generator:

1. **Data extraction layer**
   - Use Perplexity API or HTML parser
   - Extract structured data (revenue, EPS, segments)
   - Save to JSON for audit trail

2. **Content generation layer**
   - Load `EARNINGS_ARTICLE_TEMPLATE.md` as system prompt
   - Pass verified data to LLM
   - Generate narrative around facts (not the facts themselves)

3. **Fact-check layer**
   - Extract all numbers from generated article
   - Compare against source data
   - Flag discrepancies

4. **Human review**
   - Present article + source data side-by-side
   - Human verifies numbers match
   - Human approves before publish

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Including Stock Reactions in Results Articles
**Wrong:** "The stock fell 3% after earnings despite beating expectations."  
**Right:** "Google beat expectations with $113.83B in revenue and $2.82 EPS."

### ❌ Mistake 2: Skipping the Bull/Bear Balance
**Wrong:** "This was a blowout quarter. Google is crushing it."  
**Right:** "If the bet pays off, Google could dominate. If it doesn't, the company could face questions about capital discipline."

### ❌ Mistake 3: Character Encoding Issues
**Wrong:** "Google's biggest year everâ€"and it's about to spend twice as much"  
**Right:** "Google's biggest year ever—and it's about to spend twice as much"

### ❌ Mistake 4: Inconsistent Structure
**Wrong:** Using "What's Working / What's Complicated" framework  
**Right:** Using business segment breakdowns (Search, Cloud, YouTube)

---

## Files Reference

| File | Purpose | When to Use |
|------|---------|-------------|
| `EARNINGS_ARTICLE_TEMPLATE.md` | Master template with structure and voice guidelines | Before writing any article |
| `EARNINGS_RULES.md` | Data verification rules and safety system | When gathering data |
| `EARNINGS_CHECKLIST.md` | Pre-publishing quality checklist | Before every publish |
| `HOW_TO_ENSURE_CONSISTENCY.md` | This file - the workflow guide | When onboarding or troubleshooting |

---

## Testing the System

To verify the system is working, test with these scenarios:

1. **Write a results article** - Should follow 6-section structure, no stock reactions
2. **Write a preview article** - Can include predictions and market sentiment
3. **Check encoding** - All smart quotes and dashes should render correctly
4. **Check balance** - "The Bottom Line" should present both bull and bear cases
5. **Check callout** - AYO widget callout should appear after article, before email signup

All 5 should pass. If any fail, review the template and checklist.

---

## Contact

This system was designed by Paddy (AYO founder) and implemented by Manus.

If anything is unclear, the answer is always: **follow the template, verify the data, and don't publish until you're sure it's right.**
