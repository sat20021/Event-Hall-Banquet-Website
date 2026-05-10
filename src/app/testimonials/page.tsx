"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Play } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Anya & Vikram",
    event: "Destination Wedding",
    text: "GrandVista didn't just host our wedding; they crafted a fairytale. The attention to detail in the Royal Floral decor and the seamless coordination of our 400 guests was simply world-class.",
    image: "/images/decor_floral_refined.png",
    video: true
  },
  {
    id: 2,
    name: "James Harrington",
    event: "CEO, TechGlobal",
    text: "Our annual summit requires absolute precision and high-end security. GrandVista delivered an impeccable experience for our executive board. The catering was Michelin-standard.",
    image: "/images/hall_grand_refined.png",
    video: false
  },
  {
    id: 3,
    name: "Sofia & Marco",
    event: "Anniversary Gala",
    text: "Celebrating 25 years at GrandVista was the best decision we made. The sunset rooftop views and the live orchestral soundscape made it a night our family will never forget.",
    image: "/images/hall_garden_refined.png",
    video: true
  }
];

export default function TestimonialsPage() {
  return (
    <main className="bg-soft-black min-h-screen text-cream pb-32">
      <Navbar />

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold-500 uppercase tracking-[0.4em] font-bold text-xs mb-6">Real Stories</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-12">Voices of Excellence.</h1>

          <div className="space-y-24">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 md:gap-20 items-center p-8 md:p-16 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-3xl`}>
                  <div className="flex-1 relative aspect-square md:aspect-video lg:aspect-square w-full rounded-[2rem] overflow-hidden group">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                    />
                    {story.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/50 cursor-pointer hover:scale-110 transition-transform">
                          <Play size={30} fill="currentColor" className="text-black ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-left space-y-8">
                    <Quote className="text-gold-500 w-12 h-12 opacity-50" />
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="text-gold-500" fill="currentColor" />)}
                    </div>
                    <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-white/90">
                      "{story.text}"
                    </p>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gold-500">{story.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{story.event}</p>
                    </div>
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
