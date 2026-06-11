"use client";
import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function StatementBanner() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      <m.div 
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease }}
        className="absolute inset-0 overflow-hidden"
      >
        <Image 
          src="/images/statement_bg_1781082710020.png" 
          alt="Quite Space Architecture" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </m.div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-20">
        <m.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="font-bebas text-center flex flex-col items-center heading-hero text-white"
        >
          <m.div 
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } }
            }}
            className="relative z-20 font-bold drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]"
          >
            QUIET
          </m.div>
          <m.div 
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } }
            }}
            className="relative z-10 font-bold mt-0 bg-linear-to-b from-black/80 via-[#F5F5F5] via-40% to-text-primary bg-clip-text text-transparent"
          >
            SPACE
          </m.div>
        </m.div>
        
        <m.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="text-label text-white/80 mt-6 max-w-sm text-center tracking-widest"
        >
          A MINIMALIST APPROACH TO MODERN LIVING.
        </m.p>
      </div>
    </section>
  );
}
