"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_refined.png"
          alt="GrandVista Luxury Banquet Hall"
          fill
          className="object-cover transform scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-emerald-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div>
            <span className="inline-block px-6 py-2 mb-8 text-[10px] font-bold tracking-[0.4em] uppercase text-gold-400 border border-gold-500/40 rounded-full bg-gold-500/5 backdrop-blur-md">
              The Heritage of Shahi Hospitality
            </span>
            <h1 className="text-6xl md:text-[100px] font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              The Soul of <br />
              <span className="text-gradient-gold italic font-light">Indian Mahotsav</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Where cinematic Rajvadi grandeur meets modern elegance. GrandVista Banquets defines the new pinnacle of luxury for high-end Indian weddings and royal celebrations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/booking"
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] transition-all transform hover:scale-105 shadow-2xl shadow-gold-500/30"
              >
                Check Availability
              </Link>
              <Link
                href="/halls"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-xl px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] transition-all transform hover:scale-105"
              >
                The Experience
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-12 left-0 w-full z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex gap-16">
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-gold-500">20k+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Sq. Ft Luxury</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-gold-500">2000+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Guest Capacity</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-2">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
