"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Users, Maximize, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

const venueTypes = ["All", "Ballroom", "Lawn", "Rooftop"];

const venues = [
  {
    id: "darbar-hall",
    name: "The Darbar Hall",
    type: "Ballroom",
    capacity: "800 - 1,200",
    size: "15,000 sq.ft.",
    image: "/images/hall_imperial_refined.png",
    desc: "A majestic space inspired by royal courts, featuring 30ft ceilings and hand-crafted crystal chandeliers."
  },
  {
    id: "aangan-gardens",
    name: "Aangan Gardens",
    type: "Lawn",
    capacity: "1,500 - 2,500",
    size: "45,000 sq.ft.",
    image: "/images/hall_garden_refined.png",
    desc: "A vast outdoor sanctuary reminiscent of royal courtyards, surrounded by ancient trees and heritage architecture."
  },
  {
    id: "jharokha-rooftop",
    name: "Jharokha Rooftop",
    type: "Rooftop",
    capacity: "200 - 400",
    size: "8,000 sq.ft.",
    image: "/images/hall_grand_refined.png",
    desc: "Breathtaking panoramic views of the city skyline through traditional stone-carved frames."
  },
  {
    id: "sheesh-mahal",
    name: "Sheesh Mahal Wing",
    type: "Ballroom",
    capacity: "300 - 500",
    size: "10,000 sq.ft.",
    image: "/images/decor_royal_floral_1778402758913.png",
    desc: "Intimate and sophisticated, featuring mirror-work walls and traditional Rajasthani motifs."
  }
];

export default function HallsPage() {
  const [filter, setFilter] = useState("All");

  const filteredVenues = filter === "All" ? venues : venues.filter(v => v.type === filter);

  return (
    <main className="bg-soft-black min-h-screen text-cream pb-32">
      <Navbar />

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold-500 uppercase tracking-[0.4em] font-bold text-xs mb-6">Explore Our Venues</p>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8">Elegance Defined.</h1>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {venueTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-10 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all ${
                    filter === type ? "bg-gold-500 border-gold-500 text-black shadow-xl shadow-gold-500/20" : "border-white/10 hover:border-gold-500/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-20">
            <AnimatePresence mode="popLayout">
              {filteredVenues.map((venue, i) => (
                <motion.div
                  key={venue.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-24 items-center`}>
                    {/* Image Part */}
                    <div className="flex-1 relative aspect-[16/10] w-full rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/50">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                          <span className="bg-gold-500/90 backdrop-blur-md text-black px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">
                              {venue.type}
                          </span>
                          <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                              <Maximize size={20} className="text-white" />
                          </div>
                      </div>
                    </div>

                    {/* Content Part */}
                    <div className="flex-1 space-y-8">
                      <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">{venue.name}</h2>
                      <p className="text-cream/60 text-lg leading-relaxed">{venue.desc}</p>
                      
                      <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                          <div className="space-y-2">
                              <div className="flex items-center gap-3 text-gold-500">
                                  <Users size={18} />
                                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Guest Capacity</span>
                              </div>
                              <p className="text-xl font-serif">{venue.capacity}</p>
                          </div>
                          <div className="space-y-2">
                              <div className="flex items-center gap-3 text-gold-500">
                                  <MapPin size={18} />
                                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Total Area</span>
                              </div>
                              <p className="text-xl font-serif">{venue.size}</p>
                          </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4">
                          <Link href={`/halls/${venue.id}`} className="bg-gold-500 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold-400 transition-all flex items-center gap-2">
                              Explore Hall <ChevronRight size={14} />
                          </Link>
                          <button className="border border-white/20 hover:border-gold-500/50 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all">
                              Download Floor Plan
                          </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
