'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Shield, Globe, Handshake, Clock, Award, CheckCircle } from 'lucide-react';

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 1500, suffix: "+", label: "Cases Handled" },
  { value: 15, suffix: "", label: "African Countries" }
];

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Shield,
    title: "Trusted Reputation",
    description: "A legacy of integrity and excellence built over 25 years of legal practice across Africa."
  },
  {
    icon: Globe,
    title: "Pan-African Reach",
    description: "Offices and partnerships in 15 African countries, providing seamless cross-border legal services."
  },
  {
    icon: Handshake,
    title: "Client-First Approach",
    description: "Every client receives personalized attention and strategic counsel tailored to their unique needs."
  },
  {
    icon: Clock,
    title: "Efficient Resolution",
    description: "Committed to achieving the best outcomes in the shortest time, respecting your time and resources."
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Recognized by leading legal publications and industry bodies for exceptional legal services."
  }
];

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#C9A96E]">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const BenefitCard: React.FC<{ benefit: Benefit; index: number }> = ({ benefit, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-5 group"
    >
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center group-hover:bg-[#C9A96E]/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-[#C9A96E]" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUsSection() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="why-us" className="py-24 bg-[#001F3F] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#C9A96E"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E7D32]/10 rounded-full blur-3xl" />
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
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Clients Across Africa
            <br />
            <span className="text-[#C9A96E]">Choose Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our commitment to excellence, integrity, and client success has made us 
            the trusted legal partner for thousands across the continent.
          </p>
        </motion.div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A96E]/30 transition-colors duration-300"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
        
        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Bar Association Certified", "ISO Compliant", "Pro Bono Partner", "Legal Aid Provider"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-gray-400">
                <CheckCircle className="w-5 h-5 text-[#2E7D32]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
