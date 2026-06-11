"use client";
import React, { useState } from 'react';
import { m } from 'framer-motion';
import TestimonialContent from './TestimonialContent';
import TestimonialNavigation from './TestimonialNavigation';

const ease = [0.22, 1, 0.36, 1];

const testimonialsData = [
  {
    id: 1,
    quote: "Working with Ever Green Architex was a transformative experience. They didn't just design a house; they crafted an immersive living environment that breathes with the landscape.",
    author: "Jonathan Hayes",
    role: "CEO, Horizon Properties"
  },
  {
    id: 2,
    quote: "Their meticulous attention to detail and unwavering commitment to spatial harmony is unmatched. The final structure exceeded every expectation we had.",
    author: "Sarah Lin",
    role: "Private Client"
  },
  {
    id: 3,
    quote: "A masterclass in modern minimalist architecture. The team managed to balance stark, breathtaking geometric forms with genuine warmth and human scale.",
    author: "David Rosenberg",
    role: "Director of Modern Arts Museum"
  }
];

export default function TestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentIndex = ((page % testimonialsData.length) + testimonialsData.length) % testimonialsData.length;
  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <m.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className="bg-[var(--surface)] section-spacing section-padding text-[var(--text-primary)] relative border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-content w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* Header Side */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <m.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease }}
              className="font-bebas heading-section leading-[0.95]"
              style={{ letterSpacing: '-0.02em' }}
            >
              CLIENT<br/><span className="font-bold tracking-wide" style={{ WebkitTextStroke: '1px white' }}>VOICES.</span>
            </m.h2>

            <m.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TestimonialNavigation 
                current={currentIndex} 
                total={testimonialsData.length} 
                onNext={() => paginate(1)} 
                onPrev={() => paginate(-1)} 
              />
            </m.div>
          </div>

          {/* Content Side */}
          <div className="lg:w-2/3 border-l-0 lg:border-l border-[var(--border-subtle)] lg:pl-24">
            <TestimonialContent testimonial={currentTestimonial} direction={direction} />
          </div>
          
        </div>
      </div>
    </m.section>
  );
}
