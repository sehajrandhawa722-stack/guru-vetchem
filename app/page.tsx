"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { cattleCategories, poultryCategories } from "./catalogue";

const sectorDetails = [
  {
    id: "poultry",
    label: "Poultry nutrition",
    headline: "Feed conversion starts before the feed mill.",
    copy: "Energy, amino acids, minerals, vitamins and feed-quality solutions mapped to mill-ready buying controls.",
    image: "/images/guru-vetchem-poultry.webp",
    audience: "Feed mills · Integrators · Premix units",
  },
  {
    id: "cattle",
    label: "Cattle & dairy",
    headline: "Buy nutrient value. Not a commodity name.",
    copy: "Bulk ingredients, rumen inputs, macro minerals and specialty nutrition matched to the ration and receiving specification.",
    image: "/images/guru-vetchem-cattle.webp",
    audience: "Compound feed · Mineral mixtures · Dairy formulators",
  },
];

export default function Home() {
  const [heroProgress, setHeroProgress] = useState(0);
  const [vertical, setVertical] = useState<"poultry" | "cattle">("poultry");
  const [activeCategory, setActiveCategory] = useState("poultry-core");
  const [query, setQuery] = useState("");
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "fallback"
  >("idle");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const next = Math.min(window.scrollY / Math.max(window.innerHeight * 0.85, 1), 1);
      setHeroProgress(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const categories = vertical === "poultry" ? poultryCategories : cattleCategories;
  const selected =
    categories.find((category) => category.id === activeCategory) ?? categories[0];

  const visibleProducts = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return selected.products;
    return categories.flatMap((category) =>
      category.products.filter((product) =>
        `${product.name} ${product.spec} ${product.role}`.toLowerCase().includes(term),
      ),
    );
  }, [categories, query, selected]);

  const chooseVertical = (next: "poultry" | "cattle") => {
    setVertical(next);
    setActiveCategory(next === "poultry" ? "poultry-core" : "cattle-core");
    setQuery("");
  };

  const sendRfq = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("sending");
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    const product = String(data.get("product") ?? "");
    const volume = String(data.get("volume") ?? "");
    const destination = String(data.get("destination") ?? "");
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const contact = String(data.get("contact") ?? "");
    const body = [
      "Hello Guru Vetchem,",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone / email: ${contact}`,
      `Product / specification: ${product}`,
      `Monthly / trial quantity: ${volume}`,
      `Delivery city / pincode: ${destination}`,
      "",
      "Please share source, COA availability, packing, commercial basis and lead time.",
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Sheet endpoint not connected");
      setFormStatus("sent");
      event.currentTarget.reset();
    } catch {
      setFormStatus("fallback");
      window.location.href = `mailto:info@guruvetchem.in?cc=guruvetchem@gmail.com&subject=${encodeURIComponent(
        `RFQ — ${product || "Product enquiry"}`,
      )}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <main
      className="site-shell"
      style={{ "--hero-progress": heroProgress } as React.CSSProperties}
    >
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Guru Vetchem home">
          <span className="brand-mark">GV</span>
          <span className="brand-copy">
            <strong>Guru Vetchem</strong>
            <small>Specification-led sourcing</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#portfolios">Portfolios</a>
          <a href="#products">Products</a>
          <a href="#quality">Quality</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="#contact">
          Start an RFQ
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            Animal nutrition · Feed inputs · Formulation support
          </p>
          <h1>
            Raw materials,
            <span>without the procurement fog.</span>
          </h1>
          <p className="hero-lede">
            Guru Vetchem aligns product, specification, documents and dispatch
            before a truck moves—so procurement and QC are discussing the same
            material.
          </p>
          <div className="hero-actions">
            <a className="button" href="#products">
              Explore portfolios <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:info@guruvetchem.in">
              info@guruvetchem.in <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-object" aria-hidden="true">
          <div className="hero-image-wrap">
            <img
              src="/images/guru-vetchem-hero.webp"
              alt=""
              className="hero-image"
            />
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-pulse">SPEC / COA / DISPATCH</div>
        </div>

        <div className="hero-proof" aria-label="Business credentials">
          <span>GST registered</span>
          <span>Udyam / MSME</span>
          <span>COA-supported supply</span>
          <span>Pan-India dispatch</span>
        </div>
        <a className="scroll-cue" href="#portfolios">
          Scroll to contract the noise
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="manifesto" id="portfolios">
        <p className="section-kicker">Two formulation worlds. One sourcing discipline.</p>
        <div className="manifesto-line">
          <span>Not a catalogue dump.</span>
          <strong>A buying system.</strong>
        </div>
        <p className="manifesto-copy">
          Every portfolio is organised around how feed plants evaluate
          material: nutrient economics, active potency, risk controls,
          documentation and landed commercial clarity.
        </p>
      </section>

      <section className="sector-stage">
        {sectorDetails.map((sector, index) => (
          <article className="sector-card" key={sector.id}>
            <div className="sector-image">
              <img src={sector.image} alt={`${sector.label} sourcing portfolio`} />
              <span>0{index + 1}</span>
            </div>
            <div className="sector-content">
              <p>{sector.label}</p>
              <h2>{sector.headline}</h2>
              <div className="sector-bottom">
                <p>{sector.copy}</p>
                <small>{sector.audience}</small>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="about-section" id="about">
        <div className="about-heading">
          <p className="section-kicker">About Guru Vetchem</p>
          <h2>National reach. Manufacturer-backed execution.</h2>
        </div>
        <div className="about-story">
          <p>
            Guru Vetchem is a specification-led sourcing and supply company
            serving established animal-nutrition manufacturers and institutional
            buyers across North, South, East and West India.
          </p>
          <p>
            Our commercial experience includes supply engagements with
            government-undertaking feed mills and structured participation in
            tenders. Strong manufacturer relationships help us coordinate
            approved sources, documentation, commercial terms and dependable
            dispatch—without compromising the buyer&apos;s quality controls.
          </p>
          <div className="about-metrics" aria-label="Operating strengths">
            <div><strong>4</strong><span>Indian regions served</span></div>
            <div><strong>2</strong><span>Corporate locations</span></div>
            <div><strong>82</strong><span>Catalogue entries</span></div>
            <div><strong>PO</strong><span>Specification controls supply</span></div>
          </div>
        </div>
      </section>

      <section className="product-explorer" id="products">
        <div className="explorer-heading">
          <p className="section-kicker">Live portfolio architecture</p>
          <h2>Start with the application. End with an approved specification.</h2>
        </div>

        <div className="vertical-switcher" aria-label="Choose portfolio">
          <button
            className={vertical === "poultry" ? "active" : ""}
            onClick={() => chooseVertical("poultry")}
            type="button"
          >
            Poultry
          </button>
          <button
            className={vertical === "cattle" ? "active" : ""}
            onClick={() => chooseVertical("cattle")}
            type="button"
          >
            Cattle & dairy
          </button>
          <label>
            <span className="sr-only">Search products</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search material or active"
            />
          </label>
        </div>

        <div className="explorer-layout">
          <aside aria-label={`${vertical} product categories`}>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={!query && selected.id === category.id ? "active" : ""}
                onClick={() => {
                  setQuery("");
                  setActiveCategory(category.id);
                }}
              >
                <span>{category.index}</span>
                {category.name}
              </button>
            ))}
            <p>
              Select a category or search the entire portfolio. Exact origin,
              assay, packing and MOQ remain quotation-stage controls.
            </p>
          </aside>

          <div className="product-panel">
            <div className="product-panel-heading">
              <div>
                <p>{query ? "Search results" : selected.index}</p>
                <h3>{query ? `Matching “${query}”` : selected.name}</h3>
              </div>
              <p>{query ? "Across the active portfolio" : selected.promise}</p>
            </div>
            <div className="product-grid">
              {visibleProducts.map((product, index) => (
                <article className="product-card" key={`${product.name}-${index}`}>
                  <span className="product-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="material-orb" aria-hidden="true" />
                  <h4>{product.name}</h4>
                  <dl>
                    <div>
                      <dt>Indicative sourcing specification</dt>
                      <dd>{product.spec}</dd>
                    </div>
                    <div>
                      <dt>Plant role</dt>
                      <dd>{product.role}</dd>
                    </div>
                  </dl>
                  <a
                    href={`mailto:info@guruvetchem.in?subject=${encodeURIComponent(
                      `RFQ — ${product.name}`,
                    )}`}
                  >
                    Request source & COA <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
              {visibleProducts.length === 0 && (
                <div className="empty-state">
                  No catalogue match. Send the exact product and specification to
                  our sourcing desk.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section" id="quality">
        <div className="quality-image" aria-label="Copper sulphate pentahydrate crystals">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/CuSO4.5H2O.jpg"
            alt="Blue copper sulphate pentahydrate crystals"
          />
          <small>Material identity matters. Product names are not specifications.</small>
        </div>
        <div className="quality-copy">
          <p className="section-kicker">The credibility layer</p>
          <h2>Serious buyers do not need more adjectives. They need fewer unknowns.</h2>
          <div className="quality-list">
            {[
              ["01", "Define", "Product, grade, volume, packing and delivery location."],
              ["02", "Match", "Source, specification, documents and availability."],
              ["03", "Approve", "Sample or COA acceptance and rejection terms."],
              ["04", "Dispatch", "Freight basis, documentation and delivery updates."],
            ].map(([number, title, copy]) => (
              <div key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="global-section" id="global">
        <div className="global-orbit" aria-hidden="true">
          <div className="globe-ring ring-a" />
          <div className="globe-ring ring-b" />
          <div className="globe-core">IND</div>
        </div>
        <div className="global-copy">
          <p className="section-kicker">Export enquiry desk</p>
          <h2>Built in India. Structured for a global buying conversation.</h2>
          <p>
            Product origin, specification, packing, documents, freight basis and
            delivery terms are aligned product by product. No fake “global
            footprint” claims—only a disciplined export enquiry process.
          </p>
          <div className="global-tags">
            <span>Origin & source documents</span>
            <span>COA / SDS where applicable</span>
            <span>Bulk packing alignment</span>
            <span>Freight & Incoterm basis</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="section-kicker">Contact & RFQ desk</p>
          <h2>Speak to the right desk. Send a complete brief.</h2>
          <p>
            Share product, specification, volume and destination. We will align
            commercial basis, source, documents and lead time.
          </p>
          <div className="contact-grid">
            <article>
              <span>Sales</span>
              <a href="tel:+917973831072">+91 79738 31072</a>
              <a href="https://wa.me/917973831072" target="_blank" rel="noreferrer">
                WhatsApp sales ↗
              </a>
            </article>
            <article>
              <span>Head of operations</span>
              <a href="tel:+917009408944">+91 70094 08944</a>
              <a href="https://wa.me/917009408944" target="_blank" rel="noreferrer">
                WhatsApp operations ↗
              </a>
            </article>
            <article>
              <span>Email</span>
              <a href="mailto:info@guruvetchem.in">info@guruvetchem.in</a>
              <a href="mailto:guruvetchem@gmail.com">guruvetchem@gmail.com</a>
            </article>
            <article>
              <span>Corporate offices</span>
              <address>Amritsar, Punjab</address>
              <address>Hyderabad, Telangana</address>
            </article>
          </div>
        </div>
        <form onSubmit={sendRfq}>
          <div className="form-row">
            <label>
              Your name
              <input name="name" placeholder="Full name" required />
            </label>
            <label>
              Company
              <input name="company" placeholder="Company / plant name" required />
            </label>
          </div>
          <label>
            Phone or work email
            <input name="contact" placeholder="+91… or name@company.com" required />
          </label>
          <label>
            Product & required specification
            <textarea
              name="product"
              placeholder="Example: Zinc sulphate monohydrate, Zn 33%, feed grade"
              required
            />
          </label>
          <div className="form-row">
            <label>
              Monthly / trial volume
              <input name="volume" placeholder="Example: 25 MT monthly" required />
            </label>
            <label>
              Delivery city / pincode
              <input name="destination" placeholder="Plant destination" required />
            </label>
          </div>
          <input
            className="honeypot"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button className="button" type="submit">
            {formStatus === "sending" ? "Sending…" : "Send enquiry"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note" aria-live="polite">
            {formStatus === "sent" && "Enquiry received. Our team will contact you."}
            {formStatus === "fallback" &&
              "Your email app has opened as a secure fallback."}
            {formStatus === "idle" &&
              "Your enquiry will be routed to the sales and operations team."}
          </p>
        </form>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">GV</span>
          <span className="brand-copy">
            <strong>Guru Vetchem</strong>
            <small>Reliable inputs. Clear specifications. Structured supply.</small>
          </span>
        </div>
        <div>
          <strong>Sales</strong>
          <a href="tel:+917973831072">+91 79738 31072</a>
          <a href="mailto:info@guruvetchem.in">info@guruvetchem.in</a>
          <a href="mailto:guruvetchem@gmail.com">guruvetchem@gmail.com</a>
        </div>
        <div>
          <strong>Head of operations</strong>
          <a href="tel:+917009408944">+91 70094 08944</a>
          <span>Amritsar, Punjab</span>
          <span>Hyderabad, Telangana</span>
        </div>
        <p>© 2026 Guru Vetchem. B2B supply enquiries only.</p>
      </footer>
    </main>
  );
}
