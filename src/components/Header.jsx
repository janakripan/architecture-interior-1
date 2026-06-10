"use client";
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="absolute top-6 left-6 right-6 z-50 flex justify-between items-start pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase leading-tight pointer-events-auto"
      >
        EVER<br/>
        GREEN<br/>
        ARCHITEX
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="flex items-center gap-3 pointer-events-auto"
      >
        <button className="h-12 px-6 rounded-full bg-white text-black font-medium text-sm transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
          Let's Talk
        </button>
        <button className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
          <HiMenu className="text-xl" />
        </button>
      </motion.div>
    </header>
  );
}
