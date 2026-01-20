"use client";

import React, { JSX } from "react";
import { Scale, ArrowUp } from "lucide-react";

export default function Footer(): JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#001F3F] relative overflow-hidden">
      {/* Adinkra Pattern Border */}
      <div className="h-2 bg-gradient-to-r from-[#C9A96E] via-[#001F3F] to-[#C9A96E]" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="footer-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#C9A96E] flex items-center justify-center">
                <Scale className="w-7 h-7 text-[#001F3F]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Adinkra & Associates</h3>
                <p className="text-[#C9A96E] text-sm">Legal Excellence Across Africa</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              For over 25 years, we have been the trusted legal partner for individuals,
              families, and businesses across the African continent. Our commitment to
              justice, integrity, and client success remains unwavering.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
              <span className="text-sm text-gray-400">Available 24/7 for emergencies</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Practice Areas", "Our Team", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Adinkra & Associates. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm">Lagos • Accra • Nairobi • Johannesburg • Douala</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#C9A96E]/10 flex items-center justify-center hover:bg-[#C9A96E]/20 transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-[#C9A96E] group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
    </footer>
  );
}
