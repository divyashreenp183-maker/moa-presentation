import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { eventTypes, pastEvents } from '../data/events';

export default function Events() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="events" className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            EVENTS & BRAND PLATFORM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-[clamp(36px,5vw,64px)] mb-6"
          >
            The Stage for What's Next
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/80 font-inter text-xl max-w-3xl mx-auto"
          >
            <span className="text-[var(--moa-red)] font-bold">300+</span> events annually. 
            <span className="text-[var(--moa-red)] font-bold"> 40 million</span> eyes. 
            One platform.
          </motion.p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((eventType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                backgroundColor: 'rgba(227, 24, 55, 0.1)',
                transform: 'scale(1.02)'
              }}
              className="bg-[#1a1a1a] rounded-xl p-8 text-center transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{eventType.icon}</div>
              <h3 className="font-playfair font-700 text-white text-lg mb-2">
                {eventType.name}
              </h3>
              <p className="text-[var(--moa-red)] font-inter text-sm font-medium">
                {eventType.count}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Past Event Highlights */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-2xl mb-8"
          >
            RECENT HIGHLIGHTS
          </motion.h3>
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="w-2 h-2 bg-[var(--moa-red)] rounded-full flex-shrink-0"></div>
                <p className="text-white/80 font-inter text-base">
                  {event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-width CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="bg-[var(--moa-red)] rounded-xl p-12 text-center"
        >
          <h3 className="font-playfair font-700 text-white text-3xl md:text-4xl mb-8">
            YOUR EVENT. 40 MILLION PEOPLE. MAKE IT HERE.
          </h3>
          <a
            href="mailto:events@mallofamerica.com"
            className="inline-block bg-white text-[var(--moa-red)] px-8 py-4 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:scale-105 transition-all duration-300"
          >
            BOOK YOUR EVENT
          </a>
        </motion.div>
      </div>
    </section>
  );
}
