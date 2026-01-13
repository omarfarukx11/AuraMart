"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(true); // Mock auth

  // Your JSX fragment links
  const links = (
    <>
      <li><Link href="/" > Home </Link></li>
      <li><Link href="/product">Product</Link></li>
      <li><Link href="/about">About</Link></li>
    </>
  );

  return (
    <nav className="bg-white text-gray-900 shadow-md fixed w-full top-0 z-50 ">
      <div className="max-w-465 mx-auto px-4 lg:px-15">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600">
              BRAND
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-4 list-none">{links}</ul>

            {/* Auth Actions */}
            <div className="flex items-center gap-4 ml-4 border-l pl-6 border-gray-200">
              {user ? (
                <Link
                  href="/dashboard"
                  className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="text-sm font-bold px-6 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-2xl transition-transform active:scale-90 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-3">
          <ul className="flex flex-col gap-2 list-none">{links}</ul>

          {/* Auth */}
          <div className="pt-4 border-t border-gray-200">
            {user ? (
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-blue-600 text-white p-4 rounded-xl font-bold"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block text-center border border-gray-300 p-4 rounded-xl font-bold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
