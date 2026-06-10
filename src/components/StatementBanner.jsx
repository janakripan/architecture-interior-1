"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StatementBanner() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/images/statement_bg_1781082710020.png" 
          alt="Quite Space Architecture" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-bebas text-center flex flex-col items-center"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', lineHeight: 0.85, letterSpacing: '-0.02em' }}
        >
          <div className="relative z-20 font-bold drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)] text-white">
            QUIET
          </div>
          <div className="relative z-10 font-bold mt-0 bg-linear-to-b from-black/80 via-[#F5F5F5] via-40% to-text-primary bg-clip-text text-transparent">
            SPACE
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-label text-white/80 mt-6 max-w-sm text-center tracking-widest"
        >
          A MINIMALIST APPROACH TO MODERN LIVING.
        </motion.p>
      </div>
    </section>
  );
}
