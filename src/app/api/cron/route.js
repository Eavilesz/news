import fetchFromNewsAPI from '@/app/libs/fetchNews';

export async function GET(request) {
  console.log('Fetching new articles.');
  await fetchFromNewsAPI();
  return new Response(`Hello from cron`);
}
