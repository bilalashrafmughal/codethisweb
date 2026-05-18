import BusinessServices from "@/components/Home/BusinessServices";
import { services } from "@/constants/services";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import reviews from "@/components/sections/Reviews"; // Fixing naming if needed or using local
import { FaRocket, FaCheckCircle, FaUserShield } from "react-icons/fa";

export const metadata = {
  title: "Professional Digital Solutions & AI Business Automation",
  description:
    "Explore CodeThisWeb's comprehensive catalog of digital systems: SaaS development, AI-powered automation, custom CRM solutions, and high-performance web engineering designed for ROI and business growth.",
  alternates: {
    canonical: "https://codethisweb.com/services",
  },
  keywords: [
    "Custom Software Solutions",
    "Business Automation Services",
    "SaaS Platform Development",
    "AI Implementation for Business",
    "Digital Engineering Agency",
    "Enterprise Web Applications",
    "Workflow Optimization Tools",
  ],
  openGraph: {
    title: "High-Impact Digital Solutions for Modern Businesses | CodeThisWeb",
    description:
      "Transforming business challenges into scalable digital products. From AI automation to dedicated SaaS platforms.",
    url: "https://codethisweb.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Services Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-900/10 dark:to-black">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-black tracking-widest uppercase">
            Our Expertise
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight">
            Digital Solutions Built <br />
            <span className="text-blue-600 italic">For Growth</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We don&apos;t just build websites; we engineer revenue-generating
            ecosystems and automation tools that save you time and money.
          </p>
        </div>
      </section>

      {/* Main Services Section - Displaying all 10 services */}
      <BusinessServices
        services={services}
        limit={services.length}
        title="Comprehensive Digital Catalog"
      />

      {/* Why Choose Us Section - Related Value Addition */}
      <section className="py-24 px-4 bg-white dark:bg-black border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4 text-center p-8 rounded-3xl bg-gray-50 dark:bg-white/5">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Rapid Deployment
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We use modern sprint-based development to get your product to
              market faster without sacrificing quality.
            </p>
          </div>

          <div className="space-y-4 text-center p-8 rounded-3xl bg-gray-50 dark:bg-white/5">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6">
              <FaCheckCircle />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Outcome Oriented
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every line of code we write is tied to a business goal: more
              sales, less manual work, or better user retention.
            </p>
          </div>

          <div className="space-y-4 text-center p-8 rounded-3xl bg-gray-50 dark:bg-white/5">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6">
              <FaUserShield />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Direct Access
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No middle-men. You work directly with the engineers building your
              solution for 100% transparency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Integration */}
      <Contact />
    </main>
  );
}
