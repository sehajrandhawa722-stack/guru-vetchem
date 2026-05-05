# Guru Vetchem Website Development Plan

## 1. Final Sitemap

- Home (/)
- Products (/products)
  - Feed Grade Minerals & Chemicals (/products/feed-grade)
  - Specialty Feed Additives (/products/specialty-additives)
- Industries Served (/industries)
- About (/about)
- Contact / Request Quote (/contact)
- Product-specific pages (e.g., /products/technical-feed-grade-urea)
- Download Catalogue (/catalogue)

## 2. Homepage Wireframe

[Hero Section]
- Headline: "Reliable Bulk Feed-Grade Chemicals & Minerals Supplier Across India"
- Subheadline: "COA-Supported Sourcing with Fast Pan-India Dispatch for Feed Manufacturers"
- CTA: Request Quote | View Products

[Trust Badges]
- GST Verified | Udyam/MSME Certified | IEC Holder | COA Available | Lab Reports | Pan-India Supply

[Product Categories]
- Feed Grade Minerals & Chemicals
- Specialty Feed Additives
- Selected Industrial Chemicals

[Featured Products]
- Grid of 6-8 priority products with images, names, grades

[Bulk RFQ Flow]
- Simple form: Product, Quantity, Location, Contact

[How Procurement Works]
- 4-step process: Inquiry -> Verification -> Sourcing -> Dispatch

[Industries Served]
- Poultry Feed | Cattle Feed | Aqua Feed | Premix Manufacturers

[Documentation & Quality]
- COA, Lab Reports, Packaging Photos

[CTA: Download Catalogue]

[Sticky CTA: WhatsApp | Call | Email]

## 3. Page-by-Page Copy

### Home
Hero: "Your Trusted Partner for Bulk Feed-Grade Chemicals and Minerals"
"Supplying verified feed-grade urea, magnesium oxide, copper sulphate, and more with COA documentation and pan-India delivery."

Trust: "Backed by GST, Udyam, IEC, and quality assurance."

Products: "Explore our range of feed-grade minerals, chemicals, and specialty additives."

RFQ: "Get instant quotes for bulk requirements."

### Products
"Comprehensive range of feed-grade chemicals and minerals for animal nutrition."
Categories with descriptions.

### About
"Guru Vetchem: Pan-India B2B sourcing and supply partner for feed-grade chemicals, minerals, and specialty additives."
"Focused on documentation-first procurement support for serious bulk buyers."

### Contact
Form fields as specified.
"Reach us via WhatsApp, phone, or email for immediate assistance."

## 4. Product Page Copy Template

[Product Name] - [Grade] - Guru Vetchem

Grade: [Grade]
Form: [Form]
Typical Application: [Application]
Packaging: [Packaging]
MOQ: [MOQ]
COA Available: Yes
Lab Report Available: [Yes/No]
Delivery Regions: Pan-India
Common Buyers: Feed manufacturers, premix companies

[Request Quote Button]
[Request COA Button]

FAQs:
- What is the purity level?
- How is packaging done?
- Delivery timeline?

SEO Title: "[Product Name] [Grade] Supplier in India - Guru Vetchem"
Meta: "Buy [Product Name] [Grade] for feed manufacturing. COA available, pan-India supply. Request quote now."

## 5. SEO Keyword Plan

Primary Keywords:
- Feed grade chemicals supplier India
- Bulk feed minerals India
- Copper sulphate feed grade
- Zinc sulphate monohydrate
- Magnesium oxide 85% supplier

Long-tail:
- Buy technical urea for animal feed
- DCP TCP supplier for poultry feed
- Vitamin E 50% feed additive

Product pages for each priority product.

On-page: H1 with product name, meta descriptions, alt tags.

## 6. Product Data Structure

```typescript
interface Product {
  id: string;
  name: string;
  grade: string;
  form: string;
  application: string;
  packaging: string;
  moq: string;
  coaAvailable: boolean;
  labReportAvailable: boolean;
  deliveryRegions: string[];
  commonBuyers: string[];
  image: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
}
```

Stored in /data/products.ts

## 7. UI Component Plan

- Header with navigation
- HeroBanner
- TrustBadges
- ProductCard
- ProductGrid
- RFQForm
- ContactForm
- Footer
- StickyCTA

Using Tailwind for styling.

## 8. Animation Plan

- Subtle fade-in on scroll for sections (Framer Motion)
- Hover effects on product cards
- Loading animations for forms

## 9. Form Integration Plan

- Contact form submits to Google Sheets via API
- Fields: name, company, phone, email, product, grade, quantity, location, timeline, message, contactMethod
- Validation with react-hook-form
- Success message

## 10. Complete Developer-Ready Implementation Plan

- Set up Next.js with TypeScript, Tailwind
- Create data files for products
- Build components in /components
- Pages in /app
- Integrate forms with Google Sheets API
- Add SEO metadata
- Optimize images
- Test responsiveness
- Deploy to Vercel

## 11. Launch Checklist

- Domain setup: guruvetchem.com
- SSL certificate
- Google Analytics
- Google Search Console
- Sitemap submission
- Robots.txt
- Test all forms
- Mobile testing
- Performance audit

## 12. 30-Day SEO and Buyer Acquisition Plan

- Week 1: On-page SEO, meta tags
- Week 2: Content creation, blog if needed
- Week 3: Backlink building, local citations
- Week 4: PPC ads for high-intent keywords, monitor leads

Acquire buyers via RFQs, follow-ups.