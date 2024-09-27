import { getPlaiceholder } from 'plaiceholder';
import Image from 'next/image';

export async function getServerSideProps() {
  const src =
    'https://duet-cdn.vox-cdn.com/thumbor/0x0:4200x2961/1440x1440/filters:focal(2100x1481:2101x1482):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25615824/2155592310.jpg';

  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);

  return {
    props: {
      src,
      blurDataURL: base64,
    },
  };
}

export default function BlurImage({ src, blurDataURL }) {
  return (
    <Image
      src={src}
      blurDataURL={blurDataURL}
      fill
      alt="image"
      placeholder="blur"
    />
  );
}
