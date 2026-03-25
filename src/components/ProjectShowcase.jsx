import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Modern Villa',
    category: 'Residential',
    description: 'A serene private residence nestled in the foothills of Chennai, designed to blur the boundary between inside and the natural world outside.',
    location: 'Chennai',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070',
  },
  {
    id: 2,
    title: 'Corporate Tower',
    category: 'Commercial',
    description: "A landmark commercial high-rise in the heart of Mumbai's financial district, designed for productivity, prestige, and sustainable performance.",
    location: 'Mumbai',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070',
  },
  {
    id: 3,
    title: 'Luxury Apartment',
    category: 'Residential',
    description: 'An ultra-premium residential tower in Bangalore featuring bespoke interiors, private sky gardens, and panoramic views of the city skyline.',
    location: 'Bangalore',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
  },
  {
    id: 4,
    title: 'Boutique Hotel',
    category: 'Commercial',
    description: 'A coastal luxury retreat in Goa that marries Portuguese colonial architecture with contemporary design language and sustainable materials.',
    location: 'Goa',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070',
  },
  {
    id: 5,
    title: 'Minimalist Home',
    category: 'Interior',
    description: 'A meticulously curated interior sanctuary in Delhi that celebrates negative space, natural light, and a palette of stone, oak, and linen.',
    location: 'Delhi',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070',
  },
  {
    id: 6,
    title: 'Skyline Office',
    category: 'Commercial',
    description: 'A forward-thinking workspace campus on the periphery of Hyderabad, fusing biophilic design with cutting-edge smart building technology.',
    location: 'Hyderabad',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Interior'];

const SLIDE_DURATION = 5000;

const slideVariants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

const textVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, x: -40, transition: { duration: 0.4 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20 },
};

const numVariants = {
  hidden: { opacity: 0, scale: 1.4 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.9 },
};

