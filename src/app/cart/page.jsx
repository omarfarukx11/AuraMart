"use client";
import React from 'react';
import Link from 'next/link';

const CartPage = () => {
    // This is sample data - usually, you would get this from your Cart Context or LocalStorage
    const cartItems = [
        { id: 1, name: "Premium Leather Watch", price: 120, qty: 1, image: "https://via.placeholder.com/100" },
        { id: 2, name: "Wireless Earbuds Pro", price: 85, qty: 2, image: "https://via.placeholder.com/100" },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return (
        <div className="bg-white p-5 min-h-screen pt-30 box-border rounded-lg">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

                <div className="grid grid-cols-12 gap-10">
                    {/* Item List */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className="border-t border-gray-200">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex py-6 border-b border-gray-100 items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-gray-100" />
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.name}</h3>
                                            <p className="text-gray-500 text-sm">Size: Medium | Color: Blue</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">${item.price * item.qty}</p>
                                        <div className="flex items-center gap-3 mt-2 border rounded-lg px-2 py-1 justify-center">
                                            <button className="text-gray-500 hover:text-black">-</button>
                                            <span className="font-medium text-sm">{item.qty}</span>
                                            <button className="text-gray-500 hover:text-black">+</button>
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
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span>$0.00</span>
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