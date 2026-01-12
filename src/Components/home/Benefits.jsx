'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto px-6 space-y-24">
                
                {/* Benefit 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold mb-4">Save hours of manual work</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Our automated tracking system handles the heavy lifting so you can focus on growing your business instead of updating spreadsheets.
                        </p>
                    </motion.div>
                    <div className="flex-1 w-full h-64 bg-blue-200 rounded-2xl flex items-center justify-center">
                        <span className="text-blue-600 font-semibold italic">[Image/Illustration 1]</span>
                    </div>
                </div>

                {/* Benefit 2 - Reversed */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-bold mb-4">Collaborate with your team</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Share lists and items instantly. Everyone stays on the same page with real-time updates and activity logs.
                        </p>
                    </motion.div>
                    <div className="flex-1 w-full h-64 bg-purple-200 rounded-2xl flex items-center justify-center">
                        <span className="text-purple-600 font-semibold italic">[Image/Illustration 2]</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Benefits;