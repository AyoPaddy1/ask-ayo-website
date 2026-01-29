import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Final CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4 text-3xl sm:text-4xl font-bold">
            Ready to Decode Wall Street?
          </h2>
          
          <p className="text-gray-300 text-xl mb-8">
            See jargon. Highlight it. Understand it.
          </p>
          
          <a 
            href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-10 py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3 text-lg font-bold border-2 border-gray-900 hover:scale-105 transform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.894l-2.894-5.014a4.002 4.002 0 0 0-6.894 4.12l-2.894 5.014a10.002 10.002 0 0 1 12.682-4.12z"/>
            </svg>
            Get the Extension — Free
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Footer Links */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">AYO</span>
              </div>
              <div>
                <div className="text-white font-bold">AskAYO</div>
                <div className="text-xs text-gray-400">Financial BS → Plain English</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Making financial language accessible to everyone
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-bold">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#examples" className="hover:text-teal-400 transition-colors">Examples</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-bold">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/privacy.html" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms.html" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4 font-bold">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="mailto:helloaskayo@gmail.com" className="hover:text-teal-400 transition-colors">helloaskayo@gmail.com</a></li>
              <li><a href="mailto:helloaskayo@gmail.com" className="hover:text-teal-400 transition-colors">Share Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          © 2025 Ask AYO. We explain, we don't recommend.
        </div>
      </div>
    </footer>
  );
}
