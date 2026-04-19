"use client";

const experiences = [
  {
    role: "Property Manager & Admin Assistant",
    company: "B&R Assets, Ltd. & B&R Living, Ltd. (United Kingdom)",
    period: "April 2025 - April 2026",
    status: "current",
    highlights: [
      "Providing administrative and operational support for short-term and residential rental properties",
      "Managing and optimizing property listings across Airbnb, Booking.com, VRBO, and other OTAs",
      "Responding to guest and tenant inquiries — ensuring timely communication and high customer satisfaction",
      "Handling guest complaints, maintenance concerns, and damage claims professionally and efficiently",
      "Coordinating property changeovers with housekeeping teams to ensure all units are guest-ready",
      "Liaising with contractors and sourcing tradespeople to resolve maintenance issues promptly",
      "Managing property records via Lendlord — updating insurance, compliance certificates, and tenancy documentation",
      "Monitoring compliance requirements and identifying expired or missing certificates",
      "Assisting with utilities management, supplier coordination, meter issues, and engineer visits",
      "Managing company email communications in the absence of the CEO",
      "Preparing and maintaining reports, invoices, and timesheets",
      "Organizing digital filing systems for property and tenant information",
      "Supporting onboarding and setup of new properties",
    ],
  },
  {
    role: "Transaction Coordinator / Property Manager",
    company: "Kei Realty Corp. (Palo Alto, California)",
    period: "February 2023 - February 2024",
    status: "prev",
    highlights: [
      "Preparing and completing contracts, inspections, and reports from listing to closing",
      "Summarizing disclosures for buyers",
      "Submitting documents and commission information to the compliance team",
      "Coordinating with buyer agents, listing agents, and escrow officers",
      "Vetting tenants for property rentals",
      "Creating Standard Operating Procedures (SOPs)",
      "Information and database management via Notion",
      "Coordinating maintenance issues",
      "Advertising vacant properties, scheduling viewings, and assessing applications",
      "Responding to emails, returning phone calls, and answering client inquiries",
    ],
  },
  {
    role: "Guest Communications Assistant",
    company: "Private Owned Properties (California)",
    period: "February 2023 - February 2024",
    status: "prev",
    highlights: [
      "Answering guest inquiries and messages",
      "Handling complaints and damage claims",
      "Updating listing descriptions across platforms",
      "Coordinating changeover schedules with housekeeping teams",
      "Communicating maintenance issues and sourcing tradespeople",
      "Monitoring and optimizing property listings on Airbnb, Hostfully, Zillow, Booking.com",
      "Managing day-to-day operations of short-term rental properties",
    ],
  },
  {
    role: "Case Manager",
    company: "Peak Support (Taguig, PH / Massachusetts, USA)",
    period: "July 2023 - February 2024",
    status: "prev",
    highlights: [
      "Accident management and claims coordination",
      "Communicating with insurance clients, service providers, business owners, and customers regarding payments and tow services",
      "Managing payments to tow companies for vehicle release fees via virtual credit cards",
      "Dispatching tow services to pick up vehicles from tow yards to repair facilities",
      "Achieved 100% QA Score (Incentives Holder, Oct - Dec 2023)",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "TaskUs: Deliveroo (Pampanga / London, United Kingdom)",
    period: "January 2023 - July 2023",
    status: "prev",
    highlights: [
      "Responding promptly to customer inquiries across call, chat, and email",
      "Communicating with customers, food delivery riders, and business owners",
      "Acknowledging, compensating, and resolving customer complaints",
      "Managing refunds to customers",
      "Named Best New Hire Teammate (March 2023), Top 3 Performer (April 2023), Top 19 Performer (May 2023), Q2 Top 2 Teammate (June 2023), Q2 2023 Gala Awards Nominee (July 2023)",
    ],
  },
  {
    role: "Digital Marketing Officer",
    company: "AljayBio-Sciences, Inc. (Santiago City)",
    period: "February 2022 - June 2022",
    status: "prev",
    highlights: [
      "Brainstorming content marketing strategies based on business goals, existing content, and chosen KPIs",
      "Increasing brand awareness through creating and managing social media channels",
      "Boosting social media engagement and community growth",
      "Responding to comments and messages on the company's Facebook page",
    ],
  },
];

const achievements = [
  {
    company: "B&R Living, Ltd.",
    period: "April 2025 - April 2026",
    items: ["Achieved Airbnb Superhost Status after just 2 months of management"],
  },
  {
    company: "Peak Support",
    period: "October - December 2023",
    items: ["Incentives Holder", "100% QA Score"],
  },
  {
    company: "TaskUs Pampanga",
    period: "March - July 2023",
    items: [
      "Best New Hire Teammate (March 2023)",
      "Top 3 Performer (April 2023)",
      "Top 19 Performer (May 2023)",
      "Q2 Top 2 Teammate (June 2023)",
      "Q2 2023 Gala Awards Nominee (July 2023)",
    ],
  },
];

const education = {
  degree: "Bachelor of Arts in English",
  school: "Isabela State University",
  year: "2020",
};

export default function ExperienceTab() {
  return (
    <>
      <div className="page-header">
        <h1 className="kanban-title" style={{ fontSize: "1.15rem" }}>Work Experience</h1>
      </div>

      <div className="list-view section-block">
        {experiences.map((exp, i) => (
          <div key={i} className="list-item" style={{ alignItems: "flex-start", padding: "1.25rem" }}>
            <div
              className={`list-status ${exp.status === "current" ? "active" : "completed"}`}
              style={{ marginTop: "0.4rem" }}
            />
            <div className="list-content">
              <div className="list-title">{exp.role}</div>
              <div className="list-subtitle">{exp.company}</div>
              <ul style={{
                marginTop: "0.5rem",
                paddingLeft: "1rem",
                listStyle: "disc",
              }}>
                {exp.highlights.map((h, hi) => (
                  <li key={hi} style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.2rem", lineHeight: "1.5" }}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-end", gap: "0.3rem" }}>
              <span className={`list-badge ${exp.status === "current" ? "current" : "prev"}`}>
                {exp.status === "current" ? "Current" : "Completed"}
              </span>
              <span className="list-meta">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="section-block">
        <div className="section-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
          Achievements & Awards
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
          {achievements.map((a, i) => (
            <div key={i} className="list-item" style={{ alignItems: "flex-start", padding: "1rem" }}>
              <div className="list-content">
                <div className="list-title">{a.company}</div>
                <div className="list-subtitle">{a.period}</div>
                <ul style={{ marginTop: "0.5rem", paddingLeft: "1rem", listStyle: "disc" }}>
                  {a.items.map((item, ii) => (
                    <li key={ii} style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.2rem", lineHeight: "1.5" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="section-block">
        <div className="section-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          Education
        </div>
        <div className="list-item" style={{ alignItems: "flex-start", padding: "1rem" }}>
          <div className="list-content">
            <div className="list-title">{education.degree}</div>
            <div className="list-subtitle">{education.school}</div>
          </div>
          <div>
            <span className="list-meta">{education.year}</span>
          </div>
        </div>
      </div>
    </>
  );
}
