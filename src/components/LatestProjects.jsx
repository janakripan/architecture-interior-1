"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  { id: 1, type: 'text', title: 'Floating Homes', colSpan: 1, rowSpan: 1 },
  { id: 2, type: 'image', title: 'French Country', src: '/images/proj_french_country_1781082757379.png', colSpan: 1, rowSpan: 1 },
  { id: 3, type: 'image', title: 'Cotswold Cottage', src: '/images/proj_cotswold_cottage_1781082770500.png', colSpan: 1, rowSpan: 2 },
  { id: 4, type: 'image', title: 'Floating Homes', src: '/images/proj_floating_homes_1781082745554.png', colSpan: 1, rowSpan: 1 },
  { id: 5, type: 'text', title: 'Greek Revival', colSpan: 1, rowSpan: 1 },
  { id: 6, type: 'text', title: 'Post Modern', colSpan: 1, rowSpan: 1 },
  { id: 7, type: 'image', title: 'Post Modern Image', src: '/images/proj_post_modern_1781082805725.png', colSpan: 1, rowSpan: 1 },
  { id: 8, type: 'text', title: 'Shingle Style', colSpan: 1, rowSpan: 1 },
];

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
    <section className="bg-[var(--surface)] section-spacing section-padding">
      <div className="max-w-content">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-bebas heading-section mb-10 lg:mb-16 text-[var(--text-primary)]"
        >
          OUR LATEST<br/><span className="font-bold tracking-wide" style={{ WebkitTextStroke: '1px white' }}>PROJECT.</span>
        </motion.h2>

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
              <motion.div 
                key={proj.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (colDesktop + rowDesktop) * 0.1 }}
                className={`relative aspect-square w-full ${borderClasses} group`}
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
                  <div className="w-full h-full relative overflow-hidden">
                    <Image 
                      src={proj.src} 
                      alt={proj.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12 lg:mt-20">
          <button className="w-[160px] h-[52px] rounded-full bg-white text-black font-medium text-[13px] transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
