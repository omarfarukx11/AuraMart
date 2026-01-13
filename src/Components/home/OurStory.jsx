'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaUsers } from 'react-icons/fa';

const OurStory = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
            <div className="container mx-auto px-5 md:px-10 max-w-465 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    
                    {/* Left Side: Visuals */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                                alt="Our Team" 
                                className="w-full h-[700px] object-cover"
                            />
                        </div>
                        
                        {/* Decorative Floating Element */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-10 z-20 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl max-w-[280px] hidden xl:block"
                        >
                            <p className="text-blue-600 font-black text-5xl mb-2">10+</p>
                            <p className="text-slate-900 dark:text-white font-bold text-lg uppercase tracking-tight">
                                Years of redefining retail excellence.
                            </p>
                        </motion.div>

                        {/* Background Shape */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                            Our Philosophy
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tighter">
                            CRAFTING THE <br />
                            <span className="text-blue-600">AURA</span> OF MODERN LIFE.
                        </h2>
                        
                        <div className="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                            <p>
                                AuraMart began with a simple observation: the world didn't need more products; it needed better ones. Founded in 2016, we set out to bridge the gap between high-end luxury and everyday utility.
                            </p>
                            <p>
                                We believe that the objects you surround yourself with define your energy—your aura. That's why every item in our collection is hand-selected for its quality, sustainability, and timeless design.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <ValueItem 
                                icon={<FaLeaf className="text-green-500" />} 
                                title="Sustainability" 
                                desc="Eco-friendly sourcing."
                            />
                            <ValueItem 
                                icon={<FaAward className="text-yellow-500" />} 
                                title="Premium Quality" 
                                desc="Built to last a lifetime."
                            />
                            <ValueItem 
                                icon={<FaUsers className="text-blue-500" />} 
                                title="Community" 
                                desc="Customer-first approach."
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const ValueItem = ({ icon, title, desc }) => (
    <div className="flex flex-col gap-3">
        <div className="text-2xl">{icon}</div>
        <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{desc}</p>
    </div>
);

export default OurStory;