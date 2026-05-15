"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function Projects() {
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
          {PORTFOLIO_DATA.projects.map((project, idx) => (
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
                  <Button
                    size="lg"
                    className="rounded-2xl px-8 shadow-lg shadow-blue-500/20 group"
                  >
                    View Case Study
                    <FaExternalLinkAlt className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <motion.div className="flex justify-center pt-4" variants={fadeInUp}>
          <Button size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Button>
        </motion.div> */}
      </motion.div>
    </SectionContainer>
  );
}
