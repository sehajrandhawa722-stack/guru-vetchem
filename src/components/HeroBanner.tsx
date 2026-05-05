'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img src="/logo-watermark.svg" alt="" className="max-w-xl w-full h-auto" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
        >
          Bulk Feed Inputs. Verified Quality. Predictable Dispatch.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Guru Vetchem supplies COA-supported minerals, vitamins, chelates, sulphates, amino acids and functional feed additives to manufacturers across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-4 mb-8"
        >
          <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Request Bulk Quote
          </Link>
          <Link href="/products" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition">
            View Product Categories
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-600"
        >
          <a href="tel:+917009408944" className="hover:text-green-600">Call: +91 70094 08944</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;