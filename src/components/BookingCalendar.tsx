"use client";

import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const BookingCalendar = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  // Simulate some booked dates
  const bookedDates = [
    new Date(2026, 4, 15),
    new Date(2026, 4, 20),
    new Date(2026, 4, 21),
    new Date(2026, 5, 5),
  ];

  const modifiers = {
    booked: bookedDates,
  };

  const modifiersStyles = {
    booked: {
      color: "white",
      backgroundColor: "#ef4444", // Red for booked
      textDecoration: "line-through",
    },
    selected: {
      backgroundColor: "#D4AF37", // Gold for selected
      color: "black",
      fontWeight: "bold",
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
        <div className="flex-1">
          <h3 className="text-3xl font-serif font-bold text-white mb-6">Check Availability</h3>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Select your preferred date to see if our grand halls are available for your special occasion. Dates in red are already reserved.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-sm" />
              <span className="text-sm text-cream/80">Reserved</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gold-500 rounded-sm" />
              <span className="text-sm text-cream/80">Selected</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-white/20 rounded-sm border border-white/10" />
              <span className="text-sm text-cream/80">Available</span>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-2xl bg-gold-500/10 border border-gold-500/20">
            <p className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-2">Selected Date</p>
            <p className="text-2xl font-serif text-white">
              {selected ? format(selected, "PPP") : "No date selected"}
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-2xl shadow-2xl shadow-gold-500/10 text-black">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
