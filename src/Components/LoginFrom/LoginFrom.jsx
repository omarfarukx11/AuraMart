"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import LoginImage from "../../../public/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg";
import { useRouter, useSearchParams } from "next/navigation"; 

const LoginFrom = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [passwordVisible, setPasswordVisible] = useState(false);


  const redirectTo = searchParams.get("redirect") || "/";

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleMockSignIn = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    if (email === "admin@gmail.com" && password === "admin@1") {
      document.cookie = "auth=true; path=/";
      
      window.dispatchEvent(new Event("authChange"));


      router.push(redirectTo);
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="relative flex flex-col m-6 space-y-8 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center p-8 md:p-14"
        >
          <h1 className="mb-3 text-4xl font-black text-slate-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="font-light text-slate-600 dark:text-slate-400 mb-8">
            Sign in to access your account, view your orders, and enjoy a
            seamless shopping experience with AuraMart.
          </p>

          <form onSubmit={handleMockSignIn} className="flex flex-col space-y-5">
            {/* Email Input */}
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full py-3 pl-12 pr-4 bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="w-full py-3 pl-12 pr-12 bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-500"
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                />
                Remember Me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-sky-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-slate-900 dark:bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-sky-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Or Divider */}
          <div className="relative flex items-center my-6">
            <div className="grow border-t border-slate-200 dark:border-slate-700"></div>
            <span className="shrink mx-4 text-xs text-slate-400 uppercase">
              Or sign in with
            </span>
            <div className="grow border-t border-slate-200 dark:border-slate-700"></div>
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

          {/* Sign Up Link */}
          <div className="text-center mt-8 text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-sky-600 hover:underline"
            >
              Sign Up
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
            src={LoginImage.src}
            alt="AuraMart branding"
            className="w-[400px] h-full rounded-r-2xl object-cover block"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-r-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginFrom;