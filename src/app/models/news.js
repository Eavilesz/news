import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

const News = mongoose.models.News || mongoose.model('News', schema);

export default News;
