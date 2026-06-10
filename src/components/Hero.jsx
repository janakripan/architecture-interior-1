"use client";
import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
};

const lineVariants = {
  hidden: { opacity: 0, y: 80, letterSpacing: '-0.04em' },
  show: { opacity: 1, y: 0, letterSpacing: '-0.02em', transition: { duration: 0.9, ease } }
};

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <m.div 
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image 
          src="/images/hero_bg_1781082696624.png" 
          alt="Luxury Architecture" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>
      </m.div>
      
      <div className="relative z-10 w-full flex flex-col items-center translate-y-10">
        <m.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="font-bebas text-center flex flex-col items-center mb-8"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', lineHeight: 0.85 }}
        >
          <m.div variants={lineVariants} className="relative z-20 font-bold drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]">
            WE SHAPE
          </m.div>
          <m.div variants={lineVariants} className="relative z-10 font-bold mt-0 bg-linear-to-b from-black/80 via-[#F5F5F5] via-40% to-text-primary bg-clip-text text-transparent">
            SPACES
          </m.div>
        </m.div>
        
        <m.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
          whileTap={{ scale: 0.98 }}
          className="w-[180px] h-[56px] rounded-full bg-white text-black font-medium text-sm flex items-center justify-center transition-colors hover:bg-gray-100"
        >
          Contact Us
        </m.button>
      </div>

    </section>
  );
}
