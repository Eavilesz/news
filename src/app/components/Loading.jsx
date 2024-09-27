import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <SkeletonTheme
      highlightColor="rgb(161 161 170)"
      baseColor="rgb(244 244 245)"
    >
      <div className=" border border-gray-400 h-60 rounded-lg shadow-lg hover:border-zinc-600 hover:shadow-2xl">
        <div className="w-full h-3/5 relative rounded-t-lg">
          <Skeleton height={140} />
        </div>
        <div className="h-2/5 rounded-b-lg p-2 flex flex-col justify-between">
          <h2 className="leading-5 font-bold text-lg overflow-hidden ...">
            <Skeleton />
          </h2>
          <p className="text-xs text-slate-500">
            <Skeleton count={0.3} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
}
