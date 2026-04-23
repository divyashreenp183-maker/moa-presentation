import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen w-full relative flex flex-col justify-center 
                  px-8 md:px-16 lg:px-24 py-20 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
