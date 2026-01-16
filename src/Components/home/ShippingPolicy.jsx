'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaGlobeAmericas, FaBoxOpen, FaClock, FaCheckCircle } from 'react-icons/fa';

const ShippingPolicy = () => {
    // Animation container for staggered cards
    const cardContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemFadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-5 md:px-10 xl:px-20 max-w-465">
                
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-8">
                            Shipping <span className="text-blue-600">&</span> Delivery
                        </h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            We strive to get your AuraMart essentials to your doorstep as quickly and safely as possible. Transparent tracking and global reach.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Quick Info Cards with Staggered Entrance */}
                <motion.div 
                    variants={cardContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 mb-32"
                >
                    <QuickCard 
                        variants={itemFadeUp}
                        icon={<FaClock className="text-blue-600" />} 
                        title="Processing Time" 
                        desc="Orders are processed within 24-48 hours (excluding weekends)."
                    />
                    <QuickCard 
                        variants={itemFadeUp}
                        icon={<FaTruck className="text-blue-600" />} 
                        title="Fast Delivery" 
                        desc="Standard: 3-5 days. Express: 1-2 business days."
                    />
                    <QuickCard 
                        variants={itemFadeUp}
                        icon={<FaGlobeAmericas className="text-blue-600" />} 
                        title="Global Shipping" 
                        desc="We deliver to over 50 countries with end-to-end tracking."
                    />
                </motion.div>

                {/* Detailed Policy Grid */}
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-32 items-start border-t border-slate-100 dark:border-slate-800 pt-24">
                    
                    {/* Shipping Rates Table with Row Hover Animation */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4 tracking-tighter uppercase">
                            <FaBoxOpen className="text-blue-600" /> Shipping Rates
                        </h3>
                        <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-100/50 dark:bg-slate-900/80">
                                        <th className="p-6 font-black text-xs uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800">Method</th>
                                        <th className="p-6 font-black text-xs uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800">Criteria</th>
                                        <th className="p-6 font-black text-xs uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 dark:text-slate-400">
                                    <TableRow method="Standard Ground" criteria="Orders over $150" cost="FREE" isFree />
                                    <TableRow method="Standard Ground" criteria="Orders under $150" cost="$9.95" />
                                    <TableRow method="Priority Express" criteria="Any Order" cost="$24.99" isLast />
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* FAQ-style Details with Staggered Checkmarks */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        <PolicyItem 
                            title="Tracking Your Aura" 
                            text="Once your order is dispatched, you will receive a tracking number via email. You can monitor your shipment through our real-time portal."
                        />
                        <PolicyItem 
                            title="Customs & Duties" 
                            text="International orders may be subject to customs duties determined by your local government, which must be paid by the recipient."
                        />
                        <PolicyItem 
                            title="Delivery Insurance" 
                            text="All AuraMart shipments are insured against theft and accidental damage at no extra cost. Contact support within 48 hours for claims."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const QuickCard = ({ icon, title, desc, variants }) => (
    <motion.div 
        variants={variants}
        whileHover={{ y: -12, backgroundColor: 'rgba(59, 130, 246, 0.02)' }}
        className="p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 text-center group"
    >
        <motion.div 
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-5xl flex justify-center mb-8"
        >
            {icon}
        </motion.div>
        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">{title}</h4>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
    </motion.div>
);

const TableRow = ({ method, criteria, cost, isFree, isLast }) => (
    <motion.tr 
        whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.03)' }}
        className={`${!isLast ? 'border-b border-slate-100 dark:border-slate-800' : ''} transition-colors group`}
    >
        <td className="p-6 font-bold text-slate-900 dark:text-slate-200">{method}</td>
        <td className="p-6 text-sm font-medium">{criteria}</td>
        <td className={`p-6 font-black ${isFree ? 'text-emerald-500' : 'text-slate-900 dark:text-white'}`}>{cost}</td>
    </motion.tr>
);

const PolicyItem = ({ title, text }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-8 group"
    >
        <div className="mt-1">
            <motion.div 
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center"
            >
                <FaCheckCircle className="text-blue-600 text-xl" />
            </motion.div>
        </div>
        <div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
                {title}
            </h4>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{text}</p>
        </div>
    </motion.div>
);

export default ShippingPolicy;