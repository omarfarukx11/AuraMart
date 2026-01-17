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


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Logout of your account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
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
    <nav className="bg-white fixed text-gray-900 shadow-sm top-0 z-100 border-b border-gray-100 w-full overflow-x-hidden border-2 ">
    
      <div className="max-w-465 mx-auto px-5 md:px-10 xl:px-20">
        <div className="flex justify-between items-center h-20">
          

          <div className="shrink-0">
            <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase">
              AuraMart<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Right Side Icons & Desktop Nav */}
          <div className="flex items-center space-x-2 md:space-x-4">
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 mr-4">
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

            {/* Cart Icon - Wrapped in a div to prevent layout shift */}
            <div className="relative inline-block">
              <Link
                href="/cart"
                className={`flex p-2 rounded-full transition-all ${pathname === "/cart" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <FaShoppingCart size={22} />
                {cartLength > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-md border-2 border-white">
                    {cartLength}
                  </span>
                )}
              </Link>
            </div>

            {/* Auth Action (Desktop) */}
            <div className="hidden lg:flex items-center border-l pl-4 border-gray-200 space-x-3">
              {isAuth ? (
                <>
                  <Link href="/dashboard" className="px-5 py-2.5 bg-blue-600 text-white hover:bg-white hover:text-blue-600 rounded-lg hover:border hover:border-gray-200 font-bold text-sm transition-all">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-600 transition-all">
                    <FaSignOutAlt size={20} />
                  </button>
                </>
              ) : (
                <Link href="/login" className="bg-blue-600 hover:bg-white hover:text-blue-600 rounded-lg hover:border hover:border-gray-200 text-white px-6 py-3  font-black uppercase tracking-widest text-xs  transition-all">
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-2xl text-gray-700 hover:bg-gray-100 rounded-xl transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden fixed inset-0 top-20 bg-white z-90 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="h-full flex flex-col p-6 space-y-8 bg-white">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-2xl font-black block p-4 rounded-2xl ${pathname === link.path ? "bg-blue-50 text-blue-600" : "text-gray-900"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
            {isAuth ? (
              <>
                <Link href="/dashboard" className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 rounded-lg font-bold">
                  <FaUser /> Dashboard
                </Link>
                <button onClick={handleLogout} className="w-full py-4 text-red-600 font-bold bg-red-50 rounded-2xl">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="w-full py-4 bg-blue-600 text-white text-center rounded-lg font-bold">
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