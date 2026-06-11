"use client";
import React from 'react';
import { m, useMotionValue, useTransform, animate, useInView, useScroll } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const stats = [
  {
    id: 1,
    title1: "Years in",
    title2: "Business",
    desc: "Transforming Spaces,\nInspiring Lives: 23 Years Of\nArchitectural Excellence.",
    value: 23,
    suffix: ""
  },
  {
    id: 2,
    title1: "Award",
    title2: "Gain",
    desc: "Recognized For Excellence:\n36 Prestigious Awards And\nCounting.",
    value: 36,
    suffix: ""
  },
  {
    id: 3,
    title1: "Years in",
    title2: "Business",
    desc: "Half A Century Of\nArchitectural Innovation\nAnd Expertise.",
    value: 50,
    suffix: ""
  },
  {
    id: 4,
    title1: "Total Team",
    title2: "Members",
    desc: "A Dedicated Team Of 37\nProfessionals Driving\nDesign Excellence.",
    value: 37,
    suffix: ""
  }
];

const ease = [0.22, 1, 0.36, 1];

export default function ProfessionalService() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"]
  });

  return (
    <m.section 
      ref={containerRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className="bg-[var(--surface)] section-spacing section-padding text-[var(--text-primary)]"
    >
      <div className="max-w-content w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 mb-10 lg:mb-16">
          <m.h2 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="font-bebas heading-section leading-[0.95]"
            style={{ letterSpacing: '-0.02em' }}
          >
            PROFESSIONAL<br/><span className="font-bold tracking-wide" style={{ WebkitTextStroke: '1px white' }}>SERVICE.</span>
          </m.h2>
          <m.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="lg:w-1/2 flex items-start lg:justify-end text-[var(--text-primary)] text-body font-medium"
          >
            <p className="max-w-[280px] leading-relaxed">
              Orix Property Is Leading The<br/>
              Way In Creating Unique Real<br/>
              Estate For Utah Residents.
            </p>
          </m.div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-[900px] aspect-square mx-auto mb-10">
          {/* Centered cross dividers that fade out at the edges for desktop */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 hidden md:block z-10 overflow-hidden">
            <m.div style={{ scaleY: scrollYProgress, transformOrigin: 'top' }} className="w-full h-full bg-gradient-to-b from-transparent via-white/80 to-transparent" />
          </div>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2 hidden md:block z-10 overflow-hidden">
            <m.div style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          </div>

          {stats.map((stat, idx) => (
            <m.div 
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease, delay: idx * 0.08 }}
              className="relative p-6 lg:p-10 flex flex-col justify-between aspect-square w-full mx-auto"
            >
              {/* Mobile dividers */}
              {idx < 3 && (
                 <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent md:hidden" />
              )}
              
              <div className="flex items-start z-20">
                <h4 className="text-[13px] lg:text-[15px] font-medium leading-[1.3] text-white flex items-center group">
                  {stat.title1} 
                  <m.div whileHover={{ rotate: 3, scale: 1.08 }} transition={{ duration: 0.25, ease }}>
                    <FiArrowUpRight className="inline text-[1em] -mt-0.5 ml-0.5 opacity-90 transition-transform" />
                  </m.div>
                  <br/>
                  {stat.title2}
                </h4>
              </div>
              <div className="flex items-end justify-between mt-8 lg:mt-0 w-full z-20">
                <p className="text-[10px] lg:text-[11px] text-white/70 normal-case tracking-normal max-w-[140px] lg:max-w-[180px] leading-[1.6] whitespace-pre-line pb-1">
                  {stat.desc}
                </p>
                <div className="font-sans font-bold text-white leading-[0.8] tracking-tight translate-y-1 lg:translate-y-2 drop-shadow-sm" style={{ fontSize: 'clamp(60px, 8vw, 120px)', WebkitTextStroke: '2px white' }}>
                  <Counter from={0} to={stat.value} duration={2} />{stat.suffix}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </m.section>
  );
}

function Counter({ from, to, duration }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [count, to, duration, inView]);

  return <m.span ref={ref}>{rounded}</m.span>;
}
