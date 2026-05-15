"use client";

import { motion } from "framer-motion";
import {
  FaUserTimes,
  FaMoneyBillWave,
  FaStopwatch,
  FaArrowRight,
} from "react-icons/fa";
import SectionContainer from "@/components/ui/SectionContainer";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

export default function ProblemSolving() {
  const problems = [
    {
      title: "Losing Customers to Competition?",
      pain: "Your competitors have modern tools, making you look outdated.",
      relief:
        "Get a high-end website that makes you the #1 choice in your market.",
      icon: FaUserTimes,
      color: "red",
    },
    {
      title: "Wasting Hours on Paperwork?",
      pain: "Doing things manually is slowing down your growth.",
      relief: "Automate your daily tasks and focus on making more money.",
      icon: FaStopwatch,
      color: "orange",
    },
    {
      title: "Hard to Find New Leads?",
      pain: "Spending money on marketing that doesn't bring quality clients.",
      relief:
        "We build systems that capture and qualify leads while you sleep.",
      icon: FaMoneyBillWave,
      color: "emerald",
    },
  ];

  return (
    <SectionContainer
      id="problems"
      className="bg-white dark:bg-black py-24 relative overflow-hidden"
    >
      {/* Background Text Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15rem] font-black text-gray-500/5 select-none pointer-events-none whitespace-nowrap">
        TRANSFORM
      </div>

      <motion.div
        className="relative z-10 space-y-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight"
          >
            Running a business is hard. <br />
            <span className="text-blue-600">Technology shouldn't be.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            If any of these sound like you, we are here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-gray-100 dark:border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className={`p-12 space-y-8 bg-white dark:bg-gray-900 border-r last:border-0 border-gray-100 dark:border-white/5 group transition-all`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-${item.color}-500/20 bg-${item.color}-500`}
              >
                <item.icon className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  {item.pain}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-black/40 border-l-4 border-blue-600">
                <p className="text-gray-900 dark:text-gray-200 font-bold">
                  The Fix:{" "}
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    {item.relief}
                  </span>
                </p>
              </div>

              <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600 hover:gap-4 transition-all">
                Learn How <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
