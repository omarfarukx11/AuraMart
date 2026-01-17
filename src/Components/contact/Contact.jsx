'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiMail, FiPhone, FiMapPin, FiUser, 
    FiMessageSquare, FiAlertCircle
} from 'react-icons/fi';
import Swal from 'sweetalert2'; 
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});


    const showToast = (icon, title) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        Toast.fire({ icon, title });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            showToast('success', 'Message Sent Successfully!');
            
            setFormData({ name: '', email: '', message: '' });
        } else {
            showToast('error', 'Please fix the errors below');
        }
    };

    return (
        <>
            <section className="bg-white dark:bg-slate-950 flex items-center justify-center pt-20 min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 uppercase">
                            Get In <span className="text-sky-500">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                            Have a question, a comment, or a brilliant idea? We'd love to hear from you. Our team is ready to help with anything you need.
                        </p>
                    </motion.div>

                    {/* --- Contact Grid --- */}
                    <div className="grid lg:grid-cols-3 gap-12 mb-20 md:mb-32">
                        {/* Contact Info & Business Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="flex items-start gap-4">
                                <FiMail className="text-2xl text-sky-500 mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Email Us</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Send your questions to our support team.</p>
                                    <a href="mailto:support@auramart.com" className="text-sky-600 hover:underline font-medium">support@auramart.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FiPhone className="text-2xl text-sky-500 mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Call Us</h3>
                                    <p className="text-slate-600 dark:text-slate-400">We're available from Monday to Friday.</p>
                                    <a href="tel:+1234567890" className="text-sky-600 hover:underline font-medium">+1 (234) 567-890</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FiMapPin className="text-2xl text-sky-500 mt-1 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Headquarters</h3>
                                    <p className="text-slate-600 dark:text-slate-400">123 Aura Lane, Design District,<br/>Metropolis, 90210</p>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* --- CONTACT FORM --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="relative">
                                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`w-full py-3 pl-12 pr-4 bg-white dark:bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500'}`} />
                                        </div>
                                        {errors.name && <p className="mt-1 text-sm text-rose-500 flex items-center gap-1"><FiAlertCircle /> {errors.name}</p>}
                                    </div>
                                    <div>
                                        <div className="relative">
                                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`w-full py-3 pl-12 pr-4 bg-white dark:bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500'}`} />
                                        </div>
                                        {errors.email && <p className="mt-1 text-sm text-rose-500 flex items-center gap-1"><FiAlertCircle /> {errors.email}</p>}
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <FiMessageSquare className="absolute left-4 top-5 text-slate-400" />
                                        <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} className={`w-full py-3 pl-12 pr-4 bg-white dark:bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500'}`}></textarea>
                                    </div>
                                    {errors.message && <p className="mt-1 text-sm text-rose-500 flex items-center gap-1"><FiAlertCircle /> {errors.message}</p>}
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-gray-400 active:scale-95 font-bold py-3 dark:hover:bg-sky-500 transition-all duration-300 shadow-md hover:shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;