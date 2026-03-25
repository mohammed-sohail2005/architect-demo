import { motion as Motion } from 'framer-motion';
import { services } from '../data/websiteData';

const Services = () => {
  return (
    <section id="services" className="py-32 bg-charcoal/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Solutions</span>
            <div className="h-[1px] w-8 bg-gold"></div>
          </Motion.div>
          
          <Motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6"
          >
            Our <span className="text-gold-gradient italic font-normal">Expertise</span>
          </Motion.h2>
          
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/40 max-w-xl mx-auto font-light tracking-widest text-sm uppercase"
          >
            Merging creativity with engineering precision
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-12 group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-all duration-700"></div>
              
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 rounded-sm">
                <service.icon className="text-3xl text-gold" />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold mb-6 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed font-inter font-light mb-8 tracking-wide text-sm h-20">
                {service.description}
              </p>
              
              <div className="flex items-center gap-3 group-hover:gap-5 transition-all duration-500">
                <div className="h-[1px] w-12 bg-gold/30 group-hover:bg-gold group-hover:w-20 transition-all duration-500"></div>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40 group-hover:text-gold">Details</span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
