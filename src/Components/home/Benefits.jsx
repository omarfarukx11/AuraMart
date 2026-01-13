'use client';
import one from "../../../public/6859025.jpg"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6 space-y-24">

        {/* Benefit 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-4">
              Fast & Secure Shopping
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Enjoy a smooth shopping experience with secure payments,
              quick checkout, and reliable order tracking from start to finish.
            </p>
          </motion.div>

          <div className="flex-1 w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center">
            <Image
              src="/images/secure-shopping.png"
              alt="Secure Shopping"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Benefit 2 - Reversed */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-4">
              Best Deals & Quality Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover top-quality products at competitive prices.
              We carefully select items to give you the best value every time.
            </p>
          </motion.div>

          <div className="flex-1 bg-purple-100 rounded-2xl flex items-center justify-center">
            <Image
              src={one}
              alt="Best Deals"
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
