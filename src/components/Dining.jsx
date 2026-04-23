import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const diningConcepts = [
  {
    name: "Oak & Iron Steakhouse",
    tagline: "Premium dry-aged cuts",
    emoji: "🥩",
    color: "bg-orange-900"
  },
  {
    name: "Noodle Theory",
    tagline: "Pan-Asian noodle bar",
    emoji: "🍜",
    color: "bg-red-900"
  },
  {
    name: "The Garden Table",
    tagline: "Farm-to-fork seasonal menu",
    emoji: "🥗",
    color: "bg-green-900"
  },
  {
    name: "Inferno Pizza",
    tagline: "Neapolitan-style, wood-fired",
    emoji: "🍕",
    color: "bg-red-800"
  },
  {
    name: "Ritual Coffee",
    tagline: "Specialty roasts & all-day café",
    emoji: "☕",
    color: "bg-amber-900"
  },
  {
    name: "Surf & Tide",
    tagline: "Pacific Northwest seafood",
    emoji: "🦐",
    color: "bg-blue-900"
  },
  {
    name: "Veda",
    tagline: "Modern Indian tasting menu",
    emoji: "🍛",
    color: "bg-orange-800"
  },
  {
    name: "The Provisions Market",
    tagline: "Artisan food hall, 12 vendors",
    emoji: "🛒",
    color: "bg-purple-900"
  }
];

export default function Dining() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [showDragHint, setShowDragHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDragHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="dining" className="min-h-screen w-full bg-[#0d0d0d] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            DINING & LIFESTYLE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-[clamp(36px,5vw,64px)] mb-6"
          >
            Dining as a Destination
          </motion.h2>
        </div>

        {/* Dining Carousel */}
        <div className="relative mb-16">
          {showDragHint && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center mb-4"
            >
              <p className="text-white/40 font-inter text-sm animate-pulse">
                ← drag to explore →
              </p>
            </motion.div>
          )}

          <motion.div
            className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -280 * (diningConcepts.length - 1), right: 0 }}
            dragElastic={0.1}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {diningConcepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-[280px] h-[320px] rounded-xl overflow-hidden"
              >
                {/* Top color block with emoji */}
                <div className={`${concept.color} h-48 flex items-center justify-center`}>
                  <span className="text-6xl">{concept.emoji}</span>
                </div>
                
                {/* Bottom dark content */}
                <div className="bg-[#1a1a1a] h-32 p-6 flex flex-col justify-center">
                  <h3 className="font-playfair font-700 text-white text-xl mb-2">
                    {concept.name}
                  </h3>
                  <p className="text-white/60 font-inter text-sm">
                    {concept.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 mb-16 text-center"
        >
          <div>
            <div className="font-playfair font-700 text-white text-3xl mb-2">50+</div>
            <div className="text-gray-400 font-inter text-sm uppercase tracking-wider">Dining Options</div>
          </div>
          <div>
            <div className="font-playfair font-700 text-white text-3xl mb-2">3+ hrs</div>
            <div className="text-gray-400 font-inter text-sm uppercase tracking-wider">Average Dwell Time</div>
          </div>
          <div>
            <div className="font-playfair font-700 text-white text-3xl mb-2">40%</div>
            <div className="text-gray-400 font-inter text-sm uppercase tracking-wider">Return Visits Driven by Dining</div>
          </div>
        </motion.div>

        {/* Bottom Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-white/80 font-inter text-lg leading-relaxed">
            Food is no longer a footnote — at Mall of America, dining is 
            programming. Our F&B ecosystem keeps guests on property longer 
            and brings them back.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
