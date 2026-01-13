'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BrandsMarquee = () => {
    // A mix of Luxury, Sportswear, and Lifestyle brands for women
    const brands = [
        "NIKE", "ADIDAS", "PUMA", "CHANEL", "DIOR", 
        "LULULEMON", "GUCCI", "ZARA", "PRADA", "NEW BALANCE",
        "REEBOK", "SEPHORA", "HERMÈS", "ESTÉE LAUDER", "VALENTINO",
        "UNDER ARMOUR", "GLOSSIER", "PANDORA", "GIVENCHY", "TIFFANY & CO.",
        "FENTY BEAUTY", "CHLOÉ", "YSL", "VERSACE", "ASICS"
    ];

    // Duplicate the array for a seamless infinite loop
    const doubledBrands = [...brands, ...brands];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="container mx-auto px-6 max-w-465 mb-16 text-center">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-blue-600 font-bold uppercase tracking-[0.4em] text-xs mb-3 block"
                >
                    Global Partners
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-serif  text-slate-900 dark:text-white leading-tight">
                    Shop Your <span className="text-blue-600 font-sans font-black uppercase">Favorite</span> Brands
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex items-center group">
                {/* Visual Fading Masks */}
                <div className="absolute left-0 top-0 w-48 h-full bg-linear-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-48 h-full bg-linear-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

                <motion.div 
                    className="flex whitespace-nowrap gap-20 md:gap-32 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    whileHover={{ transition: { duration: 60 } }} 
                >
                    {doubledBrands.map((brand, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span 
                                className={`text-3xl md:text-5xl font-black tracking-tighter transition-all duration-300 cursor-default
                                    ${brand === "NIKE" || brand === "ADIDAS" || brand === "PUMA" 
                                        ? "font-sans text-slate-900 dark:text-white opacity-100 scale-110" 
                                        : "font-serif  text-slate-300 dark:text-slate-700 hover:text-blue-600"
                                    }`}
                            >
                                {brand}
                            </span>
                            {/* Small indicator for the "Sport" category brands */}
                            {(brand === "NIKE" || brand === "ADIDAS" || brand === "PUMA") && (
                                <span className="text-[10px] text-blue-600 font-bold tracking-widest mt-2 uppercase">
                                    Performance
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-16 text-center">
                <p className="text-slate-400 text-sm tracking-[0.5em] uppercase font-medium">
                    100% Authentic Products • Worldwide Delivery • Premium Quality
                </p>
            </div>
        </section>
    );
};

export default BrandsMarquee;