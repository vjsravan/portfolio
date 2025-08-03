// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Programming': ['Java (8–21)', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'],
  'Frontend':    ['React.js', 'Angular 17', 'Redux', 'HTML5', 'CSS3', 'Tailwind'],
  'Backend':     ['Spring Boot', 'WebFlux', 'Hibernate', 'Apache Camel', 'Express.js'],
  'Cloud & DevOps': ['AWS (Lambda, ECS, S3)', 'GCP (GKE)', 'Docker', 'OpenShift', 'Argo CD', 'Jenkins'],
  'Databases':   ['PostgreSQL', 'MongoDB', 'DB2', 'Redis'],
  'Testing':     ['JUnit', 'TestNG', 'Cucumber', 'Selenium'],
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-ivory dark:bg-navy"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-navy dark:text-gold">
          Major Skills &amp; Technologies
        </h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
              {category}
            </h3>
            <div className="flex flex-wrap">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
