import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/websiteData';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Interior'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-32 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Portfolio</span>
            </Motion.div>
            
            <Motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-playfair font-bold"
            >
              Selected <span className="text-gold-gradient italic font-normal">Masterpieces</span>
            </Motion.h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative group pb-1 ${filter === cat ? 'text-gold' : 'text-white/30 hover:text-white'}`}
              >
                {cat}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-gold transition-all duration-500 ${filter === cat ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <Motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <Motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="group relative h-[500px] overflow-hidden bg-charcoal border border-white/5"
              >
                <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-1000">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 italic">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-8 group-hover:text-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                    <button className="flex items-center gap-4 text-white hover:text-gold transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 delay-200">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore Details</span>
                      <div className="w-8 h-[1px] bg-gold"></div>
                    </button>
                  </div>
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
