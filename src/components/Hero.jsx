import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const gradientVariants = {
    initial: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 40%, #0a0a1a 100%)" },
    animate: { background: "linear-gradient(135deg, #0a0a1a 0%, #0a0a0a 40%, #1a0505 100%)" },
    final: { background: "linear-gradient(135deg, #1a0505 0%, #0a0a1a 40%, #0a0a0a 100%)" }
  };

  const particleVariants = Array.from({ length: 20 }, (_, i) => ({
    initial: { 
      x: Math.random() * 100 - 50, 
      y: Math.random() * 100 - 50,
      opacity: 0.15
    },
    animate: {
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      opacity: 0.15
    }
  }));

  return (
    <section id="home" className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Animated Particles */}
      {particleVariants.map((variant, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            width: `${2 + Math.random() * 2}px`,
            height: `${2 + Math.random() * 2}px`,
          }}
          variants={variant}
          animate="animate"
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Content */}
      <div ref={ref} className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase">
            BLOOMINGTON, MINNESOTA · EST. 1992
          </p>
        </motion.div>

        {/* Main Headline */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-playfair font-900 text-white text-[clamp(48px,8vw,96px)] leading-none mb-4"
          >
            THE DESTINATION.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-playfair font-900 text-white text-[clamp(48px,8vw,96px)] leading-none mb-4"
          >
            THE PLATFORM.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-playfair font-900 text-white text-[clamp(48px,8vw,96px)] leading-none"
          >
            THE OPPORTUNITY.
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white/70 font-inter text-xl font-medium mb-12"
        >
          40 million visitors. 5.6 million sq ft. One address.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            to="why-moa"
            smooth={true}
            duration={800}
            className="bg-[var(--moa-red)] text-white px-8 py-4 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer"
          >
            EXPLORE THE PROPERTY
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="bg-transparent text-white border border-white px-8 py-4 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            START A CONVERSATION
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
