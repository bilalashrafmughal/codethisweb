"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo & Name */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Bilal
          </div>
          <span className="hidden sm:inline text-xs font-bold bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
            Upwork Top-Rated ⭐
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(PORTFOLIO_DATA.upwork, "_blank")}
            className="gap-2"
          >
            View on Upwork
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button size="sm">Hire Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              className="w-full mt-4"
              onClick={() => window.open(PORTFOLIO_DATA.upwork, "_blank")}
            >
              <Button variant="outline" className="w-full gap-2">
                View on Upwork
                <ExternalLink className="w-4 h-4" />
              </Button>
            </button>
            <button className="w-full">
              <Button variant="primary" className="w-full">
                Hire Me
              </Button>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
