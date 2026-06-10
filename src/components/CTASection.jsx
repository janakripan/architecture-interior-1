"use client";
import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-[var(--surface)] w-full overflow-hidden flex flex-col pt-[40px]">
      
      {/* ZONE 1: Top Row */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start px-[28px] mb-[20px] gap-[20px] md:gap-0">
        {/* Left Side */}
        <div className="w-full md:w-[45%]">
          <h2 className="font-bebas text-white font-bold" style={{ fontSize: '80px', lineHeight: 0.9 }}>
            Let's Work<br/>Together
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex gap-[4px]">
          {/* Card 1 */}
          <div className="w-[140px] h-[110px] bg-white flex flex-col items-center justify-center text-center">
            <h3 className="text-black font-bold text-[12px] leading-tight mb-[12px]">
              Looking For<br/>Architecture?
            </h3>
            <button className="bg-[#2A2A2A] text-white text-[10px] font-medium px-4 py-1.5 rounded-full hover:bg-black transition-colors">
              Let's Talk
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-[140px] h-[110px] bg-white flex flex-col items-center justify-center text-center">
            <h3 className="text-black font-bold text-[12px] leading-tight mb-[12px]">
              Looking For<br/>Interior Designer?
            </h3>
            <button className="bg-[#2A2A2A] text-white text-[10px] font-medium px-4 py-1.5 rounded-full hover:bg-black transition-colors">
              Hire Now
            </button>
          </div>
        </div>
      </div>

      {/* ZONE 2: Middle Divider */}
      <div className="w-full h-[1px] bg-white/10 mb-[12px]" />

      {/* ZONE 3: Bottom Information Row */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center min-h-[60px] px-[28px] mb-[20px] gap-[15px] sm:gap-0">
        <div className="text-[12px] text-white font-medium leading-snug">
          We Design And Deliver<br/>Urban Projects
        </div>
        <div className="flex gap-[40px] text-[12px] text-white font-medium">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
        </div>
      </div>

      {/* ZONE 4: Massive Footer Logo */}
      <div className="w-full flex justify-center translate-y-[15%]">
        <h2 
          className="font-bebas text-white uppercase text-center"
          style={{ fontSize: 'clamp(90px, 10vw, 170px)', lineHeight: 0.8, letterSpacing: '-0.03em' }}
        >
          EVER GREEN ARCHITEX
        </h2>
      </div>

    </section>
  );
}
