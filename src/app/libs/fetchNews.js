import { connectDB } from './mongodb';
import News from '../models/news';

const fetchFromNewsAPI = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_SEARCH_ENDPOINT);
  const { articles } = await res.json();

  await connectDB();

  for (const article of articles) {
    // Checks if that article already exists
    const exists = await News.findOne({
      title: article.title,
    });

    if (!exists) {
      await News.create({
        source: article.source,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
      });
    }
  }
};

export default fetchFromNewsAPI;
