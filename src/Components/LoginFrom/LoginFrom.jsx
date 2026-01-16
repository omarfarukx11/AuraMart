"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiLogIn, FiMail, FiLock, FiZap } from "react-icons/fi"; // Added Zap icon
import LoginImage from "../../../public/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg";
import { useRouter } from "next/navigation"; 
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const LoginFrom = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const MOCK_USER = "admin@gmail.com";
  const MOCK_PASS = "admin123";

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

  const handleLogin = (e) => {
    if (e) e.preventDefault();

    if (email === MOCK_USER && password === MOCK_PASS) {
      Cookies.set("auth", "true", { expires: 7, path: '/' });
      window.dispatchEvent(new Event("authChange"));
      showToast('success', `Welcome Back, Admin!`);
      
      router.push("/");
      setTimeout(() => {
        router.refresh();
      }, 100);
    } else {
      showToast('error', 'Invalid Email or Password');
    }
  };


  const handleQuickLogin = () => {
    setEmail(MOCK_USER);
    setPassword(MOCK_PASS);
    

    setTimeout(() => {
      Cookies.set("auth", "true", { expires: 7, path: '/' });
      window.dispatchEvent(new Event("authChange"));
      showToast('success', `Quick Login Successful!`);
      router.push("/");
      setTimeout(() => router.refresh(), 100);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="relative flex flex-col md:flex-row bg-white dark:bg-slate-900 shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center p-8 md:p-16 lg:w-1/2"
        >
          <h1 className="text-4xl font-black text-blue-600 uppercase tracking-tighter mb-2">
            AuraMart<span className="text-slate-900 dark:text-white">.</span>
          </h1>
          <p className="text-slate-500 mb-8 font-medium">
            Enter your details or use the quick login button below.
          </p>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gmail.com"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg active:scale-95 group"
              >
                Sign In
              </button>

              {/* QUICK MOCK LOGIN BUTTON */}
              <button
                type="button"
                onClick={handleQuickLogin}
                className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 group"
              >
                <FiZap className="text-xl animate-pulse" />
                Quick Mock Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
            Project Submission Mode Enabled
          </p>
        </motion.div>

        <div className="relative hidden lg:block lg:w-1/2">
          <img 
            src={LoginImage.src} 
            alt="Login Illustration" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h2 className="text-3xl font-black uppercase tracking-tight">Experience Aura.</h2>
            <p className="opacity-80 font-medium">Your gateway to premium essentials.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;