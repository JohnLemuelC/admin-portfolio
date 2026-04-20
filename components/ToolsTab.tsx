"use client";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const toolGroups = [
  {
    label: "Property Management & Hospitality",
    tools: [
      { name: "Airbnb", img: `${BASE}/images/tools/tool-airbnb.png` },
      { name: "Booking.com", img: `${BASE}/images/tools/tool-booking.png` },
      { name: "VRBO", img: `${BASE}/images/tools/tool-vrbo.png` },
      { name: "Hostfully", img: `${BASE}/images/tools/tool-hostfully.png` },
      { name: "Guesty", img: `${BASE}/images/tools/tool-guesty.png` },
      { name: "Zillow", img: `${BASE}/images/tools/tool-zillow.png` },
      { name: "Lendlord", img: `${BASE}/images/tools/tool-lendlord.png` },
    ],
  },
  {
    label: "Productivity & Organization",
    tools: [
      { name: "Notion", img: `${BASE}/images/tools/tool-notion.png` },
      { name: "Slack", img: `${BASE}/images/tools/slack logo.jpg` },
      { name: "Discord", img: `${BASE}/images/tools/Discord-logo.jpg` },
      { name: "Basecamp", img: `${BASE}/images/tools/tool-basecamp.jpg` },
      { name: "Monday.com", img: `${BASE}/images/tools/tool-monday.png` },
      { name: "Calendly", img: `${BASE}/images/tools/Calendly.png` },
      { name: "Dropbox", img: `${BASE}/images/tools/tool-dropbox.png` },
    ],
  },
  {
    label: "Documents & Communication",
    tools: [
      { name: "Google Workspace", img: `${BASE}/images/tools/tool-gsuite.png` },
      { name: "Microsoft 365", img: `${BASE}/images/tools/tool-microsoft.png` },
      { name: "Excel", img: `${BASE}/images/tools/tool-excel.png` },
      { name: "Word", img: `${BASE}/images/tools/tool-word.png` },
      { name: "PowerPoint", img: `${BASE}/images/tools/tool-powerpoint.png` },
      { name: "WPS Office", img: `${BASE}/images/tools/tool-wps.png` },
      { name: "Outlook", img: `${BASE}/images/tools/Outlook.com-Logo.wine.png` },
      { name: "Gmail", img: `${BASE}/images/tools/tool-gmail.png` },
    ],
  },
  {
    label: "CRM & Customer Service",
    tools: [
      { name: "Salesforce CRM", img: `${BASE}/images/tools/tool-salesforce.png` },
      { name: "Five9 Cloud Contact", img: `${BASE}/images/tools/tool-five9.png` },
      { name: "Respond.io", img: `${BASE}/images/tools/tool-respondio.png` },
    ],
  },
  {
    label: "Social Media & Content",
    tools: [
      { name: "Meta Business", img: `${BASE}/images/tools/tool-meta.png` },
      { name: "Canva", img: `${BASE}/images/tools/tool-canva.png` },
      { name: "Photoshop", img: `${BASE}/images/tools/tool-photoshop.png` },
      { name: "CapCut", img: `${BASE}/images/tools/tool-capcut.jpg` },
    ],
  },
];

const coreSkills = [
  "Customer support (call, chat, email)",
  "Technical support & troubleshooting",
  "Escalation handling & coordination",
  "Appointment setting & scheduling",
  "Lead generation & outreach",
  "Calendar & data management",
  "Data entry, processing, and documentation",
  "Salesforce CRM management",
  "Property listing optimization",
  "Guest communication and complaint resolution",
  "Social media management",
  "Transaction coordination",
  "Email and phone communications",
  "Compliance monitoring and documentation",
  "Digital filing and records management",
  "Collections & account management",
];

export default function ToolsTab() {
  return (
    <>
      <div className="page-header">
        <h1 className="kanban-title" style={{ fontSize: "1.15rem" }}>Skills & Tools</h1>
        <p className="page-subtitle" style={{ fontSize: "0.85rem" }}>
          Core skills and the tools I use to deliver reliable admin support.
        </p>
      </div>

      {/* Core Skills */}
      <div className="section-block">
        <div className="section-label">Core Skills</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.5rem" }}>
          {coreSkills.map((skill, i) => (
            <div key={i} className="list-item" style={{ padding: "0.6rem 1rem" }}>
              <div className="list-status completed" />
              <div className="list-content">
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{skill}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {toolGroups.map((group, gi) => (
        <div key={gi} className="section-block">
          <div className="section-label">{group.label}</div>
          <div className="tools-grid">
            {group.tools.map((tool, ti) => (
              <div key={ti} className="tool-item">
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
