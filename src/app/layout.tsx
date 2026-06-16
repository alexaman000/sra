import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRA Propertiez - Real Estate in Nashik",
  description: "Find Your Dream Property in Nashik. Helping families and investors find genuine and trusted properties with complete transparency.",
  keywords: "Real Estate in Nashik, Best Property Dealer in Nashik, Plots in Nashik, Luxury Homes Nashik, Commercial Property Nashik, Residential Property Nashik, Investment Property Nashik, Property Consultant Nashik, Food Blogger Nashik, Restaurant Reviews Nashik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#f0f0f0] m-0 overflow-x-hidden">{children}</body>
    </html>
  );
}
