"use client";

import { motion } from "framer-motion";
import {
  FaStore,
  FaHandshake,
  FaChartBar,
  FaShieldAlt,
  FaCogs,
  FaTools,
} from "react-icons/fa";
import SectionContainer from "@/components/ui/SectionContainer";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

export default function SimpleSolutions() {
  const solutions = [
    {
      title: "Online Store & Websites",
      desc: "Beautiful websites that make people want to buy from you. Perfect for restaurants, stores, and service providers.",
      icon: FaStore,
      points: ["Easy to update", "Works on phones", "Fast loading"],
    },
    {
      title: "Task Automators",
      desc: "Custom tools that handle your paperwork, emails, and scheduling automatically so you can get your time back.",
      icon: FaCogs,
      points: ["Save 10+ hours a week", "Connects your tools", "Zero mistakes"],
    },
    {
      title: "Business Dashboards",
      desc: "Simple screens that show you exactly how much money you're making and where your customers are coming from.",
      icon: FaChartBar,
      points: ["Real-time data", "Easy to read", "Custom reports"],
    },
    {
      title: "Client Managers (CRM)",
      desc: "Keep track of every customer, every message, and every deal in one easy-to-use central system.",
      icon: FaHandshake,
      points: ["Never lose a lead", "Follow-up alerts", "History tracking"],
    },
    {
      title: "Security & Maintenance",
      desc: "We keep your site safe from hackers and ensure everything runs smoothly 24/7 while you focus on sales.",
      icon: FaShieldAlt,
      points: ["Daily backups", "Hack protection", "Tech support"],
    },
    {
      title: "Strategic Consulting",
      desc: "Not sure what you need? We'll help you pick the right technology to solve your specific business challenges.",
      icon: FaTools,
      points: ["Fractional CTO", "Tech roadmap", "Cost saving"],
    },
  ];

  return (
    <SectionContainer
      id="services"
      className="bg-gray-50 dark:bg-gray-950 py-24"
    >
      <motion.div
        className="space-y-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div variants={fadeInUp} className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white">
              Solutions Built for <br />
              <span className="text-blue-600 italic">Real Business Owners</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We don't do 'fancy' for the sake of it. We do what works.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="pb-2">
            <div className="text-sm font-black text-blue-600 uppercase tracking-widest border-l-4 border-blue-600 pl-4">
              6+ Years Experience <br />
              <span className="text-gray-500 font-bold">
                In Business Growth
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="p-10 rounded-[2.5rem] bg-white dark:bg-gray-900 hover:shadow-2xl transition-all border border-gray-100 dark:border-white/5 hover:border-blue-100 dark:hover:border-blue-900/30 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-base leading-relaxed">
                {item.desc}
              </p>
              <div className="space-y-3">
                {item.points.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
