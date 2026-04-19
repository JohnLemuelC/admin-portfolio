import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Virtual Assistant & Admin Support",
  description:
    "Experienced Virtual Assistant specializing in property management, short-term rentals, customer service, and administrative support. 4+ years supporting real estate, hospitality, and e-commerce businesses.",
  keywords: ["virtual assistant", "admin support", "property management", "Airbnb management", "short-term rentals", "CRM", "customer service", "transaction coordinator"],
  openGraph: {
    title: "Portfolio | Virtual Assistant & Admin Support",
    description: "Supporting property managers, clients, and business owners with organized, reliable admin work.",
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
