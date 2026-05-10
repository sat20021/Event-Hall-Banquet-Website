"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const cateringPackages = [
  {
    name: "Maharaja Heritage",
    price: "Starting at ₹2,500/guest",
    image: "/images/food_luxury_plating_1778402740585.png",
    items: ["Live Chaat Counters", "Dal-Baati Churma Station", "Shahi Tukda Dessert Bar", "Hand-pulled Masala Chai"]
  },
  {
    name: "Modern Vedic",
    price: "Starting at ₹3,500/guest",
    image: "/images/food_refined.png",
    items: ["Avocado Chaat", "Truffle Paneer Tikka", "Quinoa Pulao", "Liquid Nitrogen Mithai"]
  }
];

const decorThemes = [
  {
    name: "Royal Rajputana",
    image: "/images/mandap_luxury_setup_1778402794254.png",
    desc: "A tribute to heritage with cinematic lighting, marigold hangings, and handcrafted brass artifacts."
  },
  {
    name: "Mughal Grandeur",
    image: "/images/decor_royal_floral_1778402758913.png", 
    desc: "Opulent white marble themes, intricate jali work, and thousands of fresh white roses."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-soft-black min-h-screen text-cream">
      <Navbar />

      <section className="pt-40 pb-20 px-4 bg-emerald-950/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Exquisite Services
            </h1>
          </motion.div>
          <p className="text-lg text-cream/60 max-w-2xl mx-auto">
            From the first bite to the final flourish, we ensure every detail of your event is a masterpiece.
          </p>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-gold-500">Gourmet Catering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cateringPackages.map((pkg) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                  <div className="h-64 relative">
                    <Image src={pkg.image} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-3xl font-serif font-bold text-white">{pkg.name}</h3>
                      <p className="text-gold-400 font-bold uppercase tracking-widest text-xs">{pkg.price}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      {pkg.items.map(item => (
                        <li key={item} className="flex items-center gap-3 text-cream/70">
                          <Check className="text-gold-500 w-5 h-5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 w-full border border-gold-500/50 hover:bg-gold-500 hover:text-black text-gold-500 py-3 rounded-full font-bold uppercase tracking-widest transition-all">
                      Customise Menu
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decor Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-gold-500">Decor Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {decorThemes.map((theme) => (
              <motion.div
                key={theme.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="group relative h-[400px] rounded-2xl overflow-hidden">
                  <Image src={theme.image} alt={theme.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 p-8">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{theme.name}</h3>
                    <p className="text-cream/60 mb-6">{theme.desc}</p>
                    <button className="text-gold-500 font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                      View Gallery &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 border-t border-gold-500/20 text-center">
          <span className="text-3xl font-serif font-bold text-gold-500 block mb-4">GRANDVISTA</span>
          <p className="text-cream/40 text-sm tracking-widest uppercase">© 2026 GrandVista Banquets. All rights reserved.</p>
      </footer>
    </main>
  );
}
