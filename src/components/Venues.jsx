import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { venues } from '../data/venues';

export default function Venues() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const currentVenue = venues[activeTab];

  return (
    <section id="venues" className="min-h-screen w-full bg-[#0d0d0d] flex items-center justify-center py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[var(--moa-gold)] font-inter text-xs tracking-[0.3em] uppercase mb-6"
          >
            VENUE DIRECTORY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair font-700 text-white text-[clamp(36px,5vw,64px)] mb-6"
          >
            World-Class Venues. Infinite Possibilities.
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {venues.map((venue, index) => (
            <button
              key={venue.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 font-inter font-medium text-sm transition-all duration-300 ${
                activeTab === index
                  ? 'text-[var(--moa-red)] border-b-2 border-[var(--moa-red)]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {venue.name.split(' ')[0]}
            </button>
          ))}
        </motion.div>

        {/* Venue Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800"
            >
              <h3 className="font-playfair font-700 text-white text-3xl mb-6">
                {currentVenue.name}
              </h3>
              
              {/* Capacity & Sqft */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-[var(--moa-red)]/10 border border-[var(--moa-red)]/30 rounded-lg px-4 py-2">
                  <span className="text-white font-inter text-sm">Capacity: </span>
                  <span className="text-[var(--moa-red)] font-inter font-semibold text-sm">{currentVenue.capacity}</span>
                </div>
                <div className="bg-[var(--moa-red)]/10 border border-[var(--moa-red)]/30 rounded-lg px-4 py-2">
                  <span className="text-white font-inter text-sm">Size: </span>
                  <span className="text-[var(--moa-red)] font-inter font-semibold text-sm">{currentVenue.sqft}</span>
                </div>
              </div>

              {/* Best For */}
              <div className="mb-6">
                <h4 className="font-playfair font-700 text-white text-lg mb-3">Best For:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentVenue.bestFor.split(', ').map((useCase, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--moa-red)] rounded-full"></div>
                      <span className="text-white/80 font-inter text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 font-inter text-base mb-8 leading-relaxed">
                {currentVenue.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:events@mallofamerica.com"
                  className="bg-[var(--moa-red)] text-white px-6 py-3 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:scale-105 transition-all duration-300"
                >
                  REQUEST AVAILABILITY
                </a>
                <button className="border border-white text-white px-6 py-3 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300">
                  VIEW FLOOR PLAN
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Booking Prompt Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800"
        >
          <div className="text-center mb-8">
            <h3 className="font-playfair font-700 text-white text-2xl mb-4">
              Planning an event?
            </h3>
            <p className="text-white/70 font-inter text-base">
              Our dedicated events team responds within 24 hours.
            </p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--moa-red)] focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--moa-red)] focus:outline-none transition-colors"
                required
              />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                className="bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[var(--moa-red)] focus:outline-none transition-colors"
                required
              >
                <option value="">Event Type</option>
                <option value="corporate">Corporate Event</option>
                <option value="product-launch">Product Launch</option>
                <option value="concert">Concert/Performance</option>
                <option value="private">Private Event</option>
                <option value="other">Other</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[var(--moa-red)] focus:outline-none transition-colors"
                required
              />
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[var(--moa-red)] text-white px-6 py-3 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:scale-105 transition-all duration-300"
                >
                  SEND INQUIRY
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-green-500 text-2xl mb-4">✓</div>
              <p className="text-white font-inter text-lg">
                Thank you! We'll respond within 24 hours.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
