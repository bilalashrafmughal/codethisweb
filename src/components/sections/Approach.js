"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function Approach() {
  return (
    <SectionContainer id="approach" className="bg-gray-50 dark:bg-gray-800/50">
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
            My Work Approach
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A structured methodology ensuring quality, reliability, and
            excellence
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Methodology Timeline */}
        <motion.div className="space-y-6" variants={staggerContainer}>
          {PORTFOLIO_DATA.experience.methodology.map((item, idx) => (
            <motion.div
              key={item.step}
              className="relative"
              variants={staggerItem}
            >
              {/* Timeline Line */}
              {idx !== PORTFOLIO_DATA.experience.methodology.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-blue-600 to-transparent dark:from-blue-400"></div>
              )}

              <motion.div
                className="flex gap-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step Number */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                >
                  {item.step}
                </motion.div>

                {/* Content */}
                <Card className="flex-grow" hoverScale={true}>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          variants={staggerContainer}
        >
          {[
            {
              title: "Structured Development",
              description: "Following a proven methodology ensures consistency",
              icon: "📋",
            },
            {
              title: "Quality Assurance",
              description: "Multiple checkpoints to ensure code quality",
              icon: "✅",
            },
            {
              title: "Scalable Solutions",
              description: "Building applications that grow with your needs",
              icon: "📈",
            },
          ].map((benefit, idx) => (
            <Card
              key={idx}
              className="text-center"
              hoverScale={true}
              animationVariant={staggerItem}
            >
              <motion.div className="space-y-3" variants={staggerContainer}>
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
