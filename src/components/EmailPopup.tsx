import { useState, useEffect, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

export function EmailPopup() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show on /investing pages
    if (!location.pathname.startsWith('/investing')) {
      return;
    }

    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('ayo-email-popup-seen');
    if (hasSeenPopup) {
      return;
    }

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('ayo-email-popup-seen', 'true');
      window.location.href = `https://magic.beehiiv.com/v1/cc8b49cc-67a6-4bde-8875-d31fb3d8558d?email=${encodeURIComponent(email)}`;
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
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Before you go — want earnings breakdowns like this in your inbox every week?
        </h3>
        
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors mb-2"
          >
            Yes, sign me up
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="w-full px-6 py-3 font-medium text-gray-600 hover:text-gray-800 transition-colors"
          >
            No thanks
          </button>
        </form>
      </div>
    </div>
  );
}
