import { Suspense } from 'react';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
import { getNews, getTotalPages } from './lib/api';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = 9;
  const totalPages = await getTotalPages(limit);
  const news = await getNews(page, limit);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl md:text-8xl text-center font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Space News 🚀
        </h1>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <NewsList news={news} />
        </Suspense>
        <Pagination totalPages={totalPages} currentPage={page} />
      </div>
    </div>
  );
}
