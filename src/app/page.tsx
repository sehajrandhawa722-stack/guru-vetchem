import HeroBanner from "@/components/HeroBanner";
import TrustBadges from "@/components/TrustBadges";
import ProductCategoryCards from "@/components/ProductCategoryCards";
import ProductGrid from "@/components/ProductGrid";
import WhyManufacturersWorkWithUs from "@/components/WhyManufacturersWorkWithUs";
import IndustriesServed from "@/components/IndustriesServed";
import QualityDocuments from "@/components/QualityDocuments";
import QuoteFlow from "@/components/QuoteFlow";
import ContactSection from "@/components/ContactSection";
import { products, productCategories } from "@/data/products";

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      <HeroBanner />
      <TrustBadges />
      <ProductCategoryCards categories={productCategories} />
      <ProductGrid products={featuredProducts} title="Featured Products" />
      <WhyManufacturersWorkWithUs />
      <IndustriesServed />
      <QualityDocuments />
      <QuoteFlow />
      <ContactSection />
    </div>
  );
}
