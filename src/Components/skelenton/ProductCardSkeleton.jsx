import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden animate-pulse">
      
      {/* 1. Image Placeholder */}
      <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 relative">
        {/* Shimmer for the badge area */}
        <div className="absolute top-2 left-2 w-12 h-4 bg-slate-300 dark:bg-slate-700 rounded-md" />
      </div>

      {/* 2. Content Section */}
      <div className="p-3 grow flex flex-col gap-3">
        
        {/* Category & Rating Row */}
        <div className="flex justify-between items-center">
          <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="h-4 w-10 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>

        {/* Title Placeholder */}
        <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded" />
        
        {/* Price & Stock Row */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex flex-col gap-1">
            <div className="h-2 w-10 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-5 w-14 bg-slate-300 dark:bg-slate-700 rounded" />
          </div>
          
          <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>
      </div>
      
      {/* 4. Action Button Placeholder */}
      <div className="px-3 pb-3">
        <div className="w-full h-8 bg-slate-200 dark:bg-slate-800 rounded-lg" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;