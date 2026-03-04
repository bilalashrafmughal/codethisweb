import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Full-Stack Developer | React & Node.js Expert | DevPro",
  description:
    "Top-rated full-stack developer with 6+ years of experience in React, Node.js, and modern web technologies. Specializing in scalable applications and exceptional user experiences.",
  keywords: [
    "React Developer",
    "Node.js Developer",
    "Full-Stack Developer",
    "Web Development",
    "JavaScript",
    "Next.js",
    "Web Applications",
    "Freelance Developer",
  ],
  authors: [{ name: "DevPro" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "DevPro Portfolio",
    title: "Full-Stack Developer | React & Node.js Expert",
    description:
      "Crafting digital excellence with 6+ years of experience in full-stack development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer | React & Node.js Expert | DevPro",
    description:
      "Top-rated developer specializing in React, Node.js, and modern web technologies",
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
  verification: {
    google: "verification_code",
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
        <link rel="canonical" href="https://yoursite.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Full-Stack Developer",
              url: "https://yoursite.com",
              image: "https://yoursite.com/profile.jpg",
              description:
                "Top-rated full-stack developer with 6+ years of experience",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },
              sameAs: [
                "https://github.com",
                "https://linkedin.com",
                "https://twitter.com",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
