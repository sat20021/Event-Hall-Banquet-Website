import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrandVista Banquets | Ultra-Luxurious Event Venue",
  description: "Experience the epitome of luxury at GrandVista Banquets. Perfect for grand weddings, corporate events, and premium destination tourism.",
  keywords: ["luxury banquet", "wedding venue", "event hall", "premium events", "grandvista banquets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", playfair.variable, inter.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-gold-500/30 selection:text-gold-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GrandVista Banquets",
              "image": "/images/exterior_refined.png",
              "@id": "https://grandvista.luxury",
              "url": "https://grandvista.luxury",
              "telephone": "+1-800-GRANDVISTA",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Royal Estates",
                "addressLocality": "Heritage Valley",
                "addressRegion": "CA",
                "postalCode": "90210",
                "addressCountry": "US"
              },
              "priceRange": "$$$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              }
            })
          }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
