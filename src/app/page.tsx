'use client';

import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/sections/Navbar';
import PracticeAreasSection from '@/components/sections/PracticeAreasSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import React, { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: About Us */}
        <AboutSection />
        
        {/* Section 3: Practice Areas */}
        <PracticeAreasSection />
        
        {/* Section 4: Why Choose Us */}
        <WhyChooseUsSection />
        
        {/* Section 5: Testimonials */}
        <TestimonialsSection />
        
        {/* Section 6: Team */}
        <TeamSection />
        
        {/* Section 7: Contact & CTA */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}