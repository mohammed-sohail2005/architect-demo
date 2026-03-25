import { motion as Motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-charcoal/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Contact Info */}
          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Contact</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-10 leading-[1.1]">
              Let's Discuss <span className="text-gold-gradient italic font-normal">Your Vision</span>
            </h2>
            
            <p className="text-white/50 text-base font-inter font-light leading-relaxed mb-16 tracking-wide max-w-xl">
              We're ready to bring your architectural dreams to life. Contact us today for a private consultation and let's start designing your legacy.
            </p>

            <div className="space-y-10">
              {[
                { icon: FaMapMarkerAlt, title: "Our Studio", detail: "123 Architectural Way, Design District, NY 10001" },
                { icon: FaPhone, title: "Private Line", detail: "+1 (555) 123-4567" },
                { icon: FaEnvelope, title: "Direct Email", detail: "hello@archvision.studio" },
                { icon: FaClock, title: "Gallery Hours", detail: "Mon - Fri: 9:00 AM - 6:00 PM" },
              ].map((item, index) => (
                <Motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-8 group"
                >
                  <div className="w-14 h-14 bg-gold/5 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-charcoal transition-all duration-700 rounded-sm shrink-0 shadow-lg shadow-gold/5">
                    <item.icon />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-gold uppercase tracking-[0.3em] text-[9px] font-bold mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">{item.title}</h4>
                    <p className="text-white/80 font-inter font-light tracking-wide group-hover:text-white transition-colors duration-500">{item.detail}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* Right: Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-card p-12 md:p-16 relative z-10 shadow-2xl">
              <div className="absolute -top-[1px] -right-[1px] w-20 h-20 border-t border-r border-gold/40"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-20 h-20 border-b border-l border-gold/40"></div>
              
              <h3 className="text-3xl font-playfair font-bold text-white mb-12">Inquiry Form</h3>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 font-inter font-light text-sm peer placeholder-transparent"
                      placeholder="FullName"
                      id="name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 font-inter font-light text-sm peer placeholder-transparent"
                      placeholder="Email"
                      id="email"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold">Email Address</label>
                  </div>
                </div>

                <div className="relative group">
                  <select className="w-full bg-transparent border-b border-white/10 py-4 text-white/40 focus:outline-none focus:border-gold transition-all duration-500 font-inter font-light text-sm appearance-none">
                    <option className="bg-charcoal">Select Service Portfolio</option>
                    <option className="bg-charcoal">Architectural Design</option>
                    <option className="bg-charcoal">Interior Masterpieces</option>
                    <option className="bg-charcoal">Urban Planning</option>
                    <option className="bg-charcoal">Luxury Restoration</option>
                  </select>
                  <label className="absolute left-0 -top-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Project Interest</label>
                </div>

                <div className="relative group">
                  <textarea 
                    rows="4" 
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 font-inter font-light text-sm peer placeholder-transparent resize-none"
                    placeholder="Message"
                    id="message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold transition-all duration-500 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold">Your Vision Brief</label>
                </div>

                <button className="group relative w-full overflow-hidden py-6 mt-6 transition-all duration-500">
                  <div className="absolute inset-0 bg-gold translate-y-0 group-hover:-translate-y-2 transition-transform duration-500"></div>
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-gold-dark"></div>
                  <span className="relative z-10 text-charcoal font-bold uppercase tracking-[0.4em] text-xs">Explore Collaboration</span>
                </button>
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
