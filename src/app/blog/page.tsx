"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Rise of Eco-Luxury Weddings in 2026",
    excerpt: "Discover how sustainability is becoming the ultimate luxury statement for modern couples...",
    image: "/images/decor_floral_refined.png",
    date: "May 12, 2026",
    author: "Elena Rossi",
    category: "Trends"
  },
  {
    id: 2,
    title: "Mastering the Art of Corporate Gala Seating",
    excerpt: "Psychology and aesthetics: Why your floor plan determines the success of your networking...",
    image: "/images/hall_grand_refined.png",
    date: "May 08, 2026",
    author: "Marcus Thorne",
    category: "Corporate"
  },
  {
    id: 3,
    title: "Fusion Menus: A Global Culinary Journey",
    excerpt: "How our chefs are blending heritage flavors with modern molecular gastronomy techniques...",
    image: "/images/food_refined.png",
    date: "April 29, 2026",
    author: "Chef Julian",
    category: "Culinary"
  },
  {
    id: 4,
    title: "Lighting Design: Transforming Spaces with Shadow",
    excerpt: "The secret to cinematic event photography lies in the architectural lighting choices...",
    image: "/images/hall_imperial_refined.png",
    date: "April 22, 2026",
    author: "David Lightman",
    category: "Decor"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-soft-black min-h-screen text-cream pb-32">
      <Navbar />

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold-500 uppercase tracking-[0.4em] font-bold text-xs mb-6">The Journal</p>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8">Inspiration & Insights.</h1>
            
            <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5" />
                <input 
                    placeholder="Search articles..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-16 pr-8 text-white focus:border-gold-500 transition-all outline-none"
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <article className="group cursor-pointer">
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-gold-500 border border-gold-500/20">
                      {post.category}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-white/40">
                      <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                      <span className="flex items-center gap-2"><User size={12} /> {post.author}</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold group-hover:text-gold-500 transition-colors">{post.title}</h2>
                    <p className="text-cream/60 leading-relaxed max-w-lg">{post.excerpt}</p>
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <section className="mt-32 p-12 md:p-20 bg-white/5 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-6">Subscribe to Excellence</h2>
                <p className="text-cream/40 mb-12 max-w-md mx-auto">Join our private circle to receive seasonal inspiration and exclusive venue updates.</p>
                <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                    <input 
                        type="email"
                        placeholder="Your elite email"
                        className="flex-1 bg-black/40 border border-white/10 rounded-full py-4 px-8 text-white focus:border-gold-500 outline-none"
                    />
                    <button className="bg-gold-500 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold-400 transition-all">
                        Join Circle
                    </button>
                </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
