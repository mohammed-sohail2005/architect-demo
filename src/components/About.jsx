import { motion as Motion } from 'framer-motion';
import { stats } from '../data/websiteData';

const About = () => {
  return (
    <section id="about" className="py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
        {/* Left: Image */}
        <Motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -top-6 -left-6 w-full h-full border border-gold/20 z-0"></div>
          <div className="relative z-10 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070" 
              alt="Architect team" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
            />
          </div>
          <Motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-10 -right-10 bg-gold p-10 hidden md:block z-20 shadow-xl"
          >
            <p className="text-charcoal font-playfair font-bold text-5xl leading-none mb-1">10+</p>
            <p className="text-charcoal text-[10px] uppercase tracking-[0.3em] font-bold">Years of excellence</p>
          </Motion.div>
        </Motion.div>

        {/* Right: Story */}
        <Motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Our Philosophy</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-10 leading-[1.1]">
            We Design <span className="text-gold-gradient italic font-normal">Beyond Buildings.</span>
          </h2>
          
          <p className="text-white/60 text-lg font-inter font-light leading-relaxed mb-8 tracking-wide">
            Founded with a passion for architectural excellence, ArchVision Studio has been at the forefront of innovative design for over a decade. We believe that architecture is more than just building structures; it's about creating environments that inspire human connection and sustainable living.
          </p>
          
          <p className="text-white/60 text-lg font-inter font-light leading-relaxed mb-12 tracking-wide">
            Our multi-disciplinary team combines technical expertise with creative vision to deliver projects that are both aesthetically stunning and functionally superior, harmonizing with their natural and urban contexts.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            {stats.map((stat, index) => (
              <Motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="text-center md:text-left"
              >
                <h3 className="text-4xl font-bold text-gold mb-2 font-playfair">{stat.value}</h3>
                <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold whitespace-nowrap">{stat.label}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
