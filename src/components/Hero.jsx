import { motion as Motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] scale-110 animate-ken-burns"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-12 bg-gold mt-1"></div>
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">
            Established MCMXCIII
          </span>
          <div className="h-[1px] w-12 bg-gold mt-1"></div>
        </Motion.div>
        
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-playfair font-bold mb-8 leading-[1.1] tracking-tight"
        >
          Designing Spaces <br />
          <span className="text-gold-gradient italic font-normal serif">That Inspire</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto font-inter font-light leading-relaxed tracking-wide"
        >
          We create timeless architectural masterpieces that harmonize with their surroundings and elevate the human experience through innovative design and sustainable engineering.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-10 py-5 overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gold transition-transform duration-500 group-hover:scale-x-110"></div>
            <span className="relative z-10 text-charcoal font-bold tracking-[0.2em] uppercase text-xs">
              View Our Work
            </span>
          </a>
          <a
            href="#contact"
            className="group px-10 py-5 border border-white/20 hover:border-gold/50 transition-all duration-500 w-full sm:w-auto"
          >
            <span className="text-white group-hover:text-gold transition-colors duration-500 font-bold tracking-[0.2em] uppercase text-xs">
              Start a Project
            </span>
          </a>
        </Motion.div>
      </div>

      {/* Scroll Indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent"></div>
      </Motion.div>
    </section>
  );
};

export default Hero;
