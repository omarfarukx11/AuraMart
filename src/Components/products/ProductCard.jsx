'use client';

import React from 'react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    price,
    category,
    rating,
    stock,
    image,
  } = product;


  const autoOldPrice = (price / 0.8).toFixed(2);
  const isSoldOut = stock === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }} // Subtle lift on hover
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }}
      className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-300 overflow-hidden"
    >
      {/* 1. Smaller Image Container */}
      <div className="relative w-full h-48 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <Link href={`/product/${_id}`}>
          <motion.img
            whileHover={{ scale: 1.1 }} // Smooth image zoom
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </Link>
        
        {/* Auto 20% Badge with Entrance Animation */}
        {!isSoldOut && (
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-black uppercase px-2 py-1 rounded-md shadow-sm z-10"
          >
            20% OFF
          </motion.span>
        )}
      </div>

      {/* 2. Compact Content Section */}
      <div className="p-3 grow flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-tighter">
            {category}
          </span>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1 text-[10px] bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded"
          >
            <FaStar className="text-amber-400" />
            <span className="text-slate-600 dark:text-slate-300 font-bold">{rating}</span>
          </motion.div>
        </div>

        <h3 className="text-sm font-bold text-slate-800 dark:text-white line-clamp-1 mb-2">
          <Link href={`/product/${_id}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        {/* 3. Compact Price Row */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] line-through text-slate-400 leading-none">
              ${autoOldPrice}
            </span>
            <span className="text-base font-black text-slate-900 dark:text-white">
              ${price}
            </span>
          </div>
          
          <div className="text-right">
            <p className={`text-[9px] font-black uppercase ${stock > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>
        </div>
      </div>
      
      {/* 4. Small Action Button with Tap Animation */}
      <div className="px-3 pb-3">
        <motion.div
          whileTap={{ scale: 0.95 }} // Visual feedback on click
        >
          <Link 
              href={`/products/${_id}`}
              className="block w-full py-2 text-center text-[10px] uppercase tracking-widest bg-blue-600 text-white rounded-lg hover:bg-white hover:border hover:border-gray-300 hover:text-black transition-all duration-300 font-bold"
          >
              View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;