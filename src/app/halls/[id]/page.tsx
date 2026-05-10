"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Maximize, Calendar, Check, Download, Play } from "lucide-react";
import { useParams } from "next/navigation";

const venues = {
  "darbar-hall": {
    name: "The Darbar Hall",
    type: "Ballroom",
    capacity: "800 - 1,200",
    size: "15,000 sq.ft.",
    image: "/images/hall_imperial_refined.png",
    desc: "Experience the pinnacle of royal grandeur. Our Darbar Hall is inspired by the historic courts of India, designed for high-profile weddings and heritage summits.",
    features: ["Heritage Acoustics", "Master-crafted Chandeliers", "VVIP Shahi Entrance", "Rajvadi Luxury Suite", "Crystal Glasswork"],
    stats: {
        Theater: 1200,
        Banquet: 800,
        Cocktail: 1500,
        Classroom: 400
    }
  },
  "aangan-gardens": {
    name: "Aangan Gardens",
    type: "Lawn",
    capacity: "1,500 - 2,500",
    size: "45,000 sq.ft.",
    image: "/images/hall_garden_refined.png",
    desc: "An expansive outdoor canvas reminiscent of historic royal courtyards, perfect for grand Baraat processions and Varmala ceremonies.",
    features: ["Traditional Firepit Area", "Elephant Procession Path", "Heritage Gazebos", "Mist Cooling System", "Shahi Valet Support"],
    stats: {
        Theater: 2000,
        Banquet: 1500,
        Cocktail: 3000,
        Classroom: 0
    }
  }
};

export default function VenueDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const venue = venues[id as keyof typeof venues] || venues["darbar-hall"];

  return (
    <main className="bg-soft-black min-h-screen text-cream pb-32">
      <Navbar />

      {/* Hero */}
      <section className="h-[70vh] relative overflow-hidden">
        <Image src={venue.image} alt={venue.name} fill className="object-cover brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-soft-black via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-gold-500 uppercase tracking-[0.4em] font-bold text-[10px] mb-6">
                  The Estate Series
              </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter">
                  {venue.name}
              </h1>
            </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
                <div className="space-y-8">
                    <h2 className="text-4xl font-serif font-bold">Unparalleled Luxury</h2>
                    <p className="text-xl text-cream/60 leading-relaxed">{venue.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-8">
                        <h3 className="text-[10px] uppercase tracking-widest font-bold text-gold-500">Hall Features</h3>
                        <ul className="space-y-6">
                            {venue.features.map(f => (
                                <li key={f} className="flex items-center gap-4 text-cream/80">
                                    <Check className="text-gold-500 w-5 h-5" />
                                    <span className="font-medium">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-8">
                        <h3 className="text-[10px] uppercase tracking-widest font-bold text-gold-500">360° Virtual Preview</h3>
                        <div className="relative aspect-video rounded-2xl overflow-hidden group">
                            <Image src={venue.image} alt="360 View" fill className="object-cover blur-[2px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-xl shadow-gold-500/20 group-hover:scale-110 transition-transform cursor-pointer">
                                    <Play size={24} fill="currentColor" className="text-black" />
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-center text-white/40 uppercase tracking-widest">Tap to start virtual tour</p>
                    </div>
                </div>

                <div className="space-y-10">
                    <h2 className="text-4xl font-serif font-bold">Capacity Chart</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(venue.stats).map(([key, val]) => (
                            <div key={key} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                <p className="text-[10px] uppercase tracking-widest font-bold text-gold-500 mb-2">{key}</p>
                                <p className="text-3xl font-serif font-bold">{val > 0 ? val : "N/A"}</p>
                                <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold mt-1">Guests</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar Inquiry */}
            <div className="lg:col-span-1">
                <div className="bg-gold-500 rounded-[2.5rem] p-10 sticky top-32 text-black shadow-2xl shadow-gold-500/20">
                    <h3 className="text-3xl font-serif font-bold mb-4 italic">Reserve {venue.name}</h3>
                    <p className="text-black/60 mb-8 leading-relaxed">Secure your preferred date at our most prestigious venue.</p>
                    
                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-4 bg-black/5 p-4 rounded-xl">
                            <Users size={18} className="text-black" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Max Capacity: {venue.capacity}</span>
                        </div>
                        <div className="flex items-center gap-4 bg-black/5 p-4 rounded-xl">
                            <Maximize size={18} className="text-black" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Area: {venue.size}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full bg-black text-white py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-soft-black transition-all">
                            <Calendar size={16} /> Book Availability
                        </button>
                        <button className="w-full border border-black/20 text-black py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-black/5 transition-all">
                            <Download size={16} /> Brochure PDF
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
