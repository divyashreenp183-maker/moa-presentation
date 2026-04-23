import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';

export default function StatCounter({ value, suffix, label, duration = 2.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, duration, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#1a1a1a] rounded-xl p-8 border border-transparent hover:border-[var(--moa-red)] transition-all duration-300"
    >
      <div className="text-center">
        <div className="font-playfair text-white text-[clamp(48px,4vw,72px)] font-bold leading-none">
          {count.toFixed(1)}
          <span className="text-[var(--moa-red)] ml-1">{suffix}</span>
        </div>
        <div className="text-gray-400 text-xs uppercase tracking-wider mt-3 font-inter">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
