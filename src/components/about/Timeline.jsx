"use client";
import React, { useRef } from 'react';
import { m, useScroll, useSpring } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const milestones = [
  { year: '2010', title: 'Foundation', desc: 'Ever Green Architex was established in London.' },
  { year: '2015', title: 'Global Expansion', desc: 'Opened our second major studio in New York.' },
  { year: '2019', title: 'Award Winning', desc: 'Recognized for sustainable urban design.' },
  { year: '2024', title: 'Future Vision', desc: 'Pioneering AI integrated architectural design.' },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-[var(--surface)] relative overflow-hidden">
      <div className="max-w-content mx-auto">
        <m.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="font-bebas text-5xl md:text-7xl mb-24 text-white text-center"
          style={{ transform: 'scaleX(1.1)', transformOrigin: 'center center' }}
        >
          Our Journey
        </m.h2>

        <div className="relative flex flex-col md:flex-row justify-between md:items-start gap-12 md:gap-4">
          {/* Progress Line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-0 md:right-0 md:top-6 md:bottom-auto w-[2px] md:w-full md:h-[2px] bg-[var(--border-subtle)]">
            <m.div 
              className="w-full h-full bg-white md:origin-left origin-top"
              style={{ scaleX: scaleX }}
            />
          </div>

          {milestones.map((item, i) => (
            <m.div 
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="relative pl-12 md:pl-0 md:pt-12 md:w-1/4 flex flex-col items-start md:items-center text-left md:text-center group"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-0 md:-top-[5px] w-3 h-3 rounded-full bg-[var(--border-subtle)] group-hover:bg-white transition-colors duration-300 z-10" />
              
              <h3 className="font-bebas text-4xl text-white mb-2">{item.year}</h3>
              <h4 className="font-sans font-bold text-white mb-3 text-lg">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
