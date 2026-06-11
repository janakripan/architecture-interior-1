"use client";
import React from 'react';
import { m } from 'framer-motion';

export default function TestimonialNavigation({ current, total, onNext, onPrev }) {
  return (
    <div className="flex items-center gap-6 mt-12 lg:mt-0">
      <div className="flex gap-4">
        <m.button
          onClick={onPrev}
          whileHover={{ x: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </m.button>
        <m.button
          onClick={onNext}
          whileHover={{ x: 4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </m.button>
      </div>
      <div className="font-bebas text-xl text-white/50 tracking-widest hidden md:block">
        <span className="text-white">{String(current + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
}
