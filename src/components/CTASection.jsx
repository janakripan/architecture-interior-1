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
      <div className="w-full max-w-[1400px] mx-auto h-full">
        
        {/* Top Row */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '14px'
          }}
        >
          {/* Left Column */}
          <div style={{ width: '380px' }}>
            <m.h2 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.04 }}
              className="font-sans text-white m-0"
              style={{
                fontSize: '60px',
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                maxWidth: '360px',
                transform: 'scaleX(1.1)',
                transformOrigin: 'left center'
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
          <div 
            style={{
              display: 'flex',
              gap: '2px',
              alignItems: 'flex-start'
            }}
          >
            {/* Card 1 */}
            <div 
              style={{
                width: '102px',
                height: '102px',
                padding: '0px',
                background: 'white',
                borderRadius: '0px',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <h3 className="text-black m-0 mb-2" style={{ fontSize: '11px', fontWeight: 600, lineHeight: 1.2 }}>
                Looking For<br/>Architecture?
              </h3>
              <m.button 
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2A2A2A] text-white"
                style={{
                  height: '20px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  fontSize: '8px',
                  border: 'none',
                  borderRadius: '999px',
                  cursor: 'pointer'
                }}
              >
                Let's Talk
              </m.button>
            </div>

            {/* Card 2 */}
            <div 
              style={{
                width: '102px',
                height: '102px',
                padding: '0px',
                background: 'white',
                borderRadius: '0px',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <h3 className="text-black m-0 mb-2" style={{ fontSize: '11px', fontWeight: 600, lineHeight: 1.2 }}>
                Looking For<br/>Interior Designer?
              </h3>
              <m.button 
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2A2A2A] text-white"
                style={{
                  height: '20px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  fontSize: '8px',
                  border: 'none',
                  borderRadius: '999px',
                  cursor: 'pointer'
                }}
              >
                Hire Now
              </m.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="bg-white"
          style={{
            marginTop: '0px',
            marginBottom: '8px',
            height: '1px',
            opacity: 0.1,
            width: '100%'
          }}
        />

        {/* Information Row */}
        <div 
          style={{
            height: '32px',
            marginBottom: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Text */}
          <div 
            className="text-white"
            style={{
              fontSize: '11px',
              lineHeight: 1.1
            }}
          >
            We Design And Deliver<br/>Urban Projects
          </div>
          
          {/* Right Links */}
          <div 
            className="text-white flex"
            style={{
              fontSize: '10px',
              gap: '24px'
            }}
          >
            <m.a href="#" whileHover={{ y: -2, color: '#e5e7eb', transition: { duration: 0.25, ease } }} className="inline-block">Facebook</m.a>
            <m.a href="#" whileHover={{ y: -2, color: '#e5e7eb', transition: { duration: 0.25, ease } }} className="inline-block">Instagram</m.a>
            <m.a href="#" whileHover={{ y: -2, color: '#e5e7eb', transition: { duration: 0.25, ease } }} className="inline-block">Twitter</m.a>
          </div>
        </div>

        {/* Footer Logo */}
        <div style={{ marginTop: '120px' }} ref={logoRef}>
          <m.h2 
            initial={{ opacity: 0, y: 150 }}
            animate={logoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
            transition={{ duration: 0.9, ease }}
            className="font-bebas text-white m-0"
            style={{
              position: 'relative',
              top: '-10px',
              whiteSpace: 'nowrap',
              fontSize: '108px',
              lineHeight: 0.8,
              letterSpacing: '-0.04em',
              fontWeight: 800,
              width: '100%',
              textAlign: 'center',
              transform: 'scaleY(1.6)',
              transformOrigin: 'top center'
            }}
          >
            EVER GREEN ARCHITEX
          </m.h2>
        </div>

      </div>
    </section>
  );
}
