export const metadata = {
  title: "About Guru Vetchem - B2B Feed Chemicals Supplier",
  description: "Learn about Guru Vetchem, your trusted pan-India sourcing partner for feed-grade chemicals, minerals, and specialty additives.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Guru Vetchem</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your dedicated pan-India B2B sourcing and supply partner specializing in feed-grade chemicals,
            minerals, and specialty additives. We focus on supporting serious bulk buyers in the feed manufacturing
            industry with reliable, documentation-first procurement solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mission and Values Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-green-600 text-2xl">🎯</span>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide verified, high-quality feed-grade inputs with complete traceability and fast delivery
                across India, ensuring our partners can focus on their core business of producing premium animal
                nutrition products.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl">💎</span>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-gray-600 text-lg">Documentation and transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-gray-600 text-lg">Quality assurance with COA support</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-gray-600 text-lg">Reliable pan-India supply network</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-gray-600 text-lg">Customer-focused procurement support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r from-green-50 via-white to-blue-50 rounded-2xl p-12 border border-green-100">
            <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">Why Choose Guru Vetchem?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Verified Sourcing</h3>
                <p className="text-gray-600 leading-relaxed">
                  All products sourced from certified manufacturers with complete quality documentation and traceability.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Dispatch</h3>
                <p className="text-gray-600 leading-relaxed">
                  Extensive pan-India delivery network ensuring timely supply to your manufacturing location.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated procurement specialists providing technical guidance and bulk requirement assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Partner With Us?</h3>
              <p className="text-gray-600 mb-6">
                Join leading feed manufacturers who trust Guru Vetchem for their bulk chemical and mineral requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
                >
                  Request Quote
                </a>
                <a
                  href="/products"
                  className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}