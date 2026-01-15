'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { addItemToUserCart } from '@/actions/server/addToCart';
import Swal from 'sweetalert2'; // 1. Import SweetAlert

const AddToCart = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // --- 2. REUSABLE CORNER TOAST ---
  const showToast = (icon, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({ icon, title });
  };

  const handleAddToCart = async () => {
    const isAuth = Cookies.get('auth'); 

    if (isAuth === "true") {
      setLoading(true);
      
      const userEmail = "admin@gmail.com"; 

      try {
        const result = await addItemToUserCart(userEmail, product);

        if (result.success) {
          window.dispatchEvent(new Event("cartUpdate")); 

          // 3. SUCCESS TOAST
          showToast('success', `${product.title} added to cart!`);
        } else {
          // 4. DATABASE ERROR TOAST
          showToast('error', "Database Error: " + result.error);
        }
      } catch (err) {
        // 5. SERVER ERROR TOAST
        showToast('error', "Failed to add item to cart");
      } finally {
        setLoading(false);
      }
      
    } else {
      // 6. AUTH WARNING TOAST
      showToast('warning', "Please login to save items to your cart.");
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