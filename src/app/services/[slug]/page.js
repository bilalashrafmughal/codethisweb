import { services } from "@/constants/services";
import { notFound } from "next/navigation";
import Contact from "@/components/sections/Contact";
import {
  FaGlobe,
  FaCloud,
  FaRobot,
  FaCode,
  FaShoppingCart,
  FaCogs,
  FaChartBar,
  FaLink,
  FaBolt,
  FaWrench,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

const iconMap = {
  FaGlobe: <FaGlobe />,
  FaCloud: <FaCloud />,
  FaRobot: <FaRobot />,
  FaCode: <FaCode />,
  FaShoppingCart: <FaShoppingCart />,
  FaCogs: <FaCogs />,
  FaChartBar: <FaChartBar />,
  FaLink: <FaLink />,
  FaLightning: <FaBolt />,
  FaWrench: <FaWrench />,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  const fullTitle = `${service.title} | Premium Digital Solutions`;
  const fullDescription = `${service.description} CodeThisWeb provides specialized ${service.title} services engineered for performance, ROI, and scalability.`;

  return {
    // 1. Core SEO Configuration
    title: fullTitle,
    description: fullDescription,
    keywords: [
      service.title,
      `${service.title} solutions`,
      `custom ${service.title} services`,
      "CodeThisWeb Agency",
      "SaaS Development",
      "AI Automation",
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
      canonical: `/services/${slug}`,
    },

    // 5. Open Graph (Social Media Sharing)
    openGraph: {
      type: "website",
      title: fullTitle,
      description: fullDescription,
      url: `https://codethisweb.com/services/${slug}`,
      siteName: "CodeThisWeb Agency",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `CodeThisWeb - ${service.title}`,
        },
      ],
    },

    // 6. Twitter Cards
    twitter: {
      card: "summary_large_image",
      site: "@codethisweb",
      creator: "@codethisweb",
      title: fullTitle,
      description: fullDescription,
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
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Dynamic Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "ProfessionalService",
              name: "CodeThisWeb",
              url: "https://codethisweb.com",
            },
            serviceType: service.title,
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Service Benefits",
              itemListElement: service.benefits.map((benefit, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: benefit,
                },
              })),
            },
            step: service.process.map((step, index) => ({
              "@type": "HowToStep",
              name: `Step ${index + 1}`,
              text: step,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-b from-blue-50/30 to-white dark:from-blue-900/5 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto shadow-lg shadow-blue-500/20">
            {iconMap[service.icon]}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Column: Deep Dive */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                The Solution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
                &quot;{service.fullDescription}&quot;
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                What You Gain
              </h2>
              <div className="grid gap-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100/50 dark:border-blue-800/20"
                  >
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Process & Examples */}
          <div className="space-y-10">
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Process
              </h2>
              <div className="space-y-6 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-blue-200 dark:bg-blue-900/30"></div>
                {service.process.map((step, i) => (
                  <div key={i} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-4 border-white dark:border-gray-950">
                      {i + 1}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-semibold">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {(service.examples || service.includes || service.services) && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Typical Deliverables
                </h2>
                <div className="flex flex-wrap gap-2">
                  {(
                    service.examples ||
                    service.includes ||
                    service.services ||
                    []
                  ).map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-20 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-white/2">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">
            Ready to scale this solution?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              Book a Growth Discovery Call <FaArrowRight />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
