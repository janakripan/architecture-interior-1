"use client";
import React from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function DesignPhilosophy() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative py-24 md:py-40 bg-[var(--surface)] overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <m.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="font-bebas heading-large text-white text-center"
        >
          Design Philosophy
        </m.h2>
      </div>

      <div className="w-full relative h-[60vh] md:h-[80vh] overflow-hidden group">
        <m.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease }}
          className="w-full h-full absolute inset-0"
        >
          {/* Using a placeholder gradient for the architectural image to keep it lean */}
          <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
        </m.div>
        
        {/* Editorial Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-6 bg-black/30 backdrop-blur-[2px]">
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="max-w-3xl text-center"
          >
            <p className="font-sans text-xl md:text-3xl lg:text-4xl leading-tight text-white font-light italic">
              "We strip away the unnecessary so the essential may speak. Our architecture is an ongoing dialogue between light, material, and human purpose."
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
