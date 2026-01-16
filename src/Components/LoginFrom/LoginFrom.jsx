"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";
import LoginImage from "../../../public/tomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg";
import { useRouter } from "next/navigation"; 
import Swal from "sweetalert2";
import Cookies from "js-cookie"; // Using js-cookie for more reliable writing

const LoginFrom = () => {
  const router = useRouter();

  const showToast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 1500, // Slightly faster timer
      timerProgressBar: true,
    });
  };

  const handleMockLogin = (e) => {
    if (e) e.preventDefault();

    // 1. Set the cookie immediately using js-cookie
    // We set path '/' to ensure it's available everywhere on the first load
    Cookies.set("auth", "true", { expires: 7, path: '/' });

    // 2. Dispatch the event so the Navbar updates instantly
    window.dispatchEvent(new Event("authChange"));

    // 3. Show the success toast
    showToast('success', `Welcome Back`);

    // 4. Force an immediate navigation
    // We use router.push followed by router.refresh to ensure the server-side
    // components (like the Navbar) pick up the new cookie immediately.
    router.push("/");
    
    // This ensures that Next.js clears the client-side cache for the home page
    setTimeout(() => {
        router.refresh();
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="relative flex flex-col m-6 space-y-8 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl md:flex-row md:space-y-0 overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center p-8 md:p-14 lg:w-[500px]"
        >
          <h1 className="mb-2 text-4xl font-black text-blue-600 uppercase tracking-tighter">
            AuraMart
          </h1>
          <p className="text-slate-500 mb-8">
            Access the marketplace via our secure mock authentication system.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
               <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold mb-1 uppercase">Mock Credentials:</p>
               <p className="text-sm text-slate-600 dark:text-slate-300">User: <span className="font-bold">admin@gmail.com</span></p>
               <p className="text-sm text-slate-600 dark:text-slate-300">Status: <span className="font-bold">Ready to Authenticate</span></p>
            </div>

            <button
              onClick={handleMockLogin}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 group"
            >
              <FiLogIn className="text-xl group-hover:translate-x-1 transition-transform" />
              Enter AuraMart
            </button>

            <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest pt-2">
              Instant access enabled
            </p>
          </div>
        </motion.div>

        <div className="relative hidden md:block">
          <img 
            src={LoginImage.src} 
            alt="Mock Login Illustration" 
            className="w-[400px] h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-black/40"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;