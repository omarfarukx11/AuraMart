'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const tiers = [
        { name: "Starter", price: "Free", features: ["1 User", "5 Lists", "Basic Support"] },
        { name: "Pro", price: "$19/mo", features: ["Unlimited Users", "Unlimited Lists", "Priority Support"] },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Simple, Transparent Pricing</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                            <div className="text-4xl font-bold mb-6">{tier.price}</div>
                            <ul className="text-left space-y-4 mb-8">
                                {tier.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 px-6 bg-black text-white rounded-lg font-medium">
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;