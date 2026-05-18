import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaRocket,
  FaTools,
  FaChartLine,
} from "react-icons/fa";
import Contact from "@/components/sections/Contact";
import Approach from "@/components/sections/Approach";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study - CodeThisWeb`,
    description: project.description,
    openGraph: {
      title: `${project.title} | High-Performance System Deployment`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Project Hero */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-12 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  Visit Live Site <FaExternalLinkAlt className="text-sm" />
                </a>
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    View Code <FaGithub className="text-lg" />
                  </a>
                )}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-gray-200 dark:border-gray-800 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-24 px-4 border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Main Narrative */}
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                <FaRocket className="text-blue-600" />
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                <FaTools className="text-blue-600" />
                Engineering Solution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                <FaCheckCircle className="text-blue-600" />
                Key Features Included
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-10">
            <div className="p-8 rounded-[2rem] bg-blue-600 text-white shadow-xl shadow-blue-500/20">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaChartLine />
                Key Results
              </h2>
              <div className="space-y-6">
                {project.results.map((result, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                    <p className="font-medium text-blue-50 leading-snug">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Built With
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Approach />
      <Contact />
    </div>
  );
}
