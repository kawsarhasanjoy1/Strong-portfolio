"use client";
import { motion } from "framer-motion";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { RxCardStackMinus } from "react-icons/rx";
import { TbStackFront } from "react-icons/tb";

const Service = () => {
  const services = [
    { title: "Frontend Dev", icon: <TbStackFront />, desc: "Building responsive and interactive user interfaces with React and Next.js." },
    { title: "MERN-Stack", icon: <RxCardStackMinus />, desc: "End-to-end web applications using MongoDB, Express, React, and Node." },
    { title: "Full-Stack", icon: <IoFileTrayFullSharp />, desc: "Complete solutions with authentication, databases, and optimized APIs." },
  ];

  return (
    <div className="py-24">
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-4xl font-black tracking-tighter">OUR SERVICES</h2>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">What I offer to my clients</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] text-center space-y-5 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 group"
          >
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-3xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
              <span className="text-4xl">{service.icon}</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;