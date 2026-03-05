"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaGlobe,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import SectionContainer from "@/components/ui/SectionContainer";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

export default function Services() {
  const services = [
    {
      icon: FaCode,
      title: "Full Stack Development",
      description: "Complete web applications with MERN stack",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: FaGlobe,
      title: "Website Development",
      description: "Custom websites built with React and Next.js",
      color: "from-purple-600 to-blue-600",
    },
    {
      icon: FaServer,
      title: "REST API Development",
      description: "Scalable backend APIs with Node.js & Express",
      color: "from-pink-600 to-orange-600",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "MongoDB optimization and schema design",
      color: "from-emerald-600 to-teal-600",
    },
    {
      icon: FaRocket,
      title: "Deployment & DevOps",
      description: "Production deployment and monitoring",
      color: "from-amber-600 to-orange-600",
    },
    {
      icon: FaHeadset,
      title: "Technical Support",
      description: "Architecture and technology guidance",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <SectionContainer
      id="services"
      className="bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900"
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
                🎯 What I Offer
              </p>
            </motion.div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive MERN stack solutions tailored to bring your digital
            vision to life
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={staggerItem} className="group">
                <motion.div
                  className="h-full p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 relative overflow-hidden"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Background gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <motion.div
                    className="relative space-y-4"
                    variants={staggerContainer}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bottom accent */}
                    <motion.div
                      className={`h-1 w-12 bg-gradient-to-r ${service.color} rounded-full mt-4`}
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center space-y-6 pt-8" variants={fadeInUp}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ready to start your project?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing
            together
          </p>
          <motion.button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
