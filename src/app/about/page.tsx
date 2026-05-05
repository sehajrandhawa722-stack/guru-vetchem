export const metadata = {
  title: "About Guru Vetchem - B2B Feed Chemicals Supplier",
  description: "Learn about Guru Vetchem, your trusted pan-India sourcing partner for feed-grade chemicals, minerals, and specialty additives.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Guru Vetchem</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-8">
          Guru Vetchem is a dedicated pan-India B2B sourcing and supply partner specializing in feed-grade chemicals, minerals, and specialty additives. We focus on supporting serious bulk buyers in the feed manufacturing industry with reliable, documentation-first procurement solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide verified, high-quality feed-grade inputs with complete traceability and fast delivery across India, ensuring our partners can focus on their core business of producing premium animal nutrition products.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Documentation and transparency</li>
              <li>• Quality assurance with COA support</li>
              <li>• Reliable pan-India supply network</li>
              <li>• Customer-focused procurement support</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Guru Vetchem?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Verified Sourcing</h3>
              <p className="text-sm text-gray-600">All products sourced from certified manufacturers with quality documentation.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Fast Dispatch</h3>
              <p className="text-sm text-gray-600">Pan-India delivery network ensuring timely supply to your location.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">Technical guidance and procurement assistance for bulk requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}