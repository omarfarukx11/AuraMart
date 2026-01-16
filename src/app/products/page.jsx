import AllProductsClient from '@/Components/products/AllProductsClient';
import React from 'react';
export const metadata = {
  title: "All Product",
  
};

const AllProducts = () => {
    return (
        <div className='min-h-[clac(100vh-120px)] lg:my-30 mt-30 sm:mt-0 mb-10 sm:mb-0 '>
           <div className="text-center mb-16 space-y-4 px-5 ">
              <h1 className="lg:text-6xl text-4xl font-black tracking-tighter text-slate-900 uppercase">
                All Products
              </h1>

              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                Experience the perfect blend of innovation and style. Our
                curated featured collection showcases premium essentials
                designed to elevate your lifestyle and redefine your everyday
                aura.
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>
            <AllProductsClient></AllProductsClient>
        </div>
    );
};

export default AllProducts;