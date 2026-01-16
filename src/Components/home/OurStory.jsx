'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaUsers } from 'react-icons/fa';

const OurStory = () => {
    // Stagger animation for the values at the bottom
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    };

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden xl:mt-20 lg:mt-10 mt-5">
            <div className="container mx-auto px-5 md:px-10 max-w-465 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    
                    {/* Left Side: Visuals */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Image with Hover Scale */}
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                                alt="Our Team" 
                                className="w-full h-[600px] lg:h-[700px] object-cover"
                            />
                        </motion.div>
                        
                        {/* Decorative Floating Element */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ 
                                animate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                initial: { duration: 0.6, delay: 0.4 }
                            }}
                            className="absolute -bottom-10 -right-10 z-20 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl max-w-[280px] hidden xl:block border border-slate-100 dark:border-slate-700"
                        >
                            <p className="text-blue-600 font-black text-5xl mb-2 tracking-tighter">10+</p>
                            <p className="text-slate-900 dark:text-white font-black text-lg uppercase tracking-tight leading-tight">
                                Years of redefining retail excellence.
                            </p>
                        </motion.div>

                        {/* Background Decorative Blur */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.span 
                            initial={{ opacity: 0, letterSpacing: "0.1em" }}
                            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                            transition={{ duration: 1 }}
                            className="text-blue-600 font-bold uppercase mb-6 block text-sm"
                        >
                            Our Philosophy
                        </motion.span>
                        
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tighter">
                            CRAFTING THE <br />
                            <span className="text-blue-600">AURA</span> OF MODERN LIFE.
                        </h2>
                        
                        <div className="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium">
                            <p>
                                AuraMart began with a simple observation: the world didn't need more products; it needed better ones. Founded in 2016, we set out to bridge the gap between high-end luxury and everyday utility.
                            </p>
                            <p>
                                We believe that the objects you surround yourself with define your energy—your aura. That's why every item in our collection is hand-selected for its quality, sustainability, and timeless design.
                            </p>
                        </div>

                        {/* Values Grid with Staggered Animation */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800"
                        >
                            <ValueItem 
                                icon={<FaLeaf className="text-emerald-500" />} 
                                title="Sustainability" 
                                desc="Eco-friendly sourcing."
                            />
                            <ValueItem 
                                icon={<FaAward className="text-amber-500" />} 
                                title="Premium Quality" 
                                desc="Built to last a lifetime."
                            />
                            <ValueItem 
                                icon={<FaUsers className="text-blue-500" />} 
                                title="Community" 
                                desc="Customer-first approach."
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const ValueItem = ({ icon, title, desc }) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -5 }}
        className="flex flex-col gap-3 group p-2 rounded-xl transition-colors hover:bg-white dark:hover:bg-slate-900"
    >
        <div className="text-2xl transition-transform group-hover:scale-110 duration-300">
            {icon}
        </div>
        <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter text-sm">
            {title}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
            {desc}
        </p>
    </motion.div>
);

export default OurStory;