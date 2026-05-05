'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProductCategory } from '@/data/products';

interface ProductCategoryCardsProps {
  categories: ProductCategory[];
}

const ProductCategoryCards = ({ categories }: ProductCategoryCardsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of feed-grade inputs for manufacturers across all animal nutrition segments
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <ul className="text-sm text-gray-500 mb-4">
                {category.examples.slice(0, 3).map((example, i) => (
                  <li key={i} className="mb-1">• {example}</li>
                ))}
              </ul>
              <Link
                href={`/products?category=${category.id}`}
                className="text-green-600 hover:text-green-800 font-medium text-sm"
              >
                View Products →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryCards;