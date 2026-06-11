"use client";
import React from 'react';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function StudioStory() {
  const storyText = "We believe that architecture is more than just building structures. It is the art of crafting spaces that elevate the human experience, harmonizing form, function, and the environment into a singular, cohesive vision.";
  const words = storyText.split(" ");

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-[var(--surface)]">
      <div className="max-w-content mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="md:w-1/3">
          <m.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease }}
            className="font-bebas text-4xl tracking-wide uppercase text-white/50"
            style={{ transform: 'scaleX(1.1)', transformOrigin: 'left center' }}
          >
            Our Story
          </m.h2>
        </div>
        
        <div className="md:w-2/3">
          <m.h3 
            className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium leading-[1.3] text-white flex flex-wrap gap-x-2 lg:gap-x-3 gap-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.04 } }
            }}
          >
            {words.map((word, i) => (
              <m.span 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
                }}
                className="inline-block"
              >
                {word}
              </m.span>
            ))}
          </m.h3>
        </div>
      </div>
    </section>
  );
}
