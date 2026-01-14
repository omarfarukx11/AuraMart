import React from 'react';
import Link from 'next/link';
import { getUserCart } from '@/actions/server/addToCart';
import { cookies } from 'next/headers';

const CartPage = async () => {
    // 1. Get user info (In a real app, decode your auth cookie)
    const userEmail = "admin@gmail.com"; 
    
    // 2. Fetch real data from MongoDB
    const cartItems = await getUserCart(userEmail);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <Link href="/products" className="text-blue-600 mt-4 underline">Go Shopping</Link>
            </div>
        );
    }

    return (
        <div className="bg-white p-5 min-h-screen pt-32 box-border rounded-lg">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

                <div className="grid grid-cols-12 gap-10">
                    {/* Item List */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className="border-t border-gray-200">
                            {cartItems.map((item) => (
                                <div key={item._id} className="flex py-6 border-b border-gray-100 items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-20 h-20 rounded-lg object-cover bg-gray-100" 
                                        />
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.title}</h3>
                                            <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                        <div className="flex items-center gap-3 mt-2 border rounded-lg px-2 py-1 justify-center">
                                            {/* These buttons will need a Client Component to handle clicks */}
                                            <button className="text-gray-400 hover:text-black">-</button>
                                            <span className="font-medium text-sm">{item.quantity}</span>
                                            <button className="text-gray-400 hover:text-black">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/products" className="inline-block mt-6 text-blue-600 hover:underline">
                            ← Continue Shopping
                        </Link>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-black text-white py-4 rounded-xl mt-8 font-bold hover:bg-gray-800 transition-all uppercase tracking-wide">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;