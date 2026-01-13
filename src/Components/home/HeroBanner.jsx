'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiShoppingBag } from 'react-icons/fa'; // or use fa icons
import { FaArrowRight } from 'react-icons/fa';

const HeroBanner = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                    alt="AuraMart Banner" 
                    className="w-full h-full object-cover opacity-60 dark:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 max-w-[1860px] relative z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    {/* Badge */}
                    <motion.span 
                        variants={itemVariants}
                        className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-sm uppercase tracking-widest mb-6"
                    >
                        New Season 2026 Arrivals
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1 
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
                    >
                        EXPERIENCE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
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
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <button className="group relative px-8 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:pr-12">
                            <span className="relative z-10 flex items-center gap-2">
                                Shop Collection <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        
                        <button className="px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                            View Lookbook
                        </button>
                    </motion.div>

                    {/* Floating Stats or Trust elements */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-16 pt-8 border-t border-white/10 flex gap-12"
                    >
                        <div>
                            <p className="text-3xl font-bold text-white">50k+</p>
                            <p className="text-slate-500 text-sm uppercase tracking-widest">Global Clients</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">24/7</p>
                            <p className="text-slate-500 text-sm uppercase tracking-widest">Support Line</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">100%</p>
                            <p className="text-slate-500 text-sm uppercase tracking-widest">Organic Quality</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Visual Decorative Element */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default HeroBanner;