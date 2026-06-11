"use client";
import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const steps = [
  { num: '01', title: 'Discovery', desc: 'Understanding the client vision, site constraints, and project objectives.' },
  { num: '02', title: 'Conceptualization', desc: 'Developing initial sketches, spatial flow, and volumetric studies.' },
  { num: '03', title: 'Schematic Design', desc: 'Translating concepts into precise digital models and architectural drawings.' },
  { num: '04', title: 'Design Development', desc: 'Selecting materials, structural engineering, and finalizing blueprints.' },
  { num: '05', title: 'Execution', desc: 'On-site management to ensure absolute fidelity to the original design.' },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-[var(--surface)] relative overflow-hidden">
      <div className="max-w-content mx-auto">
        <m.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="font-bebas heading-large mb-24 text-white text-center"
        >
          Our Process
        </m.h2>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-ml-[1px] w-[2px] bg-[var(--border-subtle)]">
            <m.div 
              className="w-full bg-white origin-top"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <m.div 
                  key={step.num}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease }}
                  className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'} pl-16 md:pl-0 w-full`}>
                    <div className="bg-[var(--background)] border border-[var(--border-subtle)] p-8 md:p-12 max-w-md w-full relative group hover:border-white/40 transition-colors duration-500">
                      <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-[var(--border-subtle)] hidden md:block ${isEven ? '-left-8' : '-right-8'}`} />
                      
                      <span className="font-bebas text-4xl text-white/30 mb-4 block group-hover:text-white transition-colors duration-500">{step.num}</span>
                      <h3 className="font-sans font-bold text-2xl text-white mb-4">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-white mt-12 md:mt-0" />
                  
                  <div className="md:w-1/2" />
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
