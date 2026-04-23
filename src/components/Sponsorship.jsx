import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sponsorshipTiers = [
  {
    name: "ACTIVATION PARTNER",
    priceLabel: "Contact for pricing",
    description: "Event-based, flexible activation",
    inclusions: [
      "Branded event space",
      "Social content integration",
      "Event-day activation",
      "Basic signage placement"
    ],
    featured: false,
    borderColor: "border-gray-700"
  },
  {
    name: "CATEGORY SPONSOR",
    priceLabel: "Contact for pricing",
    description: "Owned category vertical",
    inclusions: [
      "Everything in Activation Partner",
      "Digital campaign integration",
      "Premium signage placement",
      "Co-branding opportunities",
      "Seasonal campaign inclusion"
    ],
    featured: true,
    borderColor: "border-[var(--moa-gold)]"
  },
  {
    name: "PRESENTING PARTNER",
    priceLabel: "Contact for pricing",
    description: "Full property integration",
    inclusions: [
      "Everything in Category Sponsor",
      "Naming rights potential",
      "Year-round presence",
      "Exclusive category ownership",
      "Executive hospitality program"
    ],
    featured: false,
    borderColor: "border-[var(--moa-red)]"
  }
];

const pastPartners = [
  "Target", "Best Buy", "Coca-Cola", "PepsiCo", "American Airlines",
  "Delta", "Toyota", "Samsung", "Google", "Meta", "Marriott", "Hilton"
];

export default function Sponsorship() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="sponsorship" className="min-h-screen w-full bg-[#080808] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            BRAND PARTNERSHIPS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-[clamp(36px,5vw,64px)] mb-6"
          >
            Your Brand. Our Platform. Their Attention.
          </motion.h2>
        </div>

        {/* Audience Data Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
            <div className="font-playfair font-700 text-white text-2xl mb-2">40M</div>
            <div className="text-gray-400 font-inter text-xs uppercase tracking-wider">Annual Visitors</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
            <div className="font-playfair font-700 text-white text-2xl mb-2">$85K</div>
            <div className="text-gray-400 font-inter text-xs uppercase tracking-wider">Avg HHI</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
            <div className="font-playfair font-700 text-white text-2xl mb-2">3.2 hrs</div>
            <div className="text-gray-400 font-inter text-xs uppercase tracking-wider">Avg Dwell Time</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
            <div className="font-playfair font-700 text-white text-2xl mb-2">80+</div>
            <div className="text-gray-400 font-inter text-xs uppercase tracking-wider">Countries</div>
          </div>
        </motion.div>

        {/* Sponsorship Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sponsorshipTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`bg-[#1a1a1a] rounded-xl p-8 border ${tier.borderColor} ${
                tier.featured ? 'lg:scale-105 lg:shadow-lg' : ''
              } transition-all duration-300 relative`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[var(--moa-gold)] text-black font-inter text-xs px-3 py-1 rounded-full font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="font-playfair font-700 text-white text-2xl mb-2">
                {tier.name}
              </h3>
              <p className="text-[var(--moa-gold)] font-inter text-sm mb-4">
                {tier.priceLabel}
              </p>
              <p className="text-white/60 font-inter text-sm mb-6">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.inclusions.map((inclusion, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--moa-red)] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 font-inter text-sm">{inclusion}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:partnerships@mallofamerica.com"
                className={`block w-full text-center px-6 py-3 font-inter font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  tier.featured
                    ? 'bg-[var(--moa-gold)] text-black hover:bg-black hover:text-[var(--moa-gold)]'
                    : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                INQUIRE NOW
              </a>
            </motion.div>
          ))}
        </div>

        {/* Past Partners Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="overflow-hidden"
        >
          <div className="flex space-x-8 mb-4">
            {pastPartners.map((partner, index) => (
              <motion.span
                key={`top-${index}`}
                initial={{ x: 0 }}
                animate={{ x: -1200 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2
                }}
                className="flex-shrink-0 text-white/50 font-inter text-sm"
              >
                {partner}
              </motion.span>
            ))}
          </div>
          <div className="flex space-x-8">
            {pastPartners.slice().reverse().map((partner, index) => (
              <motion.span
                key={`bottom-${index}`}
                initial={{ x: 0 }}
                animate={{ x: -1200 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2
                }}
                className="flex-shrink-0 text-white/50 font-inter text-sm"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
