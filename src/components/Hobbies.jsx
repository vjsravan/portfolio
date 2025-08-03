import React from 'react';
import { motion } from 'framer-motion';

const hobbies = ['Photography','Travel','Cooking', 'Gaming'];

export default function Hobbies() {
  return (
    <motion.section
      id="hobbies"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-ivory dark:bg-navy"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-navy dark:text-gold">
          Hobbies &amp; Interests
        </h2>
        <ul className="list-disc list-inside space-y-2 text-navy dark:text-ivory">
          {hobbies.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
