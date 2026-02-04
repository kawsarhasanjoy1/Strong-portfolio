"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import { FaFlag } from "react-icons/fa";

const Author = () => {
  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-400/20 to-green-400/20 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all duration-700"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5]">
              <Image
                fill
                src="https://i.ibb.co/qr1FYY5/Remini20220221000233124.jpg"
                alt="Kawsar Hasan Joy"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
              <p className="text-3xl font-black text-blue-600 leading-none">
                2+
              </p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                Years Exp.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                  Available for Hire
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-[1.1]">
                ABOUT{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                  MYSELF
                </span>
              </h2>

              <p className="text-gray-500 leading-relaxed font-medium text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                I am{" "}
                <span className="text-gray-900 font-bold">
                  Kawsar Hasan Joy
                </span>{" "}
                from Bangladesh. A passionate MERN Stack Developer dedicated to
                building high-performance and visually stunning web
                applications. I turn complex problems into simple, beautiful,
                and intuitive designs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
              {[
                { icon: <FaFlag />, label: "Country", text: "Bangladesh" },
                {
                  icon: <MdLocationPin />,
                  label: "Location",
                  text: "Mymensingh",
                },
                { icon: <MdCall />, label: "Phone", text: "+8801405951898" },
                { icon: <MdEmail />, label: "Email", text: "joy@email.com" },
              ].map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {info.label}
                    </p>
                    <p className="text-sm font-black text-gray-800">
                      {info.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex gap-3">
                {/* সোশ্যাল আইকন এরর ফিক্স: আইডি এবং আইকন অবজেক্ট ব্যবহার */}
                {[
                  { id: "twitter", icon: <FiTwitter /> },
                  { id: "facebook", icon: <FiFacebook /> },
                  { id: "linkedin", icon: <FiLinkedin /> },
                  { id: "github", icon: <FiGithub /> },
                ].map((social) => (
                  <button
                    key={social.id} // এখানে ইউনিক কি (key) দেওয়া হয়েছে
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-900 text-white hover:bg-blue-600 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-gray-200"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </button>
                ))}
              </div>
              <div className="h-px w-12 bg-gray-200 hidden sm:block"></div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Follow my journey
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Author;