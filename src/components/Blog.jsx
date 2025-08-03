import React from 'react';

const posts = [
  { title: 'Building Reactive Microservices with Spring WebFlux & Reactor', link: '#' },
  { title: 'Strategy Pattern for Country-Specific Business Logic', link: '#' },
  { title: 'High-Volume Messaging with Google Pub/Sub & ActiveMQ', link: '#' },
  { title: 'GitOps CI/CD on OpenShift with Argo CD', link: '#' },
  { title: 'Designing PCI-Compliant Payment APIs in Spring Boot', link: '#' },
  { title: 'Introduction to K-means Clustering in Java', link: '#' },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="block p-4 bg-gray-50 rounded hover:bg-gray-100 transition"
            >
              {post.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
