# Mall of America — Interactive Sales Deck

## Live Demo
[Vercel URL here - Deploy to get live URL]

## Overview
An interactive, scroll-based sales presentation for Mall of America featuring animated statistics, venue showcases, and partnership opportunities. Built with modern React and motion design to create an immersive experience for potential retail partners and sponsors.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- react-intersection-observer
- react-scroll

## Setup & Installation
```bash
git clone https://github.com/YOUR_USERNAME/moa-sales-deck
cd moa-sales-deck
npm install
npm run dev
```

## Deployment (Vercel)
```bash
npm install -g vercel
vercel login
vercel --prod
```
Auto-deploys on every push to main via Vercel GitHub integration.

## Design Decisions

### Dark Theme Rationale
The dark theme with red and gold accent colors creates a premium, luxury feel appropriate for high-value retail partnerships. The color scheme reflects Mall of America's brand identity while maintaining visual sophistication.

### Non-Linear Navigation
Fixed sidebar navigation allows users to jump between sections instantly, crucial for a sales deck where different stakeholders may want to focus on specific aspects (retail, events, sponsorship).

### Framer Motion Choices
Used for scroll-triggered animations, smooth transitions, and micro-interactions that enhance the premium feel without overwhelming the content. Staggered animations create visual hierarchy and guide user attention.

### Font Pairing
Playfair Display for headlines creates editorial luxury, while Inter provides clean readability for body text and data. This combination balances sophistication with accessibility.

### Color System
- **MOA Red (#E31837)**: Primary CTAs and highlights
- **MOA Gold (#C9A84C)**: Luxury section and premium elements  
- **Dark backgrounds**: Creates focus on content and reduces eye strain
- **High contrast**: Ensures accessibility and readability

## AI Tools Used
- Cascade AI for project architecture and component development
- Framer Motion for animation logic
- Tailwind CSS for rapid styling

## Project Structure
```
moa-sales-deck/
├── public/
│   └── og-image.jpg          (placeholder 1200x630)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── WhyMOA.jsx
│   │   ├── Retail.jsx
│   │   ├── Luxury.jsx
│   │   ├── Dining.jsx
│   │   ├── Attractions.jsx
│   │   ├── Events.jsx
│   │   ├── Venues.jsx
│   │   ├── Sponsorship.jsx
│   │   ├── ClosingCTA.jsx
│   │   ├── StatCounter.jsx
│   │   └── SectionWrapper.jsx
│   ├── data/
│   │   ├── stats.js
│   │   ├── tenants.js
│   │   ├── venues.js
│   │   └── events.js
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   └── useCountUp.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
├── .gitignore
└── README.md
```

## What I'd Improve With More Time
1. **Real Data Integration**: Connect to actual Mall of America APIs for live visitor counts and event data
2. **Advanced Animations**: Add more sophisticated particle effects and 3D transforms
3. **Interactive Floor Plans**: Implement clickable venue maps with detailed specifications
4. **Contact Form Backend**: Add real form submission with email integration
5. **Performance Optimization**: Implement lazy loading and code splitting for faster initial load
6. **Accessibility Enhancements**: Add ARIA labels, keyboard navigation, and screen reader optimizations
7. **Analytics Integration**: Track user engagement and section interaction patterns
8. **Multi-language Support**: Add internationalization for global partners

## Features Implemented
- ✅ 10 complete sections with unique designs
- ✅ Animated statistics counters
- ✅ Interactive venue tabs with smooth transitions
- ✅ Draggable dining carousel
- ✅ Responsive mobile navigation
- ✅ Loading screen animation
- ✅ Scroll-based section highlighting
- ✅ Contact forms with success states
- ✅ Marquee animations for tenant/partner lists
- ✅ Hover effects and micro-interactions
- ✅ Gradient backgrounds and particle effects
- ✅ Premium luxury section with geometric design

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License
© 2024 Mall of America. All rights reserved.
