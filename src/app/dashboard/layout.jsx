"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaPlus, FaSignOutAlt, FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const NavContent = () => (
    <>
      <div className="shrink-0 py-10 px-6">
        <Link href="/" className="text-3xl font-black tracking-tighter text-slate-900 uppercase">
          AuraMart<span className="text-blue-600">.</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-3">

        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all font-medium border border-gray-200"
        >
          <FaArrowLeft size={14} /> Back to Home
        </Link>

        {/* Add New Item - Flat Blue Style */}
        <Link
          href="/dashboard"
          className="flex items-center gap-3 bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
        >
          <FaPlus /> Add New Item
        </Link>
      </nav>
    </>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 max-w-465 mx-auto relative">
      
      {/* 1. DESKTOP ASIDE */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-200 sticky top-0 h-screen">
        <NavContent />
      </aside>

      {/* 2. MOBILE SLIDER */}
      {/* Overlay - Flat dark tint */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-60 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Slider Menu - Border used instead of shadow */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-white z-70 border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button 
          onClick={toggleSidebar}
          className="absolute top-5 right-5 p-2 text-gray-500 hover:bg-gray-100 rounded-full"
        >
          <FaTimes size={20} />
        </button>
        <NavContent />
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-5 md:px-8 sticky top-0 z-50">
          
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
          >
            <FaBars size={24} />
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden sm:inline text-sm font-bold text-gray-400 uppercase tracking-widest">
              Admin Panel
            </span>
            <div className="w-10 h-10 bg-blue-600 rounded-full border border-blue-700 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;