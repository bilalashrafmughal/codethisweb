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
          className="text-center max-w-2xl mx-auto space-y-4"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Most Recent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Showcasing my recent work and expertise in full-stack development
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group" hoverScale={true}>
                <motion.div
                  className="h-full flex flex-col space-y-4"
                  variants={staggerContainer}
                >
                  {/* Project Image */}
                  <motion.div
                    className="relative w-full h-48 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-700"
                    variants={fadeInUp}
                  >
                    <Image
                      src={["/automateed.png", "/mis.png", "/bsaiman.png"][idx]}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-grow space-y-3"
                    variants={staggerContainer}
                  >
                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white"
                      variants={fadeInUp}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                      variants={fadeInUp}
                    >
                      {project.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      className="space-y-2"
                      variants={staggerContainer}
                    >
                      {project.features.map((feature, featureIdx) => (
                        <motion.div
                          key={featureIdx}
                          className="flex items-start gap-2"
                          variants={staggerItem}
                        >
                          <span className="text-blue-600 mt-1">✓</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2 pt-2"
                      variants={staggerContainer}
                    >
                      {project.tags.map((tag, tagIdx) => (
                        <Badge
                          key={tagIdx}
                          variant="accent"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700"
                    variants={fadeInUp}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live
                    </Button>
                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button> */}
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

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
