"use client";

import { motion } from "framer-motion";
import { FaHeart, FaArrowUp, FaChevronRight } from "react-icons/fa";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-black border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Footer Links & Info */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Left Content */}
            <motion.div className="space-y-3" variants={staggerItem}>
              <p className="text-gray-300 flex items-center gap-2 font-semibold">
                Made with{" "}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaHeart className="w-4 h-4 text-red-500" />
                </motion.span>{" "}
                by CodeThisWeb
              </p>
              <p className="text-gray-500 text-sm">
                © {currentYear} CodeThisWeb. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs pt-2">
                Building exceptional digital experiences with modern
                technologies.
              </p>
            </motion.div>

            {/* Center Content - Tech Stack */}
            <motion.div className="space-y-3" variants={staggerItem}>
              <h4 className="text-white font-semibold">Tech Stack</h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  <span className="text-blue-400">Frontend:</span> React,
                  Next.js, Tailwind CSS
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-purple-400">Backend:</span> Node.js,
                  Express, MongoDB
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-pink-400">Tools:</span> Git, Docker,
                  AWS, Vercel
                </p>
              </div>
            </motion.div>

            {/* Right Content - Links */}
            <motion.div className="space-y-3" variants={staggerItem}>
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <FaChevronRight className="w-3 h-3" />
                  Portfolio
                </a>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <FaChevronRight className="w-3 h-3" />
                  Skills
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <FaChevronRight className="w-3 h-3" />
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Links */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800"
            variants={fadeInUp}
          >
            <p className="text-gray-500 text-sm">
              Let's build something amazing together
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.footer>
  );
}
