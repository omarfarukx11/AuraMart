'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiAward, FiTrendingUp } from 'react-icons/fi';

// Core Values Data
const values = [
  {
    icon: FiAward,
    title: 'Uncompromising Quality',
    description: 'We meticulously source and curate every item, ensuring it meets our high standards of craftsmanship, durability, and style.',
  },
  {
    icon: FiHeart,
    title: 'Conscious Curation',
    description: 'Our collection is thoughtfully selected to bring you products that are not only beautiful but also ethically made and sustainable.',
  },
  {
    icon: FiTrendingUp,
    title: 'Timeless Aesthetics',
    description: 'We believe in style that transcends trends. Our pieces are chosen for their timeless design and ability to elevate your everyday life.',
  },
];

const About = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-20 md:py-32">
      <div className="container mx-auto px-6">

        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 uppercase">
            Beyond the <span className="text-sky-500">Product</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
            AuraMart was born from a passion for objects that are both beautiful and meaningful. We're a destination for those who seek quality, style, and a story behind every piece.
          </p>
        </motion.div>

        {/* --- Our Mission & Story Section --- */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
              <FiTarget className="text-4xl text-sky-500 mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To elevate everyday living by providing a curated selection of high-quality, aesthetically pleasing products that inspire a more intentional and beautiful life.
              </p>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The AuraMart Story</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              In a world saturated with fleeting trends and mass-produced goods, AuraMart was founded as an antidote. We started with a simple idea: what if every item in your home wasn't just functional, but a source of joy and inspiration?
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our journey began by connecting with independent artisans and ethical brands who share our passion for quality and design. Today, AuraMart is more than just a store—it's a community dedicated to the art of living well.
            </p>
          </motion.div>
        </div>

        {/* --- Our Core Values Section --- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="inline-block bg-sky-100 dark:bg-sky-900/50 p-4 rounded-full mb-4">
                  <value.icon className="text-3xl text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

