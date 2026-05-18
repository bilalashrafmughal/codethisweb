"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

export default function BusinessHero() {
  return (
    <SectionContainer
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-20 overflow-hidden relative"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center space-y-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Impactful Text */}
        <div className="space-y-6">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800"
          >
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">
              High-Impact Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight tracking-tight"
            variants={fadeInUp}
          >
            Stop Losing Customers <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent italic">
              Because of a Weak Online Presence
            </span>
          </motion.h1>

          <motion.div
            className="space-y-6 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
              People judge your business in seconds. We help you create a
              professional, trustworthy experience that makes customers stay,
              connect, and buy.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed opacity-80">
              Whether you&apos;re starting fresh or scaling bigger, we create
              digital solutions built around real business goals.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            variants={fadeInUp}
          >
            <Button
              size="xl"
              className="group px-10 py-6 text-xl shadow-xl shadow-blue-500/20 rounded-2xl"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Grow Your Business
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="px-10 py-6 text-xl rounded-2xl"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See Our Work
            </Button>
          </motion.div>
        </div>

        {/* Business Value Stats - Centered & Refined */}
        <motion.div
          className="pt-12 flex flex-wrap justify-center gap-12 border-t border-gray-100 dark:border-white/5"
          variants={fadeInUp}
        >
          <div className="text-center group">
            <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform">
              60%
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              Task Reduction
            </div>
          </div>
          <div className="text-center group relative px-12 before:absolute before:left-0 before:top-1/4 before:h-1/2 before:w-[1px] before:bg-gray-100 dark:before:bg-white/10 after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-[1px] after:bg-gray-100 dark:after:bg-white/10 hidden sm:block">
            <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              Active Growth
            </div>
          </div>
          {/* Mobile version of the middle stat */}
          <div className="text-center group sm:hidden">
            <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              Active Growth
            </div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform">
              Partner
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              In Your Success
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
