export type Product = {
  name: string;
  spec: string;
  role: string;
};

export type Category = {
  id: string;
  index: string;
  name: string;
  promise: string;
  products: Product[];
};

export const poultryCategories: Category[] = [
  {
    id: "poultry-core",
    index: "01",
    name: "Core energy & protein ingredients",
    promise: "Inputs selected around digestible value, consistency and safety.",
    products: [
      {
        name: "Maize / Corn",
        spec: "Moisture typically ≤14%; test weight, broken/damaged grain, foreign matter and aflatoxin by PO",
        role: "Primary starch-energy source",
      },
      {
        name: "Soybean Meal / Soy DOC",
        spec: "46% / 48% protein; urease, KOH solubility, moisture and aflatoxin controlled",
        role: "Core protein and amino-acid source",
      },
      {
        name: "Rice Bran / Rice Polish",
        spec: "Oil/fat, fibre, moisture, rancidity and silica against agreed receiving limits",
        role: "Energy, fat and carrier value",
      },
      {
        name: "De-Oiled Rice Bran",
        spec: "CP ~13–16%; moisture typically ≤12%; fibre, ash/silica and toxin controls by PO",
        role: "Protein–fibre base and bulk carrier",
      },
      {
        name: "Corn DDGS",
        spec: "CP ~26–30%; fat, fibre, sulphur, colour, moisture and mycotoxins by PO",
        role: "Protein, energy and available phosphorus",
      },
      {
        name: "Rice DDGS",
        spec: "CP ~38–45%; moisture, fibre, ash/silica and aflatoxin by source COA",
        role: "High-protein alternative ingredient",
      },
      {
        name: "Broken Rice / Wheat",
        spec: "Moisture, starch, foreign matter and toxin controls against PO",
        role: "Flexible cereal-energy input",
      },
      {
        name: "Feed-Grade Vegetable Oil",
        spec: "FFA, moisture/impurities, peroxide value, source and handling agreed",
        role: "Concentrated dietary energy",
      },
    ],
  },
  {
    id: "poultry-carriers",
    index: "02",
    name: "Feed-mill carriers & processing inputs",
    promise: "Functional inputs aligned to flow, binding, stability and mill compatibility.",
    products: [
      {
        name: "Maltodextrin",
        spec: "DE, moisture, bulk density, microbiology and grade by application",
        role: "Premix carrier and dispersibility aid",
      },
      {
        name: "Calcium Carbonate / Calcite",
        spec: "Ca %, acid insolubles and particle-size profile",
        role: "Mineral source and carrier",
      },
      {
        name: "Pellet Binder Inputs",
        spec: "Binding mechanism, inclusion rate, ash and pellet-durability evidence",
        role: "Pellet durability and mill throughput",
      },
      {
        name: "Liquid Acids / Preservatives",
        spec: "Active %, density, corrosion/handling and dosing compatibility",
        role: "Feed and raw-material preservation",
      },
    ],
  },
  {
    id: "poultry-amino",
    index: "03",
    name: "Amino acids, choline & osmolytes",
    promise: "Potency, origin, carrier and assay method aligned before quotation.",
    products: [
      {
        name: "DL-Methionine",
        spec: "Feed grade 99% common commercial form",
        role: "First-limiting amino-acid source",
      },
      {
        name: "L-Lysine HCl",
        spec: "98.5% product; effective L-lysine commonly ~78.8%",
        role: "Lysine balance and lower-cost protein formulation",
      },
      {
        name: "L-Lysine Sulphate",
        spec: "70% common commercial grade; effective lysine and carrier basis by COA",
        role: "Alternative lysine source",
      },
      {
        name: "L-Threonine",
        spec: "Feed grade 98.5% common commercial form",
        role: "Amino-acid balance and protein-use efficiency",
      },
      {
        name: "L-Tryptophan",
        spec: "Feed grade 98% common commercial form",
        role: "Precision amino-acid balance",
      },
      {
        name: "Betaine HCl / Anhydrous",
        spec: "Active basis, chloride/moisture and carrier by form",
        role: "Methyl-donor and osmolyte category",
      },
      {
        name: "Choline Chloride 60% Powder",
        spec: "60% powder; carrier, trimethylamine and moisture by COA",
        role: "Choline fortification in dry feed",
      },
      {
        name: "Choline Chloride 75% Liquid",
        spec: "75% liquid; assay, density and trimethylamine by COA",
        role: "Liquid choline fortification",
      },
    ],
  },
  {
    id: "poultry-macro",
    index: "04",
    name: "Macro minerals & electrolytes",
    promise: "Nutrient availability, particle size, contaminants and handling are treated as one specification.",
    products: [
      {
        name: "DCP / MCP",
        spec: "DCP: P ~18%, Ca ~23%; MCP: P ~22–23%, Ca ~16%; fluoride/heavy metals by COA",
        role: "Calcium–phosphorus balance",
      },
      {
        name: "Limestone / Calcite",
        spec: "Ca commonly ≥38%; particle size selected for broiler or layer application",
        role: "Calcium source",
      },
      {
        name: "Feed Salt",
        spec: "NaCl commonly ≥98%; moisture and insolubles by PO",
        role: "Sodium and chloride supply",
      },
      {
        name: "Sodium Bicarbonate",
        spec: "NaHCO₃ commonly ≥99%; moisture and particle size by COA",
        role: "Electrolyte and buffering input",
      },
      {
        name: "Potassium Chloride",
        spec: "KCl purity and feed suitability by source COA",
        role: "Potassium and chloride supply",
      },
      {
        name: "Magnesium Oxide / Magnesium Sulphate",
        spec: "MgO grade or MgSO₄ hydration/purity basis, elemental magnesium and contaminants by COA",
        role: "Macro-mineral and electrolyte programmes",
      },
    ],
  },
  {
    id: "poultry-trace",
    index: "05",
    name: "Trace mineral sources",
    promise: "Chemical form and elemental assay are stated clearly—never hidden behind a generic mineral name.",
    products: [
      {
        name: "Zinc Sulphate Monohydrate",
        spec: "Zn ~33%; zinc oxide, glycinate or chelate forms on request",
        role: "Trace-mineral premixes and enzyme systems",
      },
      {
        name: "Copper Sulphate Pentahydrate",
        spec: "Cu ~24–25%; organic copper forms on request",
        role: "Trace-mineral supply",
      },
      {
        name: "Manganese Sulphate",
        spec: "Mn commonly ~31%; organic forms on request",
        role: "Trace-mineral premixes",
      },
      {
        name: "Ferrous Sulphate",
        spec: "Fe commonly ~30%; hydration/oxidation state by COA",
        role: "Iron fortification",
      },
      {
        name: "Iodine & Selenium Sources",
        spec: "Calcium/potassium iodate or sodium selenite; elemental assay and carrier basis by PO",
        role: "Micro-mineral fortification",
      },
      {
        name: "Organic / Chelated Minerals",
        spec: "Glycinates and methionine chelates; metal %, ligand and evidence pack approved",
        role: "Bioavailable trace-mineral programmes",
      },
    ],
  },
  {
    id: "poultry-vitamins",
    index: "06",
    name: "Vitamins & premix actives",
    promise: "Potency, carrier, shelf life, origin and storage controls are confirmed at quotation.",
    products: [
      {
        name: "Fat-Soluble Vitamins",
        spec: "Vitamin A 1000, D₃ 500, Vitamin E 50%/liquid and K₃ (MSB/MNB forms)",
        role: "Core poultry premix fortification",
      },
      {
        name: "B-Complex Vitamins",
        spec: "B1, B2 80%, B6, B12 1%, niacin/niacinamide, pantothenate, folic acid and biotin",
        role: "Metabolic vitamin fortification",
      },
      {
        name: "Vitamin C",
        spec: "Plain, coated or stabilized forms; assay and stability by COA",
        role: "Premix and stress-support formulations",
      },
      {
        name: "Complete Vitamin Premixes",
        spec: "Broiler/layer/breeder formula, inclusion rate, carrier, overages and homogeneity",
        role: "Ready-to-dose vitamin systems",
      },
    ],
  },
  {
    id: "poultry-functional",
    index: "07",
    name: "Functional feed & mill solutions",
    promise: "The use case comes first: toxin risk, feed preservation, digestibility, gut stability or pellet quality.",
    products: [
      {
        name: "Mycotoxin Risk Management",
        spec: "Target toxins, binding/biotransformation technology, evidence and inclusion rate",
        role: "Raw-material and finished-feed risk control",
      },
      {
        name: "Mould Inhibitors",
        spec: "Organic-acid blend, active %, carrier, corrosivity and storage challenge",
        role: "Shelf-life and mould control",
      },
      {
        name: "Antioxidants",
        spec: "Active system, oil/feed substrate, stability evidence and regulatory status",
        role: "Fat and feed oxidation control",
      },
      {
        name: "Phytase",
        spec: "FTU/g activity, matrix values, thermostability and coating technology",
        role: "Phosphorus release and formulation efficiency",
      },
      {
        name: "NSP / Multi-Enzymes",
        spec: "Xylanase, beta-glucanase, cellulase or multi-activity profile",
        role: "Feed digestibility support",
      },
      {
        name: "Protease",
        spec: "Activity units, substrate fit, matrix evidence and pelleting stability",
        role: "Protein digestibility support",
      },
      {
        name: "Probiotics / Gut Flora Stabilizers",
        spec: "Declared strain(s), CFU, stability, carrier and shelf life",
        role: "Gut microbial stability",
      },
      {
        name: "Acidifiers / Emulsifiers",
        spec: "Active blend, release profile, HLB/technology and validated inclusion",
        role: "Feed hygiene, digestion and fat utilisation",
      },
      {
        name: "Pellet Binders",
        spec: "Binding chemistry, inclusion rate, ash and PDI evidence",
        role: "Pellet strength and process consistency",
      },
    ],
  },
];

