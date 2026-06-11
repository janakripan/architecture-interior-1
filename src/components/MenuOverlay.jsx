"use client";
import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HiX } from 'react-icons/hi';

const ease = [0.22, 1, 0.36, 1];

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Featured Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const menuVariants = {
  hidden: { y: '-100%' },
  show: { 
    y: '0%', 
    transition: { duration: 0.8, ease, staggerChildren: 0.08, delayChildren: 0.2 } 
  },
  exit: { 
    y: '-100%', 
    transition: { duration: 0.8, ease, staggerChildren: 0.05, staggerDirection: -1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease } }
};

export default function MenuOverlay({ isOpen, onClose }) {
  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          variants={menuVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 z-[100] bg-[var(--background)] flex flex-col justify-between overflow-hidden"
        >
          {/* Header area of overlay */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <m.div variants={itemVariants} className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase leading-tight">
              EVER<br/>GREEN<br/>ARCHITEX
            </m.div>
            <m.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="h-12 w-12 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] text-white flex items-center justify-center transition-colors hover:bg-white hover:text-black"
            >
              <HiX className="text-xl" />
            </m.button>
          </div>

          {/* Main Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-20">
            <nav className="flex flex-col gap-2 md:gap-4">
              {links.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <m.div variants={itemVariants}>
                    <Link 
                      href={link.href}
                      onClick={onClose}
                      className="font-bebas text-[12vw] md:text-[100px] leading-[0.85] tracking-[-0.03em] uppercase text-white hover:text-gray-400 transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </m.div>
                </div>
              ))}
            </nav>
          </div>

          {/* Footer of Overlay */}
          <div className="px-6 md:px-20 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <m.div variants={itemVariants} className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-[0.08em] text-white/50">Say Hello</span>
              <a href="mailto:hello@evergreen.com" className="text-lg font-medium text-white hover:text-gray-300">hello@evergreen.com</a>
            </m.div>
            
            <m.div variants={itemVariants} className="flex gap-6">
              <a href="#" className="text-sm font-medium text-white hover:text-gray-400">Instagram</a>
              <a href="#" className="text-sm font-medium text-white hover:text-gray-400">LinkedIn</a>
              <a href="#" className="text-sm font-medium text-white hover:text-gray-400">Twitter</a>
            </m.div>
          </div>

          {/* Subtle background element */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-[50vw] h-[50vw] translate-x-1/4 translate-y-1/4">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <rect x="20" y="20" width="60" height="60" />
            </svg>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
