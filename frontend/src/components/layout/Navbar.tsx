"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Button } from "../ui/Button";
import {
  FaCar,
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuthStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  if (!mounted) return null;
  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl border border-gray-200 py-3"
          : "bg-white/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="px-6 flex items-center justify-between">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <FaCar className="text-white text-xl" />
          </div>

          <h1 className="text-2xl font-extrabold tracking-wide">
            Drive<span className="text-blue-600">Ease</span>
          </h1>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-[15px] font-semibold transition-all duration-300 ${
                pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}

              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-blue-600"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side */}

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link
                href={`/dashboard/${user?.role}`}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <FaUserCircle className="text-3xl" />
                <span className="font-medium">
                {user?.firstName || "Profile"}
                </span>
              </Link>

              <Button
                variant="outline"
                className="rounded-full px-6"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="rounded-full px-6"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="rounded-full px-7 bg-blue-600 hover:bg-blue-700">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-5 bg-white rounded-2xl shadow-xl border border-gray-200 mx-4 p-5"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-semibold ${
                    pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <hr />

              {isAuthenticated ? (
                <>
                  <Link
                      href={`/dashboard/${user?.role}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                   >
                       <FaUserCircle className="text-3xl text-blue-600" />
                       <span className="font-medium">
                     {user ? `${user.firstName} ${user.lastName}` : "Profile"}
                    </span>
                   </Link>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}