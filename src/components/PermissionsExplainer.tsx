import { Shield, Check, X, Lock } from 'lucide-react';

export function PermissionsExplainer() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6 font-semibold">
            <Shield className="w-5 h-5" />
            Privacy & Permissions
          </div>
          
          <h2 className="text-gray-900 mb-6 text-4xl sm:text-5xl font-bold">
            Why Does Chrome Show a{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Permissions Warning</span>
              <div className="absolute inset-0 bg-yellow-300 -skew-x-12 opacity-50"></div>
            </span>
            ?
          </h2>
          
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            When you install AskAYO, Chrome shows a scary-looking warning. Here's what's really going on.
          </p>
        </div>

        {/* The Warning */}
        <div className="bg-gray-100 border-4 border-gray-300 rounded-3xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-gray-900">AYO</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Add 'AskAYO Financial Terms'?
              </h3>
              <p className="text-gray-600 text-lg">It can:</p>
            </div>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6">
            <p className="text-gray-900 text-lg font-semibold">
              ⚠️ Read and change all your data on all websites
            </p>
          </div>
        </div>

        {/* What We Actually Do */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-4 border-teal-300 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What We DO</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Read the text you highlight</strong> (to explain it)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Display a popup</strong> with the explanation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Track which terms are searched</strong> (anonymously, to improve explanations)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-300 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <X className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">What We DON'T Do</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Read passwords</strong> or login credentials
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Track your browsing history</strong> or activity
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Change website content</strong> or inject ads
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Collect or sell personal data</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Chrome Shows This */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-300 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Lock className="w-7 h-7 text-yellow-600" />
            Why Chrome Shows This Warning
          </h3>
          
          <p className="text-gray-700 text-lg mb-4">
            Chrome shows this <strong>generic warning for ANY extension that reads page content</strong> — even simple highlighters or grammar checkers.
          </p>
          
          <p className="text-gray-700 text-lg mb-4">
            We need permission to read the text you highlight so we can explain it. Without this permission, AskAYO couldn't work.
          </p>
          
          <p className="text-gray-700 text-lg">
            <strong>Popular extensions like Grammarly, Honey, and LastPass show the same warning.</strong> It's Chrome's way of making sure you know what permissions you're granting.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Privacy Commitment</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Your privacy matters. We only access the text you explicitly highlight, and we never collect browsing history or personal information.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/privacy.html"
              className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Privacy Policy
            </a>
            <a 
              href="mailto:helloaskayo@gmail.com"
              className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors"
            >
              Questions? Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
