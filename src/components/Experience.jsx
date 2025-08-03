import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const experiences = [
  {
    logo: '/logos/ups.png',
    company: 'United Parcel Service, Inc.',
    period: 'Mar 2024 – Present',
    role: 'Java Full-Stack SDE',
    details: [
      'Designed/deployed 10+ microservices for UK/UAE/CA customs using Java 21, Spring WebFlux & Camel; cut processing time by 30%.',
      'Built Reactor (Mono/Flux) pipelines for 40% faster non-blocking transfers.',
      'Streamlined CI/CD via Jenkins, Azure DevOps & Argo CD; halved deployment time.',
    ],
  },
  {
    logo: '/logos/mercedes.png',
    company: 'Mercedes Benz Financial Services',
    period: 'Mar 2022 – Mar 2024',
    role: 'Java Full-Stack SDE',
    details: [
      'Migrated legacy Struts apps to Angular 17 & Spring Boot microservices; reduced maintenance by 40%.',
      'Optimized DB2/PostgreSQL queries—improved throughput by 25%.',
      'Automated pipelines with AWS CodeDeploy & Docker; cut rollback incidents by 40%.',
    ],
  },
  {
    logo: '/logos/elavon.png',
    company: 'Elavon – U.S. Bank',
    period: 'Apr 2020 – Dec 2022',
    role: 'Java Full-Stack Developer',
    details: [
      'Built PCI-compliant REST APIs with Spring Boot & Hibernate; integrated transient tokenization.',
      'Collaborated on React merchant dashboards for real-time transaction reporting.',
      'Designed Spring Batch jobs for daily settlement reconciliation across 3 regions.',
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-24 py-16 bg-ivory dark:bg-navy"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-navy dark:text-gold">
          Experience
        </h2>
        <div className="mt-8">
          <Timeline items={experiences} />
        </div>
      </div>
    </motion.section>
  );
}