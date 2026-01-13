'use client';

import React from 'react';
import Image from 'next/image';
import { FaStar, FaRegHeart, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    price,
    oldPrice,
    category,
    rating,
    reviews,
    stock,
    image,
    description,
  } = product;

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
    >
      
      {/* Image Container */}
      <div className="relative w-full h-[320px] bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {discount > 0 && (
            <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              {discount}% OFF
            </span>
          )}
          {stock <= 5 && stock > 0 && (
            <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              Low Stock
            </span>
          )}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-900 dark:text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-600 hover:text-white shadow-xl">
                <FaRegHeart size={18} />
            </button>
            <Link href={`/product/${_id}`} className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-900 dark:text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-blue-600 hover:text-white shadow-xl">
                <FaEye size={18} />
            </Link>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6 space-y-4">
        
        {/* Category & Brand Look */}
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                {category}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 text-xs">
                <FaStar />
                <span className="text-slate-400 font-bold">({rating})</span>
            </div>
        </div>

        {/* Title - Serif for Luxury Feel */}
        <h3 className="text-xl font-serif italic text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Price & Stock Row */}
        <div className="flex items-end justify-between pt-2">
            <div className="flex flex-col">
                {oldPrice && (
                    <span className="text-xs line-through text-slate-400 mb-1">
                        ${oldPrice}
                    </span>
                )}
                <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                    ${price}
                </span>
            </div>
            
            <div className="text-right">
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock > 0 ? `Available: ${stock}` : 'Sold Out'}
                </p>
            </div>
        </div>

        {/* Main Action Button */}
        <Link href={`/product/${_id}`} className="block w-full text-center py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
            View details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;