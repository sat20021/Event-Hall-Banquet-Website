"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Leaf, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-soft-black min-h-screen text-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[80vh] relative flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hall_imperial_refined.png"
          alt="About Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-soft-black" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gold-500 uppercase tracking-[0.4em] font-bold text-xs mb-6">
              Since 1988
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.9]">
              The Heritage of <br /> GrandVista.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/exterior_refined.png"
                  alt="Estate Exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-serif font-bold">Crafting Heritage <br /> for Generations.</h2>
                <div className="space-y-6 text-cream/60 leading-relaxed text-lg">
                  <p>
                    GrandVista Banquets was born from a vision to create a space where modern luxury meets the timeless heritage of India. What started as a family estate in the heart of the valley has evolved into a global destination for elite celebrations.
                  </p>
                  <p>
                    Our commitment to &apos;Atithi Devo Bhava&apos; (Guest is God) is unwavering. We don&apos;t just host events; we curate legacies. From the meticulous carving of our Darbar halls to the shahi flavors of our kitchens, our standards reflect the pinnacle of Indian royalty.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <h4 className="text-3xl font-serif font-bold text-gold-500">35+</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Years of Heritage</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif font-bold text-gold-500">8000+</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Grand Mahotsavs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Shahi Pillars</h2>
            <p className="text-cream/40 italic">The principles that define the GrandVista heritage experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Royal Luxury", desc: "Setting the benchmark for sophisticated Indian venue design and regal service." },
              { icon: ShieldCheck, title: "VVIP Privacy", desc: "Ensuring high-profile dignitaries enjoy complete security and exclusivity." },
              { icon: Users, title: "Atithi Hospitality", desc: "Our sewadars are trained in the highest standards of traditional and modern care." },
              { icon: Leaf, title: "Vedic Roots", desc: "Leading the way in eco-conscious luxury with Vastu-compliant and sustainable practices." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-10 bg-black border border-white/10 rounded-[2rem] hover:border-gold-500/50 transition-colors text-center group h-full">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold-500 transition-colors">
                    <item.icon size={24} className="text-gold-500 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Highlight */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto bg-emerald-950/20 border border-emerald-500/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Leaf size={200} className="text-gold-500" />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-8">Green Luxury Initiative</h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-12">
            We believe that grand celebrations shouldn&apos;t come at the cost of the environment. From solar-powered ballrooms to locally sourced artisanal ingredients, GrandVista is redefining what it means to be a &quot;sustainable luxury&quot; venue.
          </p>
          <button className="bg-gold-500 text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold-400 transition-all">
            Read Our Eco-Charter
          </button>
        </div>
      </section>
    </main>
  );
}
