'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

const faqs = [
    {
        question: "How long does shipping take?",
        answer: "For domestic orders, shipping typically takes 3-5 business days. International shipping can take 7-14 business days depending on your location and customs processing."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day hassle-free return policy. Items must be in their original packaging and unused condition. Return shipping is free for all domestic exchanges."
    },
    {
        question: "Are your skincare products organic?",
        answer: "Yes! All products in our Aura Glow line are 100% organic, cruelty-free, and dermatologically tested to ensure the highest quality for your skin."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order ships, you will receive an email with a tracking number and a link to our tracking portal. You can also track it directly from your AuraMart account dashboard."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Absolutely. We ship to over 50 countries worldwide. Shipping costs and delivery times are calculated at checkout based on your specific region."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white dark:bg-slate-950 ">
            <div className="container mx-auto max-w-465 xl:px-20 lg:px-10 px-5">
                
                <div className="grid lg:grid-cols-12 gap-16">
                    
                    {/* Left Side: Header */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">
                            Support Center
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-tight tracking-tighter">
                            FREQUENTLY ASKED <br /> <span className="text-blue-600">QUESTIONS.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                            Can't find what you're looking for? Reach out to our 24/7 support team for personalized assistance.
                        </p>
                        <Link href={'/contact'} className="inline-block">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 font-black uppercase tracking-widest text-xs transition-all"
                            >
                                Contact Support
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right Side: Accordion */}
                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div 
                                layout // Ensures other items slide smoothly when one opens
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                key={index}
                                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                                    activeIndex === index 
                                    ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-900/10 shadow-lg shadow-blue-500/5' 
                                    : 'border-slate-100 dark:border-slate-800 bg-transparent hover:border-slate-300 dark:hover:border-slate-700'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none group"
                                >
                                    <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${
                                        activeIndex === index ? 'text-blue-600' : 'text-slate-900 dark:text-white'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ 
                                            rotate: activeIndex === index ? 180 : 0,
                                            scale: activeIndex === index ? 1.2 : 1
                                        }}
                                        className={`text-2xl ${activeIndex === index ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`}
                                    >
                                        <FiChevronDown />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-8 pb-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                <motion.p
                                                    initial={{ y: -10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;