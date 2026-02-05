// Beehiiv API integration for email subscriptions

const BEEHIIV_API_KEY = import.meta.env.VITE_BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = import.meta.env.VITE_BEEHIIV_PUBLICATION_ID;

export interface SubscribeResponse {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletter(email: string): Promise<SubscribeResponse> {
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
        return {
          success: true,
          message: "You're already subscribed! Check your inbox.",
        };
      }
      
      throw new Error(error.message || 'Failed to subscribe');
    }

    return {
      success: true,
      message: "You're in! 🎉 Check your inbox for a welcome email.",
    };
  } catch (error) {
    console.error('Beehiiv subscription error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
