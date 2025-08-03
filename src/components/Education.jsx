import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'M.S. in Computer & Information Science',
    school: 'University of Michigan – Dearborn, MI',
    period: '2021',
  },
  {
    degree: 'B.Tech in Electronics & Communication Engineering',
    school: 'V.R. Siddhartha Engineering College, India',
    period: '2019',
  },
];

const certifications = [
  'AWS Certified Developer – Associate',
];

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-ivory dark:bg-navy"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-navy dark:text-gold">
          Education &amp; Certifications
        </h2>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {education.map((ed) => (
            <motion.div
              key={ed.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-serif font-semibold mb-2 text-navy dark:text-ivory">
                {ed.degree}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {ed.school} • {ed.period}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg"
        >
          <h3 className="text-xl font-serif font-semibold mb-4 text-navy dark:text-ivory">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-gold bg-opacity-20 text-gold px-4 py-2 rounded-full text-sm font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}