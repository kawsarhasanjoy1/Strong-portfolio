"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import EInput from "../Forms/EInput";
import Container from "../Containert/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-black tracking-tighter text-gray-900 leading-none">
              LET'S BUILD SOMETHING <br />
              <span className="text-blue-600 italic">EXTRAORDINARY.</span>
            </h3>
            <p className="text-gray-500 max-w-sm text-[13px] font-medium leading-relaxed tracking-wide">
              Stay updated with my latest projects and tech insights. No spam,
              just pure value.
            </p>

            <div className="relative max-w-md group mt-6">
              <EInput
                placeHolder="Your email address"
                className="rounded-full pl-6 pr-16 py-4 border-gray-100 focus:border-blue-500 bg-gray-50/50 transition-all shadow-sm text-sm"
                name="email"
                type="email"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-xl active:scale-90">
                <TiLocationArrow size={22} />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-8">
            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  color: "hover:text-[#1877F2]",
                  href: "#",
                },
                {
                  icon: <FaTwitter />,
                  color: "hover:text-[#1DA1F2]",
                  href: "#",
                },
                {
                  icon: <FaLinkedinIn />,
                  color: "hover:text-[#0A66C2]",
                  href: "#",
                },
                { icon: <FaGithub />, color: "hover:text-black", href: "#" },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-400 ${social.color} hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="text-left lg:text-right space-y-1">
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
                Available for projects
              </p>
              <p className="text-lg font-black text-gray-800 tracking-tighter">
                hello@yourportfolio.com
              </p>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <nav className="flex flex-wrap gap-8 justify-center order-2 md:order-1">
            {["Portfolio", "Skill", "About", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="text-center md:text-right order-3 space-y-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              &copy; {currentYear} — Crafted with passion
            </p>
            <div className="flex items-center justify-center md:justify-end gap-2">
              <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black text-gray-800 uppercase tracking-tighter">
                Next.js Optimized
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
