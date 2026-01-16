import React, { Suspense } from 'react';
import Products from '../products/Products';
import { ProductGridSkeletonTwo } from '../skelenton/productGridSkelentonTwo';

const TopProduct = () => {
    return (
        <div className="py-20 px-5">
          <div >
            <div className="text-center mb-16 space-y-4">
              <h1 className="lg:text-6xl text-4xl font-black tracking-tighter text-slate-900 uppercase">
                Our Featured Products
              </h1>

              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                Experience the perfect blend of innovation and style. Our
                curated featured collection showcases premium essentials
                designed to elevate your lifestyle and redefine your everyday
                aura.
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>
            <Suspense fallback={<ProductGridSkeletonTwo />}>
              <Products />
            </Suspense>
          </div>
        </div>
    );
};

export default TopProduct;