'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function NewsCard({ article }) {
  const { title, urlToImage, publishedAt, url } = article;
  const [imgSrc, setImgSrc] = useState(urlToImage || '/fallback-image.avif');

  const handleImageError = () => {
    setImgSrc('/fallback-image.avif');
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="relative h-48">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="empty"
          onError={handleImageError}
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold line-clamp-2 mb-2">{title}</h2>
        <p className="text-sm text-gray-500">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
