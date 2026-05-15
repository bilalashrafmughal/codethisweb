"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaBolt,
  FaCheck,
  FaComments,
  FaBullseye,
} from "react-icons/fa";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpandedReview, setIsExpandedReview] = useState(false);
  const reviews = PORTFOLIO_DATA.upworkReviews || [];
  const CHARACTER_LIMIT = 250;

  const nextReview = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsExpandedReview(false);
    }
  };

  const prevReview = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsExpandedReview(false);
    }
  };

  const currentReview =
    reviews && reviews.length > 0 ? reviews[currentIndex] : null;

  const shouldShowMore =
    currentReview && currentReview.fullReview?.length > CHARACTER_LIMIT;

  return (
    <SectionContainer id="reviews" className="bg-white dark:bg-gray-900">
      <motion.div
        className="space-y-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4"
          variants={fadeInUp}
        >
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-black tracking-widest uppercase">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            What Our Clients <span className="text-blue-600">Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Trusted by businesses worldwide to deliver high-performance digital
            solutions.
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Reviews Slider */}
        <motion.div variants={staggerItem}>
          <AnimatePresence mode="wait">
            {currentReview && (
              <motion.div
                key={`review-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-white/5 shadow-2xl shadow-blue-500/5 overflow-hidden py-10 px-8">
                  <div className="space-y-8 max-w-4xl mx-auto text-center">
                    {/* Rating */}
                    <div className="flex justify-center items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Short Review */}
                    <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white italic leading-tight">
                      "{currentReview.shortReview}"
                    </blockquote>

                    {/* Full Review */}
                    <div className="space-y-4">
                      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span>
                          {isExpandedReview
                            ? currentReview.fullReview
                            : shouldShowMore
                              ? currentReview.fullReview.substring(
                                  0,
                                  CHARACTER_LIMIT,
                                ) + "..."
                              : currentReview.fullReview}
                        </span>
                        {shouldShowMore && (
                          <button
                            onClick={() =>
                              setIsExpandedReview(!isExpandedReview)
                            }
                            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-bold text-sm transition-colors"
                          >
                            {isExpandedReview ? "Show less" : "Show more"}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Review Footer */}
                    <div className="pt-8 border-t border-gray-100 dark:border-white/5 inline-flex flex-col items-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {currentReview.author}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium uppercase tracking-widest mt-1">
                        {currentReview.projectTitle}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <motion.button
              onClick={prevReview}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/5 rounded-2xl hover:border-blue-500/50 shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {reviews.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-10 bg-blue-600"
                      : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-blue-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextReview}
              className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/5 rounded-2xl hover:border-blue-500/50 shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 pt-16"
          variants={staggerContainer}
        >
          {[
            { icon: FaBolt, label: "Execution Speed", value: "High" },
            { icon: FaCheck, label: "Success Rate", value: "100%" },
            {
              icon: FaComments,
              label: "Client Satisfaction",
              value: "100%",
            },
            { icon: FaBullseye, label: "Result Focused", value: "Always" },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 rounded-3xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-blue-500/20 transition-all"
              >
                <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <p className="text-2xl font-black text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-tighter mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div className="flex justify-center pt-8" variants={fadeInUp}>
          <Button
            size="xl"
            className="rounded-2xl px-12 py-6 shadow-xl shadow-blue-500/10 group"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Project
            <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
