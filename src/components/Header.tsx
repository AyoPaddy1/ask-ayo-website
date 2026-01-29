import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 via-teal-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg border-2 border-gray-900 transform -rotate-6 hover:rotate-0 transition-transform">
              <span className="text-gray-900 font-bold transform rotate-6">AYO</span>
            </div>
            <div>
              <div className="text-gray-900 text-xl font-bold">AskAYO</div>
              <div className="text-xs text-gray-600 bg-yellow-100 px-2 py-1 rounded-full inline-block">
                Financial BS → Plain English
              </div>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/investing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Investing
          </Link>
          <Link to="/news" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            News
          </Link>
          <Link to="/work" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Work
          </Link>
          <Link to="/your-money" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Your Money
          </Link>
          <a 
            href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-yellow-500 hover:from-teal-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl border-2 border-gray-900 hover:scale-105 transform inline-block font-semibold"
          >
            Get Extension
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/investing" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investing
            </Link>
            <Link 
              to="/news" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/work" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              to="/your-money" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Your Money
            </Link>
            <a 
              href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-teal-500 to-yellow-500 hover:from-teal-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl border-2 border-gray-900 text-center font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Extension
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
