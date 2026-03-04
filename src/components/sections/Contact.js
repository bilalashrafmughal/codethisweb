"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  Copy,
  Check,
  Send,
  CheckCircle,
} from "lucide-react";
import axios from "axios";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "bilal@codethisweb.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: PORTFOLIO_DATA.phone,
    },
  ];

  const socialLinks = [
    { icon: Github, href: PORTFOLIO_DATA.github, label: "GitHub" },
    { icon: Linkedin, href: PORTFOLIO_DATA.linkedin, label: "LinkedIn" },
    { icon: Briefcase, href: PORTFOLIO_DATA.upwork, label: "Upwork" },
  ];

  return (
    <SectionContainer id="contact" className="bg-white dark:bg-gray-900">
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

        {/* Form and Contact Info Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={staggerContainer}
        >
          {/* Contact Form */}
          <motion.div variants={staggerItem}>
            <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-800/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
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
                    rows="5"
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
                        <CheckCircle className="w-5 h-5" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Methods & Social Links */}
          <motion.div className="space-y-8" variants={staggerContainer}>
            {/* Direct Contact Methods */}
            <motion.div className="space-y-4" variants={staggerContainer}>
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                variants={fadeInUp}
              >
                Contact Methods
              </motion.h3>
              {contactMethods.map((method, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => copyToClipboard(method.value)}
                  variants={staggerItem}
                  className="w-full"
                >
                  <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800/30 hover:border-blue-400 dark:hover:border-blue-600 text-left group transition-colors">
                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/60 transition-colors">
                        {method.icon}
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {method.label}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {method.value}
                        </p>
                      </div>
                      <motion.div
                        animate={copied ? { scale: 1.2 } : { scale: 1 }}
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                        )}
                      </motion.div>
                    </motion.div>
                  </Card>
                </motion.button>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="space-y-4" variants={staggerContainer}>
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                variants={fadeInUp}
              >
                Connect
              </motion.h3>

              <motion.div
                className="grid grid-cols-3 gap-4"
                variants={staggerContainer}
              >
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={staggerItem}
                      className="w-full"
                    >
                      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800/30 h-full flex items-center justify-center hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2,
                          }}
                        >
                          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                      </Card>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
