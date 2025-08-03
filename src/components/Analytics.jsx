// src/components/Analytics.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Analytics() {
  const [visitors, setVisitors] = useState(null);
  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/vjsravan/portfolio')
      .then(res => res.json())
      .then(data => setVisitors(data.value));
  }, []);
  return (
    <motion.div
      id="analytics"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 text-sm text-gray-600 dark:text-gray-400 mt-4"
    >
      {visitors !== null ? `Visitors: ${visitors}` : 'Loading visitor count...'}
    </motion.div>
  );
}
