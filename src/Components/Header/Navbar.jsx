"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { getCartCount } from "@/actions/server/addToCart"; // Ensure you create this action

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

    // LISTEN for the signals
    window.addEventListener("authChange", updateNavbarData);
    window.addEventListener("cartUpdate", updateNavbarData); 

    return () => {
        window.removeEventListener("authChange", updateNavbarData);
        window.removeEventListener("cartUpdate", updateNavbarData);
    };
}, []);
  const handleLogout = () => {
    Cookies.remove("auth");
    setIsAuth(false);
    setCartLength(0);
    window.dispatchEvent(new Event("authChange"));
    router.push("/");
    router.refresh();
  };

  const handleCartClick = (e) => {
    if (!isAuth) {
      e.preventDefault();
      router.push("/login?redirect=/cart");
    }
  };

  if (pathname.startsWith("/dashboard")) return <></>;

  const links = (
    <>
      <li>
        <Link href="/" onClick={() => setIsOpen(false)}> Home </Link>
      </li>
      <li>
        <Link href="/products" onClick={() => setIsOpen(false)}> Products </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setIsOpen(false)}> About </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setIsOpen(false)}> Contact </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 xl:px-20 md:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-blue-600 uppercase"
            >
              AuraMart
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-4 list-none">{links}</ul>
            </div>

            {/* Cart Icon with Dynamic Length */}
            <Link
              href="/cart"
              onClick={handleCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-all"
            >
              <FaShoppingCart size={22} />
              {cartLength > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm animate-in zoom-in duration-300">
                  {cartLength}
                </span>
              )}
            </Link>

            <div className="flex items-center border-l pl-4 border-gray-200 gap-3">
              {isAuth ? (
                <>
                  <Link
                    href="/dashboard"
                    className="group relative px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm sm:text-lg overflow-hidden transition-all"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="hidden lg:block p-2 text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <FaSignOutAlt size={20} />
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="group relative px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm sm:text-lg overflow-hidden transition-all"
                >
                  Login
                </Link>
              )}
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-2xl transition-transform active:scale-90 focus:outline-none"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <ul className="flex flex-col gap-4 list-none font-medium text-lg">
            {links}
          </ul>

          {isAuth && (
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-600 font-bold text-lg w-full py-2 hover:bg-red-50 rounded-lg transition-all"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;