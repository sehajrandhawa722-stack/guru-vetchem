'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const getCategoryInitials = (categoryId: string) => {
    const categoryMap: { [key: string]: string } = {
      'core-inputs': 'CI',
      'sulphates-trace-minerals': 'TM',
      'iodine-selenium': 'IS',
      'chelated-minerals': 'CM',
      'vitamins': 'VT',
      'functional-agents': 'FA',
      'amino-acids': 'AA',
      'acids-liquids': 'AL',
      'carriers-binders': 'CB',
      'chlorides-salts': 'CS'
    };
    return categoryMap[categoryId] || 'PR';
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={150}
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-green-100 to-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {getCategoryInitials(product.categoryId)}
              </div>
              <div className="text-xs text-gray-600">Product Image</div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">Grade: {product.grade}</p>
        <p className="text-sm text-gray-600 mb-4">MOQ: {product.moq}</p>
        <Link
          href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;