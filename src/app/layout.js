import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://codethisweb.com"),
  title: {
    default: "CodeThisWeb | ROI-Driven Digital Solutions & AI Automation",
    template: "%s | CodeThisWeb Agency",
  },
  description:
    "CodeThisWeb builds high-performance SaaS platforms, AI-powered automation tools, and custom digital systems designed to acquire customers and scale business operations.",
  keywords: [
    "Custom Software Engineering",
    "SaaS Development Agency",
    "AI Business Automation",
    "ROI-Driven Web Development",
    "Enterprise Solutions",
    "Digital Transformation Consultant",
    "CodeThisWeb Agency",
    "High-Performance Web Apps",
  ],
  authors: [{ name: "CodeThisWeb Team" }],
  creator: "CodeThisWeb",
  publisher: "CodeThisWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codethisweb.com",
    siteName: "CodeThisWeb Agency",
    title: "CodeThisWeb | Premium Digital Engineering for Business Growth",
    description:
      "Transforming business requirements into high-performance digital tools. Specialized in SaaS, AI, and scalable architectures.",
    images: [
      {
        url: "/og-image.png", // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: "CodeThisWeb - Premium Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeThisWeb | Build Scalable Digital Systems",
    description:
      "We build the tools that find you more customers. ROI-focused SaaS and AI engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#2563eb" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService", // More specific for agencies
              "@id": "https://codethisweb.com/#organization",
              name: "CodeThisWeb",
              url: "https://codethisweb.com",
              logo: {
                "@type": "ImageObject",
                url: "https://codethisweb.com/logo.png",
              },
              image: "https://codethisweb.com/og-image.png",
              description:
                "CodeThisWeb is a high-end digital engineering agency specializing in ROI-driven SaaS development, AI business automation, and custom scalable architectures.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Worldwide",
              },
              priceRange: "$$$",
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://github.com/bilalashrafmughal", // Update these
                "https://www.linkedin.com/in/bilal-ashraf-317453223/",
                "https://www.upwork.com/freelancers/bilaalashraf?viewMode=1",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Solutions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SaaS Platform Engineering",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & LLM Integration",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Process Automation",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CodeThisWeb",
              url: "https://codethisweb.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://codethisweb.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
