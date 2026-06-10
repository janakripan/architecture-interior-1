"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_bg_1781082696624.png" 
          alt="Luxury Architecture" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center translate-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-bebas text-center flex flex-col items-center mb-8"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', lineHeight: 0.85, letterSpacing: '-0.02em' }}
        >
          <div className="relative z-20 font-bold drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]" >
            WE SHAPE
          </div>
          <div className="relative z-10 font-bold mt-0 bg-linear-to-b from-black/80 via-[#F5F5F5] via-40% to-text-primary bg-clip-text text-transparent" >
            SPACES
          </div>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="w-[180px] h-[56px] rounded-full bg-white text-black font-medium text-sm transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
        >
          Contact Us
        </motion.button>
      </div>

    </section>
  );
}
