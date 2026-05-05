import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Guru Vetchem - Request Quote for Feed Chemicals",
  description: "Get in touch with Guru Vetchem for bulk feed-grade chemicals and minerals. Request quotes via phone, email, or WhatsApp.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to source premium feed-grade chemicals and minerals? Reach out to our procurement specialists
            for bulk requirements across India. We're committed to supporting your business with reliable supply solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Request a Quote</h2>
              <ContactForm />
            </div>

            {/* Contact Information Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                      <a
                        href="tel:+917009408944"
                        className="text-green-600 hover:text-green-800 font-medium text-lg"
                      >
                        +91 70094 08944
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600 mb-2">Send us your detailed requirements</p>
                      <a
                        href="mailto:info@guruvetchem.in"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        info@guruvetchem.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">Quick quotes and instant updates</p>
                      <a
                        href="https://wa.me/917009408944"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-green-600 hover:text-green-800 font-medium text-lg"
                      >
                        +91 70094 08944
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Guru Vetchem?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Pan-India delivery network
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    COA-supported quality assurance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Bulk procurement expertise
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Transparent documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}