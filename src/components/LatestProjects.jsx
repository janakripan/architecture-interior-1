"use client";
import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const ease = [0.22, 1, 0.36, 1];

const cardVariants = {
  rest: { y: 0, transition: { duration: 0.35, ease } },
  hover: { y: -6, transition: { duration: 0.35, ease } }
};

const imageVariants = {
  rest: { scale: 1, transition: { duration: 0.35, ease } },
  hover: { scale: 1.05, transition: { duration: 0.35, ease } }
};

export default function LatestProjects() {
  const projects = [
    { id: 1, type: 'text', title: 'Floating\nHomes' },
    { id: 2, type: 'image', title: 'Modern Cabin', src: '/images/proj_shingle_style_1781082822858.png' },
    { id: 3, type: 'text', title: 'French\nCountry' },
    { id: 4, type: 'image', title: 'Cotswold Cottage', src: '/images/proj_cotswold_cottage_1781082770500.png' },
    { id: 5, type: 'image', title: 'Floating Homes', src: '/images/proj_floating_homes_1781082745554.png' },
    { id: 6, type: 'text', title: 'Cotswold\nCottage' },
    { id: 7, type: 'image', title: 'French Country', src: '/images/proj_french_country_1781082757379.png' },
    { id: 8, type: 'text', title: 'Shingle\nStyle' },
    { id: 9, type: 'text', title: 'Greek\nRevival' },
    { id: 10, type: 'image', title: 'Greek Revival', src: '/images/proj_greek_revival_1781082791293.png' },
    { id: 11, type: 'text', title: 'Post\nmodern' },
    { id: 12, type: 'image', title: 'Post modern', src: '/images/proj_post_modern_1781082805725.png' },
  ];

  return (
    <m.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease }}
      className="bg-[var(--surface)] section-spacing section-padding"
    >
      <div className="max-w-content">
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.04 }}
          className="font-bebas heading-section mb-10 lg:mb-16 text-[var(--text-primary)]"
          style={{ letterSpacing: '-0.02em' }}
        >
          <m.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            OUR LATEST
          </m.div>
          <m.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <span className="font-bold tracking-wide" style={{ WebkitTextStroke: '1px white' }}>PROJECT.</span>
          </m.div>
        </m.div>

        <div className="grid grid-cols-2 md:grid-cols-4 w-full border-t border-[var(--border-subtle)]">
          {projects.map((proj, idx) => {
            const isText = proj.type === 'text';
            const colDesktop = idx % 4;
            const rowDesktop = Math.floor(idx / 4);
            const colMobile = idx % 2;
            const rowMobile = Math.floor(idx / 2);

            const borderR = colMobile === 0 ? 'border-r' : '';
            const borderB = rowMobile < 5 ? 'border-b' : '';

            const mdBorderR = colDesktop < 3 ? 'md:border-r' : 'md:border-r-0';
            const mdBorderB = rowDesktop < 2 ? 'md:border-b' : 'md:border-b-0';

            const borderClasses = `${borderR} ${borderB} ${mdBorderR} ${mdBorderB} border-[var(--border-subtle)]`;

            return (
              <m.div 
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease, delay: idx * 0.08 }}
                className={`relative aspect-square w-full ${borderClasses}`}
              >
                <m.div
                  initial="rest"
                  whileHover="hover"
                  variants={cardVariants}
                  className="w-full h-full relative"
                >
                  {isText ? (
                    <div className="p-4 lg:p-6 flex flex-col justify-between h-full w-full bg-transparent">
                      <h3 className="text-[13px] lg:text-[15px] font-semibold text-white whitespace-pre-line leading-[1.3] tracking-wide">
                        {proj.title}
                      </h3>
                      <div className="self-end text-white">
                        <FiArrowUpRight className="text-[1.2rem] opacity-90" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full relative overflow-hidden bg-[var(--surface)]">
                      <m.div variants={imageVariants} className="w-full h-full">
                        <Image 
                          src={proj.src} 
                          alt={proj.title} 
                          fill 
                          className="object-cover"
                        />
                      </m.div>
                    </div>
                  )}
                </m.div>
              </m.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12 lg:mt-20">
          <m.button 
            whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.25, ease } }}
            whileTap={{ scale: 0.98 }}
            className="w-[160px] h-[52px] rounded-full bg-white text-black font-medium text-[13px] flex items-center justify-center transition-colors hover:bg-gray-100"
          >
            Contact us
          </m.button>
        </div>
      </div>
    </m.section>
  );
}
