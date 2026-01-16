"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaSignOutAlt, FaUser } from "react-icons/fa";
import { getCartCount } from "@/actions/server/addToCart";
import Swal from "sweetalert2";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [cartLength, setCartLength] = useState(0);

  const updateNavbarData = async () => {
    const auth = Cookies.get("auth");
    setIsAuth(!!auth);
    if (auth) {
      const count = await getCartCount("admin@gmail.com");
      setCartLength(count);
    } else {
      setCartLength(0);
    }
  };

  useEffect(() => {
    updateNavbarData();
    window.addEventListener("authChange", updateNavbarData);
    window.addEventListener("cartUpdate", updateNavbarData);
    return () => {
      window.removeEventListener("authChange", updateNavbarData);
      window.removeEventListener("cartUpdate", updateNavbarData);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    });

    if (result.isConfirmed) {
      Cookies.remove("auth");
      setIsAuth(false);
      setCartLength(0);
      window.dispatchEvent(new Event("authChange"));
      router.push("/");
      router.refresh();
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/login")) return null;

  return (
    <nav className="bg-white text-gray-900 shadow-sm sticky top-0 z-[100] border-b border-gray-100">
      <div className="max-w-465 mx-auto px-5 xl:px-20 md:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 uppercase">
              AuraMart<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Right Side Icons & Desktop Nav */}
          <div className="flex items-center gap-2 md:gap-6">
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className={`text-sm font-bold transition-colors ${pathname === link.path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className={`relative p-2.5 rounded-full transition-all ${pathname === "/cart" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <FaShoppingCart size={20} />
              {cartLength > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-md">
                  {cartLength}
                </span>
              )}
            </Link>

            {/* Auth Action (Desktop) */}
            <div className="hidden lg:flex items-center border-l ml-2 pl-4 border-gray-200 gap-3">
              {isAuth ? (
                <>
                  <Link href="/dashboard" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold text-sm transition-all active:scale-95">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="p-2.5 text-gray-400 hover:text-red-600 transition-all">
                    <FaSignOutAlt size={20} />
                  </button>
                </>
              ) : (
                <Link href="/login" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold text-sm transition-all">
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-2xl text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute left-0 w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-lg font-bold block p-2 rounded-lg ${pathname === link.path ? "bg-blue-50 text-blue-600" : "text-gray-800"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
            {isAuth ? (
              <>
                <Link href="/dashboard" className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-xl font-bold">
                  <FaUser /> Go to Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 text-red-600 font-bold w-full py-3 border border-red-100 rounded-xl"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold">
                Login to Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;