"use client";

import { createProduct } from '@/actions/server/createNewItem';
import React, { useState } from 'react';


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

    return (
        <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Image Section */}
                <div className="bg-blue-50/50 p-6 rounded-2xl border-2 border-dashed border-blue-100">
                    <label className="text-sm font-bold text-blue-900 uppercase tracking-wider">Product Imagery</label>
                    <div className="mt-4 flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-48 h-48 bg-white rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden shadow-inner">
                            {imageUrl ? (
                                <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="text-center p-4">
                                    <div className="text-gray-300 text-4xl mb-2">🖼️</div>
                                    <p className="text-xs text-gray-400">No image preview</p>
                                </div>
                            )}
                        </div>
                        
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Product Title</label>
                        <input name="title" type="text" required placeholder="e.g. Aura Air Pro" className="px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Category</label>
                        <select name="category" required className="px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none">
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Living</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Price ($)</label>
                        <input name="price" type="number" step="0.01" required placeholder="0.00" className="px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Stock Quantity</label>
                        <input name="stock" type="number" required placeholder="100" className="px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Product Description</label>
                    <textarea name="description" rows="4" className="px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Description..."></textarea>
                </div>

                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-black transition-all disabled:opacity-50"
                >
                    {loading ? "Publishing Product..." : "Publish Product to Store"}
                </button>
            </form>
        </div>
    );
};

export default AddNewItem;