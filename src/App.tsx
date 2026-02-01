import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { EarningsListPage } from './pages/EarningsListPage';
import { EarningsArticlePage } from './pages/EarningsArticlePage';
import { BrandsDirectoryPage } from './pages/BrandsDirectoryPage';
import { BrandPage } from './pages/BrandPage';
import { NewsPage } from './pages/NewsPage';
import { WorkPage } from './pages/WorkPage';
import { YourMoneyPage } from './pages/YourMoneyPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          {/* Investing routes */}
          <Route path="/investing" element={<BrandsDirectoryPage />} />
          <Route path="/investing/:slug" element={<BrandPage />} />
          <Route path="/investing/:slug/earnings/:earningsSlug" element={<EarningsArticlePage />} />
          
          {/* 301 redirects from old URLs */}
          <Route path="/brands" element={<Navigate to="/investing" replace />} />
          <Route path="/brands/:slug" element={<Navigate to="/investing/:slug" replace />} />
          <Route path="/brands/:slug/earnings/:earningsSlug" element={<Navigate to="/investing/:slug/earnings/:earningsSlug" replace />} />
          <Route path="/earnings" element={<Navigate to="/investing" replace />} />
          <Route path="/examples" element={<Navigate to="/" replace />} />
          
          {/* Explanation pages */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/your-money" element={<YourMoneyPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
