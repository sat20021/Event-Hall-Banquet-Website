"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

const categories = ["All", "Weddings", "Corporate", "Birthday", "Galas"];

const items = [
  { id: 1, category: "Weddings", image: "/images/gallery_wedding_luxury_1778407335844.png", title: "Royal Ceremony" },
  { id: 2, category: "Corporate", image: "/images/gallery_corporate_gala_1778407361193.png", title: "Executive Gala" },
  { id: 3, category: "Birthday", image: "/images/gallery_birthday_elegant_1778407383334.png", title: "Luxe Celebration" },
  { id: 4, category: "Weddings", image: "/images/mandap_luxury_setup_1778402794254.png", title: "Floral Mandap" },
  { id: 5, category: "Galas", image: "/images/hall_imperial_refined.png", title: "Grand Ballroom" },
  { id: 6, category: "Weddings", image: "/images/food_luxury_plating_1778402740585.png", title: "Gourmet Catering" },
  { id: 7, category: "Weddings", image: "/images/hall_garden_refined.png", title: "Enchanted Garden" },
  { id: 8, category: "Corporate", image: "/images/interior_ballroom_grand_1778402715056.png", title: "Tech Summit" },
  { id: 9, category: "Galas", image: "/images/night_grand_entrance_1778402812910.png", title: "Night Entrance" },
  { id: 10, category: "Weddings", image: "/images/lifestyle_luxury_details_1778402837603.png", title: "Bespoke Decor" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

  return (
    <main className="bg-soft-black min-h-screen text-cream pb-32">
      <Navbar />

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tighter">
              Visual Journey
            </h1>
          </motion.div>
          <p className="text-gold-500 uppercase tracking-[0.3em] font-bold text-xs mb-12">Experience the Excellence</p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all ${
                  filter === cat ? "bg-gold-500 border-gold-500 text-black" : "border-white/10 hover:border-gold-500/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div 
                      className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <p className="text-gold-500 uppercase tracking-widest text-[10px] font-bold mb-2">{item.category}</p>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                          <Maximize2 size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-20"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
                <X size={40} strokeWidth={1} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="relative w-screen h-screen max-w-7xl">
                  <Image
                    src={selectedImage}
                    alt="Lightbox"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
