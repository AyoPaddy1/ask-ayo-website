# Deployment Instructions

## Environment Variables Setup

After deploying to Vercel, you need to add the following environment variables:

1. Go to: https://vercel.com/your-username/ask-ayo-website/settings/environment-variables

2. Add these variables for **Production**, **Preview**, and **Development**:

   - **VITE_BEEHIIV_API_KEY**: `Y4lOE4e8rL2hprAvKGZnDjCzqucIZvDsnvnnv3VUCIzcjLfFffonLeFTYDI88H1Y`
   - **VITE_BEEHIIV_PUBLICATION_ID**: `pub_cc8b49cc-67a6-4bde-8875-d31fb3d8558d`

3. After adding the variables, trigger a new deployment by:
   - Going to the Deployments tab
   - Clicking "Redeploy" on the latest deployment
   - Or pushing a new commit to trigger automatic deployment

## What Changed

### Email Signup Flow Improvements

**Before:** Users were redirected through multiple Beehiiv pages and lost from ask-ayo.com
- Popup → Beehiiv confirmation → Subscribed page → ayo-weekly.beehiiv.com (user lost)

**After:** Users stay on ask-ayo.com throughout the entire signup process
- Enter email → Click subscribe → See success message → Continue browsing (2 steps total)

### Updated Components

1. **EmailSignup.tsx**: Refactored to use Beehiiv API instead of redirect
   - Added loading, success, and error states
   - Improved copy: "Earnings, explained like a human" / "One email a week. Plain English. No jargon, no fluff."
   - Contextual copy for brand pages (e.g., "Following Tesla? We cover their earnings every quarter")
   - Success message auto-dismisses after 5 seconds
   - Stores subscription status in localStorage

2. **EmailPopup.tsx**: Updated timed popup with API integration
   - Same API integration as inline forms
   - Improved copy matching brand voice
   - Auto-closes after 3 seconds on success
   - Won't show to users who already subscribed (localStorage tracking)

3. **beehiiv.ts**: New utility for Beehiiv API calls
   - Handles subscription requests
   - Gracefully handles duplicate emails
   - Proper error handling and user feedback

### Testing Checklist

After deployment with environment variables:

- [ ] Test email signup on homepage
- [ ] Test email signup on brand pages (Tesla, Apple, etc.)
- [ ] Test email signup on article pages
- [ ] Test timed popup (appears after 30 seconds on /investing pages)
- [ ] Verify success message appears and auto-dismisses
- [ ] Verify localStorage prevents popup from showing again after signup
- [ ] Test error handling (try invalid email, duplicate email)
- [ ] Confirm users stay on ask-ayo.com (no redirects to Beehiiv)
