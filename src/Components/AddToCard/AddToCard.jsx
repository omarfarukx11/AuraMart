'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { addItemToUserCart } from '@/actions/server/addToCart';

const AddToCart = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    const isAuth = Cookies.get('auth'); 

    if (isAuth === "true") {
      setLoading(true);
      
      const userEmail = "admin@gmail.com"; 

      try {
        const result = await addItemToUserCart(userEmail, product);

        if (result.success) {
          // --- THE FIX IS HERE ---
          // This tells the Navbar to run its update function without a refresh
          window.dispatchEvent(new Event("cartUpdate")); 
          // -----------------------

          alert(`Added ${product.title} to cart!`);
        } else {
          alert("Database Error: " + result.error);
        }
      } catch (err) {
        alert("Failed to call server action.");
      } finally {
        setLoading(false);
      }
      
    } else {
      alert("Please login to save items to your cart.");
      router.push(`/login?redirect=${pathname}`);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`flex-1 ${
        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      } text-white py-3 rounded-xl font-semibold transition-all active:scale-95`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Adding...
        </span>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
};

export default AddToCart;