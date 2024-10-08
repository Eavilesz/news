import Link from 'next/link';
import Image from 'next/image';

export const Card = (props) => {
  const { title, urlToImage, publishedAt, url, blurDataURL } = props;
  return (
    <Link
      target="_blank"
      href={url}
      className=" border border-gray-400 h-60 rounded-lg shadow-lg hover:border-zinc-600 hover:shadow-2xl"
    >
      <div className="h-3/5 relative rounded-t-lg">
        <Image
          alt="Space image"
          className="object-cover rounded-t-lg"
          src={urlToImage}
          fill
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="h-2/5 rounded-b-lg p-2 flex flex-col justify-between">
        <h2 className="leading-5 font-bold text-lg overflow-hidden ...">
          {title}
        </h2>
        <p className="text-xs text-slate-500">{publishedAt}</p>
      </div>
    </Link>
  );
};
