import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Guru Vetchem</h3>
            <p className="text-sm mb-4">Bulk Feed Inputs. Verified Quality. Predictable Dispatch.</p>
            <p className="text-sm">Pan-India B2B sourcing and supply partner for feed-grade chemicals and additives.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=core-inputs" className="hover:text-green-400">Core High-Volume Inputs</Link></li>
              <li><Link href="/products?category=sulphates-trace-minerals" className="hover:text-green-400">Sulphates & Trace Minerals</Link></li>
              <li><Link href="/products?category=chelated-minerals" className="hover:text-green-400">Organic / Chelated Minerals</Link></li>
              <li><Link href="/products?category=vitamins" className="hover:text-green-400">Vitamins</Link></li>
              <li><Link href="/products" className="hover:text-green-400">View All Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/industries#poultry" className="hover:text-green-400">Poultry Feed</a></li>
              <li><a href="/industries#cattle" className="hover:text-green-400">Cattle Feed</a></li>
              <li><a href="/industries#aquaculture" className="hover:text-green-400">Aquaculture</a></li>
              <li><a href="/industries#pet-food" className="hover:text-green-400">Pet Food</a></li>
              <li><a href="/industries#premix" className="hover:text-green-400">Premix Companies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">Bulk enquiries:</p>
            <p className="text-sm mb-2"><a href="tel:+917009408944" className="hover:text-green-400">+91 70094 08944</a></p>
            <p className="text-sm mb-4"><a href="mailto:info@guruvetchem.in" className="hover:text-green-400">info@guruvetchem.in</a></p>
            <p className="text-sm">Locations: Amritsar | Hyderabad</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="mb-2">Certifications: GST Registered | Udyam/MSME Certified | IEC Holder</p>
              <p>COA-Supported Supply | Pan-India Dispatch | Bulk MOQ Pricing</p>
            </div>
            <div className="text-right">
              <p>&copy; 2024 Guru Vetchem. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;