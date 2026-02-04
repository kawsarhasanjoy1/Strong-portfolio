"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import lottieJson from "../../../../../public/banner.json";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafafa] pt-20 md:pt-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Kawsar Hasan
            </span>
          </h1>

          <div className="h-20 md:h-24">
            <TypeAnimation
              sequence={[
                "I'M A REACT DEVELOPER",
                1000,
                "I'M A MERN STACK DEVELOPER",
                1000,
              ]}
              speed={50}
              className="text-xl md:text-3xl font-bold text-gray-600 uppercase tracking-tight"
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
            <button className="group relative px-8 py-4 bg-black text-white rounded-full font-bold text-sm tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20">
              <span className="relative z-10 flex items-center gap-2">
                RESUME <FaDownload />
              </span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center items-center relative"
        >
          <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="relative z-10 w-full max-w-[500px]">
            <Lottie animationData={lottieJson} loop={true} autoplay={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
