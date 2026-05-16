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
  title: "CodeThisWeb | ROI-Driven Digital Solutions & Business Growth",
  description:
    "We transition businesses into the digital age with high-performance tools. CodeThisWeb provides SaaS development, AI automation, and custom web solutions designed to find you more customers and streamline operations.",
  keywords: [
    "Web Development Agency",
    "Business Solutions",
    "Digital Transformation",
    "SaaS Development",
    "AI Automation",
    "Custom Software Engineering",
    "CodeThisWeb",
  ],
  authors: [{ name: "CodeThisWeb Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codethisweb.com",
    siteName: "CodeThisWeb",
    title: "CodeThisWeb | Premium Digital Engineering for Business Growth",
    description:
      "Custom digital tools built to solve business problems and find more customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeThisWeb | ROI-Driven Digital Solutions",
    description:
      "We build digital tools that find you more customers. Specialized in SaaS & AI.",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="canonical" href="https://codethisweb.com" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CodeThisWeb",
              url: "https://codethisweb.com",
              logo: "https://codethisweb.com/logo.png",
              description:
                "Providing high-performance digital solutions, SaaS development, and AI automation to help businesses grow.",
              areaServed: "Worldwide",
              serviceType: [
                "Software Development",
                "AI Automation",
                "Business Strategy",
                "UI/UX Design",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "hello@codethisweb.com",
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
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://codethisweb.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://codethisweb.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Current Service",
                  item: "https://codethisweb.com/services/[slug]",
                },
              ],
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
