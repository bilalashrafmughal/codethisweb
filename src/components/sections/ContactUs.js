"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Send data to dummy endpoint
      const response = await axios.post(
        "https://api.example.com/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200 || response.status === 201) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
      console.error("Error sending message:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionContainer id="contact-us" className="bg-white dark:bg-gray-900">
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's discuss how I can help you build
            something amazing.
          </p>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div variants={staggerItem} className="max-w-2xl mx-auto w-full">
          <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-800/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg flex items-center gap-3"
                >
                  <FaCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg"
                >
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {error}
                  </p>
                </motion.div>
              )}

              {/* Name Field */}
              <motion.div className="space-y-2" variants={staggerItem}>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div className="space-y-2" variants={staggerItem}>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div className="space-y-2" variants={staggerItem}>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project or inquiry topic"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div className="space-y-2" variants={staggerItem}>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={staggerItem}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading || isSubmitted}
                  className="w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FaCheckCircle className="w-5 h-5" />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700"
          variants={staggerContainer}
        >
          {[
            { icon: "✉️", label: "Email", value: "bilal@yourname.com" },
            { icon: "📱", label: "Phone", value: "+1 (555) 123-4567" },
            { icon: "🔗", label: "Upwork", value: "View Profile" },
          ].map((contact, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="text-center"
            >
              <p className="text-3xl mb-2">{contact.icon}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {contact.label}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                {contact.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
