import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Admin & Customer Support",
  description:
    "Experienced Admin & Customer Support specialist. Property management, customer service, technical support, appointment setting, and administrative operations across real estate, tech, and service businesses.",
  keywords: ["admin support", "customer support", "technical support", "property management", "appointment setting", "lead generation", "CRM", "Salesforce", "data entry"],
  openGraph: {
    title: "Portfolio | Admin & Customer Support",
    description: "Organized, customer-focused admin and customer support across real estate, tech, and service businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
