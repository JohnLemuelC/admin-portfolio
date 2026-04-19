"use client";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stats = [
  { label: "Years Experience", value: "4+", tag: "Since 2022", color: "var(--accent)" },
  { label: "Properties Managed", value: "Multi", tag: "UK, US, Airbnb", color: "var(--cyan)" },
  { label: "Superhost Status", value: "Airbnb", tag: "In 2 Months", color: "var(--emerald)" },
  { label: "QA Score", value: "100%", tag: "Peak Support", color: "var(--amber)" },
];

const highlights = [
  { number: "100%", label: "QA Score at Peak Support" },
  { number: "Superhost", label: "Airbnb Status (2 months)" },
  { number: "Top 2", label: "Q2 Teammate at TaskUs" },
  { number: "Top 3", label: "Performer, TaskUs April" },
  { number: "Best", label: "New Hire at TaskUs" },
  { number: "Multi", label: "OTA Listings Managed" },
  { number: "24/7", label: "Guest Communication" },
  { number: "Gala", label: "Awards Nominee Q2 2023" },
];

const featured = [
  {
    title: "Short-Term Rental Management",
    desc: "Managing Airbnb, Booking.com, VRBO, and Hostfully listings end-to-end — achieved Superhost status within 2 months.",
    tags: ["Airbnb", "Booking.com", "VRBO", "Hostfully"],
    color: "emerald",
  },
  {
    title: "Transaction Coordination",
    desc: "Preparing contracts, inspections, reports from listing to closing. Coordinating with buyer agents, listing agents, and escrow officers.",
    tags: ["Real Estate", "Documentation", "Compliance"],
    color: "violet",
  },
  {
    title: "Property Records & Compliance",
    desc: "Managing property records via Lendlord, tracking insurance, compliance certificates, and tenancy documentation.",
    tags: ["Lendlord", "Compliance", "Records"],
    color: "cyan",
  },
];

export default function OverviewTab({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <>
      {/* Hero Header */}
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
            Virtual Assistant & Admin Support
          </span>
        </div>
        <h1 className="page-title">
          Organized, Reliable <span style={{ color: "var(--accent)" }}>Admin Support</span> for Busy Businesses
        </h1>
        <p className="page-subtitle">
          Experienced Virtual Assistant specializing in property management, short-term rentals, customer service, and admin operations. Helping property managers, clients, and business owners stay organized and responsive.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="stat-tag" style={{ background: `${s.color}15`, color: s.color }}>{s.tag}</div>
          </div>
        ))}
      </div>

      {/* About */}
      <div className="about-split">
        <div className="about-text" style={{ gridColumn: "1 / -1" }}>
          <h3>About Me</h3>
          <p>
            Motivated Virtual Assistant with years of varied experience overseeing real estate properties, managing short-term rental properties, and handling customer-related services. Committed to using organizational and communication skills to support property managers, clients, and business owners.
          </p>
          <p>
            Beyond property management, I bring experience in customer service, case management, digital marketing, and transaction coordination — having worked with businesses across the US, UK, and the Philippines. Bachelor of Arts in English from Isabela State University.
          </p>
          <div className="about-tags">
            {["Property Management", "Airbnb / OTAs", "CRM", "Customer Service", "Transaction Coordination", "Admin Support"].map((t) => (
              <span key={t} className="card-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="section-block">
        <div className="kanban-header">
          <h2 className="kanban-title">Featured Work</h2>
          <button
            className="filter-pill active"
            onClick={() => onNavigate("projects")}
          >
            View All Work &rarr;
          </button>
        </div>
        <div className="kanban-board">
          {featured.map((p, i) => (
            <div key={i} className="kanban-card">
              <div className="kanban-card-title">{p.title}</div>
              <div className="kanban-card-desc">{p.desc}</div>
              <div className="kanban-card-tags">
                {p.tags.map((t) => (
                  <span key={t} className={`card-tag ${p.color}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="section-block">
        <div className="section-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
          Key Achievements
        </div>
        <div className="results-grid">
          {highlights.map((h, i) => (
            <div key={i} className="result-card">
              <div className="result-number" style={{ color: i % 2 === 0 ? "var(--accent)" : "var(--cyan)" }}>{h.number}</div>
              <div className="result-label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
