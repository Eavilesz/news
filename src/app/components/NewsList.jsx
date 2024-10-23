import NewsCard from './NewsCard';

export default function NewsList({ news }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((article) => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  );
}
