import Contact from "@/components/sections/Contact";
import SectionContainer from "@/components/ui/SectionContainer";
import { FaClock, FaCheckCircle, FaRocket } from "react-icons/fa";

export const metadata = {
  // 1. Core SEO Configuration
  title: "Contact Us | CodeThisWeb Agency",
  description:
    "Get in touch with CodeThisWeb for custom business websites, SaaS platforms, and AI-powered solutions. Let's discuss your next project.",
  keywords: [
    "Contact CodeThisWeb",
    "Hire SaaS Developers",
    "AI Automation Consultant",
    "Custom Software Quote",
    "Hire Digital Engineering Agency",
    "CodeThisWeb Support",
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
    canonical: "/contact",
  },

  // 5. Open Graph (Social Media Sharing)
  openGraph: {
    type: "website",
    title: "Start Your Digital Project | CodeThisWeb Agency",
    description:
      "Ready to scale your business? Contact CodeThisWeb for premium ROI-driven engineering and AI-powered solutions.",
    url: "https://codethisweb.com/contact",
    siteName: "CodeThisWeb Agency",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact CodeThisWeb Agency",
      },
    ],
  },

  // 6. Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@codethisweb",
    creator: "@codethisweb",
    title: "Contact Us | CodeThisWeb Agency",
    description:
      "Ready to scale your business? Contact CodeThisWeb for premium ROI-driven engineering and AI-powered solutions.",
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

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Let&apos;s Build Your{" "}
            <span className="text-blue-600">Digital Future</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We&apos;re here to help you scale your
            business with premium engineering and ROI-focused solutions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* What Happens Next Section */}
      <SectionContainer className="bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
            What Happens Next?
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our process for getting your project started is simple and
            transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaClock className="w-8 h-8 text-blue-600" />,
              title: "Response in 24h",
              description:
                "We review your inquiry and get back to you with initial thoughts and a meeting request within 24 business hours.",
            },
            {
              icon: <FaCheckCircle className="w-8 h-8 text-purple-600" />,
              title: "Discovery Call",
              description:
                "We hop on a 30-minute call to dive deep into your goals, technical requirements, and business objectives.",
            },
            {
              icon: <FaRocket className="w-8 h-8 text-pink-600" />,
              title: "Strategy & Proposal",
              description:
                "We provide a detailed roadmap, timeline, and budget estimation tailored specifically to your needs.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Bottom CTA / Trust Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-6">
            Partner with an Agency that understands Profit.
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            We don&apos;t just write code; we build machines that generate
            revenue. Join 20+ businesses that have scaled with CodeThisWeb.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/20">
              ✓ 100% Satisfaction Rate
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/20">
              ✓ Enterprise Grade Quality
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/20">
              ✓ Dedicated Support
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
