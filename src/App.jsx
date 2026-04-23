import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyMOA from './components/WhyMOA';
import Retail from './components/Retail';
import Luxury from './components/Luxury';
import Dining from './components/Dining';
import Attractions from './components/Attractions';
import Events from './components/Events';
import Venues from './components/Venues';
import Sponsorship from './components/Sponsorship';
import ClosingCTA from './components/ClosingCTA';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[var(--moa-dark)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-playfair font-900 text-[var(--moa-red)] text-6xl md:text-8xl">
            MOA
          </h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex"
        >
          {/* Fixed Navbar */}
          <Navbar />
          
          {/* Main Content */}
          <main className="flex-1 md:ml-16">
            <Hero />
            <WhyMOA />
            <Retail />
            <Luxury />
            <Dining />
            <Attractions />
            <Events />
            <Venues />
            <Sponsorship />
            <ClosingCTA />
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
