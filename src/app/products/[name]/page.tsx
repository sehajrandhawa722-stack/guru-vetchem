import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    name: product.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params;
  const product = products.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === name);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Feed Grade Chemical Supplier India | Guru Vetchem`,
    description: `Buy ${product.name} (${product.grade}) for feed manufacturing. MOQ: ${product.moq}. COA available, pan-India supply. Request quote now.`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { name } = await params;
  const product = products.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === name);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className="space-y-3 mb-6">
            <p><strong className="text-green-600">Grade:</strong> {product.grade}</p>
            <p><strong className="text-green-600">Application:</strong> {product.application}</p>
            <p><strong className="text-green-600">MOQ:</strong> {product.moq}</p>
          </div>
          <div className="space-y-4">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition block text-center"
            >
              Request Bulk Quote
            </Link>
            <Link
              href="/products"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition block text-center"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}