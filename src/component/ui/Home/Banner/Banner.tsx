/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";
import Button from "../../Button/Button";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const image = {
    hidden: { rotate: 3 },
    visible: { rotate: 0 },
  };
  const name = " kawsar Hasan Joy";
  const split = name.split("");
  return (
    <div className=" md:flex ">
      <div className=" space-y-2 md:py-44 py-20 flex flex-col flex-1 ">
        <p className=" text-2xl bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold ">
          Hello, it's me
        </p>
        <p className=" md:text-3xl font-bold text-xl uppercase hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-500 hover:text-transparent hover:bg-clip-text  text-white">
          {split.map((item, index) => {
            return (
              <span style={{ transitionDelay: `${index * 30}ms` }}>{item}</span>
            );
          })}
        </p>
        <p className={` md:text-3xl font-bold text-xl uppercase text-white `}>
          {split.map((item, index) => {
            return (
              <span style={{ transitionDelay: `${index * 30}ms` }}>{item}</span>
            );
          })}
        </p>
        <h1 className=" text-2xl bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold">
          And I'm a Mern-stack developer
        </h1>
        <p className="text-xl font-bold"></p>
        <div className=" py-2  md:flex gap-8 space-y-8 md:space-y-0">
          <div>
            <a download={true} href="/kawsar (1).pdf">
              {" "}
              <Button className=" font-bold rounded-sm w-48 ">
                Download Cv
              </Button>
            </a>
          </div>
          <div className=" flex gap-4">
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
          </div>
        </div>
      </div>
      <motion.div
        variants={image}
        initial="hidden"
        whileHover="visible"
        className=" w-[360px] h-[450px] mx-auto  pt-10 flex flex-col flex-1"
      >
        <Image
          className=" mx-auto hover:border-2 hover:border-green-400 rounded-2xl hover:duration-1000"
          height={450}
          width={360}
          src={"https://i.ibb.co/qr1FYY5/Remini20220221000233124.jpg"}
          alt="Kawsar developer"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
