"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Award } from "lucide-react";
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  specialization: string;
  image: string;
  bio: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Chioma Adeyemi",
    title: "Founding Partner",
    specialization: "Corporate & Commercial Law",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
    bio: "With over 20 years of experience, Chioma leads our corporate practice and has advised on landmark M&A transactions across West Africa. Harvard Law School graduate.",
    linkedin: "#"
  },
  {
    name: "Kofi Mensah",
    title: "Senior Partner",
    specialization: "Dispute Resolution",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    bio: "Kofi is a renowned litigator with expertise in complex commercial disputes and international arbitration. Former judge advocate with the Ghana Bar Association.",
    linkedin: "#"
  },
  {
    name: "Amina Diallo",
    title: "Partner",
    specialization: "Real Estate & Property Law",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
    bio: "Amina specializes in cross-border real estate transactions and has facilitated major property developments in East and West Africa. Cambridge University alumna.",
    linkedin: "#"
  },
  {
    name: "Oluwaseun Bakare",
    title: "Partner",
    specialization: "Family & Private Client",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&auto=format&fit=crop",
    bio: "Oluwaseun leads our family law practice with compassion and expertise, handling high-profile divorce, custody, and estate planning matters across Nigeria.",
    linkedin: "#"
  }
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://ui-avatars.com/api/?name=" +
                encodeURIComponent(member.name) +
                "&background=001F3F&color=C9A96E&size=400";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-[#001F3F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <a
              href={member.linkedin}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C9A96E] transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@adinkralaw.com`}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C9A96E] transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C9A96E] text-white text-xs font-medium">
              <Award className="w-3 h-3" />
              {member.specialization}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-[#001F3F] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-[#C9A96E] font-medium mb-3">{member.title}</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#C9A96E] via-[#001F3F] to-[#C9A96E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};

export default function TeamSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A96E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#001F3F]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#C9A96E]/10 text-[#C9A96E] text-sm font-medium uppercase mb-4">
            Our People
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
            Meet Our Experienced
            <br />
            <span className="text-[#C9A96E]">Legal Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our distinguished lawyers bring together decades of experience,
            diverse expertise, and a shared passion for justice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}