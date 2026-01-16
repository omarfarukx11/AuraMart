"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50 max-w-465 mx-auto">
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-200 sticky top-0 h-screen">
        <div className="shrink-0 py-10 px-4">
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase"
          >
            AuraMart<span className="text-blue-600">.</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white shadow-md shadow-blue-100 p-3 rounded-xl"
          >
            + Add New Item
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-medium">
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-xl font-medium text-gray-500">
              Admin Panel
            </span>
            <div className="w-10 h-10 bg-blue-100 rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </header>

        <main>
          {/* Removed bg-green-500 to keep the design clean */}
          <div className="mx-auto p-5">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
