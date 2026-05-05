export const metadata = {
  title: "Industries Served - Feed Manufacturing Sectors",
  description: "Guru Vetchem supplies feed-grade chemicals and minerals to poultry, cattle, aqua, and premix manufacturing industries across India.",
};

export default function Industries() {
  const industries = [
    {
      name: "Poultry Feed Manufacturers",
      description: "Essential minerals and additives for broiler and layer feed production.",
      products: ["Magnesium Oxide", "Copper Sulphate", "Zinc Sulphate", "DCP/TCP"]
    },
    {
      name: "Cattle Feed Manufacturers",
      description: "High-quality feed-grade chemicals for dairy and beef cattle nutrition.",
      products: ["Ferrous Sulphate", "Manganese Sulphate", "Vitamin E", "Calcium Carbonate"]
    },
    {
      name: "Aqua Feed Manufacturers",
      description: "Specialized additives for fish and shrimp feed formulations.",
      products: ["Vitamin AD3", "Toxin Binder", "Sodium Selenite", "Lysine"]
    },
    {
      name: "Premix Manufacturers",
      description: "Bulk minerals and vitamins for premix production and blending.",
      products: ["Zinc Sulphate", "Manganese Sulphate", "Copper Sulphate", "Vitamin E"]
    },
    {
      name: "Feed Supplement Companies",
      description: "Specialty additives and minerals for nutritional supplements.",
      products: ["EDTA Disodium", "Cobalt Sulphate", "Ammonium Chloride", "Magnesium Sulphate"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Industries We Serve</h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Supporting feed manufacturers and supplement companies across India with reliable supply of feed-grade chemicals and minerals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{industry.name}</h2>
            <p className="text-gray-600 mb-4">{industry.description}</p>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Key Products:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {industry.products.map((product, idx) => (
                  <li key={idx}>• {product}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}