import AllProductsClient from '@/Components/products/AllProductsClient';
import React from 'react';

const AllProducts = () => {
    return (
        <div className='min-h-[clac(100vh-120px)] lg:my-20 my-10'>
            <h1 className='text-5xl text-center font-bold py-20'>All Product</h1>
            <AllProductsClient></AllProductsClient>
        </div>
    );
};

export default AllProducts;