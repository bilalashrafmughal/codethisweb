"use client";

import { motion } from "framer-motion";

export default function SectionContainer({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`relative w-full py-20 md:py-32 px-4 md:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
