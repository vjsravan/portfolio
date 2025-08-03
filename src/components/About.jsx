// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-ivory dark:bg-navy"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">About Me</h2>
        <p className="mb-2 dark:text-gray-300">
          Senior Java Full-Stack Developer with 6+ years of experience building
          scalable, secure, cloud-native applications across logistics, automotive,
          and finance domains.
        </p>
        <p className="mb-2 dark:text-gray-300">
          Proficient in Java (8–21), Spring Boot, Angular 17, React.js, and AWS.
          Skilled in designing microservices, streamlining CI/CD pipelines, and
          deploying Docker/OpenShift workloads via Argo CD.
        </p>
        <p className="dark:text-gray-300">
          Passionate about DevOps integration, Agile collaboration, and delivering
          99.9% uptime with 30–50% cycle-time improvements.
        </p>
      </div>
    </motion.section>
  );
}
