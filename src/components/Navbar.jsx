import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-playfair font-bold tracking-widest cursor-pointer"
        >
          <Link to="home" smooth={true} duration={500}>
            <span className="text-white">ARCH</span>
            <span className="text-gold">VISION</span>
          </Link>
        </Motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <Motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-gold"
                offset={-70}
                className="text-xs font-semibold text-white/70 hover:text-gold transition-all duration-300 uppercase tracking-[0.2em] cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </Motion.div>
          ))}
          <Motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-xs font-bold tracking-widest uppercase"
          >
            Inquire
          </Motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none transition-transform duration-300 hover:scale-110">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white text-4xl"
            >
              <HiX />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-playfair font-medium text-white hover:text-gold transition-colors duration-300 uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