export default function ProjectShowcase() {
   const [activeFilter, setActiveFilter] = useState('All');
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const progressRef = useRef(null);
  const progressStart = useRef(null);
  const touchStart = useRef(null);

  // Filter logic
  const filtered = useMemo(() => {
    return activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setCurrent(0);
    setProgress(0);
  };

  const goTo = useCallback((index, dir = 1) => {
    setDirection(dir);
    setCurrent(index);
    setProgress(0);
    progressStart.current = performance.now();
  }, []);

  const next = useCallback(() => {
    if (filtered.length === 0) return;
    goTo((current + 1) % filtered.length, 1);
  }, [current, filtered.length, goTo]);

  const prev = useCallback(() => {
    if (filtered.length === 0) return;
    goTo((current - 1 + filtered.length) % filtered.length, -1);
  }, [current, filtered.length, goTo]);

  // Progress bar animation
  useEffect(() => {
    if (filtered.length === 0) return;
    progressStart.current = performance.now();
    // Removed setProgress(0) from here to avoid cascading renders

    const tick = (now) => {
      const elapsed = now - progressStart.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        // auto-advance forward
        setCurrent(c => (c + 1) % filtered.length);
        progressStart.current = performance.now();
        setProgress(0);
      }
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [current, filtered.length]);

  // Touch swipe
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchStart.current = null;
  };

  const slide = filtered[current];
  const num = String(current + 1).padStart(2, '0');
  const total = String(filtered.length).padStart(2, '0');

  return (
    <section
      id="showcase"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100dvh' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── SLIDES ─────────────────────────────────────────── */}
      <AnimatePresence mode="sync" custom={direction}>
        <Motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="absolute inset-0"
        >
          {/* Background with Ken Burns */}
          <Motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: 'linear' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </Motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Faded project number */}
          <AnimatePresence mode="wait">
            <Motion.div
              key={`num-${slide.id}`}
              variants={numVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-6 md:right-16 bottom-24 pointer-events-none select-none"
              style={{
                fontSize: 'clamp(8rem, 25vw, 22rem)',
                lineHeight: 1,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                color: 'rgba(201,168,76,0.07)',
                letterSpacing: '-0.05em',
              }}
            >
              {num}
            </Motion.div>
          </AnimatePresence>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-28 pl-6 pr-6 md:pl-20 md:pr-[22rem] lg:pr-[26rem]">
            <AnimatePresence mode="wait">
              <Motion.div key={`content-${slide.id}`} className="space-y-4" initial="hidden" animate="visible" exit="exit">
                {/* Category tag */}
                <Motion.div variants={tagVariants} className="inline-flex">
                  <span className="border border-[#c9a84c] text-[#c9a84c] text-[10px] uppercase tracking-[0.4em] font-bold px-4 py-2">
                    {slide.category}
                  </span>
                </Motion.div>

                {/* Title */}
                <Motion.h2
                  custom={0.15}
                  variants={textVariants}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight"
                >
                  {slide.title}
                </Motion.h2>

                {/* Description */}
                <Motion.p
                  custom={0.35}
                  variants={textVariants}
                  className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-xl tracking-wide"
                >
                  {slide.description}
                </Motion.p>

                {/* Meta */}
                <Motion.div custom={0.5} variants={textVariants} className="flex items-center gap-8 text-white/40 text-xs uppercase tracking-[0.2em] font-semibold">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#c9a84c]" />
                    {slide.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#c9a84c]" />
                    {slide.year}
                  </span>
                </Motion.div>

                {/* CTA */}
                <Motion.div custom={0.65} variants={textVariants}>
                  <button className="group relative mt-2 flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-white/80 hover:text-[#c9a84c] transition-colors duration-500">
                    <span className="relative">
                      View Project
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a84c] group-hover:w-full transition-all duration-500" />
                    </span>
                    <span className="w-12 h-[1px] bg-[#c9a84c] opacity-60 group-hover:w-20 group-hover:opacity-100 transition-all duration-500" />
                  </button>
                </Motion.div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </Motion.div>
      </AnimatePresence>

      {/* ── FILTER BAR ──────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-20 pt-8 pb-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-xl font-bold tracking-[0.2em]" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-white">ARCH</span><span style={{ color: '#c9a84c' }}>VISION</span>
        </div>
        <div className="flex items-center gap-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`relative text-[10px] uppercase tracking-[0.3em] font-bold pb-1 transition-colors duration-300 ${activeFilter === cat ? 'text-[#c9a84c]' : 'text-white/40 hover:text-white'}`}
            >
              {cat}
              {activeFilter === cat && (
                <Motion.span layoutId="filter-underline" className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a84c]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDE COUNTER ───────────────────────────────────── */}
      <div className="absolute top-8 right-6 md:right-20 z-30 font-mono text-xs tracking-[0.3em] text-white/40 select-none">
        <span style={{ color: '#c9a84c' }}>{num}</span>
        <span className="mx-1">/</span>
        {total}
      </div>

      {/* ── LEFT THUMBNAIL PANEL (desktop) ──────────────────── */}
      <div className="absolute right-0 top-0 bottom-0 w-72 z-20 hidden lg:flex flex-col justify-center gap-3 pr-8 py-24 overflow-y-auto">
        {filtered.map((p, i) => (
          <Motion.button
            key={p.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            whileHover={{ x: -4 }}
            className={`flex items-center gap-4 group text-left transition-all duration-300 ${i === current ? 'opacity-100' : 'opacity-30 hover:opacity-70'}`}
          >
            <div className={`h-12 w-[2px] shrink-0 transition-all duration-500 ${i === current ? 'bg-[#c9a84c]' : 'bg-white/20'}`} />
            <div className="relative w-16 h-10 overflow-hidden shrink-0 rounded-sm">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />
              {i === current && <div className="absolute inset-0 border border-[#c9a84c]/50 rounded-sm" />}
            </div>
            <div>
              <p className="text-[10px] text-[#c9a84c] uppercase tracking-[0.2em] font-bold">{p.category}</p>
              <p className="text-white text-xs font-medium leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</p>
            </div>
          </Motion.button>
        ))}
      </div>

      {/* ── NAVIGATION ARROWS ───────────────────────────────── */}
      <div className="absolute bottom-20 left-6 md:left-20 z-30 flex items-center gap-4">
        <Motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 border border-white/20 hover:border-[#c9a84c] flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-500"
        >
          <FaChevronLeft />
        </Motion.button>
        <Motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 border border-white/20 hover:border-[#c9a84c] flex items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-500"
        >
          <FaChevronRight />
        </Motion.button>
      </div>

      {/* ── DOT INDICATORS ──────────────────────────────────── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {filtered.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`transition-all duration-500 rounded-full ${i === current ? 'w-8 h-[3px] bg-[#c9a84c]' : 'w-2 h-[3px] bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* ── PROGRESS BAR ────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-white/10">
        <Motion.div
          className="h-full"
          style={{ width: `${progress}%`, background: '#c9a84c' }}
          transition={{ duration: 0.05 }}
        />
      </div>
    </section>
  );
}
