import React from 'react';
import Link from 'next/link';
import { getUserCart } from '@/actions/server/addToCart';
import CartQuantityBtn from '@/Components/AddToCard/CartQuantityBtn';

const CartPage = async () => {
    const userEmail = "admin@gmail.com"; 
    const cartItems = await getUserCart(userEmail);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-400">Your cart is empty</h2>
                <Link href="/products" className="text-blue-600 mt-4 hover:underline">← Go Shopping</Link>
            </div>
        );
    }

    return (
        <div className="bg-white p-5 min-h-screen pt-32 box-border rounded-lg">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="border-t border-gray-200">
                            {cartItems.map((item) => (
                                <div key={item._id} className="flex py-6 border-b border-gray-100 items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-24 h-24 rounded-lg object-cover bg-gray-50 border" 
                                        />
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.title}</h3>
                                            <p className="text-gray-400 text-sm mt-1">Unit Price: ${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                                        <CartQuantityBtn item={item} userEmail={userEmail} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/products" className="inline-block mt-8 text-blue-600 font-medium hover:underline">
                            ← Continue Shopping
                        </Link>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-32">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-bold tracking-wide">FREE</span>
                                </div>
                                <hr className="border-gray-200 my-4" />
                                <div className="flex justify-between text-2xl font-black">
                                    <span>Total</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* <button className="w-full bg-blue-600 text-white py-4 rounded-xl mt-8 font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98]">
                                Proceed to Checkout
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;