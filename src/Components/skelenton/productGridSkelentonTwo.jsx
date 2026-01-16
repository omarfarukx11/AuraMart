import ProductCardSkeleton from "./ProductCardSkeleton";


export const ProductGridSkeletonTwo = () => {
  return (
    <div className='max-w-465 mx-auto xl:px-20 md:px-10 px-5 lg:mt-60'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
        {[...Array(10)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};