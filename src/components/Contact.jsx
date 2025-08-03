import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaClipboard } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState({ email: false, phone: false });

  const copyToClipboard = (type, text) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-ivory dark:bg-navy flex justify-center"
    >
      <div className="max-w-lg w-full p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gold dark:border-ivory shadow-lg hover:shadow-2xl transition">
        <h2 className="text-3xl font-serif font-bold text-navy dark:text-gold mb-6">
          Contact Me
        </h2>

        <div className="space-y-4">
          {/* Email Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-navy dark:text-ivory">
              <FaEnvelope className="mr-3 text-gold" />
              <a href="mailto:jay.sravan.dev@gmail.com" className="underline">
                jay.sravan.dev@gmail.com
              </a>
            </div>
            <button
              onClick={() => copyToClipboard('email', 'jay.sravan.dev@gmail.com')}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gold hover:text-navy transition"
            >
              <FaClipboard />
            </button>
            {copied.email && (
              <span className="ml-2 text-sm text-green-600 dark:text-green-300">
                Copied!
              </span>
            )}
          </div>

          {/* Phone Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-navy dark:text-ivory">
              <FaPhoneAlt className="mr-3 text-gold" />
              <a href="tel:+17343947436" className="underline">
                734-394-7436
              </a>
            </div>
            <button
              onClick={() => copyToClipboard('phone', '734-394-7436')}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gold hover:text-navy transition"
            >
              <FaClipboard />
            </button>
            {copied.phone && (
              <span className="ml-2 text-sm text-green-600 dark:text-green-300">
                Copied!
              </span>
            )}
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-6 justify-center">
            <motion.a
              href="https://github.com/vjsravan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-2xl text-navy dark:text-ivory"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jaysravan-fullstack"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-2xl text-navy dark:text-ivory"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}