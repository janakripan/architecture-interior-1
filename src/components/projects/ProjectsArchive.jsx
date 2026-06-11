"use client";
import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const categories = ["All", "Residential", "Commercial", "Hospitality", "Interior"];

const projectsData = [
  { id: 1, title: 'Sightseeing Residence', location: 'Johannesburg, SA', year: '2024', category: 'Residential', image: '/images/residential_bg_1781082724078.png', height: 'aspect-[4/5]' },
  { id: 2, title: 'The Vertex', location: 'New York, USA', year: '2023', category: 'Commercial', image: '/images/hero_bg_1781082696624.png', height: 'aspect-[3/4]' },
  { id: 3, title: 'Aura Hotel', location: 'Paris, France', year: '2023', category: 'Hospitality', image: '/images/statement_bg_1781082710020.png', height: 'aspect-square' },
  { id: 4, title: 'Minimalist Loft', location: 'Tokyo, Japan', year: '2024', category: 'Interior', image: '/images/proj_cotswold_cottage_1781082770500.png', height: 'aspect-[4/5]' },
  { id: 5, title: 'Eco Pavilion', location: 'Oslo, Norway', year: '2022', category: 'Commercial', image: '/images/proj_floating_homes_1781082745554.png', height: 'aspect-[16/9]' },
  { id: 6, title: 'Hillside Villa', location: 'Los Angeles, USA', year: '2023', category: 'Residential', image: '/images/proj_french_country_1781082757379.png', height: 'aspect-[3/4]' },
];

export default function ProjectsArchive() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectsData.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)] min-h-screen">
      <div className="max-w-content mx-auto">
        {/* Filtering */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-16 md:mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans font-bold text-sm md:text-base transition-colors duration-300 ${filter === cat ? 'text-white border-b border-white pb-1' : 'text-white/40 hover:text-white pb-1'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <m.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <m.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease }}
                className="break-inside-avoid relative group overflow-hidden cursor-pointer"
              >
                <div className={`w-full relative overflow-hidden bg-[var(--surface)] ${project.height}`}>
                  <m.img 
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay */}
                  <m.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col justify-between p-6 md:p-8"
                  >
                    <div className="flex justify-between items-start w-full">
                      <span className="font-bebas text-white/80 tracking-widest uppercase text-sm border border-white/20 px-3 py-1 rounded-full">{project.category}</span>
                      <span className="font-bebas text-white/80 tracking-widest text-sm">{project.year}</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white text-2xl md:text-3xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                      <p className="text-white/70 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.location}</p>
                    </div>
                  </m.div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
