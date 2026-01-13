'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import serum from "../../../public/pexels-sound-on-3394659.jpg"; 
import { PiShippingContainerThin } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

const Benefits = () => {
  return (

    <section className="min-h-dvh flex items-center py-20 bg-gray-50 dark:bg-slate-800 ">
      <div className="container mx-auto px-6">
        
        <div className="space-y-16 w-full">
          {/* Top Promo Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Promo 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md"
            >
              <div className="flex-1 p-8">
                <span className="text-sm uppercase text-gray-500 font-medium">New Collection</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 dark:text-white">
                  Intensive Glow C+ Serum
                </h2>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                  Explore More
                </button>
              </div>
              <div className="flex-1 relative aspect-square w-full">
                <Image
                  src={serum}
                  alt="Intensive Glow C+ Serum"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Promo 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row-reverse items-center bg-green-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md"
            >
              <div className="flex-1 p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">25% off Everything</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Makeup with extended range in colors for every human.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors">
                  Shop Sale
                </button>
              </div>
              <div className="flex-1 relative aspect-square w-full">
                <Image
                  src="https://i.ibb.co.com/zVQkHN9V/tomasz-gawlowski-YDZPdqv3-Fc-A-unsplash.jpg"
                  alt="Sale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 text-center border-t border-gray-200 dark:border-slate-700">
            {/* Feature 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl"><PiShippingContainerThin /></div>
              <h3 className="font-semibold dark:text-white">Free Shipping</h3>
              <p className="text-gray-500 text-sm">Free Shipping for orders over $130</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl"><TbTruckReturn /></div>
              <h3 className="font-semibold dark:text-white">Returns</h3>
              <p className="text-gray-500 text-sm">Within 30 days for an exchange.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl"><BiSupport /></div>
              <h3 className="font-semibold dark:text-white">Online Support</h3>
              <p className="text-gray-500 text-sm">24 hours a day, 7 days a week</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl"><MdPayment /></div>
              <h3 className="font-semibold dark:text-white">Flexible Payment</h3>
              <p className="text-gray-500 text-sm">Pay with Multiple Credit Cards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;