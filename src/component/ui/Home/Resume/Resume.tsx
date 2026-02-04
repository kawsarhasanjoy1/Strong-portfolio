"use client";
import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const data = {
    experience: [
      { year: "2022-Present", title: "Frontend Developer", company: "Programming Hero" },
      { year: "2022-Present", title: "MERN Stack Developer", company: "Portfolio Projects" },
    ],
    education: [
      { year: "2020-2022", title: "SSC (Secondary School)", company: "Madrasah Board" },
      { year: "2022-2024", title: "HSC (Higher Secondary)", company: "Mymensingh Board" },
    ]
  };

  const ResumeCard = ({ item }: any) => (
    <div className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
      <span className="text-blue-600 font-black text-sm tracking-widest">{item.year}</span>
      <h3 className="text-2xl font-black text-gray-900 mt-2 tracking-tighter uppercase">{item.title}</h3>
      <p className="text-gray-500 font-bold text-xs mt-1 uppercase tracking-widest">{item.company}</p>
    </div>
  );

  return (
    <div className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-3xl font-black tracking-tighter mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-600"></span> MY EXPERIENCE
        </h2>
        <div className="space-y-6">
          {data.experience.map((exp, i) => <ResumeCard key={i} item={exp} />)}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-black tracking-tighter mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-green-500"></span> MY EDUCATION
        </h2>
        <div className="space-y-6">
          {data.education.map((edu, i) => <ResumeCard key={i} item={edu} />)}
        </div>
      </div>
    </div>
  );
};

export default Resume;