import { Link } from 'react-router-dom';
import { TrendingUp, Newspaper, Briefcase, Home } from 'lucide-react';

export function UseCaseCards() {
  const useCases = [
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Investing',
      description: 'Finally understand the brands you invest in.',
      link: '/investing',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Newspaper,
      emoji: '📰',
      title: 'News',
      description: 'Finally make sense of business headlines.',
      link: '/news',
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      icon: Briefcase,
      emoji: '💼',
      title: 'Work',
      description: 'Finally decode what your CFO is actually saying.',
      link: '/work',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Home,
      emoji: '🏠',
      title: 'Your Money',
      description: 'Finally understand what your bank is actually saying.',
      link: '/your-money',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One Extension. Four Use Cases.
          </h2>
          <p className="text-xl text-gray-600">
            AYO translates financial jargon wherever you encounter it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              to={useCase.link}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-3xl">{useCase.emoji}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {useCase.description}
              </p>
              <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                {useCase.title === 'Investing' ? 'Explore Brands' : 'Learn More'} 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
          >
            Get the Extension — Free →
          </a>
        </div>
      </div>
    </section>
  );
}
