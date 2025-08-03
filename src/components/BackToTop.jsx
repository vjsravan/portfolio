// src/components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gold dark:bg-ivory text-navy dark:text-navy rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaArrowUp />
      </button>
    )
  );
}