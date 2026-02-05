import { useState, FormEvent } from 'react';

interface EmailSignupProps {
  message: string;
  ctaText: string;
  variant?: 'default' | 'inline' | 'compact';
}

export function EmailSignup({ message, ctaText, variant = 'default' }: EmailSignupProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      // Redirect to Beehiiv magic link with email
      window.location.href = `https://magic.beehiiv.com/v1/cc8b49cc-67a6-4bde-8875-d31fb3d8558d?email=${encodeURIComponent(email)}`;
    }
  };

  if (variant === 'inline') {
    return (
      <div className="py-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">{message}</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 my-8">
        <p className="text-gray-800 mb-4">{message}</p>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-6 py-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            {ctaText}
          </button>
        </form>
      </div>
    );
  }

  // Default variant - full box
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 my-12 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {message}
      </h3>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-6 py-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            {ctaText}
          </button>
        </div>
      </form>
    </div>
  );
}
