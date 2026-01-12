'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Integrations = () => {
    const logos = ["Slack", "Github", "Notion", "Google", "Discord", "Trello"];

    return (
        <section className="py-16 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">Works with your favorite tools</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
                    {logos.map((logo, i) => (
                        <motion.span 
                            key={i}
                            whileHover={{ opacity: 1, scale: 1.1 }}
                            className="text-2xl font-bold text-gray-400"
                        >
                            {logo}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;