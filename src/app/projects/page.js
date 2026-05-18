import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Approach from "@/components/sections/Approach";

export const metadata = {
  title: "Case Studies & Portfolio | CodeThisWeb",
  description:
    "Explore our portfolio of high-performance digital systems, SaaS platforms, and AI-powered solutions. Real-world results for businesses that demand growth.",
  keywords:
    "portfolio, case studies, web development projects, SaaS examples, AI automation portfolio, CodeThisWeb projects",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Projects Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-950 border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-black tracking-widest uppercase">
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight">
            Proven Systems <br />
            <span className="text-blue-600 italic">Built to Scale</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            From architecture to deployment, explore how we transform complex
            business requirements into high-performance digital ecosystems.
          </p>
        </div>
      </section>

      {/* Main Projects Section */}
      <Projects limit={100} />

      {/* Trust & Methodology Section */}
      <Approach />

      {/* CTA Integration */}
      <Contact />
    </div>
  );
}
