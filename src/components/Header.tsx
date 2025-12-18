import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b-4 border-gray-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
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
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block hover:underline decoration-teal-500 decoration-4 underline-offset-4">
            Blog
          </Link>
          <a href="#examples" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block hover:underline decoration-yellow-500 decoration-4 underline-offset-4">
            Examples
          </a>
          <a 
            href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-yellow-500 hover:from-teal-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl border-2 border-gray-900 hover:scale-105 transform inline-block"
          >
            Get Extension
          </a>
        </div>
      </div>
    </header>
  );
}
