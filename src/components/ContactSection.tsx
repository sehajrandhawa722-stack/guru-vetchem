'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Source Bulk Feed Inputs?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Contact us for COA-supported pricing and reliable supply across India
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300 mb-4">Bulk enquiries and technical support</p>
            <a href="tel:+917009408944" className="text-green-400 hover:text-green-300 font-medium">
              +91 70094 08944
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300 mb-4">Send requirements and get quotes</p>
            <a href="mailto:info@guruvetchem.in" className="text-green-400 hover:text-green-300 font-medium">
              info@guruvetchem.in
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Locations</h3>
            <p className="text-gray-300 mb-4">Strategic distribution network</p>
            <p className="text-green-400 font-medium">Amritsar | Hyderabad</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;