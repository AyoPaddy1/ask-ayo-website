import { useState, useEffect, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { subscribeToNewsletter } from '../utils/beehiiv';

export function EmailPopup() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Only show on /investing pages
    if (!location.pathname.startsWith('/investing')) {
      return;
    }

    // Check if user has already subscribed or dismissed the popup
    const hasSubscribed = localStorage.getItem('ayo_newsletter_subscribed');
    const hasSeenPopup = localStorage.getItem('ayo-email-popup-seen');
    if (hasSubscribed || hasSeenPopup) {
      return;
    }

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    const result = await subscribeToNewsletter(email);
    
    if (result.success) {
      setStatus('success');
      setEmail('');
      
      // Store in localStorage to prevent showing popup again
      localStorage.setItem('ayo_newsletter_subscribed', 'true');
      localStorage.setItem('ayo-email-popup-seen', 'true');
      
      // Auto-close popup after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } else {
      setStatus('error');
      setErrorMessage(result.message);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ayo-email-popup-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        {status === 'success' ? (
          <div className="text-center py-8">
            <span className="text-5xl mb-4 block">🎉</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              You're in!
            </h3>
            <p className="text-gray-600">Check your inbox for a welcome email.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Earnings, explained like a human
            </h3>
            <p className="text-gray-600 mb-6">
              One email a week. Plain English. No jargon, no fluff.
            </p>
            
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {status === 'error' && (
                <p className="text-sm text-red-600 mb-3">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="w-full px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors"
              >
                No thanks
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
