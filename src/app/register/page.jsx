'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <div className="relative flex flex-col m-6 space-y-8 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                
                {/* --- Left Side (Registration Form) --- */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col justify-center p-8 md:p-14"
                >
                    <h1 className="mb-3 text-4xl font-black text-slate-900 dark:text-white">Create Your Account</h1>
                    <p className="font-light text-slate-600 dark:text-slate-400 mb-8">
                        Join the AuraMart community to enjoy exclusive offers, track orders, and experience curated shopping.
                    </p>

                    <form className="flex flex-col space-y-5">
                        {/* Full Name Input */}
                        <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full py-3 pl-12 pr-4 bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full py-3 pl-12 pr-4 bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                                className="w-full py-3 pl-12 pr-12 bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-500"
                                aria-label="Toggle password visibility"
                            >
                                {passwordVisible ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        
                         {/* Confirm Password Input */}
                         <div className="relative">
                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full py-3 pl-12 pr-12 bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-500"
                                aria-label="Toggle confirm password visibility"
                            >
                                {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>


                        {/* Terms Agreement */}
                        <div className="flex items-start">
                            <input id="terms" type="checkbox" className="mt-1 mr-2 rounded border-slate-300 text-sky-500 focus:ring-sky-500" />
                            <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                                I agree to the{' '}
                                <Link href="/terms-of-service" className="font-medium text-sky-600 hover:underline">
                                    Terms of Service
                                </Link>
                                {' and '}
                                <Link href="/privacy-policy" className="font-medium text-sky-600 hover:underline">
                                    Privacy Policy
                                </Link>.
                            </label>
                        </div>
                        
                        {/* Create Account Button */}
                        <button className="w-full bg-slate-900 dark:bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-sky-500 transition-all duration-300 shadow-md hover:shadow-lg">
                            Create Account
                        </button>
                    </form>

                    {/* Or Divider */}
                    <div className="relative flex items-center my-6">
                        <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                        <span className="flex-shrink mx-4 text-xs text-slate-400 uppercase">Or sign up with</span>
                        <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    
                    {/* Social Login Buttons */}
                    <div className="flex space-x-4">
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                            <FaGoogle />
                            <span>Google</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                            <FaFacebookF />
                            <span>Facebook</span>
                        </button>
                    </div>

                     {/* Sign In Link */}
                     <div className="text-center mt-8 text-sm text-slate-600 dark:text-slate-400">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-sky-600 hover:underline">
                            Sign In
                        </Link>
                    </div>

                </motion.div>

                {/* --- Right Side (Branding Image) --- */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <img
                        src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="AuraMart branding"
                        className="w-[400px] h-full hidden rounded-r-2xl object-cover md:block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-r-2xl"></div>
                </motion.div>

            </div>
        </div>
    );
};

export default Register;
