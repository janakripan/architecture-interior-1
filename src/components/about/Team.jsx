"use client";
import React from 'react';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const team = [
  { name: 'Marcus Sterling', role: 'Principal Architect' },
  { name: 'Elena Rostova', role: 'Lead Interior Designer' },
  { name: 'James Coburn', role: 'Head of Urban Planning' },
  { name: 'Sarah Jenkins', role: 'Sustainability Director' }
];

export default function Team() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
      <div className="max-w-content mx-auto">
        <m.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-24 flex justify-between items-end"
        >
          <h2 
            className="font-bebas heading-large text-white"
          >
            Leadership
          </h2>
          <span className="text-white/50 text-sm tracking-[0.08em] uppercase hidden md:block">
            The Visionaries
          </span>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {team.map((member, i) => (
            <m.div 
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[3/4] bg-[var(--surface)] mb-6 overflow-hidden relative border border-[var(--border-subtle)]">
                <m.div 
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease }}
                  className="w-full h-full bg-white/5"
                />
                
                {/* Reveal overlay on hover */}
                <m.div 
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.5, ease }}
                  className="absolute inset-0 bg-white/10 flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="font-bebas text-white tracking-widest text-lg">View Profile</span>
                </m.div>
              </div>
              <h3 className="font-sans font-bold text-white text-xl mb-1">{member.name}</h3>
              <p className="text-white/50 text-sm">{member.role}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
