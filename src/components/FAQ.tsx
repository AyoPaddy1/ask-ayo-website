import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does Ask AYO work?",
    answer: "Highlight any financial term on any website, right-click, and select 'Ask AYO: Explain'. You'll get an instant explanation in plain English. After your first use, you can unlock the AYO tab for even faster access."
  },
  {
    question: "Why do I need to enable the AYO tab separately?",
    answer: "We start with minimal permissions so you can try AYO without handing over the keys to your browser. Once you've seen it in action, you can choose to enable the AYO tab for faster, one-tap access on every page. Your call."
  },
  {
    question: "What data does Ask AYO collect?",
    answer: "We only send the specific financial term you ask about to our servers. We don't track your browsing history, collect personal data, or sell your information. The extension only reads pages when you explicitly use it."
  },
  {
    question: "Does it work on all websites?",
    answer: "Yes! Ask AYO works on any website where you can highlight text—news sites, financial reports, research papers, social media, you name it."
  },
  {
    question: "Is it really free?",
    answer: "Yes, completely free. No hidden costs, no premium tiers, no credit card required. We believe financial literacy should be accessible to everyone."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about Ask AYO
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@ask-ayo.com"
            className="text-teal-600 hover:text-teal-700 font-semibold"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
