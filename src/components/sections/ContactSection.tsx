"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 ADINKRA",
    subtext: "+254 700 ADINKRA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@adinkralaw.com",
    subtext: "consult@adinkralaw.com",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Victoria Island, Lagos",
    subtext: "With offices across Africa",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 8AM - 6PM",
    subtext: "24/7 Emergency Line Available",
  },
];

const services = [
  "Business & Corporate Law",
  "Family Law",
  "Real Estate Law",
  "Dispute Resolution",
  "Contract Law",
  "Civil Litigation",
  "Other Legal Services",
];

export default function ContactSection() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1500));

    toast.success(
      "Thank you for your inquiry. We will contact you within 24 hours."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="contact-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#001F3F" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="#C9A96E" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)"/>
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
            Ready to Protect
            <br />
            <span className="text-[#C9A96E]">Your Rights?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Contact us today for a free consultation. Our team is ready to listen to your 
            concerns and provide expert legal guidance.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#001F3F] mb-6">
                Schedule Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="h-12 border-gray-200 focus:border-[#C9A96E] focus:ring-[#C9A96E]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="h-12 border-gray-200 focus:border-[#C9A96E] focus:ring-[#C9A96E]"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+234 XXX XXX XXXX"
                      className="h-12 border-gray-200 focus:border-[#C9A96E] focus:ring-[#C9A96E]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-[#C9A96E] focus:ring-[#C9A96E]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How Can We Help? *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Briefly describe your legal matter..."
                    required
                    className="min-h-[150px] border-gray-200 focus:border-[#C9A96E] focus:ring-[#C9A96E] resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#C9A96E] hover:bg-[#B8956B] text-[#001F3F] text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-[#001F3F]/30 border-t-[#001F3F] rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Get In Touch
                    </span>
                  )}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-[#C9A96E] hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#001F3F] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#C9A96E]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#001F3F] mb-1">{info.label}</h4>
                        <p className="text-gray-700">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.subtext}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
       
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="pt-4"
              >
                <p className="text-sm text-gray-500 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#001F3F] flex items-center justify-center hover:bg-[#C9A96E] transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
