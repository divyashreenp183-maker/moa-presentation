import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const attractions = [
  {
    number: "01",
    name: "Nickelodeon Universe",
    description: "7-acre indoor theme park. 27 rides. 0 weather delays.",
    badge: "500,000 sq ft",
    color: "border-orange-600"
  },
  {
    number: "02",
    name: "SEA LIFE Minnesota Aquarium",
    description: "Over 10,000 sea creatures. Walk-through ocean tunnel.",
    badge: "1.2M annual visitors",
    color: "border-blue-600"
  },
  {
    number: "03",
    name: "Crayola Experience",
    description: "25,000 sq ft of creativity. Top family destination.",
    badge: "25+ activities",
    color: "border-green-600"
  },
  {
    number: "04",
    name: "FlyOver America",
    description: "Immersive flight simulation. Cutting-edge 4D technology.",
    badge: "6 min experience",
    color: "border-purple-600"
  },
  {
    number: "05",
    name: "Bowling & Mini Golf",
    description: "Lucky Strike lanes + 18-hole mini golf. Group-friendly.",
    badge: "20 bowling lanes",
    color: "border-red-600"
  },
  {
    number: "06",
    name: "Escape Rooms & More",
    description: "Multiple rooms, themes, and formats. Perfect for groups.",
    badge: "2,000+ sq ft",
    color: "border-yellow-600"
  }
];

export default function Attractions() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="attractions" className="min-h-screen w-full bg-[#111111] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            ENTERTAINMENT & ATTRACTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-[clamp(36px,5vw,64px)] mb-12"
          >
            Beyond Retail. Beyond Expectation.
          </motion.h2>
        </div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-16"
        >
          <blockquote className="font-playfair italic text-[var(--moa-red)] text-3xl md:text-4xl">
            "The only mall in America with a roller coaster inside."
          </blockquote>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-[#1a1a1a] rounded-xl p-8 border-t-4 border-transparent hover:border-opacity-50 transition-all duration-300 relative overflow-hidden group"
              style={{ borderTopColor: attraction.color.replace('border-', '').replace('-600', '') }}
            >
              {/* Background Number */}
              <div className="absolute top-4 right-4 text-6xl font-playfair font-900 text-white/5">
                {attraction.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-playfair font-700 text-white text-2xl mb-4">
                  {attraction.name}
                </h3>
                <p className="text-white/70 font-inter text-sm mb-6 leading-relaxed">
                  {attraction.description}
                </p>
                
                {/* Badge */}
                <div className="inline-block">
                  <span className="bg-[var(--moa-red)] text-white text-xs px-3 py-1 rounded-full font-inter">
                    {attraction.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-white/60 font-inter text-lg">
            Attractions generate 12M+ incremental visits beyond retail traffic annually.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
