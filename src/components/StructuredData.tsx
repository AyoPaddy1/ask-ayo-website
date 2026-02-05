import { Helmet } from 'react-helmet-async';

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  author?: string;
  url: string;
}

interface OrganizationStructuredDataProps {
  name: string;
  ticker: string;
  sector: string;
}

interface WebSiteStructuredDataProps {
  name: string;
  url: string;
  description: string;
}

export function ArticleStructuredData({ title, description, datePublished, author = "AskAYO", url }: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AskAYO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ask-ayo.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export function OrganizationStructuredData({ name, ticker, sector }: OrganizationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "tickerSymbol": ticker,
    "industry": sector
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export function WebSiteStructuredData({ name, url, description }: WebSiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/investing?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
