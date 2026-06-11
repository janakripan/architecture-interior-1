"use client";
import React from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function PageHeader({ title, subtitle, imageSrc, imageHeight = "60vh" }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative w-full pt-[160px] pb-[80px] px-6 md:px-12 lg:px-20 overflow-hidden min-h-[50vh] flex flex-col justify-center">
      <div className="relative z-10 max-w-content mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-8">
        <m.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex-1"
        >
          <m.h1 
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0, transition: { duration: 1, ease } }
            }}
            className="font-bebas heading-hero text-white"
          >
            {title}
          </m.h1>
        </m.div>

        {subtitle && (
          <m.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="md:w-1/3 text-white/70 font-sans text-sm lg:text-base leading-relaxed"
          >
            {subtitle}
          </m.div>
        )}
      </div>

      {imageSrc && (
        <m.div 
          style={{ height: imageHeight }}
          className="relative w-full mt-16 overflow-hidden max-w-content mx-auto"
        >
          <m.div 
            initial={{ scale: 1.1, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ scale: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.4, ease, delay: 0.2 }}
            className="w-full h-full relative"
          >
            <m.img 
              style={{ y, opacity }}
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </m.div>
        </m.div>
      )}
    </section>
  );
}
