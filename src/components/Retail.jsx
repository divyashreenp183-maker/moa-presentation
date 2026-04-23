import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { retailTiers, tenants } from '../data/tenants';

export default function Retail() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="retail" className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            RETAIL LEASING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-[clamp(36px,5vw,64px)] mb-6"
          >
            A Retail Ecosystem Unlike Any Other
          </motion.h2>
        </div>

        {/* Retail Tier Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {retailTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.8 }}
              whileHover={{ y: -4, borderColor: 'rgba(227, 24, 55, 0.5)' }}
              className="bg-[#141414] border border-gray-800 rounded-xl p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="text-[var(--moa-red)] text-4xl mb-4">{tier.icon}</div>
              <h3 className="font-playfair font-700 text-white text-2xl mb-4">{tier.name}</h3>
              <p className="text-white/60 font-inter text-base mb-4">{tier.description}</p>
              <div className="mb-6">
                <p className="text-xs text-gray-400 mb-2">Examples:</p>
                <p className="text-sm text-white/80">
                  {tier.examples.join(' • ')}
                </p>
              </div>
              <button className="text-[var(--moa-red)] font-inter font-medium text-sm hover:underline transition-all duration-300 flex items-center gap-1">
                {tier.cta} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Tenant Marquee */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="overflow-hidden"
          >
            <div className="flex space-x-4 mb-4">
              {tenants.map((tenant, index) => (
                <motion.div
                  key={`top-${index}`}
                  initial={{ x: 0 }}
                  animate={{ x: -1000 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.1
                  }}
                  className="flex-shrink-0 px-4 py-2 border border-gray-700 rounded-full text-white/70 text-sm font-inter whitespace-nowrap"
                >
                  {tenant}
                </motion.div>
              ))}
            </div>
            <div className="flex space-x-4">
              {tenants.slice().reverse().map((tenant, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  initial={{ x: 0 }}
                  animate={{ x: -1000 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.1
                  }}
                  className="flex-shrink-0 px-4 py-2 border border-gray-700 rounded-full text-white/70 text-sm font-inter whitespace-nowrap"
                >
                  {tenant}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="bg-gradient-to-r from-[#1a0505] to-[#0a0a0a] rounded-xl p-8 text-center"
        >
          <p className="text-white font-inter text-xl mb-6">
            Ready to find your space at America's most-visited destination?
          </p>
          <a
            href="mailto:leasing@mallofamerica.com"
            className="inline-block bg-[var(--moa-red)] text-white px-8 py-4 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:scale-105 hover:brightness-110 transition-all duration-300"
          >
            INQUIRE ABOUT LEASING
          </a>
        </motion.div>
      </div>
    </section>
  );
}
