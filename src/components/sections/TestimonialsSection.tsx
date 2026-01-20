"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  location: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amara Okonkwo",
    company: "TechStart Nigeria",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote: "Adinkra & Associates handled our company's merger with exceptional professionalism. Their deep understanding of Nigerian corporate law and cross-border regulations made the complex process smooth. Highly recommend for any business legal matters."
  },
  {
    id: 2,
    name: "Dr. Kwame Asante",
    company: "Ghana Medical Foundation",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote: "When our foundation faced a complex land dispute, this team stepped in with remarkable expertise. Their knowledge of Ghanaian property law and dedication to our cause resulted in a favorable outcome. Truly exceptional legal partners."
  },
  {
    id: 3,
    name: "Fatima Mwangi",
    company: "East Africa Exports Ltd",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote: "The team provided outstanding support for our international trade contracts. Their pan-African expertise and attention to detail protected our interests in multiple jurisdictions. A true asset to any business operating across Africa."
  },
  {
    id: 4,
    name: "Emmanuel Douala",
    company: "Cameroon Construction Group",
    location: "Douala, Cameroon",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote: "Navigating construction law in Central Africa requires deep local knowledge. Adinkra & Associates delivered exactly that, helping us resolve contract disputes and regulatory challenges with efficiency and expertise."
  },
  {
    id: 5,
    name: "Zainab Ibrahim",
    company: "Family Office",
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote: "During a difficult family matter, the team showed incredible compassion while maintaining the highest professional standards. They guided us through the legal process with sensitivity and achieved the best outcome for everyone involved."
  },
  {
    id: 6,
    name: "Jean-Pierre Nkomo",
    company: "Pan-African Investments",
    location: "Johannesburg, South Africa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
    rating: 5,
    quote: "For cross-border investment matters, there's no better firm in Africa. Their network spans the continent, and their expertise in international business law is unmatched. They've been our legal partners for five years now."
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-2xl p-8 shadow-xl ${isActive ? 'ring-2 ring-[#C9A96E]' : ''}`}
  >
    {/* Quote Icon */}
    <div className="mb-6">
      <Quote className="w-10 h-10 text-[#C9A96E]/30" />
    </div>
    
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
      ))}
    </div>
    
    {/* Quote */}
    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
      &quot;{testimonial.quote}&quot;
    </p>
    
    {/* Author */}
    <div className="flex items-center gap-4">
      <Image 
        src={testimonial.image}
        alt={testimonial.name}
        width={56}
        height={56}
        className="rounded-full object-cover border-2 border-[#C9A96E]/20"
        onError={(e) => {
          e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=C9A96E&color=001F3F&size=200';
        }}
      />
      <div>
        <h4 className="font-semibold text-[#001F3F]">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
        <div className="flex items-center gap-1 text-sm text-[#C9A96E]">
          <MapPin className="w-3 h-3" />
          {testimonial.location}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Africa Map Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg viewBox="0 0 500 500" className="w-[800px] h-[800px]">
          <path
            d="M250 50 C300 80 350 100 380 150 C400 200 420 250 400 300 C380 350 350 400 300 430 C250 460 200 450 150 420 C100 390 80 340 70 290 C60 240 80 190 110 150 C140 110 190 70 250 50 Z"
            fill="#001F3F"
            stroke="#C9A96E"
            strokeWidth="2"
          />
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
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from clients across Africa who have trusted us with their most important legal matters.
          </p>
        </motion.div>
        
        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  isActive={index === 1}
                />
              ))}
            </AnimatePresence>
          </div>
          
          {/* Mobile Single Card */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={testimonials[currentIndex].id}
                testimonial={testimonials[currentIndex]} 
                isActive={true}
              />
            </AnimatePresence>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-[#001F3F]/20 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10"
            >
              <ChevronLeft className="w-5 h-5 text-[#001F3F]" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#C9A96E]' 
                      : 'bg-[#001F3F]/20 hover:bg-[#001F3F]/40'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-[#001F3F]/20 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10"
            >
              <ChevronRight className="w-5 h-5 text-[#001F3F]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}