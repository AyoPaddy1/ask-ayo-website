# Daily Static Chart Generation System

## Overview

This system generates static chart data for all 59 brands once per day to avoid API rate limits and provide consistent performance.

## How It Works

1. **Daily Generation**: Script runs at midnight (via cron or GitHub Actions)
2. **API Calls**: 59 brands × 1 call = 59/800 daily limit (7.4% usage)
3. **Data Storage**: Chart data saved to `public/charts/{brand-slug}.json`
4. **Frontend**: React component loads pre-generated data instead of making live API calls

## Files

- `generate-static-charts.js` - Main generation script
- `../src/components/StockChartStatic.tsx` - React component that loads static data
- `../public/charts/` - Output directory for chart JSON files
- `../public/charts/_metadata.json` - Generation metadata (timestamp, success/fail counts)

## Usage

### Manual Generation

```bash
cd scripts
node generate-static-charts.js
```

### Automated (GitHub Actions)

Create `.github/workflows/generate-charts.yml`:

```yaml
name: Generate Daily Charts

on:
  schedule:
    - cron: '0 0 * * *'  # Midnight UTC daily
  workflow_dispatch:  # Manual trigger

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Generate charts
        env:
          TWELVE_DATA_API_KEY: ${{ secrets.TWELVE_DATA_API_KEY }}
        run: |
          cd scripts
          node generate-static-charts.js
      
      - name: Commit and push
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add public/charts/
          git commit -m "Update daily charts [skip ci]" || echo "No changes"
          git push
```

### Automated (Cron on Server)

```bash
# Add to crontab
0 0 * * * cd /path/to/ask-ayo-website/scripts && TWELVE_DATA_API_KEY=your_key node generate-static-charts.js
```

## API Key

Set environment variable:
```bash
export TWELVE_DATA_API_KEY="your_api_key_here"
```

Or update the script to use your key directly (not recommended for production).

## Rate Limiting

- Free tier: 800 calls/day, 8 calls/minute
- Script uses 8-second delays between requests (7.5 calls/minute)
- Total runtime: ~8 minutes for 59 brands

## Monitoring

Check `public/charts/_metadata.json` for:
- Last generation timestamp
- Success/failure counts
- Individual brand results

## Benefits

✅ No rate limit issues for site visitors
✅ Consistent performance (no API delays)
✅ Predictable costs (59 calls/day vs unlimited)
✅ Works offline once generated
✅ Daily updates sufficient for education site

## Troubleshooting

**Charts not loading?**
- Check `public/charts/` directory exists
- Verify JSON files are present
- Check browser console for fetch errors

**API errors?**
- Verify API key is valid
- Check rate limits haven't been exceeded
- Some non-US tickers may not be supported

**Stale data?**
- Check `_metadata.json` generation timestamp
- Verify cron/GitHub Actions is running
- Manually run script to test
