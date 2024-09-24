'use client';

const logNews = async () => {
  const res = await fetch('/api/news');
  console.log(await res.json());
};

export default function HomePage() {
  return (
    <>
      <button onClick={logNews}>Click me</button>
    </>
  );
}
