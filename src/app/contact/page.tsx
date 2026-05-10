"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import InquiryForm from "@/components/InquiryForm";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-soft-black min-h-screen text-cream">
      <Navbar />

      <section className="pt-40 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-12">
                <div>
                  <p className="text-gold-500 uppercase tracking-[0.3em] font-bold text-xs mb-6">Contact Us</p>
                  <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.9]">Start Your Story With Us.</h1>
                  <p className="text-cream/60 max-w-md leading-relaxed">
                    Every grand celebration begins with a single conversation. Reach out to our concierge team to begin planning your extraordinary event.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-gold-500/50 transition-colors">
                      <Phone size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Elite Concierge</h4>
                      <p className="text-xl font-serif">+1 (800) GRANDVISTA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-gold-500/50 transition-colors">
                      <Mail size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Email Inquiry</h4>
                      <p className="text-xl font-serif">curate@grandvista.luxury</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-gold-500/50 transition-colors">
                      <MapPin size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">The Estate</h4>
                      <p className="text-xl font-serif">123 Royal Estates, Heritage Valley, CA 90210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-gold-500/50 transition-colors">
                      <Clock size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Showroom Hours</h4>
                      <p className="text-xl font-serif">Daily: 09:00 AM — 08:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl">
                <InquiryForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[600px] w-full bg-white/5 relative overflow-hidden grayscale contrast-125 brightness-50">
        <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/20 uppercase tracking-[0.5em] font-bold">Interactive Estate Map Integration</p>
        </div>
      </section>
    </main>
  );
}
