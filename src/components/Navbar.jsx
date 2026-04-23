import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Why MOA', id: 'why-moa' },
  { name: 'Retail', id: 'retail' },
  { name: 'Luxury', id: 'luxury' },
  { name: 'Dining', id: 'dining' },
  { name: 'Attractions', id: 'attractions' },
  { name: 'Events', id: 'events' },
  { name: 'Venues', id: 'venues' },
  { name: 'Sponsorship', id: 'sponsorship' },
  { name: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.id));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-16 w-16 hover:w-48 bg-[var(--moa-dark)] border-r border-gray-800 z-50 transition-all duration-300 ease-in-out flex-col group">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gray-800">
          <h1 className="font-playfair font-900 text-[var(--moa-red)] text-2xl group-hover:text-3xl transition-all duration-300">
            MOA
          </h1>
        </div>
        
        {/* Nav Items */}
        <div className="flex-1 py-4 overflow-hidden">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-3 text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-[var(--moa-red)] border-l-2 border-[var(--moa-red)]'
                    : 'text-gray-400 hover:text-white hover:border-l-2 hover:border-gray-600'
                }`}
              >
                <span className="text-xs font-inter whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.name}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 h-full w-1 bg-[var(--moa-red)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[var(--moa-dark)] border-b border-gray-800 z-50 flex items-center justify-between px-4">
        <h1 className="font-playfair font-900 text-[var(--moa-red)] text-xl">
          MOA
        </h1>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[var(--moa-dark)] z-40"
          >
            <div className="h-full flex flex-col pt-20 px-8">
              <div className="flex-1">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-4 text-xl font-inter transition-colors ${
                        activeSection === item.id
                          ? 'text-[var(--moa-red)]'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
