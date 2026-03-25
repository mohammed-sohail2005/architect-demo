import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/websiteData';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-32 bg-charcoal border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <FaQuoteLeft className="text-[40rem] -translate-x-40 -translate-y-40 -rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Client Voices</span>
            <div className="h-[1px] w-8 bg-gold"></div>
          </Motion.div>
          
          <Motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair font-bold"
          >
            Kind <span className="text-gold-gradient italic font-normal">Endorsements</span>
          </Motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-charcoal/40 backdrop-blur-xl border border-white/5 p-12 md:p-24 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <Motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <FaQuoteLeft className="text-6xl text-gold/10 mb-12" />
                <p className="text-2xl md:text-4xl font-playfair font-light italic leading-relaxed mb-16 text-white/80 tracking-wide">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex flex-col items-center gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gold rounded-full scale-110 opacity-20 blur-md group-hover:scale-125 transition-transform duration-700"></div>
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name} 
                      className="w-24 h-24 rounded-full object-cover border-2 border-gold/30 z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-playfair font-bold text-white mb-2">{testimonials[current].name}</h4>
                    <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4">{testimonials[current].role}</p>
                    <div className="flex justify-center text-gold/80 text-xs gap-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-4 mt-16">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${current === i ? 'bg-gold w-8' : 'bg-white/10 hover:bg-white/30'}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-20 z-20">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/5 bg-charcoal/20 backdrop-blur-md flex items-center justify-center text-white/20 hover:text-gold hover:border-gold/50 transition-all duration-500 shadow-xl"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-20 z-20">
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/5 bg-charcoal/20 backdrop-blur-md flex items-center justify-center text-white/20 hover:text-gold hover:border-gold/50 transition-all duration-500 shadow-xl"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
