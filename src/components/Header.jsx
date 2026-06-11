"use client";
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { m, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import MenuOverlay from './MenuOverlay';

const ease = [0.22, 1, 0.36, 1];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <m.header 
        variants={{
          visible: { y: 0, transition: { duration: 0.6, ease } },
          hidden: { y: '-100%', transition: { duration: 0.6, ease } }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start pt-6 px-6 pointer-events-none"
      >
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase leading-tight pointer-events-auto"
        >
          <Link href="/">
            EVER<br/>GREEN<br/>ARCHITEX
          </Link>
        </m.div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <Link href="/contact" passHref legacyBehavior>
              <m.a 
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
                whileTap={{ scale: 0.98 }}
                className="h-12 px-6 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center transition-colors hover:bg-gray-100"
              >
                Let's Talk
              </m.a>
            </Link>
          </m.div>

          <m.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(true)}
            className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center transition-colors hover:bg-gray-100"
          >
            <m.div whileHover={{ rotate: 3, scale: 1.08, transition: { duration: 0.25, ease } }}>
              <HiMenu className="text-xl" />
            </m.div>
          </m.button>
        </div>
      </m.header>

      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
