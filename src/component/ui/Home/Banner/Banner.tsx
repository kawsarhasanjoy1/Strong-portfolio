/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Button from "../../Button/Button";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  button,
  icon,
  textH,
  textI,
  textS,
} from "@/FramarMotion/motionVarients";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView,controls]);
  const name = " kawsar Hasan Joy";
  const split = name.split("");
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/20/ef/8a/20ef8a75f441e6312b82a19c29eb50f2.jpg",
      }}
      className=""
    >
      <div className=" space-y-2 md:py-44 py-20 flex flex-col flex-1  justify-center items-center">
        <motion.p
          variants={textH}
          initial="hidden"
          ref={ref}
          animate={controls}
          className=" text-2xl bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold "
        >
          Hi!, I am
        </motion.p>

        <motion.p
          variants={textI}
          initial="hidden"
          animate={controls}
          ref={ref}
          className=" md:text-3xl font-bold text-xl uppercase hover:text-green-400  text-white"
        >
          {split.map((item, index) => {
            return (
              <span style={{ transitionDelay: `${index * 30}ms` }}>{item}</span>
            );
          })}
        </motion.p>

        <motion.h1
          variants={textS}
          initial="hidden"
          animate={controls}
          ref={ref}
          className=" md:text-2xl w-72 text-2xl font-[Poppins] text-start  font-bold text-white"
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "I'M a Frontend developer",
              1000,
              "I'M a Mernstack developer",
              1000,
              "I'M a Fullstack developer",
              1000,
            ]}
            speed={50}
           
            repeat={Infinity}
          />
        </motion.h1>

        <div className=" py-2  space-y-8 ">
          <motion.div
            variants={icon}
            initial="hidden"
            animate={controls}
            ref={ref}
            className=" flex gap-4"
          >
            <p className=" border-2 text-green-500 p-2 border-green-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:duration-1000 rounded-full">
              <FiTwitter size={20} />
            </p>
            <p className=" border-2 text-green-500 p-2 border-green-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:duration-1000 rounded-full">
              <FiFacebook size={20} />
            </p>
            <p className=" border-2 text-green-500 p-2 border-green-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:duration-1000 rounded-full">
              <FiLinkedin size={20} />
            </p>
            <p className=" border-2 text-green-500 p-2 border-green-500 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:duration-1000 rounded-full">
              <FiGithub size={20} />
            </p>
          </motion.div>

          <motion.div
            variants={button}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <a download={true} href="/kawsar (1).pdf">
              {" "}
              <Button className=" font-bold rounded-sm w-48 ">
                Download Cv
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
