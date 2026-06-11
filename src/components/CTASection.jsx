"use client";
import React from 'react';
import { m, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function CTASection() {
  const logoRef = React.useRef(null);
  const logoInView = useInView(logoRef, { once: true, amount: 0.1 });

  return (
    <section 
      className="bg-[var(--surface)] w-full block"
      style={{
        height: '420px',
        overflow: 'clip',
        paddingLeft: '28px',
        paddingRight: '28px',
        paddingTop: '18px',
        paddingBottom: '0px',
        position: 'relative'
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto h-full flex flex-col">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-[14px] gap-8 md:gap-0">
          
          {/* Left Column */}
          <div className="w-full md:w-[380px]">
            <m.h2 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.04 }}
              className="font-sans text-white m-0 tracking-[-0.03em] font-bold leading-[0.9] origin-left max-w-[360px]"
              style={{
                fontSize: 'clamp(40px, 6vw, 60px)',
                transform: 'scaleX(1.1)',
              }}
            >
              <m.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
              >
                Let's Work
              </m.div>
              <m.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
              >
                Together
              </m.div>
            </m.h2>
          </div>

          {/* Right Column */}
          <div className="flex gap-[2px] items-start w-full md:w-auto">
            {/* Card 1 */}
            <div className="w-[102px] h-[102px] p-0 bg-white flex flex-col justify-center items-center text-center">
              <h3 className="text-black m-0 mb-2 font-semibold text-[11px] leading-[1.2]">
                Looking For<br/>Architecture?
              </h3>
              <m.button 
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2A2A2A] text-white h-[20px] px-[12px] text-[8px] rounded-full cursor-pointer"
              >
                Let's Talk
              </m.button>
            </div>

            {/* Card 2 */}
            <div className="w-[102px] h-[102px] p-0 bg-white flex flex-col justify-center items-center text-center">
              <h3 className="text-black m-0 mb-2 font-semibold text-[11px] leading-[1.2]">
                Looking For<br/>Interior Designer?
              </h3>
              <m.button 
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2A2A2A] text-white h-[20px] px-[12px] text-[8px] rounded-full cursor-pointer"
              >
                Hire Now
              </m.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-white h-[1px] w-full opacity-10 mb-4 md:mb-2" />

        {/* Information Row */}
        <div className="h-auto md:h-[32px] mb-8 md:mb-[12px] flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
          {/* Left Text */}
          <div className="text-white text-[11px] leading-[1.1]">
            We Design And Deliver<br className="hidden md:block" />Urban Projects
          </div>
          
          {/* Right Links */}
          <div className="text-white flex text-[10px] gap-6 flex-wrap">
            <m.a href="#" whileHover={{ y: -2, color: '#e5e7eb', transition: { duration: 0.25, ease } }} className="inline-block">Facebook</m.a>
            <m.a href="#" whileHover={{ y: -2, color: '#e5e7eb', transition: { duration: 0.25, ease } }} className="inline-block">Instagram</m.a>
            <m.a href="#" whileHover={{ y: -2, color: '#e5e7eb', transition: { duration: 0.25, ease } }} className="inline-block">Twitter</m.a>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="mt-auto mb-0 md:mt-[120px]" ref={logoRef}>
          <m.h2 
            initial={{ opacity: 0, y: 150 }}
            animate={logoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
            transition={{ duration: 0.9, ease }}
            className="font-bebas text-white m-0 relative -top-[10px] whitespace-nowrap text-center font-extrabold w-full origin-top"
            style={{
              fontSize: 'clamp(40px, 15vw, 108px)',
              lineHeight: 0.8,
              letterSpacing: '-0.04em',
              transform: 'scaleY(1.6)'
            }}
          >
            EVER GREEN ARCHITEX
          </m.h2>
        </div>

      </div>
    </section>
  );
}
