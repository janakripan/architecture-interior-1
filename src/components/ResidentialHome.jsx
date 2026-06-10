"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = ["Residential", "Museum", "Education", "Library"];

export default function ResidentialHome() {
  return (
    <section className="bg-[var(--surface)] pt-[120px] pb-20 px-5 md:px-10 lg:px-20 text-[var(--text-primary)]">
      <div className="max-w-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans mb-16 lg:mb-20 flex flex-col"
          style={{ fontSize: 'clamp(50px, 7vw, 90px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          <span className="font-medium text-white">RESIDENTIAL</span>
          <span className="font-bold text-white">HOME.</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:w-1/4 flex flex-col justify-between order-2 lg:order-1">
            <div className="flex flex-col gap-4 lg:gap-5 mt-4">
              {categories.map((cat, i) => (
                <motion.a 
                  key={cat}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`text-[15px] lg:text-[16px] transition-colors ${i === 0 ? 'text-white font-bold' : 'text-white/50 hover:text-white font-medium'}`}
                >
                  {cat}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 lg:mt-0"
            >
              <p className="text-[14px] lg:text-[15px] text-white font-bold leading-snug">
                Johannesburg,<br/>South Africa
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:w-3/4 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[16/10] overflow-hidden group"
            >
              <Image 
                src="/images/residential_bg_1781082724078.png" 
                alt="Sightseeing residence" 
                fill 
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </motion.div>
            
            <div className="flex justify-between items-end mt-6 lg:mt-8">
              <h3 className="text-[26px] lg:text-[34px] font-bold text-white tracking-tight leading-none">
                Sightseeing residence
              </h3>
              <a href="#" className="text-[13px] font-bold text-white hover:text-gray-300 transition-colors pb-1">
                See Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
