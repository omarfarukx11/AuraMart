'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiPlus, FiMinus } from 'react-icons/fi';
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
            <div className="container mx-auto  max-w-465 xl:px-20 lg:px-10 px-5">
                
                <div className="grid lg:grid-cols-12 gap-16">
                    
                    {/* Left Side: Header */}
                    <div className="lg:col-span-4">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-blue-600 font-bold uppercase tracking-widest text-sm"
                        >
                            Support Center
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-6 leading-tight">
                            FREQUENTLY ASKED <br /> <span className="text-blue-600">QUESTIONS.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                            Can't find what you're looking for? Reach out to our 24/7 support team for personalized assistance.
                        </p>
                        <Link href={'/contact'} className="group relative px-8 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:bg-green-400 ">
                            Contact Support
                        </Link>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`border rounded-xl transition-all duration-300 ${
                                    activeIndex === index 
                                    ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-900/10' 
                                    : 'border-slate-200 dark:border-slate-800 bg-transparent'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                                >
                                    <span className={`text-xl font-bold transition-colors ${
                                        activeIndex === index ? 'text-blue-600' : 'text-slate-900 dark:text-white'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        className={`text-2xl ${activeIndex === index ? 'text-blue-600' : 'text-slate-400'}`}
                                    >
                                        <FiChevronDown />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-8 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;