// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      setWidth(pct);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gold dark:bg-ivory z-50"
      style={{ width: `${width}%` }}
    />
  );
}
