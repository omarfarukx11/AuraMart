"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
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

 
  const handleLogout = async () => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    });


    if (result.isConfirmed) {
      Cookies.remove("auth");
      setIsAuth(false);
      setCartLength(0);
      window.dispatchEvent(new Event("authChange"));
      

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Logged out successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      router.push("/");
      router.refresh();
    }
  };

  const handleCartClick = (e) => {
    if (!isAuth) {
      e.preventDefault();
      router.push("/login?redirect=/cart");
    }
  };

  const getNavLinkClass = (path) => {
    const baseClass = "text-sm font-semibold transition-all duration-300 hover:text-blue-600 relative py-1";
    const activeClass = "text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full";
    const inactiveClass = "text-gray-600 hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300";
    
    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  if (pathname.startsWith("/dashboard")) return null;
  if (pathname.startsWith("/login")) return null;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-465 mx-auto px-5 xl:px-20 md:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase"
            >
                AuraMart<span className="text-blue-600">.</span>

            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8 list-none">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className={getNavLinkClass(link.path)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/cart"
                onClick={handleCartClick}
                className={`relative p-2 rounded-full transition-all ${
                  pathname === "/cart" ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FaShoppingCart size={22} />
                {cartLength > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-md">
                    {cartLength}
                  </span>
                )}
              </Link>

              <div className="flex items-center border-l ml-2 pl-4 border-gray-200 gap-3">
                {isAuth ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-gray-400 active:scale-95 font-bold text-sm transition-all "
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="hidden lg:flex p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                      title="Logout"
                    >
                      <FaSignOutAlt size={20} />
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-gray-400 font-bold text-sm transition-all active:scale-95"
                  >
                    Login
                  </Link>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden flex items-center ml-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-2xl text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${isOpen ? "max-h-screen border-t" : "max-h-0"}`}>
        <div className="px-6 py-8 space-y-6">
          <ul className="flex flex-col gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold block ${pathname === link.path ? "text-blue-600" : "text-gray-800"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {isAuth && (
            <div className="pt-6 border-t border-gray-100">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-600 font-bold text-lg w-full py-3 rounded-lg transition-all hover:bg-red-50"
              >
                <FaSignOutAlt />
                Logout Account
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;