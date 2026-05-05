import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Guru Vetchem - Request Quote for Feed Chemicals",
  description: "Get in touch with Guru Vetchem for bulk feed-grade chemicals and minerals. Request quotes via phone, email, or WhatsApp.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Reach out to us for bulk requirements of feed-grade chemicals and minerals. We're here to support your procurement needs across India.
      </p>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">+91 70094 08944</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">info@guruvetchem.in</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
          <a
            href="https://wa.me/917009408944"
            target="_blank"
            rel="noreferrer noopener"
            className="text-green-600 hover:text-green-800 font-medium"
          >
            +91 70094 08944
          </a>
        </div>
      </div>
    </div>
  );
}