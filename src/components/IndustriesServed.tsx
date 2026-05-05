'use client';

import { motion } from 'framer-motion';

const IndustriesServed = () => {
  const industries = [
    {
      name: "Poultry Feed Manufacturers",
      description: "Complete mineral and vitamin premixes for broiler, layer, and breeder feeds",
      products: ["Zinc Sulphate", "Manganese Sulphate", "Vitamin E", "Vitamin AD3"]
    },
    {
      name: "Cattle Feed Producers",
      description: "High-quality inputs for dairy cattle, beef cattle, and calf starter feeds",
      products: ["Magnesium Oxide", "Ferrous Sulphate", "Copper Sulphate", "Chelated Minerals"]
    },
    {
      name: "Aquaculture Feed Companies",
      description: "Specialized formulations for fish and shrimp feed manufacturing",
      products: ["Copper Sulphate", "Zinc Sulphate", "Vitamin Premixes", "Amino Acids"]
    },
    {
      name: "Pet Food Manufacturers",
      description: "Premium ingredients for dog, cat, and specialty pet food production",
      products: ["Amino Acids", "Vitamins", "Chelates", "Functional Additives"]
    },
    {
      name: "Premix & Supplement Companies",
      description: "Raw materials for mineral premixes, vitamin premixes, and specialty supplements",
      products: ["Trace Minerals", "Vitamins", "Chelated Minerals", "Functional Agents"]
    },
    {
      name: "Industrial Feed Applications",
      description: "Inputs for industrial feed applications and bulk commodity feeds",
      products: ["Technical Urea", "Maltodextrin", "Industrial Acids", "Binders"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Supporting feed manufacturers across all animal nutrition segments with specialized inputs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key Products:</h4>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product, i) => (
                    <span key={i} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;