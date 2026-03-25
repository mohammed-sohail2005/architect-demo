import { motion as Motion } from 'framer-motion';
import { FaUserShield, FaLeaf, FaClock, FaHeart } from 'react-icons/fa';

const whyChooseUs = [
  {
    title: "Experienced Team",
    description: "Our architects and designers bring decades of combined experience across diverse projects worldwide.",
    icon: FaUserShield,
  },
  {
    title: "Sustainable Design",
    description: "We prioritize eco-friendly materials and energy-efficient designs that minimize environmental impact.",
    icon: FaLeaf,
  },
  {
    title: "On-Time Delivery",
    description: "We take deadlines seriously, utilizing advanced project management to ensure every milestone is met.",
    icon: FaClock,
  },
  {
    title: "Client-Centered",
    description: "Your vision is our priority. We maintain transparent communication throughout the entire creative process.",
    icon: FaHeart,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-charcoal/30 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Why Architect With Us</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-10 leading-[1.1]">
              Crafting <span className="text-gold-gradient italic font-normal">Timeless Legacies.</span>
            </h2>
            
            <p className="text-white/50 text-lg font-inter font-light leading-relaxed mb-16 tracking-wide max-w-xl">
              We don't just design buildings; we architect legacies. Our commitment to excellence, innovation, and sustainability ensures that every project we undertake stands the test of time and becomes a beacon of achievement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {whyChooseUs.map((item, index) => (
                <Motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 bg-gold/5 flex items-center justify-center text-gold text-2xl mb-6 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500 rounded-sm">
                    <item.icon />
                  </div>
                  <h4 className="text-xl font-playfair font-bold mb-3 group-hover:text-gold transition-colors duration-300">{item.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed font-light tracking-wide">{item.description}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 p-4 bg-charcoal/50 backdrop-blur-xl border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541976590911-c19e38f659f9?q=80&w=2070" 
                alt="Architectural details" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.02] hover:scale-100"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 border-t border-r border-gold/20 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border-b border-l border-gold/20 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-gold/5 -z-10 scale-110 rotate-3"></div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
