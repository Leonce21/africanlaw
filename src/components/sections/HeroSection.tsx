'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingShape: React.FC<{ className?: string; delay?: number }> = ({ className = '', delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3], 
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    }}
    transition={{ 
      duration: 6, 
      delay, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z"
        fill="none"
        stroke="#C9A96E"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  </motion.div>
);

const AdinkraPattern: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute ${className} opacity-10`}>
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <pattern id="adinkra" patternUnits="userSpaceOnUse" width="30" height="30">
        <circle cx="15" cy="15" r="10" fill="none" stroke="#C9A96E" strokeWidth="0.5"/>
        <circle cx="15" cy="15" r="5" fill="none" stroke="#C9A96E" strokeWidth="0.5"/>
        <line x1="15" y1="0" x2="15" y2="30" stroke="#C9A96E" strokeWidth="0.3"/>
        <line x1="0" y1="15" x2="30" y2="15" stroke="#C9A96E" strokeWidth="0.3"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#adinkra)"/>
    </svg>
  </div>
);

export default function HeroSection() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556157382-97ede2916cd3?w=1920&q=80&auto=format&fit=crop')`,
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/75" />
      
      {/* Adinkra Pattern Overlay */}
      <AdinkraPattern className="inset-0 w-full h-full" />
      
      {/* Floating Geometric Shapes */}
      <FloatingShape className="w-32 h-32 top-20 left-10 md:left-20" delay={0} />
      <FloatingShape className="w-24 h-24 top-40 right-10 md:right-32" delay={1} />
      <FloatingShape className="w-20 h-20 bottom-32 left-1/4" delay={2} />
      <FloatingShape className="w-28 h-28 bottom-20 right-20 hidden md:block" delay={1.5} />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide">
              Pan-African Legal Excellence
            </span>
          </motion.div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Expert Legal Solutions
            <br />
            <span className="text-[#C9A96E]">for Africa&apos;s Future</span>
          </h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Trusted counsel in business law, family law, real estate, and dispute resolution 
            across the continent. Protecting your rights with integrity and excellence.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#C9A96E] hover:bg-[#B8956B] text-[#001F3F] px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.4)] hover:scale-105"
            >
              Schedule a Free Consultation
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
      
      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
    </section>
  );
}
