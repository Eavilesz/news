import fetchFromNewsAPI from '@/app/libs/fetchNews';
import { NextResponse } from 'next/server';

// This is for manual testing
export async function GET() {
  await fetchFromNewsAPI();
  return NextResponse.json({ message: 'News fetched successfully' });
}
