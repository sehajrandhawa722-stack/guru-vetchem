'use client';

import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    'GST Registered Supplier',
    'Udyam/MSME Registered',
    'COA-Supported Supply',
    'Bulk MOQ Pricing',
    'Pan-India Dispatch',
    'Amritsar | Hyderabad Network'
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center"
        >
          {badges.map((badge, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border">
              <p className="text-sm font-semibold text-gray-800">{badge}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;