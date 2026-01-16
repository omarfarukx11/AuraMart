"use client";

import { createProduct } from '@/actions/server/createNewItem';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            alert("Product created successfully!");
            e.target.reset();
            setImageUrl("");
        } else {
            alert("Error: " + result.error);
        }
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
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
            className="max-w-4xl mx-auto p-4"
        >
            <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Image Section */}
                <motion.div variants={itemVariants} className="bg-blue-50/50 p-6 rounded-2xl border-2 border-dashed border-blue-100">
                    <label className="text-sm font-bold text-blue-900 uppercase tracking-wider">Product Imagery</label>
                    <div className="mt-4 flex flex-col md:flex-row gap-6 items-center">
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="w-full md:w-48 h-48 bg-white rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden shadow-inner relative"
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
                                        <div className="text-gray-300 text-4xl mb-2">🖼️</div>
                                        <p className="text-xs text-gray-400">No image preview</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                        
                        <div className="flex-1 w-full space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Image URL</label>
                            <input 
                                name="image"
                                type="url" 
                                required
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="https://images.unsplash.com/photo-..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Form Inputs Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Product Title</label>
                        <input name="title" type="text" required placeholder="Add a title" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-colors" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Category</label>
                        <select name="category" required className="px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-blue-500 transition-colors">
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Living</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Price ($)</label>
                        <input name="price" type="number" step="0.01" required placeholder="0.00" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-colors" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Stock Quantity</label>
                        <input name="stock" type="number" required placeholder="100" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-colors" />
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Product Description</label>
                    <textarea name="description" rows="4" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-colors" placeholder="Description..."></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
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