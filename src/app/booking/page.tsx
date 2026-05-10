"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar as CalendarIcon, Users, MapPin, CalendarDays, ArrowRight } from "lucide-react";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    guests: "100-200",
    eventType: "Wedding",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="bg-soft-black min-h-screen text-cream">
      <Navbar />

      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                Reserve Your <br />
                <span className="text-gold-500">Masterpiece Event</span>
              </h1>
              <p className="text-lg text-cream/60 leading-relaxed max-w-lg">
                Start your journey with us. Fill out the inquiry form, and our dedicated event curators will reach out to you within 24 hours to begin planning your extraordinary celebration.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
                    <CalendarDays className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-gold-500">Step 1</h4>
                    <p className="text-xl font-serif">Check Availability</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Step 2</h4>
                    <p className="text-xl font-serif">Select Venue & Catering</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Step 3</h4>
                    <p className="text-xl font-serif">Finalize Details</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-white/10">
              <div 
                className="h-full bg-gold-500 transition-all duration-500" 
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            {step === 1 && (
              <div className="space-y-8 py-4">
                <h3 className="text-3xl font-serif font-bold">Event Basics</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-cream/40">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold-500 focus:outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-cream/40">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold-500 focus:outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button 
                    onClick={nextStep}
                    className="w-full bg-gold-500 text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-gold-400 transition-all flex items-center justify-center gap-3"
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 py-4">
                <h3 className="text-3xl font-serif font-bold">Details & Date</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-cream/40">Event Type</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold-500 focus:outline-none transition-all">
                        <option className="bg-soft-black">Wedding</option>
                        <option className="bg-soft-black">Corporate</option>
                        <option className="bg-soft-black">Gala Dinner</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-cream/40">Expected Guests</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold-500 focus:outline-none transition-all">
                        <option className="bg-soft-black">100-200</option>
                        <option className="bg-soft-black">200-500</option>
                        <option className="bg-soft-black">500+</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-cream/40">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold-500 focus:outline-none transition-all text-cream"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={prevStep}
                      className="flex-1 border border-white/10 hover:bg-white/5 py-5 rounded-xl font-bold uppercase tracking-[0.2em] transition-all"
                    >
                      Back
                    </button>
                    <button 
                      onClick={nextStep}
                      className="flex-[2] bg-gold-500 text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-gold-400 transition-all flex items-center justify-center gap-3"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 py-4 text-center">
                <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-10 h-10 text-gold-500" />
                </div>
                <h3 className="text-3xl font-serif font-bold">Review & Send</h3>
                <p className="text-cream/60">Please confirm your details. We will prepare a personalized proposal for you.</p>
                <button 
                  className="w-full bg-gold-500 text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-gold-400 transition-all"
                  onClick={() => alert("Inquiry Sent Successfully!")}
                >
                  Send Inquiry
                </button>
                <button 
                  onClick={prevStep}
                  className="text-cream/40 hover:text-cream text-sm uppercase tracking-widest"
                >
                  Edit Details
                </button>
              </div>
            )}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black py-16 border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-3xl font-serif font-bold text-gold-500 block mb-4">GRANDVISTA</span>
          <p className="text-cream/40 text-sm tracking-widest uppercase">© 2026 GrandVista Banquets. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
