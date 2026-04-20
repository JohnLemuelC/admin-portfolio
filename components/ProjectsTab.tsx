"use client";

import { useState } from "react";

const serviceCategories = [
  {
    label: "Property Management",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    services: [
      {
        title: "Short-Term Rental Management",
        desc: "End-to-end management of Airbnb, Booking.com, VRBO, Hostfully, and Zillow listings.",
        tags: ["Airbnb", "Booking.com", "VRBO", "Hostfully"],
        color: "emerald",
        details: "Full lifecycle management of short-term rental properties — listing optimization, guest communication, changeover coordination, damage claims, maintenance liaison, and achieving Superhost status within 2 months of taking over.",
      },
      {
        title: "Residential Property Management",
        desc: "Vetting tenants, coordinating maintenance, managing tenancies from start to finish.",
        tags: ["Tenants", "Maintenance", "Records"],
        color: "violet",
        details: "Tenant vetting, scheduling viewings, assessing applications, coordinating maintenance issues, and advertising vacant properties. End-to-end tenancy support with complete documentation.",
      },
      {
        title: "Property Records & Compliance",
        desc: "Managing insurance, compliance certificates, and tenancy documentation via Lendlord.",
        tags: ["Lendlord", "Compliance", "Documentation"],
        color: "cyan",
        details: "Monitoring compliance requirements, identifying expired or missing certificates, maintaining accurate digital filing systems, and ensuring all property records are up-to-date and audit-ready.",
      },
      {
        title: "Utilities & Supplier Coordination",
        desc: "Managing utilities, supplier relationships, meter issues, and engineer visits.",
        tags: ["Utilities", "Suppliers", "Coordination"],
        color: "amber",
        details: "Coordinating utility suppliers, resolving meter issues, booking engineer visits, and liaising with contractors and tradespeople to keep properties running smoothly.",
      },
    ],
  },
  {
    label: "Transaction Coordination",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    services: [
      {
        title: "Contracts & Closings",
        desc: "Preparing and completing contracts, inspections, and reports from listing to closing.",
        tags: ["Real Estate", "Contracts", "Documentation"],
        color: "violet",
        details: "Full real estate transaction support — preparing contracts, managing inspections, summarizing disclosures for buyers, submitting documents and commission information to compliance teams, and coordinating with buyer agents, listing agents, and escrow officers.",
      },
      {
        title: "SOP Creation & Process Management",
        desc: "Creating Standard Operating Procedures and managing information databases via Notion.",
        tags: ["SOPs", "Notion", "Process"],
        color: "emerald",
        details: "Building structured workflows and SOPs for repeatable business processes. Information and database management via Notion to keep teams aligned and data accessible.",
      },
    ],
  },
  {
    label: "Technical & IT Support",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    services: [
      {
        title: "Cloud Contact-Center Support",
        desc: "Frontline technical support for cloud contact-center software across phone, email, web, and voicemail.",
        tags: ["Five9", "Cloud", "Technical"],
        color: "cyan",
        details: "Resolving technical queries related to installation, configuration, product functionality, and performance. Updating customer information and case interactions via Salesforce CRM. Valuable experience in escalation handling and customer optimization while coordinating with internal teams.",
      },
      {
        title: "IT Certification Support",
        desc: "Helping clients with questions about CPE and IT certifications via phone, chat, and email.",
        tags: ["IT Cert", "Salesforce", "Multi-channel"],
        color: "violet",
        details: "Supporting clients with general questions about CPE and IT certifications. Documenting interactions and account information through Salesforce CRM. Expert in finding viable solutions — staying informed about goods and services offered to provide accurate guidance.",
      },
    ],
  },
  {
    label: "Customer & Guest Services",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    services: [
      {
        title: "Multi-Channel Customer Support",
        desc: "Responding to inquiries across call, chat, and email — resolving issues quickly and professionally.",
        tags: ["Call", "Chat", "Email"],
        color: "cyan",
        details: "Handling customer inquiries across multiple channels — phone, chat, and email. Acknowledging complaints, providing compensation, managing refunds, and resolving issues while maintaining high CSAT scores.",
      },
      {
        title: "Case Management",
        desc: "Managing accident, insurance, and service provider cases with accuracy and timeliness.",
        tags: ["Insurance", "Claims", "Dispatch"],
        color: "rose",
        details: "Accident management — communicating with insurance clients, service providers, business owners, and customers regarding payments and tow services. Managing payments via virtual credit cards and dispatching services efficiently.",
      },
      {
        title: "Guest Communications",
        desc: "Answering guest inquiries, handling complaints, and coordinating changeovers.",
        tags: ["Guest Comms", "Complaints", "Coordination"],
        color: "amber",
        details: "Answering guest inquiries and messages, handling complaints and damage claims, updating listing descriptions, and coordinating changeover schedules with housekeeping teams for seamless guest experiences.",
      },
    ],
  },
  {
    label: "Administrative Support",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    services: [
      {
        title: "Email & Inbox Management",
        desc: "Managing company email communications, ensuring timely responses and continuity of operations.",
        tags: ["Email", "Inbox Zero", "Communication"],
        color: "cyan",
        details: "Managing and monitoring company email communications — especially during executive absences — to ensure continuity of operations and timely responses to all stakeholders.",
      },
      {
        title: "Reports, Invoices & Timesheets",
        desc: "Preparing and maintaining reports, invoices, and timesheets for financial and operational processes.",
        tags: ["Reports", "Invoices", "Admin"],
        color: "emerald",
        details: "Preparing and maintaining reports, invoices, and timesheets to support financial and operational processes. Ensuring all admin documentation is accurate, organized, and accessible.",
      },
      {
        title: "Digital Filing & Records",
        desc: "Organizing digital filing systems for property, tenant, and business information.",
        tags: ["Filing", "Records", "Organization"],
        color: "violet",
        details: "Building and maintaining organized digital filing systems so important information is always accessible, searchable, and properly categorized for the whole team.",
      },
      {
        title: "Property Onboarding",
        desc: "Supporting onboarding and setup of new properties with complete documentation.",
        tags: ["Onboarding", "Setup", "Documentation"],
        color: "amber",
        details: "End-to-end onboarding support for new properties — ensuring all operational requirements, documentation, compliance checks, and platform listings are completed before going live.",
      },
    ],
  },
  {
    label: "Lead Generation & Appointment Setting",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    services: [
      {
        title: "Appointment Setting",
        desc: "Scheduling appointments with potential clients and managing calendar flow.",
        tags: ["Scheduling", "Calendar", "Outreach"],
        color: "emerald",
        details: "Scheduled appointments with potential clients, managed social media engagements, and handled email and chat inquiries. Updated client data in Excel sheets and made callbacks to monitor client feedback.",
      },
      {
        title: "Lead Generation & Outreach",
        desc: "Identifying and contacting qualified leads through targeted research and outreach.",
        tags: ["Research", "Outreach", "Qualification"],
        color: "cyan",
        details: "Successfully identified and contacted clients who met specific criteria through thorough research and outreach strategies. Data-driven approach to building qualified pipelines.",
      },
      {
        title: "Collections & Account Management",
        desc: "Managing debtor accounts, payment reminders, and installment coordination via CRM.",
        tags: ["CRM", "Collections", "Accounts"],
        color: "rose",
        details: "Maintained and examined debtor lists through CRM to identify payment due dates. Reminded debtors through proficient phone communication. Coordinated with field liaisons for collection engagements and provided appropriate installment options for efficient repayment.",
      },
    ],
  },
  {
    label: "Social Media & Marketing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    services: [
      {
        title: "Social Media Management",
        desc: "Creating and managing social media channels, increasing brand awareness and engagement.",
        tags: ["Content", "Engagement", "Growth"],
        color: "rose",
        details: "Brainstorming content marketing strategies based on business goals and KPIs. Creating and managing social media channels, boosting engagement, and responding to comments and messages.",
      },
    ],
  },
];

export default function ProjectsTab() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].label);

  const currentCategory = serviceCategories.find((c) => c.label === activeCategory);

  return (
    <>
      <div className="page-header">
        <h1 className="kanban-title" style={{ fontSize: "1.15rem" }}>Services</h1>
        <p className="page-subtitle" style={{ fontSize: "0.85rem" }}>
          What I can help you with across property management, admin, and customer support.
        </p>
      </div>

      {/* Category Filters */}
      <div className="section-block" style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
        {serviceCategories.map((cat) => (
          <button
            key={cat.label}
            className={`filter-pill ${activeCategory === cat.label ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.label)}
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="section-block">
        <div className="kanban-board">
          {currentCategory?.services.map((s, i) => (
            <div key={i} className="kanban-card">
              <div className="kanban-card-title">{s.title}</div>
              <div className="kanban-card-desc">{s.desc}</div>
              <div className="kanban-card-tags">
                {s.tags.map((t) => (
                  <span key={t} className={`card-tag ${s.color}`}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: "0.8rem", fontSize: "0.76rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                {s.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
