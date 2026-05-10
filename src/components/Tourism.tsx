"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Compass, ExternalLink } from "lucide-react";

const attractions = [
  {
    name: "Heritage Lake Palace",
    distance: "15 mins away",
    desc: "A floating architectural marvel perfect for pre-wedding shoots and sunset dinners.",
    image: "/images/night_entrance_refined.png", // Using night entrance as placeholder for palace feel
  },
  {
    name: "The Royal Gardens",
    distance: "10 mins away",
    desc: "Expansive botanical gardens with historical sculptures and lush manicured lawns.",
    image: "/images/hall_garden_refined.png",
  },
  {
    name: "Old City Markets",
    distance: "20 mins away",
    desc: "Experience the vibrant culture and craftsmanship of the city's ancient trade routes.",
    image: "/images/tourism.png",
  }
];

const Tourism = () => {
  return (
    <section className="py-24 px-4 bg-emerald-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Curated Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Beyond the Banquet Hall</h2>
            <p className="text-cream/60 leading-relaxed text-lg">
              GrandVista is your gateway to the city&apos;s finest treasures. We offer exclusive guided tours and private concierge services to make your destination event truly legendary.
            </p>
          </div>
          <button className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest text-sm border-b border-gold-500/30 pb-2 hover:border-gold-500 transition-all">
            Download Guide <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {attractions.map((place, i) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="group cursor-pointer">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2 text-gold-400 mb-2">
                      <MapPin size={14} />
                      <span className="text-xs font-bold uppercase tracking-widest">{place.distance}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white">{place.name}</h3>
                  </div>
                </div>
                <p className="text-cream/60 leading-relaxed mb-4 group-hover:text-cream/80 transition-colors">
                  {place.desc}
                </p>
                <button className="flex items-center gap-2 text-gold-500/70 group-hover:text-gold-500 font-bold text-xs uppercase tracking-[0.2em] transition-all">
                  Explore More <Compass size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tourism;
