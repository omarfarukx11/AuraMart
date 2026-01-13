
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

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

  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Product Image */}
      <div className="relative w-full h-56 bg-gray-100 dark:bg-slate-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6 group-hover:scale-105 transition"
        />

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-3">
        
        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
          {category}
        </span>

        <h3 className="text-lg font-semibold line-clamp-2">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating) ? 'opacity-100' : 'opacity-30'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <span className="text-sm line-through text-gray-400">
            ${oldPrice}
          </span>
        </div>

        {/* Stock */}
        <p
          className={`text-sm font-medium ${
            stock > 0 ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        {/* Action Button */}
        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition cursor-pointer">
            <Link href={`/product/${_id}`}
          
        >
          view Details
        </Link>
        </button>
      </div>
    </div>

  );
};

export default ProductCard;
