import { connectDB } from '@/app/libs/mongodb';
import News from '@/app/models/news';
import { NextResponse } from 'next/server';

import { getPlaiceholder } from 'plaiceholder';

export async function GET(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const skip = (page - 1) * limit;

  const news = await News.find().skip(skip).limit(limit);

  const newsWithBlur = await Promise.all(
    news.map(async (article) => {
      const { urlToImage } = article;

      // Fetch and generate the blur placeholder
      const buffer = await fetch(urlToImage).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      const { base64 } = await getPlaiceholder(buffer);

      return {
        ...article.toObject(), // Convertir el documento de MongoDB a objeto simple
        blurDataURL: base64, // Agregar el `blurDataURL` para la imagen
      };
    })
  );

  const totalNews = await News.countDocuments();

  return NextResponse.json({
    data: newsWithBlur,
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
