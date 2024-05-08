import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaFlag } from "react-icons/fa";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

const Author = () => {
  return (
    <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 mt-20 md:gap-40 mx-auto text-white">
      <div className="space-y-5 md:w-11/12 mx-auto">
        <p className=" text-xl md:text-3xl  text-center">
          I am a MERN Stack Web Developer
        </p>
        <hr className=" border-[1px] mt-3" />
        <p className=" text-start">
          I am Kawsar Hasan Joy form Bangladesh. I am Learning Programming every
          single day. I have some projects with MERN Stack. I am a hard working
          person. I always learn new technologies everyday.
        </p>
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-4 items-center ">
            <FaFlag size={30} />
            <p className=" text-xl">Bangladesh</p>
          </div>
          <div className=" flex gap-4 items-center text-white hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text cursor-pointer duration-700">
            <MdCall className=" text-white" size={30} />
            <p className=" text-xl">+8801405951898</p>
          </div>
          <div className=" flex gap-4 items-center text-white hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text cursor-pointer duration-700">
            <MdEmail className=" text-white" size={30} />
            <p className=" text-xl">kawsarhasanjoy342@gmail.com</p>
          </div>
          <div className=" flex gap-4 items-center">
            <MdLocationPin size={30} />
            <p className=" text-xl">Gouripur,Mymensingh</p>
          </div>
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
      <div className=" relative rounded-lg overflow-hidden md:w-9/12">
        <div className=" absolute inset-1 rounded-lg ">
          <Image
            className="  w-[398 px] h-[480px] object-cover rounded-lg "
            width={398}
            height={480}
            src={"https://i.ibb.co/qr1FYY5/Remini20220221000233124.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Author;
