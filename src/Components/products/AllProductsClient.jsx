import React from 'react';


import { getAllProducts } from '@/actions/server/product';
import ProductCard from './ProductCard';


const AllProductsClient =  async () => {
    const products = (await getAllProducts()) || []
    return (
        <div className='max-w-465 mx-auto xl:px-20 md:px-10 px-5'>
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-5 gap-3'>
            {
            products.map((product ) => <ProductCard key={product._id} product={product}></ProductCard>)
           }
           </div>
           
        </div>
    );
};

export default AllProductsClient;