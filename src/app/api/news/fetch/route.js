import fetchFromNewsAPI from '@/app/libs/fetchNews';
import { NextResponse } from 'next/server';

export async function GET() {
  await fetchFromNewsAPI();
  return NextResponse.json({ message: 'News fetched successfully' });
}
