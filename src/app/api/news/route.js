import { connectDB } from '@/app/libs/mongodb';
import News from '@/app/models/news';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  const news = await News.find();
  return NextResponse.json(news);
}

export async function POST(request) {
  await connectDB();

  const data = await request.json(request);
  const news = await News.create(data);

  return NextResponse.json(news);
}
