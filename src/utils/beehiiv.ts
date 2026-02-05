// Beehiiv API integration for email subscriptions
// Uses Vercel serverless function to avoid CORS issues

export interface SubscribeResponse {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletter(email: string): Promise<SubscribeResponse> {
  try {
    // Call our Vercel serverless function instead of Beehiiv directly (avoids CORS)
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    
    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.message || 'Something went wrong. Please try again.',
      };
    }

    return {
      success: true,
      message: data.message || "You're in! 🎉 Check your inbox for a welcome email.",
    };
  } catch (error) {
    console.error('Subscription error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
