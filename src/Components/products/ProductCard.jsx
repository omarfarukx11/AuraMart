'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    price,
    oldPrice,
    category,
    rating,
    stock,
    image,
  } = product;

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
  const isSoldOut = stock === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-black/20 transition-all duration-300 overflow-hidden"
    >
      {/* --- Image & Hover Action Container (Reduced Height) --- */}
      <div className="relative w-full h-72 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <Link href={`/product/${_id}`} aria-label={`View details for ${title}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </Link>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {discount > 0 && !isSoldOut && (
            <span className="bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
              -{discount}%
            </span>
          )}
          {isSoldOut && (
            <span className="bg-slate-700 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
              Sold Out
            </span>
          )}
        </div>

        {/* Wishlist Heart Icon */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#E11D48', color: '#FFFFFF' }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 right-4 z-10 p-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-full text-rose-500 shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          aria-label="Add to Wishlist"
        >
          <FaRegHeart size={20} />
        </motion.button>
      </div>

      {/* --- Product Content --- */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            {category}
          </span>
          <div className="flex items-center gap-1.5 text-xs">
            <FaStar className="text-amber-400" />
            <span className="text-slate-500 dark:text-slate-400 font-bold">{rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-snug my-3 line-clamp-2 flex-grow">
          <Link href={`/product/${_id}`} className="hover:text-sky-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        {/* Price & Stock Status */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-sm line-through text-slate-400">
                ${oldPrice}
              </span>
            )}
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              ${price}
            </span>
          </div>
          
          <div className="text-right">
            <p className={`text-xs font-bold uppercase tracking-wider ${stock > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
              {stock > 0 ? `${stock} in Stock` : 'Sold Out'}
            </p>
          </div>
        </div>
      </div>
      
      {/* --- View Details Button --- */}
      <div className="border-t border-slate-100 dark:border-slate-800">
        <Link 
            href={`/product/${_id}`}
            className="block w-full py-3 text-center text-sm font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest
                       hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-colors duration-300"
        >
            View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
