"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Shubh Lagna",
    price: "₹5.5 Lakhs",
    desc: "Perfect for intimate wedding ceremonies and elegant receptions.",
    features: ["8 Hours Grand Hall Access", "Traditional Floral Decor", "Shahi 3-Course Menu", "Vedic Mandap Setup", "Valet Parking"],
    popular: false,
  },
  {
    name: "Vivaha Mahotsav",
    price: "₹12.5 Lakhs",
    desc: "Our premium package for a grand multi-day celebration.",
    features: ["24 Hours Exclusive Access", "Designer Theme Decor", "Multi-Cuisine Shahi Buffet", "Sangeet & Mehendi Venues", "Bridal Luxury Suite", "Event Concierge Team"],
    popular: true,
  },
  {
    name: "Rajvadi Utsav",
    price: "₹25 Lakhs+",
    desc: "The ultimate royal experience for elite destination weddings.",
    features: ["3 Days Full Resort Access", "Heritage Theme Installations", "Live Global & Indian Kitchens", "Shehnai & Dhol Troupe", "VVIP Guest Security", "Post-Wedding Royal Brunch"],
    popular: false,
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-soft-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Investment in Memories</h2>
          <p className="text-cream/60 max-w-2xl mx-auto italic">Transparent pricing for extraordinary experiences. Custom packages available upon request.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`relative p-10 rounded-3xl border transition-all duration-500 h-full ${
                pkg.popular 
                  ? "bg-emerald-950/40 border-gold-500/50 shadow-2xl shadow-gold-500/10 scale-105 z-10" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Most Exclusive
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-sm text-cream/40 mb-6">{pkg.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-bold text-gold-500">{pkg.price}</span>
                    <span className="text-cream/40 text-sm">/ Event</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-cream/70">
                      <Check className="text-gold-500 shrink-0 mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${
                  pkg.popular 
                    ? "bg-gold-500 text-black hover:bg-gold-400" 
                    : "border border-gold-500/30 text-gold-500 hover:bg-gold-500/10"
                }`}>
                  Book This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
