import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StatCounter from './StatCounter';
import { stats } from '../data/stats';

export default function WhyMOA() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="why-moa" className="min-h-screen w-full bg-[#0d0d0d] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            WHY MALL OF AMERICA
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-[clamp(36px,5vw,64px)] mb-6"
          >
            The #1 Most Visited Destination in the United States
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/60 font-inter text-xl max-w-3xl mx-auto"
          >
            More annual visitors than the Grand Canyon, Yellowstone, 
            and Disney World — combined.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                duration={2.5}
              />
            </motion.div>
          ))}
        </div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-16"
        >
          <blockquote className="border-l-3 border-[var(--moa-red)] pl-6">
            <p className="font-playfair italic text-white text-2xl">
              "If Mall of America were a country, its economy would rank among
              the world's fastest-growing."
            </p>
          </blockquote>
        </motion.div>

        {/* Map Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-playfair font-700 text-white text-2xl mb-4">
                Regional Catchment Area
              </h3>
              <p className="text-white/80 font-inter text-lg">
                30M people within a 1-day drive
              </p>
              <p className="text-white/60 font-inter mt-2">
                Prime access to Midwest markets including Minneapolis, St. Paul, 
                Chicago, Milwaukee, and Des Moines.
              </p>
            </div>
            <div className="relative w-64 h-64">
              {/* SVG Concentric Circles */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="20" fill="rgba(227, 24, 55, 0.3)" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(227, 24, 55, 0.2)" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(227, 24, 55, 0.15)" strokeWidth="1" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(227, 24, 55, 0.1)" strokeWidth="1" />
                
                {/* Center dot representing MOA */}
                <circle cx="100" cy="100" r="4" fill="var(--moa-red)" />
                
                {/* Distance labels */}
                <text x="100" y="30" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10">1 hr</text>
                <text x="100" y="10" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">2 hrs</text>
                <text x="100" y="190" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10">4 hrs</text>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
