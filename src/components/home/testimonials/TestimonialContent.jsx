"use client";
import React from 'react';
import { m, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function TestimonialContent({ testimonial, direction }) {
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
    })
  };

  return (
    <div className="relative w-full min-h-[300px] flex items-center">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <m.div
          key={testimonial.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="w-full flex flex-col gap-8"
        >
          <p className="font-sans text-2xl md:text-3xl lg:text-4xl leading-tight text-white font-light italic">
            "{testimonial.quote}"
          </p>
          <div>
            <h4 className="font-sans font-bold text-white text-lg tracking-wide uppercase">{testimonial.author}</h4>
            <p className="font-bebas text-white/50 text-xl tracking-widest">{testimonial.role}</p>
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  );
}
