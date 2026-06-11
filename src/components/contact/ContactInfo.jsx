"use client";
import React from 'react';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function ContactInfo() {
  return (
    <div className="md:w-1/3 flex flex-col gap-12">
      <m.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        <span className="text-white/40 uppercase tracking-[0.1em] text-xs font-bold mb-4 block">Our Studios</span>
        <h3 className="font-bebas text-3xl text-white mb-2">London</h3>
        <p className="text-white/70 font-sans text-sm mb-6">124 Architectural Way,<br/>London, UK W1W 8QR</p>
        
        <h3 className="font-bebas text-3xl text-white mb-2">New York</h3>
        <p className="text-white/70 font-sans text-sm">450 Structural Ave,<br/>New York, NY 10001</p>
      </m.div>

      <m.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
      >
        <span className="text-white/40 uppercase tracking-[0.1em] text-xs font-bold mb-4 block">Direct Contact</span>
        <a href="mailto:hello@evergreen.com" className="font-sans text-xl text-white hover:text-white/70 transition-colors block mb-2">hello@evergreen.com</a>
        <a href="tel:+442071234567" className="font-sans text-xl text-white hover:text-white/70 transition-colors block">+44 20 7123 4567</a>
      </m.div>

      <m.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className="flex gap-6 mt-8"
      >
        <a href="#" className="text-sm font-medium text-white hover:text-white/50 transition-colors uppercase tracking-widest border-b border-transparent hover:border-white/50">Instagram</a>
        <a href="#" className="text-sm font-medium text-white hover:text-white/50 transition-colors uppercase tracking-widest border-b border-transparent hover:border-white/50">LinkedIn</a>
      </m.div>
    </div>
  );
}
