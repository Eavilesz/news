'use client';

const triggerFetch = async () => {
  await fetch('/api/news/fetch');
};

export default function HomePage() {
  return (
    <>
      <button onClick={triggerFetch}>Click me</button>
    </>
  );
}
