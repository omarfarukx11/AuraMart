"use client";

import { createProduct } from '@/actions/server/createNewItem';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPackage, FiImage, FiTag, FiDollarSign, FiLayers } from 'react-icons/fi';

const AddNewItem = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const result = await createProduct(data);
        
        setLoading(false);

        if (result.success) {
            setImageUrl("");
            e.target.reset();
        } else {
            alert("Error: " + result.error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto"
        >
            <div className="mb-8">
                <h1 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Add New Product</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Fill in the details below to list a new item in AuraMart.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Image Section */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-[#1D232A] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <FiImage className="text-blue-600" />
                        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Product Imagery</label>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="w-full md:w-48 h-48 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden relative"
                        >
                            <AnimatePresence mode="wait">
                                {imageUrl ? (
                                    <motion.img 
                                        key={imageUrl}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        src={imageUrl} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover" 
                                    />
                                ) : (
                                    <motion.div 
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center p-4"
                                    >
                                        <div className="text-slate-200 dark:text-slate-700 text-4xl mb-2">🖼️</div>
                                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">No Preview</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                        
                        <div className="flex-1 w-full space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Image URL</label>
                            <input 
                                name="image"
                                type="url" 
                                required
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Paste product image link here..."
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-[#1D232A] focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Grid Inputs */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-[#1D232A] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FiTag className="text-blue-600" size={14} />
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Product Title</label>
                            </div>
                            <input name="title" type="text" required placeholder="add a title" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-[#1D232A] focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FiLayers className="text-blue-600" size={14} />
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Category</label>
                            </div>
                            <select name="category" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-[#1D232A] focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white">
                                <option value="">Select Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="home">Home & Living</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1D232A] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FiDollarSign className="text-blue-600" size={14} />
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Price ($)</label>
                            </div>
                            <input name="price" type="number" step="0.01" required placeholder="0.00" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-[#1D232A] focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FiPackage className="text-blue-600" size={14} />
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Stock Quantity</label>
                            </div>
                            <input name="stock" type="number" required placeholder="100" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-[#1D232A] focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white" />
                        </div>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-[#1D232A] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Product Description</label>
                    <textarea name="description" rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-[#1D232A] focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white" placeholder="Describe the item features..."></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-slate-800 dark:hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg"
                >
                    {loading ? (
                        <>
                            <motion.span 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Publishing...
                        </>
                    ) : (
                        "Publish Product to Store"
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
};

export default AddNewItem;