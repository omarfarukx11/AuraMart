"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUserCheck } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import LoginImage from "../../../public/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg";
import { useRouter } from "next/navigation"; 
import Swal from "sweetalert2";

const LoginFrom = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  // Controlled states for the inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const showToast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  // --- 1-CLICK DEMO LOGIN & REDIRECT ---
  const handleDemoLogin = () => {
    // 1. Set the hardcoded credentials into state
    setEmail("admin@gmail.com");
    setPassword("admin@1");

    // 2. Set Auth Cookie immediately
    document.cookie = "auth=true; path=/";
    
    // 3. Notify Navbar/App of the change
    window.dispatchEvent(new Event("authChange"));

    showToast('success', 'Demo Login Successful!');
    
    // 4. Redirect to Home page
    setTimeout(() => {
        router.push("/"); 
        router.refresh();
    }, 500);
  };

  const handleMockSignIn = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin@1") {
      document.cookie = "auth=true; path=/";
      window.dispatchEvent(new Event("authChange"));
      showToast('success', 'Login Successful!');
      router.push("/"); // Redirect to Home
    } else {
      showToast('error', 'Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="relative flex flex-col m-6 space-y-8 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl md:flex-row md:space-y-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center p-8 md:p-14"
        >
          <h1 className="mb-3 text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            AuraMart
          </h1>
          <p className="text-slate-500 mb-8 max-w-sm">
            Sign in to access your dashboard and manage your orders.
          </p>
          
          <form onSubmit={handleMockSignIn} className="flex flex-col space-y-5">
            {/* Email Input */}
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@mail.com" // Changed placeholder
                className="w-full py-3 pl-12 pr-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white border border-transparent focus:border-sky-500 outline-none transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••" // Changed placeholder
                className="w-full py-3 pl-12 pr-12 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white border border-transparent focus:border-sky-500 outline-none transition-all"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sky-500"
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="w-full bg-slate-900 dark:bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-all shadow-md"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full flex items-center justify-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 font-bold py-2.5 rounded-lg hover:bg-amber-100 transition-all text-sm"
              >
                <FiUserCheck className="text-lg" /> One-Click Demo Access
              </button>
            </div>
          </form>

          <div className="text-center mt-8 text-sm text-slate-500">
            Don't have an account?{" "}
            <Link href="/register" className="font-bold text-sky-600 hover:underline">Sign Up</Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <div className="relative hidden md:block">
          <img 
            src={LoginImage.src} 
            alt="Login Illustration" 
            className="w-[450px] h-full object-cover" 
          />
          <div className="absolute inset-0 bg-blue-600/10 backdrop-contrast-75"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;