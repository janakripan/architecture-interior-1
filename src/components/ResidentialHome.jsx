"use client";
import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

const categories = ["Residential", "Museum", "Education", "Library"];
const ease = [0.22, 1, 0.36, 1];

export default function ResidentialHome() {
  return (
    <m.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className="bg-[var(--surface)] pt-[120px] pb-20 px-5 md:px-10 lg:px-20 text-[var(--text-primary)]"
    >
      <div className="max-w-content">
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.04 }}
          className="font-sans mb-16 lg:mb-20 flex flex-col"
          style={{ fontSize: 'clamp(50px, 7vw, 90px)', lineHeight: 1.05, letterSpacing: '-0.02em', transform: 'scaleX(1.1)', transformOrigin: 'left center' }}
        >
          <m.span 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="font-light text-white"
          >
            RESIDENTIAL
          </m.span>
          <m.span 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="font-bold text-white"
          >
            HOME.
          </m.span>
        </m.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/4 flex flex-col justify-between order-2 lg:order-1">
            <m.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05 }}
              className="flex flex-col gap-4 lg:gap-5 mt-4"
            >
              {categories.map((cat, i) => (
                <m.a 
                  key={cat}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease }}
                  whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
                  className={`text-[15px] lg:text-[16px] transition-colors origin-left ${i === 0 ? 'text-white font-bold' : 'text-white/50 hover:text-white font-medium'}`}
                >
                  {cat}
                </m.a>
              ))}
            </m.div>

            <m.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="mt-16 lg:mt-0"
            >
              <p className="text-[14px] lg:text-[15px] text-white font-bold leading-snug">
                Johannesburg,<br/>South Africa
              </p>
            </m.div>
          </div>

          {/* Right Column */}
          <div className="lg:w-3/4 order-1 lg:order-2 overflow-hidden">
            <m.div 
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease }}
              className="relative w-full aspect-[16/10] overflow-hidden group"
            >
              <Image 
                src="/images/residential_bg_1781082724078.png" 
                alt="Sightseeing residence" 
                fill 
                className="object-cover"
              />
            </m.div>
            
            <m.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="flex justify-between items-end mt-6 lg:mt-8"
            >
              <h3 className="text-[26px] lg:text-[34px] font-bold text-white tracking-tight leading-none">
                Sightseeing residence
              </h3>
              <m.a 
                href="#" 
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
                className="text-[13px] font-bold text-white hover:text-gray-300 transition-colors pb-1 origin-right inline-block"
              >
                See Details
              </m.a>
            </m.div>
          </div>
        </div>
      </div>
    </m.section>
  );
}
