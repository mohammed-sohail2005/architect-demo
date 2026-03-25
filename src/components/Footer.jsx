import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-playfair font-bold tracking-[0.2em] mb-10 cursor-pointer">
              <span className="text-white">ARCH</span>
              <span className="text-gold">VISION</span>
            </div>
            <p className="text-white/40 text-sm font-inter font-light leading-relaxed mb-10 tracking-widest">
              ArchVision Studio is a globally recognized architecture firm dedicated to the creation of timeless spaces that inspire the human spirit.
            </p>
            <div className="flex gap-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/50 transition-all duration-500 rounded-sm hover:-translate-y-1">
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 md:ml-auto">
            <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-10 underline underline-offset-[12px] decoration-gold/30">Quick Navigation</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-gold transition-all duration-500 text-xs font-semibold uppercase tracking-[0.2em] relative group inline-block">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1 md:ml-auto">
            <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-10 underline underline-offset-[12px] decoration-gold/30">Studio Expertise</h4>
            <ul className="space-y-6">
              {['Architecture', 'Interior Design', 'Urban Planning', '3D Visualization', 'Management', 'Renovation'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/40 hover:text-gold transition-all duration-500 text-xs font-semibold uppercase tracking-[0.2em] relative group inline-block">
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-10 underline underline-offset-[12px] decoration-gold/30">Mailing List</h4>
            <p className="text-white/40 text-xs font-inter font-light mb-8 tracking-widest leading-relaxed">Join our inner circle for exclusive architectural insights and project previews.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter Email Portfolio" 
                className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-4 text-white placeholder-white/20 focus:outline-none focus:border-gold transition-all duration-500 font-inter font-light text-xs tracking-widest"
              />
              <button className="absolute right-0 top-0 h-full text-gold group-hover:text-white transition-colors text-[10px] font-bold tracking-[0.3em] uppercase">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-white/10 text-[9px] uppercase tracking-[0.5em] font-bold">
          <p>&copy; {new Date().getFullYear()} ARCHVISION STUDIO. DESIGNED FOR EXCELLENCE.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-gold transition-colors">Privacy Concierge</a>
            <a href="#" className="hover:text-gold transition-colors">Client Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
