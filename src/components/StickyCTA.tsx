'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50"
    >
      <div className="flex items-center space-x-2">
        <a
          href="https://wa.me/917009408944"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center space-x-2"
        >
          <span>WhatsApp</span>
        </a>
        <span>|</span>
        <a href="tel:+917009408944" className="hover:underline">Call</a>
        <span>|</span>
        <a href="mailto:info@guruvetchem.in" className="hover:underline">Email</a>
      </div>
    </motion.div>
  );
};

export default StickyCTA;