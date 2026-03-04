"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerItem,
} from "@/utils/animations";

export default function About() {
  return (
    <SectionContainer id="about" className="bg-white dark:bg-gray-900">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Left Image */}
        <motion.div className="relative hidden md:block" variants={fadeInLeft}>
          <motion.div
            className="relative w-full aspect-square flex items-center justify-center h-full min-h-96"
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

            {/* Modern rounded shape with glass effect */}
            <motion.div
              className="relative z-10 w-80 h-96 md:w-96 md:h-[480px] lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 dark:border-white/10 bg-gradient-to-br from-white/40 via-blue-50/30 to-purple-50/20 dark:from-white/5 dark:via-white/10 dark:to-white/5 backdrop-blur-md"
              whileHover={{
                boxShadow:
                  "0 30px 50px -15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <Image
                src="/bilal-ashraf-full-stack-developer-about-me.png"
                alt="Bilal Ashraf - Full-Stack Developer"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Light overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-400/10"></div>

              {/* Vignette effect */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5 dark:to-white/5"></div>
            </motion.div>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              50+ Projects Delivered
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div className="space-y-8" variants={staggerItem}>
          {/* Section Title */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            variants={fadeInUp}
          >
            {PORTFOLIO_DATA.about.description}
          </motion.p>

          {/* Highlights */}
          <motion.div className="space-y-3" variants={staggerContainer}>
            {PORTFOLIO_DATA.about.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-200"
                variants={staggerItem}
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            {[
              { label: "Projects", value: "50+" },
              { label: "Clients", value: "40+" },
              { label: "Years Exp", value: "6+" },
              { label: "Success Rate", value: "100%" },
            ].map((stat, idx) => (
              <Card
                key={idx}
                className="text-center py-6"
                animationVariant={staggerItem}
              >
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
