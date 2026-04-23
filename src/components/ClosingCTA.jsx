import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ClosingCTA() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const actionCards = [
    {
      icon: "🏪",
      title: "Find Your Space",
      description: "520+ stores. Every format. Your category.",
      cta: "EXPLORE LEASING",
      href: "mailto:leasing@mallofamerica.com",
      featured: false
    },
    {
      icon: "🤝",
      title: "Partner With Us",
      description: "40M impressions. Year-round presence.",
      cta: "INQUIRE NOW",
      href: "mailto:partnerships@mallofamerica.com",
      featured: true
    },
    {
      icon: "🎤",
      title: "Book a Venue",
      description: "300+ events. 4 venues. Unlimited potential.",
      cta: "BOOK NOW",
      href: "mailto:events@mallofamerica.com",
      featured: false
    }
  ];

  return (
    <section id="contact" className="min-h-screen w-full bg-gradient-to-b from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-playfair font-900 text-white text-[clamp(48px,8vw,96px)] mb-4">
            YOUR NEXT MOVE
          </h1>
          <h1 className="font-playfair font-900 text-white text-[clamp(48px,8vw,96px)]">
            STARTS HERE.
          </h1>
          
          {/* Subtle animated glow behind text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 2 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(227, 24, 55, 0.3)",
                  "0 0 40px rgba(227, 24, 55, 0.1)",
                  "0 0 20px rgba(227, 24, 55, 0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[300px] h-[100px] rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {actionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className={`bg-[#1a1a1a] rounded-xl p-8 border transition-all duration-300 ${
                card.featured 
                  ? 'border-t-3 border-[var(--moa-red)] lg:scale-105' 
                  : 'border-transparent hover:border-[var(--moa-red)]'
              }`}
            >
              <div className="text-5xl mb-6 text-center">{card.icon}</div>
              <h3 className="font-playfair font-700 text-white text-2xl mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-white/60 font-inter text-base mb-8 text-center leading-relaxed">
                {card.description}
              </p>
              <a
                href={card.href}
                className={`block w-full text-center px-6 py-4 font-inter font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  card.featured
                    ? 'bg-[var(--moa-red)] text-white hover:scale-105 hover:brightness-110'
                    : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {card.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="text-white/40 font-inter text-sm mb-6">
            Mall of America · 60 East Broadway, Bloomington, MN 55425
          </div>
          <div className="text-white/30 font-inter text-xs mb-6">
            © 2024 Mall of America. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {['Instagram', 'Twitter/X', 'LinkedIn', 'YouTube'].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1, color: 'var(--moa-red)' }}
                className="text-white/60 hover:text-white transition-all duration-300"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
