import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline({ items }) {
  return (
    <div>
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="flex items-start mb-16"
        >
          {/* Marker column */}
          <div className="flex flex-col items-center mr-6">
            <div className="w-12 h-12 rounded-full bg-ivory dark:bg-navy p-1 flex items-center justify-center shadow-md">
              <img
                src={it.logo}
                alt={`${it.company} logo`}
                className={
                  `w-full h-full object-contain rounded-full ` +
                  `bg-ivory dark:bg-navy p-1 ` +
                  `${it.invertInDark ? 'dark:filter dark:invert' : ''}`
                }
              />
            </div>
            {/* Vertical line */}
            {i < items.length - 1 && (
              <div className="flex-1 w-1 bg-gold dark:bg-ivory mt-2" />
            )}
          </div>

          {/* Content column */}
          <div className="flex-1">
            <h4 className="text-xl font-serif font-bold text-navy dark:text-gold mb-1">
              {it.role}
            </h4>
            <p className="text-sm text-navy dark:text-ivory mb-1">{it.period}</p>
            <p className="text-navy dark:text-ivory mb-2">{it.company}</p>
            {it.details && (
              <ul className="list-disc list-inside text-navy dark:text-ivory space-y-1 ml-4">
                {it.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
