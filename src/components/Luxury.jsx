import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Luxury() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const luxuryBrands = [
    "Coach", "Michael Kors", "Pandora", "Tory Burch", "kate spade"
  ];

  return (
    <section id="luxury" className="min-h-screen w-full bg-[#080810] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            LUXURY & FLAGSHIP
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-900 italic text-white text-[clamp(48px,7vw,88px)] mb-12"
          >
            Where Luxury Finds Its Audience
          </motion.h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content (60%) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Luxury Stats */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-start gap-4"
              >
                <div className="w-1 h-full bg-[var(--moa-gold)] rounded-full mt-1"></div>
                <div>
                  <p className="text-white font-inter text-xl mb-2">
                    $85K+ average household income of MOA shoppers
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-start gap-4"
              >
                <div className="w-1 h-full bg-[var(--moa-gold)] rounded-full mt-1"></div>
                <div>
                  <p className="text-white font-inter text-xl mb-2">
                    28% of visitors travel 150+ miles specifically to shop
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex items-start gap-4"
              >
                <div className="w-1 h-full bg-[var(--moa-gold)] rounded-full mt-1"></div>
                <div>
                  <p className="text-white font-inter text-xl mb-2">
                    International visitors from 80+ countries annually
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Luxury Brands Roll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="pt-8"
            >
              <p className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.2em] uppercase mb-6">
                PREMIUM BRANDS PRESENT
              </p>
              <div className="flex flex-wrap gap-4">
                {luxuryBrands.map((brand, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    className="text-white/60 font-inter text-sm tracking-[0.2em] uppercase"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="pt-8"
            >
              <a
                href="mailto:flagship@mallofamerica.com"
                className="inline-block border border-[var(--moa-gold)] text-[var(--moa-gold)] px-8 py-4 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[var(--moa-gold)] hover:text-[#080810] transition-all duration-300"
              >
                INQUIRE ABOUT FLAGSHIP POSITIONING
              </a>
            </motion.div>
          </div>

          {/* Right Decorative (40%) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative w-full h-96"
            >
              {/* Abstract Geometric Composition */}
              <svg viewBox="0 0 300 400" className="w-full h-full">
                {/* Background rectangles */}
                <rect x="50" y="50" width="200" height="120" fill="rgba(201, 168, 76, 0.1)" />
                <rect x="80" y="100" width="140" height="80" fill="rgba(201, 168, 76, 0.15)" />
                
                {/* Gold lines */}
                <line x1="30" y1="150" x2="270" y2="150" stroke="var(--moa-gold)" strokeWidth="1" opacity="0.3" />
                <line x1="150" y1="30" x2="150" y2="370" stroke="var(--moa-gold)" strokeWidth="1" opacity="0.3" />
                
                {/* Decorative circles */}
                <circle cx="100" cy="250" r="30" fill="none" stroke="var(--moa-gold)" strokeWidth="1" opacity="0.4" />
                <circle cx="200" cy="320" r="20" fill="none" stroke="var(--moa-gold)" strokeWidth="1" opacity="0.3" />
                <circle cx="80" cy="350" r="15" fill="rgba(201, 168, 76, 0.2)" />
                
                {/* Accent rectangles */}
                <rect x="180" y="200" width="80" height="40" fill="rgba(201, 168, 76, 0.2)" />
                <rect x="40" y="280" width="60" height="60" fill="rgba(201, 168, 76, 0.15)" />
                
                {/* Small decorative elements */}
                <circle cx="250" cy="80" r="8" fill="var(--moa-gold)" opacity="0.5" />
                <circle cx="60" cy="120" r="6" fill="var(--moa-gold)" opacity="0.4" />
                <rect x="220" y="350" width="20" height="20" fill="rgba(201, 168, 76, 0.3)" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
