import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Customs Microservices',
    description: 'Automated UK/UAE/CA customs flows, cutting process time by 30%.',
    tech: ['Java','Spring Boot','WebFlux'],
    screenshot: '/screenshots/customs.png'
  },
  {
    title: 'Finance Platform Modernization',
    description: 'Migrated legacy Struts to Angular & Spring Boot microservices.',
    tech: ['Angular','Spring Boot','Docker'],
    screenshot: '/screenshots/finance.png'
  },
  {
    title: 'Payment API Integration',
    description: 'Built PCI-compliant payment endpoints with tokenization.',
    tech: ['Java','Spring Boot','React'],
    screenshot: '/screenshots/payments.png'
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-ivory dark:bg-navy"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-navy dark:text-gold">
          Projects & Case Studies
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.03 }}
              className="bg-ivory dark:bg-navy p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-navy dark:text-gold">
                {p.title}
              </h3>
              <p className="mb-4 text-navy dark:text-ivory">
                {p.description}
              </p>
              <div className="flex flex-wrap mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
