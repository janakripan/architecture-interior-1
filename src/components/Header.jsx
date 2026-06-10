"use client";
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

export default function Header() {
  return (
    <m.header 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="absolute top-6 left-6 right-6 z-50 flex justify-between items-start pointer-events-none"
    >
      <m.div 
        variants={itemVariants}
        className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase leading-tight pointer-events-auto"
      >
        EVER<br/>
        GREEN<br/>
        ARCHITEX
      </m.div>
      <div className="flex items-center gap-3 pointer-events-auto">
        <m.button 
          variants={itemVariants}
          whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
          whileTap={{ scale: 0.98 }}
          className="h-12 px-6 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center transition-colors hover:bg-gray-100"
        >
          Let's Talk
        </m.button>
        <m.button 
          variants={itemVariants}
          whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
          whileTap={{ scale: 0.98 }}
          className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center transition-colors hover:bg-gray-100"
        >
          <m.div whileHover={{ rotate: 3, scale: 1.08, transition: { duration: 0.25, ease } }}>
            <HiMenu className="text-xl" />
          </m.div>
        </m.button>
      </div>
    </m.header>
  );
}
