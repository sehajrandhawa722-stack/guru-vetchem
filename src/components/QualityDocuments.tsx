'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const QualityDocuments = () => {
  const documents = [
    {
      title: "Certificate of Analysis (COA)",
      description: "Detailed chemical analysis and quality parameters for every batch",
      icon: "📄"
    },
    {
      title: "GST Registration",
      description: "Registered supplier with proper GST compliance and documentation",
      icon: "🏛️"
    },
    {
      title: "Udyam/MSME Certificate",
      description: "Government recognized MSME with verified business credentials",
      icon: "🏢"
    },
    {
      title: "Lab Test Reports",
      description: "Independent laboratory testing and quality verification reports",
      icon: "🔬"
    },
    {
      title: "IEC Certificate",
      description: "Import-Export Code for international trade compliance",
      icon: "🌐"
    },
    {
      title: "Quality Assurance Manual",
      description: "Comprehensive quality control and assurance procedures",
      icon: "📋"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quality & Documentation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete regulatory compliance and quality assurance documentation for peace of mind
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{doc.title}</h3>
              <p className="text-gray-600 text-sm">{doc.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Request Documentation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityDocuments;