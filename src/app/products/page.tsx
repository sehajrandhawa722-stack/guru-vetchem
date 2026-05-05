import ProductGrid from "@/components/ProductGrid";
import ProductCategoryCards from "@/components/ProductCategoryCards";
import { productCategories, products } from "@/data/products";

export const metadata = {
  title: "Feed Grade Chemicals & Minerals - Guru Vetchem Products",
  description: "Browse our comprehensive range of feed-grade chemicals, minerals, and specialty additives with COA support.",
};

export default function Products() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Products</h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive range of feed-grade chemicals and minerals for animal nutrition, supplied with documentation and quality assurance.
        </p>

        <ProductCategoryCards categories={productCategories} />

        <div className="mt-16">
          <ProductGrid
            products={products}
            title="All Products"
          />
        </div>
      </div>
    </div>
  );
}