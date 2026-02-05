# AskAYO Website

> **Earnings, explained like a human.**

---

## ⚠️ BEFORE WRITING EARNINGS ARTICLES, READ THIS

**If you're working on earnings content (previews or results), you MUST follow the template system.**

### Quick Start for Earnings Articles

1. **Read the template first:**
   ```
   /EARNINGS_ARTICLE_TEMPLATE.md
   ```
   This is the **single source of truth** for structure, voice, and formatting.

2. **Check the article type:**
   - **Preview:** Can include predictions and market sentiment
   - **Results:** Must be factual and business-focused (NO stock reactions)

3. **Follow the 6-section structure** (for results):
   - Opening paragraph
   - The Numbers
   - Business segment breakdowns
   - What's Coming Next
   - The Bottom Line for Investors
   - References

4. **Run the checklist before publishing:**
   ```
   /EARNINGS_CHECKLIST.md
   ```

### Reference Files

| File | Purpose |
|------|---------|
| `EARNINGS_ARTICLE_TEMPLATE.md` | Master template (structure, voice, rules) |
| `EARNINGS_RULES.md` | Data verification and safety rules |
| `EARNINGS_CHECKLIST.md` | Pre-publishing quality checklist |
| `HOW_TO_ENSURE_CONSISTENCY.md` | Step-by-step workflow guide |

### Reference Examples

**Best articles to study:**
- `public/articles/16-tesla-q4-2025-results.md` (perfect structure)
- `public/articles/13-apple-q1-fy2026-results.md` (great voice)

**Don't rewrite the template. Just follow it.**

---

## Project Overview

This is the AskAYO website, built with React + TypeScript + Vite. It provides plain-English explanations of financial earnings, helping Gen Z understand how companies make money.

### Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Routing:** React Router
- **Markdown:** ReactMarkdown + remark-gfm
- **Email:** Beehiiv API integration
- **Deployment:** Vercel

### Key Features

- Earnings articles (previews and results)
- Brand pages with company profiles
- AYO Chrome extension integration
- Email newsletter signup
- Responsive design

---

## Development Setup

### Prerequisites

- Node.js 22.x
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repo
git clone https://github.com/AyoPaddy1/ask-ayo-website.git
cd ask-ayo-website

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

### Environment Variables

Create a `.env` file:

```env
VITE_BEEHIIV_API_KEY=your_api_key_here
VITE_BEEHIIV_PUBLICATION_ID=your_publication_id_here
```

See `DEPLOYMENT_INSTRUCTIONS.md` for Vercel setup.

---

## Project Structure

```
ask-ayo-website/
├── public/
│   └── articles/          # Markdown earnings articles
├── src/
│   ├── components/        # React components
│   ├── data/              # Earnings data and brand info
│   ├── pages/             # Page components
│   └── App.tsx            # Main app component
├── EARNINGS_ARTICLE_TEMPLATE.md    # ⚠️ READ THIS FIRST
├── EARNINGS_RULES.md               # Data verification rules
├── EARNINGS_CHECKLIST.md           # Pre-publish checklist
└── HOW_TO_ENSURE_CONSISTENCY.md    # Workflow guide
```

---

## Deployment

The site auto-deploys to Vercel on every push to `main`.

**Important:** Add environment variables in Vercel dashboard before deploying.

See `DEPLOYMENT_INSTRUCTIONS.md` for details.

---

## Contributing

### For Earnings Articles

**Always follow the template system.** See the warning at the top of this README.

### For Code Changes

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a PR

---

## React + Vite Configuration

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## Contact

Built by Paddy (AYO founder) with Manus AI.

For questions about the earnings template system, refer to `HOW_TO_ENSURE_CONSISTENCY.md`.
