import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { AnimatedDemo } from '../components/AnimatedDemo';
import { ExamplesGrid } from '../components/ExamplesGrid';
import { WhatWeDont } from '../components/WhatWeDont';
import { Testimonials } from '../components/Testimonials';
import { Mission } from '../components/Mission';
import { PermissionsExplainer } from '../components/PermissionsExplainer';
import { UseCaseCards } from '../components/UseCaseCards';
import { Footer } from '../components/Footer';
import { EmailSignup } from '../components/EmailSignup';
import { WebSiteStructuredData } from '../components/StructuredData';
import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Ask AYO — Financial Jargon, Translated Into Plain English"
        description="Confused by financial terms? Ask AYO is a free Chrome extension that translates Wall Street jargon into words you actually use. Earnings breakdowns, term explanations, zero BS."
        canonical="https://www.ask-ayo.com/"
        keywords={['financial terms', 'financial jargon', 'earnings explained', 'EBITDA', 'P/E ratio', 'financial literacy', 'browser extension']}
      />
      <WebSiteStructuredData 
        name="AskAYO"
        url="https://ask-ayo.com"
        description="AYO breaks down earnings reports and financial jargon in plain English. Finally understand what's happening with the brands you love."
      />
      <Header />
      <Hero />
      <UseCaseCards />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmailSignup 
          message="Want a weekly breakdown of what the biggest companies are really saying — in plain English? Join AYO Weekly."
          ctaText="Sign me up — it's free"
        />
      </div>
      <Problem />
      <AnimatedDemo />
      <ExamplesGrid />
      <WhatWeDont />
      <Testimonials />
      <Mission />
      <PermissionsExplainer />
      <Footer />
    </div>
  );
}
