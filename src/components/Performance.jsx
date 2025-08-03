// src/components/Performance.jsx
import React, { useEffect, useState } from 'react';

export default function Performance() {
  const [loadTime, setLoadTime] = useState(null);
  useEffect(() => {
    const t = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    setLoadTime((t / 1000).toFixed(2));
  }, []);
  return (
    <div className="container mx-auto px-6 text-sm text-gray-600 dark:text-gray-400 mt-8">
      <img
        src="https://img.shields.io/badge/Lighthouse-90%25-brightgreen"
        alt="Lighthouse Score"
        className="inline-block mr-2"
      />
      {loadTime && <>Load Time: {loadTime}s</>}
    </div>
  );
}
