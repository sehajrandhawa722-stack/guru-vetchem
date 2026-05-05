'use client';

import { motion } from 'framer-motion';

const WhyManufacturersWorkWithUs = () => {
  const reasons = [
    {
      title: "COA-Supported Quality",
      description: "Every batch comes with Certificate of Analysis ensuring consistent quality standards.",
      icon: "📋"
    },
    {
      title: "Bulk MOQ Pricing",
      description: "Competitive pricing designed for manufacturers with bulk requirements.",
      icon: "💰"
    },
    {
      title: "Predictable Dispatch",
      description: "Reliable supply chain with consistent delivery timelines across India.",
      icon: "🚚"
    },
    {
      title: "Technical Support",
      description: "Expert guidance on product selection and formulation support.",
      icon: "🔬"
    },
    {
      title: "Pan-India Network",
      description: "Strategic locations in Amritsar and Hyderabad for efficient distribution.",
      icon: "📍"
    },
    {
      title: "Regulatory Compliance",
      description: "GST registered, Udyam/MSME certified with proper documentation.",
      icon: "✅"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Manufacturers Work With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by feed manufacturers across India for reliable bulk supply and quality assurance
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyManufacturersWorkWithUs;