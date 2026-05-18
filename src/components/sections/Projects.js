"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

import Badge from "@/components/ui/Badge";
import SectionContainer from "@/components/ui/SectionContainer";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Projects({ limit = 100 }) {
  const displayedProjects = PORTFOLIO_DATA.projects.slice(0, limit);

  return (
    <SectionContainer id="projects" className="bg-white dark:bg-gray-900">
      <motion.div
        className="space-y-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-6"
          variants={fadeInUp}
        >
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold tracking-tight uppercase">
            🚀 Proven Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white">
            Systems We've <span className="text-blue-600">Deployed</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
            Real-world results for businesses that demand high-performance
            digital ecosystems.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Projects List - Modern Alternating Layout */}
        <div className="space-y-24 md:space-y-32">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* project Image Side */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
                </div>
              </div>

              {/* project Content Side */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="space-y-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">
                    Featured Project
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      variant="outline"
                      className="text-xs bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all group/btn"
                  >
                    View Case Study
                    <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                    title="Live Site"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {PORTFOLIO_DATA.projects.length > limit && (
          <motion.div className="flex justify-center pt-16" variants={fadeInUp}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group shadow-sm"
            >
              View More Projects
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </SectionContainer>
  );
}
