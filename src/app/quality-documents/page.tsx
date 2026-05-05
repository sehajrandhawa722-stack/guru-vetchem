import QualityDocuments from "@/components/QualityDocuments";

export const metadata = {
  title: "Quality & Documents - Guru Vetchem",
  description: "Complete regulatory compliance and quality assurance documentation for feed-grade chemicals and minerals supplied by Guru Vetchem.",
};

export default function QualityDocumentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Quality Assurance & Documentation</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Guru Vetchem, we prioritize complete transparency and regulatory compliance.
            Every product comes with comprehensive documentation ensuring peace of mind for your procurement decisions.
          </p>
        </div>
        <QualityDocuments />
      </div>
    </div>
  );
}