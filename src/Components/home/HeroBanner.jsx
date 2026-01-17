"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const HeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 ">

      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://i.ibb.co.com/pjndBNm2/shirt-mockup-concept-with-plain-clothing.jpg"
          alt="AuraMart Banner"
          className="w-full h-full object-cover dark:opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto xl:px-20 md:px-10 px-5 max-w-465 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >

          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-sm uppercase tracking-widest mb-6"
          >
            New Season 2026 Arrivals
          </motion.span>


          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            EXPERIENCE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
              AURA.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            Discover curated collections that elevate your lifestyle, from
            premium skincare to modern home essentials. Designed for the future.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants}>
            <Link
              href={"/products"}
              className="group relative w-64 py-3 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-blue-600 hover:border hover:border-gray-200 active:scale-95 font-bold text-lg overflow-hidden transition-all flex justify-center items-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Stats Section with delayed stagger */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-white/10 flex gap-12"
          >
            {[
              { label: "Global Clients", val: "50k+" },
              { label: "Support Line", val: "24/7" },
              { label: "Organic Quality", val: "100%" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
              >
                <p className="text-3xl font-bold text-white">{stat.val}</p>
                <p className="text-slate-500 text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Blur with Pulse */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[-10%] bottom-[-10%] w-150 h-150 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
    </section>
  );
};

export default HeroBanner;