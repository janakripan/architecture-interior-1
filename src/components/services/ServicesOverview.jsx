"use client";
import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const services = [
  { id: '01', title: 'Architectural Design', desc: 'From conceptual sketches to detailed structural blueprints, we design buildings that define skylines.' },
  { id: '02', title: 'Interior Design', desc: 'Crafting interior spaces that balance aesthetics, comfort, and human flow perfectly.' },
  { id: '03', title: 'Urban Planning', desc: 'Designing sustainable macro-environments and cityscapes for future generations.' },
  { id: '04', title: 'Landscape Design', desc: 'Integrating natural environments seamlessly with modern built structures.' },
  { id: '05', title: 'Project Consultation', desc: 'Expert advisory on feasibility, materials, and architectural strategy.' },
  { id: '06', title: 'Construction Management', desc: 'Overseeing the build process to ensure absolute fidelity to the design vision.' },
];

export default function ServicesOverview() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
      <div className="max-w-content mx-auto">
        <m.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="font-bebas heading-large mb-16 md:mb-24 text-white"
        >
          Expertise
        </m.h2>

        <div className="flex flex-col gap-4">
          {services.map((srv, i) => (
            <m.div 
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="border-b border-[var(--border-subtle)]"
            >
              <button 
                onClick={() => setExpandedId(expandedId === srv.id ? null : srv.id)}
                className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between text-left group"
              >
                <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto mb-4 md:mb-0">
                  <span className="font-bebas text-3xl md:text-4xl text-white/30 group-hover:text-white transition-colors duration-300">
                    {srv.id}
                  </span>
                  <h3 
                    className="font-bebas text-4xl md:text-6xl text-white tracking-wide"
                    style={{ transform: 'scaleX(1.05)', transformOrigin: 'left center' }}
                  >
                    {srv.title}
                  </h3>
                </div>
                
                {/* Plus/Minus Icon */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className="absolute w-full h-[2px] bg-white" />
                  <m.div 
                    animate={{ rotate: expandedId === srv.id ? 0 : 90 }}
                    transition={{ duration: 0.4, ease }}
                    className="absolute w-full h-[2px] bg-white" 
                  />
                </div>
              </button>

              <AnimatePresence>
                {expandedId === srv.id && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 md:pl-[120px] md:pr-[20%]">
                      <p className="text-white/70 font-sans text-lg md:text-xl leading-relaxed">
                        {srv.desc}
                      </p>
                      <m.button 
                        whileHover={{ x: 10 }}
                        className="mt-8 uppercase font-bold text-xs tracking-widest text-white border-b border-white pb-1"
                      >
                        Request Service
                      </m.button>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
