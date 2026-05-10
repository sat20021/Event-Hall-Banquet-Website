"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, ArrowUp, Moon, Sun } from "lucide-react";

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
          >
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all shadow-2xl"
            >
              <ArrowUp size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark/Light Toggle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={toggleDarkMode}
          className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all shadow-2xl"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://wa.me/yournumber"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/20 hover:bg-green-600 transition-all"
        >
          <MessageCircle size={24} fill="currentColor" />
        </a>
      </motion.div>

      {/* Sticky Booking Button (Only visible on small screens) */}
      <div className="lg:hidden fixed bottom-8 left-8 right-28 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            className="pointer-events-auto w-full bg-gold-500 text-black py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 shadow-2xl shadow-gold-500/30"
          >
            <Calendar size={16} /> Check Availability
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingActions;
