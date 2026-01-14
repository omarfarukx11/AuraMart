"use client";


import Cookies from 'js-cookie';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);



  const links = (
    <>
      <li><Link href="/" > Home </Link></li>
      <li><Link href="/product">Products</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </>
  );

const isAuth = Cookies.get('auth');

  return (
    <nav className="bg-white text-gray-900 shadow-md ">
      <div className="max-w-465 mx-auto px-5 xl:px-20 md:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600 uppercase">
              AuraMart
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-4 list-none">{links}</ul>

            {/* Auth Actions */}
            <div className="flex items-center gap-4 ml-4 border-l pl-6 border-gray-200">
              {isAuth ? (
                <Link
                  href="/"
                  className="group relative px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-lg overflow-hidden transition-all"
                >
                  Dashbord
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="group relative px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-lg overflow-hidden transition-all"
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
            {isAuth ? (
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="group relative px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-lg overflow-hidden transition-all"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="group relative px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-lg overflow-hidden transition-all"
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
