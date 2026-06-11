"use client";
import React from 'react';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const values = [
  { id: 1, title: 'Innovation', desc: 'Pushing boundaries in architectural design.' },
  { id: 2, title: 'Sustainability', desc: 'Building for tomorrow, respecting nature today.' },
  { id: 3, title: 'Precision', desc: 'Exactitude in every line, curve, and structure.' },
];

export default function CoreValues() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
      <div className="max-w-content mx-auto">
        <m.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="font-bebas text-5xl md:text-7xl mb-16 text-white"
          style={{ transform: 'scaleX(1.1)', transformOrigin: 'left center' }}
        >
          Core Values
        </m.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <m.div
              key={val.id}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease, delay: i * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.4, ease } }}
              className="bg-[var(--surface)] border border-[var(--border-subtle)] p-10 md:p-14 flex flex-col justify-between aspect-square group"
            >
              <div className="text-white/30 font-bebas text-4xl mb-8 group-hover:text-white transition-colors duration-500">
                0{val.id}
              </div>
              <div>
                <h3 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wide">
                  {val.title}
                </h3>
                <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
