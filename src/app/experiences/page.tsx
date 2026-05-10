"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Compass, Music, Wine } from "lucide-react";

const experiences = [
  {
    title: "Cinematic Pre-Wedding Tours",
    desc: "A full day of photography across our heritage valley and secret estate gardens with professional lighting crews.",
    icon: Camera,
    image: "/images/hall_garden_refined.png"
  },
  {
    title: "Artisanal Tasting Sessions",
    desc: "Private sessions with our executive chef and sommelier to curate a unique menu for your celebration.",
    icon: Wine,
    image: "/images/food_refined.png"
  },
  {
    title: "Heritage Valley Exploration",
    desc: "Guided luxury tours of nearby historic landmarks and cultural heritage sites for your international guests.",
    icon: Compass,
    image: "/images/exterior_refined.png"
  },
  {
    title: "Orchestral Soundscapes",
    desc: "Bespoke musical curation from live string quartets to contemporary jazz bands for any event mood.",
    icon: Music,
    image: "/images/hall_imperial_refined.png"
  }
];

export default function ExperiencesPage() {
  return (
    <main className="bg-soft-black min-h-screen text-cream pb-32">
      <Navbar />

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold-500 uppercase tracking-[0.4em] font-bold text-xs mb-6">Elevate Your Event</p>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8">Curated Experiences.</h1>
            <p className="text-cream/60 max-w-2xl mx-auto italic text-lg leading-relaxed">
              At GrandVista, we believe the event is only part of the story. Our curated experiences add depth, flavor, and soul to your celebration.
            </p>
          </div>

          <div className="space-y-32">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-20 items-center`}>
                  <div className="flex-1 space-y-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                      <exp.icon size={24} className="text-gold-500" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold">{exp.title}</h2>
                    <p className="text-cream/60 text-lg leading-relaxed">{exp.desc}</p>
                    <button className="text-gold-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-4 group">
                      Inquire About This Experience 
                      <span className="w-10 h-[1px] bg-gold-500 group-hover:w-16 transition-all"></span>
                    </button>
                  </div>
                  <div className="flex-1 relative aspect-[16/10] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
