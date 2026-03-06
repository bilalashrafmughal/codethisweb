"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaTable,
  FaChartBar,
  FaNodeJs,
  FaClipboardCheck,
  FaFileAlt,
  FaStripe,
  FaRegCreditCard,
  FaAws,
  FaGithub,
  FaDatabase,
  FaCode,
  FaServer,
  FaPlug,
  FaTools,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiMui,
  SiAntdesign,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiSwagger,
  SiPaddle,
  SiPolars,
  SiOpenai,
  SiFirebase,
  SiGoogle,
  SiMysql,
  SiPostgresql,
  SiBitbucket,
  SiRailway,
  SiRender,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

import { FaArrowsTurnToDots } from "react-icons/fa6";

import SectionContainer from "@/components/ui/SectionContainer";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function Skills() {
  // Icon mapping for technology icons
  const skillIconMap = {
    SiReact: FaReact,
    SiNextdotjs: SiNextdotjs,
    SiTailwindcss: SiTailwindcss,
    SiStyledcomponents: SiStyledcomponents,
    SiMui: SiMui,
    SiAntdesign: SiAntdesign,
    SiRedux: SiRedux,
    FaTable: FaTable,
    FaChartBar: FaChartBar,
    SiNodedotjs: FaNodeJs,
    SiExpress: SiExpress,
    SiMongodb: SiMongodb,
    SiPrisma: SiPrisma,
    FaClipboardCheck: FaClipboardCheck,
    FaFileAlt: FaFileAlt,
    SiSwagger: SiSwagger,
    FaLink: FaArrowsTurnToDots,
    SiStripe: FaStripe,
    FaCreditCard: SiPaddle,
    FaSpringBolt: FaRegCreditCard,
    FaSnowflake: SiPolars,
    SiOpenai: SiOpenai,
    SiFirebase: SiFirebase,
    SiGoogle: SiGoogle,
    SiMysql: SiMysql,
    SiPostgresql: SiPostgresql,
    SiAmazonaws: FaAws,
    SiGithub: FaGithub,
    SiBitbucket: SiBitbucket,
    SiRailway: SiRailway,
    SiRender: SiRender,
    SiNetlify: SiNetlify,
    SiVercel: SiVercel,
    FaDatabase: FaDatabase,
  };

  // Icon mapping for categories - user can replace these icons
  const categoryIcons = {
    0: FaCode, // Frontend
    1: FaServer, // Backend
    2: FaPlug, // Integrations
    3: FaTools, // Tools
  };

  // Icon mapping for additional sections
  const sectionIconsMap = {
    "Authentication Methods": FaLock,
    "Deployment Platforms": FaRocket,
  };

  return (
    <SectionContainer
      id="skills"
      className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20"
    >
      <motion.div
        className="space-y-16"
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
          <div className="inline-block">
            <motion.div
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-300 dark:border-blue-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                💡 Expertise & Tools
              </p>
            </motion.div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Mastery across modern technologies and frameworks, with continuous
            learning and adaptation to industry standards
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Main Skills Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {PORTFOLIO_DATA.skills.categories.map((category, idx) => {
            const IconComponent = categoryIcons[idx] || FaCode;
            const colors = [
              "from-blue-600 to-cyan-600",
              "from-purple-600 to-blue-600",
              "from-pink-600 to-orange-600",
              "from-emerald-600 to-teal-600",
            ];
            const bgColors = [
              "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
              "from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30",
              "from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30",
              "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
            ];
            const borderColors = [
              "border-blue-200 dark:border-blue-800/50",
              "border-purple-200 dark:border-purple-800/50",
              "border-pink-200 dark:border-pink-800/50",
              "border-emerald-200 dark:border-emerald-800/50",
            ];

            return (
              <motion.div key={idx} variants={staggerItem}>
                <motion.div
                  className={`h-full rounded-2xl border-2 ${borderColors[idx]} bg-gradient-to-br ${bgColors[idx]} p-8 backdrop-blur-sm overflow-hidden group relative`}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors[idx]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <motion.div
                    className="relative space-y-6"
                    variants={staggerContainer}
                  >
                    {/* Category Header */}
                    <motion.div
                      className="flex items-start justify-between"
                      variants={fadeInUp}
                    >
                      <div className="space-y-2">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[idx]} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {category.skills.length} skills
                        </p>
                      </div>
                      {/* <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaChevronRight
                          className={`w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors`}
                        />
                      </motion.div> */}
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                      className="grid grid-cols-2 gap-4 pt-2 border-t-2 border-gray-200 dark:border-gray-700/50"
                      variants={staggerContainer}
                    >
                      {category.skills.map((skill, skillIdx) => {
                        // Handle both old string format and new object format
                        const skillName =
                          typeof skill === "string" ? skill : skill.name;
                        const skillIconName =
                          typeof skill === "string" ? null : skill.icon;
                        const SkillIcon = skillIconName
                          ? skillIconMap[skillIconName]
                          : null;

                        return (
                          <motion.div
                            key={skillIdx}
                            variants={staggerItem}
                            className="group/skill"
                          >
                            <motion.div
                              className={`flex flex-col items-center justify-center gap-3 px-6 py-5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-${colors[idx].split("-")[1]}-400 dark:hover:border-gray-600 transition-all duration-300 cursor-default group-hover/skill:shadow-md h-full`}
                              whileHover={{ x: 4 }}
                            >
                              {SkillIcon ? (
                                <SkillIcon className="w-7 h-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                              ) : (
                                <span
                                  className={`text-2xl bg-gradient-to-br ${colors[idx]} bg-clip-text text-transparent font-bold`}
                                >
                                  ◆
                                </span>
                              )}
                              <span className="text-base font-semibold text-gray-800 dark:text-gray-200 text-center">
                                {skillName}
                              </span>
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="space-y-8 pt-8 border-t-2 border-gray-200 dark:border-gray-800"
          variants={staggerContainer}
        >
          <motion.h3
            className="text-3xl font-bold text-gray-900 dark:text-white text-center"
            variants={fadeInUp}
          >
            Specialization
          </motion.h3>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                title: "Authentication Methods",
                items: PORTFOLIO_DATA.authenticationMethods,
                colorClass: "from-amber-600 to-orange-600",
                bgClass:
                  "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
                borderClass: "border-amber-200 dark:border-amber-800/50",
              },
              {
                title: "Deployment Platforms",
                items: PORTFOLIO_DATA.deploymentPlatforms,
                colorClass: "from-green-600 to-emerald-600",
                bgClass:
                  "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
                borderClass: "border-green-200 dark:border-green-800/50",
              },
            ].map((section, idx) => {
              const IconComponent = sectionIconsMap[section.title] || FaTools;
              return (
                <motion.div key={idx} variants={staggerItem} className="group">
                  <motion.div
                    className={`h-full rounded-2xl border-2 ${section.borderClass} bg-gradient-to-br ${section.bgClass} p-8 backdrop-blur-sm relative overflow-hidden`}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${section.colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>

                    <motion.div
                      className="relative space-y-6"
                      variants={staggerContainer}
                    >
                      {/* Section Header */}
                      <motion.div
                        className="flex items-center gap-3"
                        variants={fadeInUp}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.colorClass} flex items-center justify-center text-white shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {section.title}
                        </h3>
                      </motion.div>

                      {/* Items Grid */}
                      <motion.div
                        className="grid grid-cols-2 gap-4 pt-2 border-t-2 border-gray-200 dark:border-gray-700/50"
                        variants={staggerContainer}
                      >
                        {section.items.map((item, itemIdx) => (
                          <motion.div
                            key={itemIdx}
                            variants={staggerItem}
                            className="group/item"
                          >
                            <motion.div
                              className={`px-6 py-5 rounded-lg text-center bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-${section.colorClass.split("-")[1]}-400 dark:hover:border-gray-600 transition-all duration-300 group-hover/item:shadow-md h-full flex items-center justify-center`}
                              whileHover={{ scale: 1.05 }}
                            >
                              <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                                {item}
                              </p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Summary Stats */}
        {/* <motion.div
          className="grid md:grid-cols-3 gap-6 pt-8"
          variants={staggerContainer}
        >
          {[
            { label: "Technologies", value: "50+" },
            { label: "Frameworks", value: "20+" },
            { label: "Tools & Platforms", value: "30+" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={staggerItem} className="group">
              <motion.div
                className="text-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                whileHover={{ y: -4 }}
              >
                <motion.p
                  className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>
    </SectionContainer>
  );
}
