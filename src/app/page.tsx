"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingCalendar from "@/components/BookingCalendar";
import Pricing from "@/components/Pricing";
import Tourism from "@/components/Tourism";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Coffee, Utensils, Camera, Heart } from "lucide-react";

import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="bg-soft-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <section className="py-24 px-4 bg-emerald-950 text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 transform translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                  Where Every Detail <br />
                  <span className="text-gold-500 italic">Tells a Story</span>
                </h2>
                <p className="text-lg text-cream/70 mb-8 leading-relaxed font-light">
                  GrandVista Banquets isn&apos;t just a venue; it&apos;s a canvas for your most precious memories. From the golden hour glow on our grand exterior to the intricate floral mandaps, we craft experiences that resonate for a lifetime.
                </p>
                <div className="flex gap-12">
                  <div>
                    <p className="text-4xl font-serif text-gold-500">25+</p>
                    <p className="text-[10px] uppercase tracking-widest text-cream/40">Years of Legacy</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif text-gold-500">5k+</p>
                    <p className="text-[10px] uppercase tracking-widest text-cream/40">Events Perfected</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-black/50">
                <Image
                  src="/images/hall_grand_refined.png"
                  alt="Refined Grand Ballroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-soft-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Exceptional Offerings</h2>
            <p className="text-cream/40 uppercase tracking-[0.4em] text-xs">Curated for the Discerning Host</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Maharaja Ballrooms", icon: Users, desc: "Architectural masterpieces with 20ft ceilings, gold leaf detailing, and crystal chandeliers." },
              { title: "Shahi Dawat Catering", icon: Utensils, desc: "Award-winning Shahi Thalis and Global Fusion menus by master chefs." },
              { title: "Sanskriti Decor", icon: Camera, desc: "Traditional themes like Rajvadi and Mughal, crafted by heritage designers." },
              { title: "Elite Sewa", icon: Coffee, desc: "A dedicated team providing 5-star Indian hospitality and personalized care." },
              { title: "Heritage Tourism", icon: Heart, desc: "Exclusive access to nearby palaces, temples, and iconic landmarks." },
              { title: "Utsav Logistics", icon: ShieldCheck, desc: "Professional valet and high-security protocols for all your VVIP guests." },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-500 h-full">
                  <service.icon className="w-10 h-10 text-gold-500 mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-cream/60 leading-relaxed font-light">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section className="py-24 px-4 bg-emerald-950/10">
        <div className="max-w-7xl mx-auto">
          <BookingCalendar />
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-24 px-4 bg-soft-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Cinematic Gallery</h2>
              <p className="text-cream/60">A glimpse into our world of grandeur.</p>
            </div>
            <Link href="/gallery" className="text-gold-500 font-bold uppercase tracking-widest text-xs border-b border-gold-500/30 pb-1">
              View Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]">
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
              <Image src="/images/mandap_refined.png" alt="Mandap" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image src="/images/food_refined.png" alt="Food" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image src="/images/decor_floral_refined.png" alt="Decor" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <Image src="/images/details_refined.png" alt="Details" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-3 relative rounded-2xl overflow-hidden group">
              <Image src="/images/night_entrance_refined.png" alt="Night View" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Peek */}
      <section className="py-32 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <Quote className="text-gold-500/20 w-32 h-32 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10" />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
              <div className="space-y-12 relative z-10">
                <p className="text-3xl md:text-5xl font-serif italic mb-12">
                    &quot;GrandVista didn&apos;t just host our wedding; <br className="hidden md:block" /> they crafted a fairytale.&quot;
                </p>
                <Link href="/testimonials" className="bg-gold-500 text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold-400 transition-all shadow-xl shadow-gold-500/20">
                    Read Real Stories
                </Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Tourism Section */}
      <Tourism />

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-12">
            <span className="text-4xl font-serif font-bold text-gold-500 tracking-tighter">GRANDVISTA</span>
            <p className="text-cream/40 uppercase tracking-[0.5em] text-[10px] mt-2">The Gold Standard of Events</p>
          </div>
          <div className="flex justify-center gap-12 mb-12">
            {["Instagram", "Facebook", "LinkedIn"].map(social => (
              <a key={social} href="#" className="text-cream/60 hover:text-gold-500 transition-colors uppercase tracking-widest text-[10px] font-bold">
                {social}
              </a>
            ))}
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2026 GrandVista Banquets. Designed for Excellence.</p>
        </div>
      </footer>

      <FloatingActions />
    </main>
  );
}

import { Quote } from "lucide-react";
