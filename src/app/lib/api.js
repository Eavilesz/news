import { connectDB } from '../libs/mongodb';
import News from '../models/news';

export async function getNews(page, limit) {
  await connectDB();
  const skip = (page - 1) * limit;
  const news = await News.find().skip(skip).limit(limit).lean();
  return news.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
}

export async function getTotalPages(limit) {
  await connectDB();
  const totalNews = await News.countDocuments();
  return Math.ceil(totalNews / limit);
}
