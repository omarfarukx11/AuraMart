import React from 'react';
import { getProducts } from '@/actions/server/product';
import ProductCard from './ProductCard';


const Products =  async () => {
    const products = (await getProducts()) || []
    return (
        <div className='max-w-465 mx-auto xl:px-20 md:px-10 px-5'>
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5'>
            {
            products.map((product ) => <ProductCard key={product._id} product={product}></ProductCard>)
           }
           </div>
           
        </div>
    );
};

export default Products;