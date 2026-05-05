'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const QuoteFlow = () => {
  const steps = [
    {
      step: "1",
      title: "Submit Requirements",
      description: "Share your product needs, quantities, and delivery location",
      icon: "📝"
    },
    {
      step: "2",
      title: "Get COA & Pricing",
      description: "Receive Certificate of Analysis and competitive bulk pricing",
      icon: "💰"
    },
    {
      step: "3",
      title: "Confirm Order",
      description: "Place order with payment terms and delivery schedule",
      icon: "✅"
    },
    {
      step: "4",
      title: "Quality Dispatch",
      description: "Receive products with documentation and tracking information",
      icon: "🚚"
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple Quote & Order Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Streamlined process from inquiry to delivery with complete transparency
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Start Your Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteFlow;