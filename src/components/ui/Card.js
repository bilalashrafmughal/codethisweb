"use client";

import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  animationVariant = {},
  hoverScale = true,
}) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}
      {...animationVariant}
      whileHover={hoverScale ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
