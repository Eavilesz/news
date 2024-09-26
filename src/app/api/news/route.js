import { connectDB } from '@/app/libs/mongodb';
import News from '@/app/models/news';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const skip = (page - 1) * limit;

  const news = await News.find().skip(skip).limit(limit);

  const totalNews = await News.countDocuments();

  return NextResponse.json({
    data: news,
    meta: {
      total: totalNews,
      page,
      limit,
      totalPages: Math.ceil(totalNews / limit),
    },
  });
}

export async function POST(request) {
  await connectDB();

  const data = await request.json(request);
  const news = await News.create(data);

  return NextResponse.json(news);
}
