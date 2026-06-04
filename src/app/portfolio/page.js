import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Reviews from "@/components/sections/Reviews";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export const metadata = {
  // 1. Core SEO Configuration
  title: "Engineering Expertise & Technical Lead Insights | CodeThisWeb",
  description:
    "Deep dive into the technical mastery of CodeThisWeb's engineering core. From low-level systems to enterprise AI integration, see why we are the preferred choice for mission-critical digital products.",
  keywords: [
    "Full-Stack Engineering Expertise",
    "Technical Lead Portfolio",
    "Agency Technology Stack",
    "AI Development Expertise",
    "Scalable Infrastructure Engineering",
    "Performance Optimization Results",
  ],

  // 2. Creator Details & Attribution
  authors: [{ name: "CodeThisWeb Team", url: "https://codethisweb.com" }],
  creator: "CodeThisWeb",
  publisher: "CodeThisWeb Agency",

  // 3. Application & Category Parameters
  category: "Software Engineering",

  // 4. Metadata Base & Canonical Links
  metadataBase: new URL("https://codethisweb.com"),
  alternates: {
    canonical: "/portfolio",
  },

  // 5. Open Graph (Social Media Sharing)
  openGraph: {
    type: "website",
    title: "Technical Mastery & Engineering Excellence | CodeThisWeb",
    description:
      "A showcase of technical depth, architecture design, and complex problem-solving by the CodeThisWeb engineering team.",
    url: "https://codethisweb.com/portfolio",
    siteName: "CodeThisWeb Agency",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeThisWeb Technical Expertise",
      },
    ],
  },

  // 6. Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@codethisweb",
    creator: "@codethisweb",
    title: "Engineering Excellence | CodeThisWeb",
    description:
      "Inside the technical engine room of CodeThisWeb. Scalable, robust, and ROI-driven engineering.",
    images: ["/og-image.png"],
  },

  // 7. Control Search Engine Behavior
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Services />
      <Skills />
      <Projects />
      <Reviews />
      <Approach />
      <Contact />
    </main>
  );
}
