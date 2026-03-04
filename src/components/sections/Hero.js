"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaTrophy } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import {
  fadeInUp,
  slideUp,
  staggerContainer,
  staggerItem,
} from "@/utils/animations";

export default function Hero() {
  return (
    <SectionContainer
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20"
    >
      <motion.div
        className="w-full grid md:grid-cols-2 gap-12 items-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div className="space-y-8" variants={staggerItem}>
          {/* Upwork Top-Rated Badge */}
          <motion.div className="inline-block" variants={fadeInUp}>
            <a
              href={PORTFOLIO_DATA.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-fit"
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaTrophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  Upwork Top-Rated ⭐
                </span>
              </motion.div>
            </a>
          </motion.div>

          {/* Main Headline with Name */}
          <motion.div className="space-y-4" variants={staggerItem}>
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Bilal Ashraf
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200">
              Full-Stack Developer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              {PORTFOLIO_DATA.hero.subheadline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={staggerItem}
          >
            <Button
              size="lg"
              className="group"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {PORTFOLIO_DATA.hero.cta}
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {PORTFOLIO_DATA.hero.cta2}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700"
            variants={staggerContainer}
          >
            {[
              { number: "50+", label: "Projects" },
              { number: "6+", label: "Years Exp" },
              { number: "100%", label: "Satisfied" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="space-y-1"
              >
                <p className="text-2xl md:text-3xl font-bold text-blue-600">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual - Profile Image */}
        <motion.div
          className="relative hidden md:flex items-center justify-center h-full min-h-96"
          variants={slideUp}
        >
          <motion.div
            className="relative w-80 md:w-96 lg:w-[420px] h-96 md:h-[480px] lg:h-[520px] flex items-center justify-center"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            {/* Glowing animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-300/40 via-purple-300/40 to-pink-300/40 rounded-[2.5rem] blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            ></motion.div>

            {/* Modern hexagonal/rounded shape with glass effect */}
            <motion.div
              className="relative z-10 w-80 md:w-96 lg:w-[420px] h-96 md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 dark:border-white/10 bg-gradient-to-br from-white/40 via-blue-50/30 to-purple-50/20 dark:from-white/5 dark:via-white/10 dark:to-white/5 backdrop-blur-md"
              whileHover={{
                boxShadow:
                  "0 30px 50px -15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <Image
                src="/bilal-ashraf-full-stack-developer-new.png"
                alt="Bilal Ashraf - Full-Stack Developer"
                fill
                priority
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Light overlay gradient that matches theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-400/10"></div>

              {/* Vignette effect */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5 dark:to-white/5"></div>
            </motion.div>

            {/* Floating stat badge - top right */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl px-4 py-3 shadow-lg border border-white/80 dark:border-white/10 z-20 backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.2,
              }}
            >
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                50+ Projects
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                Delivered
              </p>
            </motion.div>

            {/* Floating Upwork badge - bottom left */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl px-4 py-3 shadow-lg border border-white/80 dark:border-white/10 z-20 backdrop-blur-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.4,
              }}
            >
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                Upwork ⭐
              </p>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
                Top-Rated
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
