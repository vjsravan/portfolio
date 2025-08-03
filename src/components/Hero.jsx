import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/developer-skills.json';

const phrases = [
  'AI & Automation Enthusiast',
  'Full-Stack Java Developer',
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setIdx((idx + 1) % phrases.length), 3000);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <motion.section
      id="hero"
      className="relative scroll-mt-24 h-screen flex items-center justify-center bg-navy overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Lottie background (semi-opaque) */}
      <div className="absolute inset-0 opacity-20">
        <Lottie animationData={animationData} loop />
      </div>

      {/* Foreground text */}
      <div className="relative text-center px-4">
        <h1 className="text-6xl font-serif mb-2 text-gold">
          Jay Sravan Vadlamudi
        </h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl mb-6 text-ivory font-serif"
          >
            {phrases[idx]}
          </motion.h2>
        </AnimatePresence>
        <a
          href="/Jay_Sravan_Resume.pdf"
          download
          className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}