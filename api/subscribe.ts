import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email is required' 
    });
  }

  const BEEHIIV_API_KEY = process.env.VITE_BEEHIIV_API_KEY;
  const BEEHIIV_PUBLICATION_ID = process.env.VITE_BEEHIIV_PUBLICATION_ID;

  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    console.error('Missing Beehiiv credentials');
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error' 
    });
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'ask-ayo-website',
          utm_medium: 'website',
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      
      // Handle duplicate email gracefully
      if (response.status === 400 && error.message?.includes('already subscribed')) {
        return res.status(200).json({
          success: true,
          message: "You're already subscribed! Check your inbox.",
        });
      }
      
      console.error('Beehiiv API error:', error);
      return res.status(response.status).json({
        success: false,
        message: error.message || 'Failed to subscribe',
      });
    }

    return res.status(200).json({
      success: true,
      message: "You're in! 🎉 Check your inbox for a welcome email.",
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
}
