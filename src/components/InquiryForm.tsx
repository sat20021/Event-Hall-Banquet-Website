"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronRight, ChevronLeft, Send, Calendar, Users, Mail, User, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  date: z.string().min(1, "Event date is required"),
  guests: z.string().min(1, "Guest count is required"),
  eventType: z.string().min(1, "Event type is required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const InquiryForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const nextStep = async () => {
    let fields: (keyof FormData)[] = [];
    if (step === 1) fields = ["name", "email", "phone"];
    if (step === 2) fields = ["date", "guests", "eventType"];

    const isValid = await trigger(fields);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-gold-500/20">
            <Check className="text-black w-10 h-10" />
          </div>
          <h3 className="text-4xl font-serif font-bold text-white mb-4">Request Received</h3>
          <p className="text-cream/60 max-w-md mx-auto leading-relaxed">
            Our elite concierge team has received your inquiry. We will contact you within the next 24 hours to begin planning your extraordinary event.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                step >= s ? "text-gold-500" : "text-white/20"
              }`}
            >
              Step 0{s}
            </div>
          ))}
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
          >
            <div className="h-full bg-gold-500 w-full" />
          </motion.div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-serif font-bold text-white mb-4">Personal Details</h2>
                  <p className="text-cream/40 italic">Tell us who we&apos;ll be crafting this experience for.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                      <input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-gold-500 transition-all outline-none"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-[10px] uppercase tracking-widest">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                      <input
                        {...register("email")}
                        placeholder="email@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-gold-500 transition-all outline-none"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-widest">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                      <input
                        {...register("phone")}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-gold-500 transition-all outline-none"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[10px] uppercase tracking-widest">{errors.phone.message}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-serif font-bold text-white mb-4">Event Logistics</h2>
                  <p className="text-cream/40 italic">When and how grand will the celebration be?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Event Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                      <input
                        {...register("date")}
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-gold-500 transition-all outline-none [color-scheme:dark]"
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-[10px] uppercase tracking-widest">{errors.date.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Expected Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                      <select
                        {...register("guests")}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-gold-500 transition-all outline-none appearance-none"
                      >
                        <option value="" className="bg-soft-black">Guest Count</option>
                        <option value="0-100" className="bg-soft-black">0 - 100</option>
                        <option value="100-500" className="bg-soft-black">100 - 500</option>
                        <option value="500-1000" className="bg-soft-black">500 - 1,000</option>
                        <option value="1000+" className="bg-soft-black">1,000+</option>
                      </select>
                    </div>
                    {errors.guests && <p className="text-red-500 text-[10px] uppercase tracking-widest">{errors.guests.message}</p>}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Type of Celebration</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["Wedding", "Corporate", "Birthday", "Gala"].map((type) => (
                        <label
                          key={type}
                          className="cursor-pointer"
                        >
                          <input
                            type="radio"
                            value={type}
                            {...register("eventType")}
                            className="hidden peer"
                          />
                          <div className="py-4 text-center border border-white/10 rounded-xl text-[10px] uppercase tracking-widest font-bold text-white/40 peer-checked:border-gold-500 peer-checked:text-gold-500 peer-checked:bg-gold-500/5 transition-all">
                            {type}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.eventType && <p className="text-red-500 text-[10px] uppercase tracking-widest">{errors.eventType.message}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-serif font-bold text-white mb-4">Final Vision</h2>
                  <p className="text-cream/40 italic">Any special requests or details you&apos;d like to share?</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Special Requests (Optional)</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us your vision..."
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-6 text-white focus:border-gold-500 transition-all outline-none resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 flex justify-between gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest text-[10px] border border-gold-500/20 px-8 py-4 rounded-full hover:bg-gold-500/5 transition-all"
            >
              <ChevronLeft size={14} /> Back
            </button>
          )}
          <div className="flex-1" />
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 bg-gold-500 text-black font-bold uppercase tracking-widest text-[10px] px-10 py-4 rounded-full hover:bg-gold-400 transition-all transform hover:scale-105 shadow-xl shadow-gold-500/20"
            >
              Next Phase <ChevronRight size={14} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-gold-500 text-black font-bold uppercase tracking-widest text-[10px] px-12 py-4 rounded-full hover:bg-gold-400 transition-all transform hover:scale-105 shadow-xl shadow-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"} <Send size={14} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
