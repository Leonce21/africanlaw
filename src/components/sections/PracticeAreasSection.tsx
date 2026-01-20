'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Scale, FileText, Users, Building2, Briefcase, Gavel, ArrowRight } from 'lucide-react';

type PracticeArea = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const practiceAreas: PracticeArea[] = [
  {
    icon: Briefcase,
    title: "Business & Corporate Law",
    description: "Comprehensive legal solutions for businesses across Africa, including company formation, mergers, acquisitions, and corporate governance.",
    color: "#C9A96E"
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Sensitive handling of family matters including divorce, child custody, adoption, and estate planning with compassion and discretion.",
    color: "#2E7D32"
  },
  {
    icon: Building2,
    title: "Real Estate Law",
    description: "Expert guidance on property transactions, land disputes, construction contracts, and real estate development across African markets.",
    color: "#001F3F"
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    description: "Strategic litigation and alternative dispute resolution services including arbitration and mediation for complex commercial disputes.",
    color: "#C9A96E"
  },
  {
    icon: FileText,
    title: "Contract Law",
    description: "Drafting, reviewing, and negotiating contracts to protect your interests in domestic and international business transactions.",
    color: "#2E7D32"
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Vigorous courtroom representation for civil matters, defending your rights with strategic advocacy and thorough preparation.",
    color: "#001F3F"
  }
];

const PracticeCard: React.FC<{ area: PracticeArea; index: number }> = ({ area, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = area.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
        {/* Hover Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] to-[#003366] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Gold Border on Hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div 
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-500"
            style={{ backgroundColor: `${area.color}15` }}
          >
            <Icon 
              className="w-7 h-7 transition-colors duration-500 group-hover:text-[#C9A96E]" 
              style={{ color: area.color }}
            />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-[#001F3F] group-hover:text-white mb-4 transition-colors duration-500">
            {area.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6 transition-colors duration-500">
            {area.description}
          </p>
          
          {/* Learn More Link */}
          <div className="flex items-center gap-2 text-[#C9A96E] font-medium cursor-pointer group/link">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </div>
        </div>
        
        {/* Decorative Corner */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-[#C9A96E]/20 group-hover:border-[#C9A96E]/40 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default function PracticeAreasSection() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="practice" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#001F3F" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#C9A96E]/10 text-[#C9A96E] text-sm font-medium tracking-wide uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
            Our Practice Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive legal expertise across key practice areas, serving clients 
            throughout Africa with dedication and excellence.
          </p>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="h-px w-12 bg-[#C9A96E]" />
            <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
            <div className="h-px w-12 bg-[#C9A96E]" />
          </div>
        </motion.div>
        
        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
