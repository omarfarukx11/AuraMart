const ProductDetailsSkeleton = () => {
  return (
    <section className="container mx-auto px-6 py-32 mt-20 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Image Skeleton */}
        <div className="relative bg-gray-200 dark:bg-slate-800 rounded-xl w-full aspect-square">
          {/* Main image block */}
          <div className="w-full h-full bg-gray-300 dark:bg-slate-700 rounded-xl" />
        </div>

        {/* Info Skeleton */}
        <div className="space-y-6 flex flex-col justify-center">
          {/* Category tag */}
          <div className="h-4 w-24 bg-gray-200 dark:bg-slate-800 rounded" />

          {/* Title */}
          <div className="space-y-3">
            <div className="h-8 w-3/4 bg-gray-300 dark:bg-slate-700 rounded" />
            <div className="h-8 w-1/2 bg-gray-300 dark:bg-slate-700 rounded" />
          </div>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-5 w-5 bg-gray-200 dark:bg-slate-800 rounded-full" />
              ))}
            </div>
            <div className="h-4 w-16 bg-gray-200 dark:bg-slate-800 rounded" />
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-28 bg-gray-300 dark:bg-slate-700 rounded" />
            <div className="h-6 w-20 bg-gray-200 dark:bg-slate-800 rounded" />
          </div>

          {/* Stock status */}
          <div className="h-5 w-32 bg-gray-200 dark:bg-slate-800 rounded" />

          {/* Description lines */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-slate-800 rounded" />
            <div className="h-4 w-full bg-gray-200 dark:bg-slate-800 rounded" />
            <div className="h-4 w-full bg-gray-200 dark:bg-slate-800 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-slate-800 rounded" />
          </div>

          {/* Button */}
          <div className="pt-4">
            <div className="h-12 w-full bg-gray-300 dark:bg-slate-700 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;