"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaHeart,
  FaChevronRight,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { services } from "@/constants/services";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Highlighted skills for the footer
  const coreSkills = [
    "Next.js 15 (App Router)",
    "React & TypeScript",
    "Tailwind CSS v4",
    "Node.js Backend",
    "AI Integration",
    "Performance SEO",
  ];

  return (
    <motion.footer
      className="bg-black border-t border-gray-800 pt-20 pb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.svg"
                alt="CodeThisWeb Logo"
                width={180}
                height={40}
                className="h-10 w-auto brightness-100 group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              We engineer high-performance digital systems and AI-powered
              solutions that help businesses scale, automate, and dominate their
              market.
            </p>
            <div className="flex gap-4">
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                className="p-3 bg-gray-900 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                className="p-3 bg-gray-900 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <FaLinkedin />
              </a>{" "}
              <a
                href={PORTFOLIO_DATA.upwork}
                target="_blank"
                className="p-3 bg-gray-900 rounded-xl text-gray-400 hover:text-white hover:bg-green-600 transition-all group/upwork"
                title="View on Upwork"
              >
                <SiUpwork className="w-4 h-4" />
              </a>{" "}
            </div>
          </div>

          {/* Solutions/Services Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Direct Solutions
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <FaChevronRight className="w-2 h-2 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Built Systems
            </h4>
            <ul className="space-y-4">
              {PORTFOLIO_DATA.projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <FaChevronRight className="w-2 h-2 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {project.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/projects"
                  className="text-blue-500 hover:text-blue-400 text-sm font-bold flex items-center gap-2 underline decoration-blue-500/30 underline-offset-4"
                >
                  View Full Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Skills */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                Technical Mastery
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-gray-400 text-[10px] font-bold uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                Company
              </h4>
              <Link
                href="/portfolio"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Engineering Lead CV
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white text-sm"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} CodeThisWeb Agency. Engineered for performance and
            business growth.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span>Built with precision by</span>
            <div className="flex items-center gap-1 font-bold text-gray-300">
              CodeThisWeb
              <FaHeart className="w-3 h-3 text-red-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 bg-linear-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all z-50 group"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </motion.button>
    </motion.footer>
  );
}
