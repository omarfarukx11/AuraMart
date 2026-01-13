'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    { id: 1, name: "Sarah Jenkins", role: "Verified Buyer", content: "The quality of the Intensive Glow Serum exceeded my expectations. My skin has never looked better!", rating: 5, image: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Michael Chen", role: "Interior Designer", content: "I love the curated collection. It's hard to find a store that balances modern aesthetics with durability.", rating: 5, image: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Elena Rodriguez", role: "Fashion Blogger", content: "AuraMart's customer service is top-notch. They resolved my sizing issue within hours. Truly premium.", rating: 4, image: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "David Wilson", role: "Tech Enthusiast", content: "Fastest shipping I've experienced in years. The packaging was also eco-friendly and very secure.", rating: 5, image: "https://i.pravatar.cc/150?u=4" },
    { id: 5, name: "Sophie Taylor", role: "MUA", content: "The range of colors in the makeup collection is incredible. Finally, a brand that thinks of everyone.", rating: 5, image: "https://i.pravatar.cc/150?u=5" },
    { id: 6, name: "James Anderson", role: "Minimalist", content: "Clean designs, high quality, and a very easy-to-use website. AuraMart has won me over.", rating: 5, image: "https://i.pravatar.cc/150?u=6" },
    { id: 7, name: "Olivia Brown", role: "Yoga Instructor", content: "The lifestyle products feel very intentional. You can tell they care about the materials used.", rating: 4, image: "https://i.pravatar.cc/150?u=7" },
    { id: 8, name: "Liam Smith", role: "Entrepreneur", content: "Simple, transparent, and high value. I appreciate the loyalty program they have for members.", rating: 5, image: "https://i.pravatar.cc/150?u=8" },
    { id: 9, name: "Isabella Garcia", role: "Artist", content: "Visuals on the site are stunning, and the products look even better in person. 10/10 recommend.", rating: 5, image: "https://i.pravatar.cc/150?u=9" },
    { id: 10, name: "Noah Martinez", role: "Student", content: "Affordable luxury. I love that I can get high-end quality without breaking my student budget.", rating: 5, image: "https://i.pravatar.cc/150?u=10" },
];

const Testimonials = () => {
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-30 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-6 max-w-465 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 uppercase">
                    Trusted by <span className="text-blue-600">Thousands</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                    Hear from our community about their AuraMart experience.
                </p>
            </div>

            <div className="flex overflow-hidden group">
                <motion.div 
                    className="flex whitespace-nowrap gap-8 py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    whileHover={{ transition: { duration: 0 } }} 
                    style={{ width: "fit-content" }}
                >
                    {duplicatedTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-100 shrink-0 bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 "
                        >
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < item.rating ? "fill-current" : "text-slate-200"} />
                                ))}
                            </div>
                            
                            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8 whitespace-normal italic">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                />
                                <div className="text-left">
                                    <h4 className="font-bold text-slate-900 dark:text-white leading-none">
                                        {item.name}
                                    </h4>
                                    <span className="text-sm text-slate-500 dark:text-slate-500 uppercase tracking-widest font-semibold mt-1 inline-block">
                                        {item.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fading Gradients to mask the edges */}
            <div className="relative pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />
            </div>
        </section>
    );
};

export default Testimonials;