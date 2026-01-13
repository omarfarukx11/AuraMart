'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaGlobeAmericas, FaBoxOpen, FaClock, FaCheckCircle, FaUndoAlt } from 'react-icons/fa';

const ShippingPolicy = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 max-w-465">
                
                {/* Header Section */}
                <div className="text-center mb-20 ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6">
                            Shipping <span className="text-blue-600">&</span> Delivery
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            We strive to get your AuraMart essentials to your doorstep as quickly and safely as possible. Transparent tracking, premium packaging, and global reach.
                        </p>
                    </motion.div>
                </div>

                {/* Quick Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <QuickCard 
                        icon={<FaClock className="text-blue-600" />} 
                        title="Processing Time" 
                        desc="Orders are processed within 24-48 hours (excluding weekends)."
                    />
                    <QuickCard 
                        icon={<FaTruck className="text-blue-600" />} 
                        title="Fast Delivery" 
                        desc="Standard: 3-5 days. Express: 1-2 business days."
                    />
                    <QuickCard 
                        icon={<FaGlobeAmericas className="text-blue-600" />} 
                        title="Global Shipping" 
                        desc="We deliver to over 50 countries with end-to-end tracking."
                    />
                </div>

                {/* Detailed Policy Grid */}
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-32 items-start border-t border-slate-100 dark:border-slate-800 pt-20">
                    
                    {/* Shipping Rates Table */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-4">
                            <FaBoxOpen className="text-blue-600" /> Shipping Rates
                        </h3>
                        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-900">
                                        <th className="p-6 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Method</th>
                                        <th className="p-6 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Criteria</th>
                                        <th className="p-6 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 dark:text-slate-400">
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="p-6 font-medium">Standard Ground</td>
                                        <td className="p-6">Orders over $150</td>
                                        <td className="p-6 text-green-600 font-bold">FREE</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="p-6 font-medium">Standard Ground</td>
                                        <td className="p-6">Orders under $150</td>
                                        <td className="p-6">$9.95</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Priority Express</td>
                                        <td className="p-6">Any Order</td>
                                        <td className="p-6">$24.99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* FAQ-style Details */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <PolicyItem 
                            title="Tracking Your Aura" 
                            text="Once your order is dispatched, you will receive a tracking number via email. You can monitor your shipment through our real-time portal or directly via the carrier's website."
                        />
                        <PolicyItem 
                            title="Customs & Duties" 
                            text="For international orders, AuraMart is not responsible for any customs or import duties. These fees are determined by your local government and must be paid by the recipient."
                        />
                        <PolicyItem 
                            title="Delivery Insurance" 
                            text="All AuraMart shipments are insured against theft and accidental damage at no extra cost to you. If your package arrives damaged, contact us within 48 hours."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const QuickCard = ({ icon, title, desc }) => (
    <motion.div 
        whileHover={{ y: -10 }}
        className="p-10 bg-slate-50 dark:bg-slate-900 rounded-xl border border-transparent hover:border-blue-500/30 transition-all text-center"
    >
        <div className="text-4xl flex justify-center mb-6">{icon}</div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
);

const PolicyItem = ({ title, text }) => (
    <div className="flex gap-6">
        <div className="mt-1">
            <FaCheckCircle className="text-blue-600 text-xl" />
        </div>
        <div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h4>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p>
        </div>
    </div>
);

export default ShippingPolicy;