'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import serum from "../../../public/pexels-sound-on-3394659.jpg"; 
import { PiShippingContainerThin } from "react-icons/pi";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import Link from 'next/link';

const Benefits = () => {
  // Animation Variants for the Feature Icons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-465 mx-auto px-5 xl:px-20 md:px-10">
        
 
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          
          {/* Main Hero Promo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex flex-col md:flex-row items-center"
          >
            <div className="flex-1 p-10 z-10">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">New Arrival</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
                Intensive Glow <br /> <span className="text-blue-600">C+ Serum</span>
              </h2>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-white hover:text-blue-600 rounded-lg hover:border hover:border-gray-200 text-white px-8 py-4  font-black uppercase tracking-widest text-xs  transition-all"
              >
                <Link href={'/products'}>Explore Collection</Link>
              </motion.button>
            </div>
            <div className="flex-1 relative w-full h-75 md:h-full min-h-100 overflow-hidden">
              <Image
                src={serum}
                alt="AuraMart Premium Serum"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Secondary Discount Promo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden bg-blue-600 p-10 flex flex-col justify-between text-white"
          >
            <div className="z-10">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-black leading-none mb-2"
              >
                20% OFF
              </motion.h3>
              <p className="font-bold text-blue-100 uppercase tracking-widest text-xs">Site Wide Sale</p>
            </div>
            
            <div className="z-10 mt-10">
              <p className="text-blue-50 font-medium mb-6">
                Makeup with extended range in colors for every human.
              </p>
             
            </div>
            
            {/* Abstract Decorative Circle */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
            ></motion.div>
          </motion.div>
        </div>

        {/* Flat Minimalist Feature Icons with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-y border-gray-100 dark:border-slate-800"
        >
          
          <FeatureItem 
            variants={itemVariants}
            icon={<PiShippingContainerThin size={28} />}
            title="Free Shipping"
            desc="Orders over $130"
          />

          <FeatureItem 
            variants={itemVariants}
            icon={<TbTruckReturn size={28} />}
            title="Easy Returns"
            desc="30-day exchange policy"
          />

          <FeatureItem 
            variants={itemVariants}
            icon={<BiSupport size={28} />}
            title="Expert Support"
            desc="24/7 dedicated help"
          />

          <FeatureItem 
            variants={itemVariants}
            icon={<MdPayment size={28} />}
            title="Secure Pay"
            desc="Flexible card options"
          />

        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for clean mapping and animations
const FeatureItem = ({ icon, title, desc, variants }) => (
  <motion.div 
    variants={variants}
    whileHover={{ y: -5 }}
    className="flex items-start gap-4 group cursor-default"
  >
    <div className="w-12 h-12 shrink-0 bg-gray-50 dark:bg-slate-900 flex items-center justify-center rounded-2xl text-blue-600 border border-gray-100 dark:border-slate-800 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="font-black text-slate-900 uppercase tracking-tighter text-sm mb-1 dark:text-white group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 dark:text-gray-500 text-xs font-medium leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default Benefits;