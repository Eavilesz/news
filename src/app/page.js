'use client';
import { useEffect, useState } from 'react';
import { createPagination } from '@/utils/createPagination';
import { Card } from './components/Card';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pagination, setPagination] = useState([]);

  const fetchNews = async (page) => {
    const res = await fetch(`api/news?page=${page}&limit=9`);
    const { data, meta } = await res.json();
    setNews(data);
    setTotalPages(meta.totalPages);
  };

  useEffect(() => {
    fetchNews(page);
    setPagination(createPagination(totalPages, page));
  }, [page, totalPages]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePage = (item) => {
    if (typeof item === 'number') setPage(item);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-9/12 md:w-4/6 mx-auto pt-8">
          <h1 className="text-8xl text-center font-bold mb-6">Space News 🚀</h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-4 gap-y-7">
            {news.map((article) => {
              const { _id, title, urlToImage, publishedAt, url } = article;
              return (
                <Card
                  title={title}
                  urlToImage={urlToImage}
                  publishedAt={publishedAt?.split('T')[0]}
                  url={url}
                  key={_id}
                />
              );
            })}
          </div>

          <div className="w-full flex gap-4 mx-auto my-8 text-2xl justify-center">
            <button onClick={handlePrevious} disabled={page === 1}>
              {'<'}
            </button>

            {pagination.map((item, idx) => (
              <button
                className={`${item === page ? 'font-bold' : ''}`}
                key={idx}
                disabled={item === '...'}
                onClick={() => handlePage(item)}
              >
                {item}
              </button>
            ))}

            <button onClick={handleNext} disabled={page === totalPages}>
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
