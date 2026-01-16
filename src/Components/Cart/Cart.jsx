'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CartQuantityBtn from '@/Components/AddToCard/CartQuantityBtn';
import { FiArrowLeft } from 'react-icons/fi'; // Optional: for a nice arrow icon

const Cart = ({ cartItems, userEmail, subtotal }) => {
    
    if (cartItems.length === 0) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-slate-950"
            >
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Your cart is empty</h2>
                <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-xl mt-6 font-bold hover:bg-blue-700 transition-all">
                    Go Shopping
                </Link>
            </motion.div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 md:pt-32 pb-20">
            <div className="max-w-465 mx-auto px-5 xl:px-20 md:px-10">
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl md:text-4xl font-black mb-8 md:mb-12 dark:text-white uppercase tracking-tighter"
                >
                    Your Shopping Cart
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    <div className="lg:col-span-8">
                        <div className="border-t border-gray-100 dark:border-slate-800">
                            <AnimatePresence mode='popLayout'>
                                {cartItems.map((item, index) => (
                                    <motion.div 
                                        key={item._id}
                                        layout 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col sm:flex-row py-6 border-b border-gray-100 dark:border-slate-800 gap-4 sm:items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <motion.img 
                                                whileHover={{ scale: 1.1 }}
                                                src={item.image} 
                                                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover bg-gray-50 border border-gray-100 dark:border-slate-800 shrink-0" 
                                            />
                                            <div>
                                                <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-white line-clamp-1">{item.title}</h3>
                                                <p className="text-gray-400 text-xs md:text-sm mt-1 uppercase font-bold tracking-wider">
                                                    Unit Price: ${item.price}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                                            <p className="font-black text-xl text-slate-900 dark:text-white">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                            <CartQuantityBtn item={item} userEmail={userEmail} />
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* ADDED: More Shopping Button */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8"
                        >
                            <Link 
                                href="/products" 
                                className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
                            >
                                <FiArrowLeft className="text-lg" /> Add More Items
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side: Order Summary */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-4"
                    >
                        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-slate-800 lg:sticky lg:top-32">
                            <h2 className="text-xl font-black mb-6 uppercase tracking-tight dark:text-white">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-600 dark:text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                                    <span>Subtotal</span>
                                    <span className="text-slate-900 dark:text-white text-base">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400 font-bold uppercase text-[10px] tracking-widest">Shipping</span>
                                    <span className="text-emerald-600 font-black text-xs">FREE</span>
                                </div>
                                <hr className="border-gray-200 dark:border-slate-800 my-4" />
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-400 font-black uppercase text-[10px] tracking-[0.2em]">Total</span>
                                    <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">${subtotal.toFixed(2)}</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Cart;