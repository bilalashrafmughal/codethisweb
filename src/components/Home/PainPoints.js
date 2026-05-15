"use client";

import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import SectionContainer from "@/components/ui/SectionContainer";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

export default function PainPoints() {
  const points = [
    {
      pain: "Manual repetitive tasks killing your team's productivity?",
      solution:
        "We build custom automation engines that do the heavy lifting for you.",
      icon: FaClock,
    },
    {
      pain: "Technical debt preventing you from scaling quickly?",
      solution:
        "Our clean, modern architectures are built to scale with your user base.",
      icon: FaTools,
    },
    {
      pain: "Complex tools that your team doesn't know how to use?",
      solution:
        "Intuitive, high-performance dashboards designed for real business users.",
      icon: FaCogs,
    },
  ];

  return (
    <SectionContainer id="solutions" className="bg-gray-50 dark:bg-gray-950">
      <motion.div
        className="space-y-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-bold tracking-tight uppercase"
          >
            Stop Losing Money on Bad Tech
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white"
          >
            Tech should solve problems,
            <br /> <span className="text-blue-600">not create them.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="relative group p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute -top-5 left-8 p-4 rounded-2xl bg-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>

              <div className="pt-6 space-y-6">
                <div className="flex gap-3">
                  <FaExclamationTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p className="font-bold text-gray-900 dark:text-white text-lg italic">
                    "{item.pain}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                  <div className="flex gap-3">
                    <FaCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
