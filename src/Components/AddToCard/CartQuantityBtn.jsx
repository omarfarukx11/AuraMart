'use client';

import { updateCartQuantity, deleteCartItem } from "@/actions/server/addToCart";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2"; // 1. Import SweetAlert

export default function CartQuantityBtn({ item, userEmail }) {
  const [loading, setLoading] = useState(false);

  // --- 2. REUSABLE CORNER TOAST ---
  const showToast = (icon, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    Toast.fire({ icon, title });
  };

  const handleUpdate = async (change) => {
    if (change === -1 && item.quantity <= 1) return;

    setLoading(true);
    const result = await updateCartQuantity(userEmail, item.productId, change);
    if (result.success) {
      window.dispatchEvent(new Event("cartUpdate"));
      // Show subtle toast for quantity change
      showToast('success', 'Quantity updated');
    } else {
      showToast('error', 'Update failed');
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    // --- 3. REPLACED confirm() WITH SWEETALERT MODAL ---
    const confirmResult = await Swal.fire({
      title: "Remove item?",
      text: `Do you want to remove ${item.title || 'this item'} from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444", // red-500
      cancelButtonColor: "#64748b", // slate-500
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel"
    });

    if (confirmResult.isConfirmed) {
      setLoading(true);
      const result = await deleteCartItem(userEmail, item.productId);
      if (result.success) {
        window.dispatchEvent(new Event("cartUpdate"));
        showToast('success', 'Item removed from cart');
      } else {
        showToast('error', 'Failed to remove item');
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <div className={`flex items-center gap-3 border rounded-lg px-2 py-1 justify-center ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
        <button 
          onClick={() => handleUpdate(-1)} 
          disabled={item.quantity <= 1}
          className={`${item.quantity <= 1 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-400 hover:text-black'} font-bold px-1`}
        >
          -
        </button>
        <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
        <button 
          onClick={() => handleUpdate(1)} 
          className="text-gray-400 hover:text-black font-bold px-1"
        >
          +
        </button>
      </div>
      
      <button 
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 mt-1 transition-colors"
        disabled={loading}
      >
        <FaTrashAlt size={12} /> Remove
      </button>
    </div>
  );
}