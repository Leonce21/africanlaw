'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Scale, Award, Users, Globe } from 'lucide-react';

const PatternDivider: React.FC = () => (
  <div className="flex items-center justify-center gap-4 my-6">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]" />
    <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#C9A96E]">
      <path
        d="M20 0 L40 20 L20 40 L0 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]" />
  </div>
);

type StatItemProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A96E]/10 mb-3">
        <Icon className="w-6 h-6 text-[#C9A96E]" />
      </div>
      <div className="text-2xl font-bold text-[#001F3F]">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </motion.div>
  );
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <pattern id="kente" patternUnits="userSpaceOnUse" width="40" height="40">
            <rect width="20" height="20" fill="#C9A96E"/>
            <rect x="20" y="20" width="20" height="20" fill="#C9A96E"/>
          </pattern>
          <circle cx="100" cy="100" r="100" fill="url(#kente)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80&auto=format&fit=crop"
                alt="Professional African lawyer in modern office"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-3 gap-4">
                  <StatItem icon={Scale} value="25+" label="Years" />
                  <StatItem icon={Award} value="500+" label="Cases Won" />
                  <StatItem icon={Users} value="1000+" label="Clients" />
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#C9A96E] rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#001F3F]/5 rounded-2xl -z-10" />
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-[#C9A96E]" />
              <span className="text-[#C9A96E] font-medium tracking-wide uppercase text-sm">
                About Our Firm
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6 leading-tight">
              Your Trusted Legal
              <br />
              <span className="text-[#C9A96E]">Partner in Africa</span>
            </h2>
            
            <PatternDivider />
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                For over two decades, <strong className="text-[#001F3F]">Adinkra & Associates</strong> has 
                stood at the forefront of legal excellence across the African continent. Founded with a 
                vision to provide world-class legal services rooted in African values, we have grown to 
                become one of the most respected law firms serving clients from Lagos to Nairobi, 
                Accra to Johannesburg.
              </p>
              <p>
                Our pan-African approach combines deep local knowledge with international best practices. 
                We understand the unique legal landscapes of different African nations and navigate them 
                with precision and cultural sensitivity. Our team of distinguished lawyers brings together 
                diverse expertise spanning commercial law, family matters, real estate, and complex litigation.
              </p>
              <p>
                What sets us apart is our unwavering commitment to justice and client success. We believe 
                in building lasting relationships based on trust, transparency, and results. Every case we 
                take on receives the dedicated attention of our experienced legal professionals who treat 
                your matters as their own.
              </p>
              <p>
                As Africa continues to rise on the global stage, we are proud to be the legal partners of 
                choice for individuals, families, and businesses shaping the continent&apos;s future.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#001F3F]/5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <span className="text-sm text-[#001F3F]">Pan-African Presence</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#001F3F]/5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <span className="text-sm text-[#001F3F]">Multilingual Team</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#001F3F]/5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <span className="text-sm text-[#001F3F]">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
