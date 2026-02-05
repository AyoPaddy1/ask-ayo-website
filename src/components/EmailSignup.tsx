import { useState, type FormEvent } from 'react';
import { subscribeToNewsletter } from '../utils/beehiiv';

interface EmailSignupProps {
  message?: string;
  ctaText?: string;
  variant?: 'default' | 'inline' | 'compact';
  context?: string;
}

export function EmailSignup({ message, ctaText = 'Subscribe', variant = 'default', context }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage(result.message);
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  // Get contextual copy based on context prop
  const getContextualCopy = () => {
    if (context?.toLowerCase().includes('tesla')) {
      return {
        headline: 'Following Tesla?',
        subtext: 'We cover their earnings every quarter'
      };
    }
    if (context?.toLowerCase().includes('apple')) {
      return {
        headline: 'Following Apple?',
        subtext: 'We cover their earnings every quarter'
      };
    }
    if (context?.toLowerCase().includes('google') || context?.toLowerCase().includes('alphabet')) {
      return {
        headline: 'Following Google?',
        subtext: 'We cover their earnings every quarter'
      };
    }
    if (context?.toLowerCase().includes('amazon')) {
      return {
        headline: 'Following Amazon?',
        subtext: 'We cover their earnings every quarter'
      };
    }
    return {
      headline: message || 'Earnings, explained like a human',
      subtext: 'One email a week. Plain English. No jargon, no fluff.'
    };
  };

  const copy = getContextualCopy();

  // Success state
  if (status === 'success') {
    if (variant === 'inline') {
      return (
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-green-700">
            <span className="text-xl">🎉</span>
            <span className="text-sm font-medium">You're in! Check your inbox.</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className={`${variant === 'compact' ? 'p-6 my-8' : 'p-8 my-12'} bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl text-center`}>
        <div className="inline-flex items-center gap-2 text-green-700">
          <span className="text-2xl">🎉</span>
          <span className="text-lg font-medium">You're in! Check your inbox.</span>
        </div>
      </div>
    );
  }

  // Inline variant
  if (variant === 'inline') {
    return (
      <div className="py-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">{copy.headline}</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? '...' : ctaText}
          </button>
        </form>
        {status === 'error' && (
          <p className="mt-2 text-xs text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 my-8">
        <div className="mb-4">
          <h4 className="font-bold text-gray-900 mb-1">{copy.headline}</h4>
          <p className="text-sm text-gray-600">{copy.subtext}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : ctaText}
          </button>
        </form>
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }

  // Default variant - full box
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 my-12 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {copy.headline}
      </h3>
      <p className="text-gray-600 mb-6">{copy.subtext}</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : ctaText}
          </button>
        </div>
      </form>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}
