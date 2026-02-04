"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import Container from "../Containert/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 mb-10 px-4 md:px-0 overflow-hidden">
      <div className="relative bg-white border border-gray-100 rounded-md overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]">
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

        <Container>
          <div className="relative z-10 py-16 md:py-24 px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-4xl font-black tracking-[-0.05em] text-gray-900 leading-[0.85]">
                    READY TO <br />
                    <span className="text-blue-600 italic">CONNECT?</span>
                  </h3>
                  <p className="text-gray-500 max-w-lg text-lg font-medium leading-relaxed">
                    Let's turn your ambitious ideas into reality. Whether it's a new project or just a friendly hello, I'm all ears.
                  </p>
                </div>

                <div className="relative max-w-md group">
                  <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-2xl p-1.5 focus-within:border-blue-500 focus-within:bg-white transition-all duration-300">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-1 bg-transparent px-6 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                    />
                    <button className="bg-gray-900 text-white p-4 rounded-xl hover:bg-blue-600 transition-all duration-500 shadow-lg active:scale-95">
                      <TiLocationArrow size={24} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col lg:items-end space-y-16">
                <div className="text-left lg:text-right space-y-4">
                  <p className="text-[12px] font-black text-blue-600 uppercase tracking-[0.5em]">Direct Line</p>
                  <a 
                    href="mailto:kawsarhasanjoy342@gmail.com" 
                    className="text-md md:text-xl font-black text-gray-900 hover:text-blue-600 transition-all duration-300 break-all lg:break-normal tracking-tighter decoration-blue-100 underline underline-offset-8"
                  >
                    kawsarhasanjoy342@gmail.com
                  </a>
                  <p className="text-gray-400 font-semibold text-sm">Open for Freelance & Full-time Roles</p>
                </div>

                <div className="flex flex-wrap gap-5">
                  {[
                    { icon: <FaFacebookF />, hover: "hover:text-[#1877F2]", href: "#" },
                    { icon: <FaTwitter />, hover: "hover:text-[#1DA1F2]", href: "#" },
                    { icon: <FaLinkedinIn />, hover: "hover:text-[#0A66C2]", href: "#" },
                    { icon: <FaGithub />, hover: "hover:text-black", href: "#" },
                  ].map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.href}
                      className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-100 text-gray-400 ${social.hover} hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2`}
                    >
                      {React.cloneElement(social.icon as React.ReactElement, { size: 22 })}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-10">
              <nav className="flex flex-wrap gap-10 justify-center">
                {["Portfolio", "Skill", "About", "Blog", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="group relative text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col items-center lg:items-end gap-4">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-50 rounded-full border border-emerald-100">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">
                    Available for Projects
                  </span>
                </div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                  &copy; {currentYear} — Crafted by Kawsar Hasan Joy
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;