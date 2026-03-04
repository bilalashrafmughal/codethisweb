"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  Check,
  MessageSquare,
  Target,
} from "lucide-react";
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Client Reviews & Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Trusted by Upwork clients with consistent 5-star ratings
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Reviews Slider - 3 Cards at a time */}
        <motion.div variants={staggerItem}>
          <AnimatePresence mode="wait">
            {currentReview && (
              <motion.div
                key={`review-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-orange-200 dark:border-orange-800/30 overflow-hidden">
                  <div className="space-y-6">
                    {/* Review Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {currentReview.author}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Project: {currentReview.projectTitle}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {currentReview.rating &&
                              [...Array(Math.round(currentReview.rating))].map(
                                (_, i) => (
                                  <span key={i} className="text-xl">
                                    ⭐
                                  </span>
                                ),
                              )}
                          </div>
                          <span className="text-sm font-semibold text-orange-600">
                            {currentReview.rating?.toFixed(1) || "5.0"}
                          </span>
                        </div>
                      </div>

                      {/* Upwork Badge */}
                      {currentReview.verified && (
                        <motion.div
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full flex items-center gap-1"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-xs font-bold text-orange-700 dark:text-orange-300">
                            ✓ Verified
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Short Review */}
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 italic">
                      "{currentReview.shortReview}"
                    </p>

                    {/* Full Review */}
                    <div className="space-y-4">
                      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
                            className="ml-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold text-sm transition-colors"
                          >
                            {isExpandedReview ? "Show less" : "Show more"}
                          </button>
                        )}
                      </div>

                      {/* Date */}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {currentReview.date}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prevReview}
              className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full hover:bg-orange-200 dark:hover:bg-orange-800/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-orange-600"
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextReview}
              className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full hover:bg-orange-200 dark:hover:bg-orange-800/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </motion.button>
          </div>

          {/* Counter */}
          <motion.div
            className="text-center mt-6 text-gray-600 dark:text-gray-400"
            variants={fadeInUp}
          >
            <p className="text-sm">
              Review{" "}
              <span className="font-bold text-orange-600">
                {currentIndex + 1}
              </span>{" "}
              of <span className="font-bold">{reviews.length}</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700"
          variants={staggerContainer}
        >
          {[
            { icon: Zap, label: "Avg Response", value: "2 Hours" },
            { icon: Check, label: "On-Time Delivery", value: "99%" },
            {
              icon: MessageSquare,
              label: "Avg Review Length",
              value: "500+ Words",
            },
            { icon: Target, label: "Project Success", value: "100%" },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={idx}
                className="text-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 border-orange-200 dark:border-orange-800/30"
                animationVariant={staggerItem}
              >
                <motion.div className="space-y-3" variants={staggerContainer}>
                  <IconComponent className="w-10 h-10 text-orange-600 dark:text-orange-400 mx-auto" />
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              </Card>
            );
          })}
        </motion.div>

        {/* CTA to Upwork */}
        <motion.div className="flex justify-center pt-8" variants={fadeInUp}>
          <Button
            size="lg"
            className="gap-2"
            onClick={() => window.open(PORTFOLIO_DATA.upwork, "_blank")}
          >
            View All Reviews on Upwork
            <ExternalLink className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
