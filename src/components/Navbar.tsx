"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Estate", href: "/about" },
  { name: "Venues", href: "/halls" },
  { name: "Culinary", href: "/services" },
  { name: "Journal", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Experiences", href: "/experiences" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-700 ${
        isScrolled ? "py-4 bg-soft-black/80 backdrop-blur-2xl border-b border-white/10" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-2xl font-serif font-bold text-white tracking-tighter">
              GRAND<span className="text-gold-500">VISTA</span>
            </div>
          </motion.div>
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-cream/70 hover:text-gold-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gold-500 text-black px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold-400 transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="absolute top-full left-0 right-0 bg-soft-black border-b border-white/10 p-10 lg:hidden flex flex-col gap-8 shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-serif font-bold text-white flex justify-between items-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={20} className="text-gold-500 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 bg-gold-500 text-black py-5 rounded-full text-center font-bold uppercase tracking-widest text-[10px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Planning
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
