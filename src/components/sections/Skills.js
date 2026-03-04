"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionContainer from "@/components/ui/SectionContainer";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function Skills() {
  return (
    <SectionContainer id="skills" className="bg-gray-50 dark:bg-gray-800/50">
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
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {PORTFOLIO_DATA.skills.categories.map((category, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card className="h-full overflow-hidden" hoverScale={true}>
                <motion.div className="space-y-6" variants={staggerContainer}>
                  {/* Category Header */}
                  <motion.div
                    className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700"
                    variants={fadeInUp}
                  >
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </motion.div>

                  {/* Skills List */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                  >
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div key={skillIdx} variants={staggerItem}>
                        <Badge
                          variant="primary"
                          className="hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-8"
          variants={staggerContainer}
        >
          {[
            {
              title: "Authentication Methods",
              items: PORTFOLIO_DATA.authenticationMethods,
              icon: "🔐",
            },
            {
              title: "Deployment Platforms",
              items: PORTFOLIO_DATA.deploymentPlatforms,
              icon: "🚀",
            },
          ].map((section, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card className="h-full" hoverScale={true}>
                <motion.div className="space-y-4" variants={staggerContainer}>
                  <motion.div
                    className="flex items-center gap-2"
                    variants={fadeInUp}
                  >
                    <span className="text-2xl">{section.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                  >
                    {section.items.map((item, itemIdx) => (
                      <motion.div key={itemIdx} variants={staggerItem}>
                        <Badge variant="secondary">{item}</Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
