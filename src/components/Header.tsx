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
        <div className="hidden sm:flex items-center gap-4">
          <Link to="/brands" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline decoration-purple-500 decoration-4 underline-offset-4">
            Brands
          </Link>
          <Link to="/earnings" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline decoration-teal-500 decoration-4 underline-offset-4">
            Earnings
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline decoration-teal-500 decoration-4 underline-offset-4">
            Blog
          </Link>
          <Link to="/#examples" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline decoration-yellow-500 decoration-4 underline-offset-4">
            Examples
          </Link>
          <a 
            href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-yellow-500 hover:from-teal-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl border-2 border-gray-900 hover:scale-105 transform inline-block"
          >
            Get Extension
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/brands" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 hover:underline decoration-purple-500 decoration-4 underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Brands
            </Link>
            <Link 
              to="/earnings" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 hover:underline decoration-teal-500 decoration-4 underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earnings
            </Link>
            <Link 
              to="/blog" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 hover:underline decoration-teal-500 decoration-4 underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/#examples" 
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2 hover:underline decoration-yellow-500 decoration-4 underline-offset-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Examples
            </Link>
            <a 
              href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-teal-500 to-yellow-500 hover:from-teal-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl border-2 border-gray-900 text-center"
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
