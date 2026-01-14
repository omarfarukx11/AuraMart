'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const AddToCart = ({ product }) => {
  const router = useRouter();

  const handleAddToCart = () => {
    const isAuth = Cookies.get('auth'); 

    if (isAuth === "true") {
      console.log("Adding to cart:", product.title);
      alert(`${product.title} added to cart!`);

    } else {
      alert("Please login to add items to your cart.");
      router.push('/login');
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;