export const cattleCategories: Category[] = [
  {
    id: "cattle-core",
    index: "01",
    name: "Energy, fibre & palatability",
    promise: "Bulk ingredients matched to nutrient value, mill usability and landed cost.",
    products: [
      {
        name: "Maize / Corn",
        spec: "Moisture typically ≤14%; test weight, damaged grain, foreign matter and aflatoxin by PO",
        role: "Concentrated starch-energy source",
      },
      {
        name: "De-Oiled Rice Bran",
        spec: "CP ~13–16%; moisture typically ≤12%; fibre, ash/silica and aflatoxin as agreed",
        role: "Protein–fibre base and bulk carrier",
      },
      {
        name: "Rice Bran / Rice Polish",
        spec: "CP ~13–16%; oil/fat ~13–19%; moisture, rancidity and silica controlled",
        role: "Digestible energy, fat and palatability",
      },
      {
        name: "Wheat Bran",
        spec: "Moisture typically ≤12%; CP, fibre, ash, foreign matter and infestation as agreed",
        role: "Fibre, energy and ration bulk",
      },
      {
        name: "Molasses",
        spec: "Brix, total sugars, ash and moisture against source COA",
        role: "Energy, palatability, binding and dust control",
      },
      {
        name: "Broken Rice / Other Grains",
        spec: "Moisture, starch, broken/foreign matter and toxin limits against PO",
        role: "Flexible cereal-energy input",
      },
    ],
  },
  {
    id: "cattle-protein",
    index: "02",
    name: "Protein meals & distillers",
    promise: "Protein percentage is only the start; source quality and anti-nutritional controls decide real value.",
    products: [
      {
        name: "Soybean Meal / Soy DOC",
        spec: "46% / 48% protein; moisture, urease, KOH solubility and aflatoxin as agreed",
        role: "High-quality protein source",
      },
      {
        name: "Mustard DOC",
        spec: "CP ~35–38%; moisture typically ≤12%; fibre, oil and adulteration controls",
        role: "Cost-effective ruminant protein",
      },
      {
        name: "Cottonseed DOC / Meal",
        spec: "CP commonly ~36–40%; moisture, fibre, residual oil and free gossypol controlled",
        role: "Ruminant protein and fibre source",
      },
      {
        name: "Groundnut DOC / Extraction",
        spec: "CP commonly ~45%; moisture, fibre, residual oil and aflatoxin controlled",
        role: "High-protein oilseed meal",
      },
      {
        name: "Corn DDGS",
        spec: "CP ~26–30%; fat, fibre, moisture, sulphur, colour and mycotoxins by PO",
        role: "Protein, energy and digestible fibre",
      },
      {
        name: "Rice DDGS",
        spec: "CP ~38–45%; moisture, fibre, ash/silica and aflatoxin by source COA",
        role: "High-protein co-product",
      },
    ],
  },
  {
    id: "cattle-macro",
    index: "03",
    name: "Macro minerals, buffers & electrolytes",
    promise: "Grade, reactivity, elemental value and receiving limits are aligned to the ration.",
    products: [
      {
        name: "Magnesium Oxide 85%",
        spec: "MgO 85% typical; elemental Mg ~51%; reactivity and particle size on request",
        role: "Magnesium and rumen-buffering programmes",
      },
      {
        name: "Sodium Bicarbonate",
        spec: "NaHCO₃ commonly ≥99%; moisture and particle size by COA",
        role: "Rumen pH management",
      },
      {
        name: "Dicalcium Phosphate",
        spec: "P ≥18%, Ca ≥23%; fluoride and heavy metals by COA",
        role: "Calcium–phosphorus balance",
      },
      {
        name: "Tricalcium Phosphate",
        spec: "Calcium/phosphorus grade and bioavailability basis against source COA",
        role: "Macro-mineral fortification",
      },
      {
        name: "Calcite / Calcium Carbonate",
        spec: "Ca ≥38% common feed grade; particle size, moisture and heavy metals by COA",
        role: "Calcium source and mineral-mixture carrier",
      },
      {
        name: "Feed Salt",
        spec: "NaCl ≥98% common feed grade; moisture and insoluble matter by COA",
        role: "Sodium and chloride supply",
      },
      {
        name: "Potassium Chloride",
        spec: "Active/purity and feed suitability by source COA",
        role: "Electrolyte formulations",
      },
      {
        name: "Magnesium Sulphate",
        spec: "Active/purity, hydration state and feed suitability by source COA",
        role: "Magnesium and electrolyte formulations",
      },
    ],
  },
  {
    id: "cattle-trace",
    index: "04",
    name: "Trace mineral sources",
    promise: "Elemental assay, chemical form and contaminant profile stay visible from enquiry to delivery.",
    products: [
      {
        name: "Zinc",
        spec: "Zinc sulphate monohydrate — Zn ~33%; zinc oxide or organic zinc on request",
        role: "Trace-mineral mixtures",
      },
      {
        name: "Copper",
        spec: "Copper sulphate pentahydrate — Cu ~24–25%; glycinate/chelate on request",
        role: "Trace-mineral mixtures",
      },
      {
        name: "Manganese",
        spec: "Manganese sulphate — Mn commonly ~31%; organic forms on request",
        role: "Trace-mineral mixtures",
      },
      {
        name: "Iron",
        spec: "Ferrous sulphate — Fe commonly ~30%; hydration/oxidation state by COA",
        role: "Iron fortification",
      },
      {
        name: "Cobalt, Iodine & Selenium",
        spec: "Cobalt sulphate, calcium/potassium iodate and sodium selenite; active basis by COA",
        role: "Micro-mineral fortification",
      },
      {
        name: "Glycinates / Methionine Chelates",
        spec: "Metal content, ligand ratio, carrier, particle size and source evidence to be approved",
        role: "Bioavailable trace-mineral programmes",
      },
    ],
  },
  {
    id: "cattle-vitamins",
    index: "05",
    name: "Vitamins & nutritional actives",
    promise: "Potency, origin, carrier, shelf life and intended ration are confirmed before offer.",
    products: [
      {
        name: "Fat-Soluble Vitamins",
        spec: "Vitamin A 1000, D3 500, Vitamin E 50%/liquid and Vitamin K3 forms",
        role: "Mineral-mixture and supplement fortification",
      },
      {
        name: "B-Complex & Vitamin C",
        spec: "B1, B2 80%, B6, B12 1%, niacin, pantothenate, folic acid, biotin and Vitamin C",
        role: "Metabolic vitamin fortification",
      },
      {
        name: "Choline / Betaine",
        spec: "Choline grade or betaine HCl/anhydrous form; active basis and carrier by PO",
        role: "Methyl-donor and nutritional-active systems",
      },
      {
        name: "Propylene Glycol",
        spec: "Purity and feed suitability against approved manufacturer COA",
        role: "Liquid energy and formulation input",
      },
      {
        name: "Maltodextrin / Carriers",
        spec: "DE, moisture, bulk density, flow and microbiology by formulation requirement",
        role: "Premix carrier and dispersibility aid",
      },
    ],
  },
  {
    id: "cattle-rumen",
    index: "06",
    name: "Rumen & feed-quality solutions",
    promise: "Each functional input is tied to a defined formulation or feed-quality objective.",
    products: [
      {
        name: "Live Yeast / Yeast Culture",
        spec: "Strain, CFU or activity, carrier, stability and shelf life",
        role: "Rumen-function programmes",
      },
      {
        name: "Rumen-Protected Fat",
        spec: "Fat %, calcium, moisture, melting profile and free-fatty-acid limits",
        role: "Energy density in dairy rations",
      },
      {
        name: "Protected Choline / Methionine",
        spec: "Active %, protection technology and release evidence",
        role: "Targeted nutritional-active delivery",
      },
      {
        name: "Mycotoxin Risk Management",
        spec: "Target toxins, active technology, inclusion rate and evidence pack",
        role: "Raw-material and ration risk control",
      },
      {
        name: "Mould Inhibitors / Organic Acids",
        spec: "Active blend, carrier, corrosivity/handling and recommended inclusion",
        role: "Feed preservation and shelf-life control",
      },
      {
        name: "Mineral / Vitamin Premixes",
        spec: "Species/stage formula, inclusion rate, overages, carrier and homogeneity",
        role: "Ready-to-dose fortification systems",
      },
    ],
  },
];
