import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { EarningsListPage } from './pages/EarningsListPage';
import { EarningsArticlePage } from './pages/EarningsArticlePage';
import { BrandsDirectoryPage } from './pages/BrandsDirectoryPage';
import { BrandPage } from './pages/BrandPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/brands" element={<BrandsDirectoryPage />} />
          <Route path="/brands/:slug" element={<BrandPage />} />
          <Route path="/brands/:slug/earnings/:earningsSlug" element={<EarningsArticlePage />} />
          <Route path="/earnings" element={<EarningsListPage />} />
          <Route path="/earnings/:slug" element={<EarningsArticlePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
