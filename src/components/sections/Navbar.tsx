"use client";

import React, { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#practice" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isScrolled ? "bg-[#001F3F]" : "bg-[#C9A96E]"
                }`}
              >
                <Scale className={`w-6 h-6 ${isScrolled ? "text-[#C9A96E]" : "text-[#001F3F]"}`} />
              </div>
              <div>
                <span
                  className={`font-bold text-lg transition-colors duration-300 ${
                    isScrolled ? "text-[#001F3F]" : "text-white"
                  }`}
                >
                  Adinkra
                </span>
                <span
                  className={`text-sm block -mt-1 transition-colors duration-300 ${
                    isScrolled ? "text-[#C9A96E]" : "text-[#C9A96E]"
                  }`}
                >
                  & Associates
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#C9A96E] ${
                    isScrolled ? "text-[#001F3F]" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+2348001234567"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? "text-[#001F3F]" : "text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                +234 800 ADINKRA
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#C9A96E] hover:bg-[#B8956B] text-[#001F3F] font-medium rounded-full px-6"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? "text-[#001F3F]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left py-3 text-lg font-medium text-[#001F3F] hover:text-[#C9A96E] transition-colors border-b border-gray-100 last:border-0"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full mt-4 bg-[#C9A96E] hover:bg-[#B8956B] text-[#001F3F] font-medium rounded-full py-6"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
