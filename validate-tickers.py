#!/usr/bin/env python3
"""
Ticker Validation Script for Ask Ayo Website

This script validates that:
1. All companies in brands.ts exist in companies.ts with matching tickers
2. All ticker formats follow TradingView conventions
3. No duplicate tickers exist
4. Exchange prefixes are used correctly for non-US stocks

Run this before deploying to catch ticker issues early.
"""

import re
import sys
from pathlib import Path

# Known exchange prefixes that should be used
EXCHANGE_PREFIXES = {
    'KRX:', 'EURONEXT:', 'OMXSTO:', 'LSE:', 'XETR:', 'FWB:', 
    'TSE:', 'HKEX:', 'SIX:', 'SSE:', 'TSX:', 'ASX:'
}

# US tickers that don't need prefixes (simple pattern)
US_TICKER_PATTERN = re.compile(r'^[A-Z]{1,5}$')

def extract_tickers_from_brands(brands_file):
    """Extract company names and tickers from brands.ts"""
    with open(brands_file, 'r') as f:
        content = f.read()
    
    # Find all ticker entries in brands.ts
    ticker_pattern = re.compile(r"name:\s*'([^']+)',\s*ticker:\s*'([^']+)'", re.MULTILINE)
    matches = ticker_pattern.findall(content)
    
    return {name: ticker for name, ticker in matches}

def extract_tickers_from_companies(companies_file):
    """Extract company names and tickers from companies.ts"""
    with open(companies_file, 'r') as f:
        content = f.read()
    
    # Find all ticker entries in companies.ts
    ticker_pattern = re.compile(r"name:\s*'([^']+)',\s*ticker:\s*'([^']+)'", re.MULTILINE)
    matches = ticker_pattern.findall(content)
    
    return {name: ticker for name, ticker in matches}

def validate_ticker_format(ticker):
    """Check if ticker follows TradingView format conventions"""
    # US tickers: Simple 1-5 letter symbols
    if US_TICKER_PATTERN.match(ticker):
        return True, "Valid US ticker format"
    
    # International tickers: Should have exchange prefix
    if ':' in ticker:
        prefix = ticker.split(':')[0] + ':'
        if prefix in EXCHANGE_PREFIXES:
            return True, f"Valid international ticker with {prefix} prefix"
        else:
            return False, f"Unknown exchange prefix: {prefix}"
    
    # Ticker has no prefix and doesn't match US pattern
    # This might be a Yahoo Finance format (e.g., OR.PA, HM-B.ST)
    if '.' in ticker or '-' in ticker:
        return False, "Possible Yahoo Finance format - needs TradingView exchange prefix"
    
    return False, "Invalid ticker format"

def main():
    # Determine repo path
    repo_path = Path('/tmp/ayo-spotify-fix')
    if not repo_path.exists():
        repo_path = Path('/home/ubuntu/ask-ayo-website')
    
    brands_file = repo_path / 'src/data/brands.ts'
    companies_file = repo_path / 'src/data/companies.ts'
    
    if not brands_file.exists() or not companies_file.exists():
        print("❌ Error: Could not find brands.ts or companies.ts")
        print(f"   Looking in: {repo_path}")
        sys.exit(1)
    
    print("🔍 Validating ticker symbols...\n")
    
    # Extract tickers
    brands_tickers = extract_tickers_from_brands(brands_file)
    companies_tickers = extract_tickers_from_companies(companies_file)
    
    print(f"📊 Found {len(brands_tickers)} companies in brands.ts")
    print(f"📊 Found {len(companies_tickers)} companies in companies.ts\n")
    
    errors = []
    warnings = []
    
    # Check 1: Companies in brands.ts must exist in companies.ts
    print("✓ Checking sync between brands.ts and companies.ts...")
    for name, ticker in brands_tickers.items():
        if name not in companies_tickers:
            errors.append(f"❌ '{name}' exists in brands.ts but NOT in companies.ts")
        elif companies_tickers[name] != ticker:
            errors.append(f"❌ '{name}' ticker mismatch:\n   brands.ts: {ticker}\n   companies.ts: {companies_tickers[name]}")
    
    # Check 2: Validate ticker formats
    print("✓ Checking ticker formats...")
    all_tickers = set(brands_tickers.values()) | set(companies_tickers.values())
    
    for ticker in all_tickers:
        is_valid, message = validate_ticker_format(ticker)
        if not is_valid:
            errors.append(f"❌ Invalid ticker '{ticker}': {message}")
    
    # Check 3: Check for duplicates
    print("✓ Checking for duplicate tickers...")
    ticker_counts = {}
    for name, ticker in brands_tickers.items():
        if ticker in ticker_counts:
            ticker_counts[ticker].append(name)
        else:
            ticker_counts[ticker] = [name]
    
    for ticker, names in ticker_counts.items():
        if len(names) > 1:
            warnings.append(f"⚠️  Ticker '{ticker}' used by multiple companies: {', '.join(names)}")
    
    # Report results
    print("\n" + "="*60)
    if errors:
        print(f"\n❌ VALIDATION FAILED - {len(errors)} error(s) found:\n")
        for error in errors:
            print(error)
    else:
        print("\n✅ All ticker validations passed!")
    
    if warnings:
        print(f"\n⚠️  {len(warnings)} warning(s):\n")
        for warning in warnings:
            print(warning)
    
    print("\n" + "="*60)
    
    if errors:
        print("\n💡 Tips:")
        print("   - Use TradingView format (EXCHANGE:SYMBOL) for non-US stocks")
        print("   - Check /home/ubuntu/tradingview-ticker-guide.md for reference")
        print("   - Ensure brands.ts and companies.ts have matching entries")
        sys.exit(1)
    else:
        print("\n🎉 Ready to deploy!")
        sys.exit(0)

if __name__ == '__main__':
    main()
