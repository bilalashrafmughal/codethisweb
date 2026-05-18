"use client";

import { motion } from "framer-motion";
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
  FaArrowRight,
} from "react-icons/fa";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import Link from "next/link";
import Button from "../ui/Button";

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

export default function BusinessServices({
  services = [],
  limit = 3,
  title = "How We Help Your Business Grow",
}) {
  // If no services provided via props, use the first 3
  const displayedServices = services.slice(0, limit);

  return (
    <SectionContainer
      id="services"
      className="bg-gray-50 dark:bg-[#050505] border-t border-gray-100 dark:border-white/5"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-16"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            We don&apos;t just write code. We build digital tools designed to
            solve specific business problems and generate results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group p-8 bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-blue-500/50 transition-all duration-300 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3 border-t border-gray-100 dark:border-white/5 pt-6 mt-auto">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Examples:
                </span>
                <ul className="space-y-2">
                  {(
                    service.examples ||
                    service.includes ||
                    service.services ||
                    []
                  )
                    .slice(0, 3)
                    .map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
              {service.slug && (
                <div className="mt-8 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group/link"
                  >
                    Explore This Solution
                    <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}{" "}
            </motion.div>
          ))}
        </div>

        {services.length > limit && (
          <motion.div variants={fadeInUp} className="text-center pt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group shadow-sm"
            >
              View All Services
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </SectionContainer>
  );
}
