"use client";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import Lottie from "react-lottie";
import lottieJson from "../../../../../public/banner.json";

const Home = () => {
  const image = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const Text = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  const TextY = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  const span = " Welcome to my website";
  const split = span.split("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      id="particles.js"
      className=" md:flex w-full h-screen md:px-0 md:gap-48 px-3 font-[Poppins]"
    >
      <div className=" md:w-6/12 md:rounded-md  rounded-full w-full md:pl-16 flex justify-center items-center">
        <motion.div
          className=" "
          variants={image}
          initial="hidden"
          animate="visible"
        >
          <Lottie options={defaultOptions} height={400} width={400} />
        </motion.div>

        <motion.div
          variants={image}
          initial="hidden"
          animate="visible"
          className=" relative rounded-full  md:w-6/12 w-80 h-80 mx-auto  overflow-hidden md:hidden"
        >
          <Lottie options={defaultOptions} height={400} width={400} />
        </motion.div>
      </div>
      <motion.div
        variants={Text}
        animate="visible"
        initial="hidden"
        className=" md:w-8/12 md:flex justify-center items-center md:mt-0 mt-5 mx-auto "
      >
        <div className=" w-full text-start space-y-4 md:mt-0 mt-20">
          <p className=" text-xl ">Hi!</p>
          <motion.p
            variants={TextY}
            initial="hidden"
            animate="visible"
            className=" md:text-3xl text-xl uppercase hover:text-green-400"
          >
            {split.map((item, index) => {
              return (
                <span
                  key={index}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {item}
                </span>
              );
            })}
          </motion.p>
          <p className=" md:text-3xl text-xl uppercase">
            {split.map((item, index) => {
              return (
                <motion.span
                  variants={TextY}
                  initial="hidden"
                  animate="visible"
                  key={index}
                >
                  {item}
                </motion.span>
              );
            })}
          </p>
          <p className=" md:text-xl text-[10px] mt-3 mb-4">
            <TypeAnimation
              sequence={[
                "I A'M REACT DEVELOPER",
                1000,
                "I A'M MERN STACK DEVELOPER",
                1000,
              ]}
              speed={40}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </p>

          <div className=" flex gap-4 h-10 items-center ">
            <Link href={"https://github.com/kawsarhasanjoy1"}>
              {" "}
              <p className="hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500  hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <BsGithub className="" size={30} />
              </p>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/kawsar-hasan-joy-a86652287/"}
            >
              <p className="hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500  hover:text-white hover:mb-3 duration-1000 hover:duration-1000 hover:rounded-full p-3 rounded-full">
                <BsLinkedin className="" size={30} />
              </p>
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100077015388756"}
            >
              <p className="hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:mb-3 hover:duration-1000 hover:rounded-full p-3">
                <FaFacebook className="" size={30} />
              </p>
            </Link>
          </div>
          <div className="mt-4 md:space-x-8 space-x-2 flex items-center ">
            <button className=" btn flex justify-center items-center w-60 rounded-sm">
              Download Resume <FaDownload />
            </button>
            {/* <button className="text-xl box-border border-2 border-green-400 w-52 h-10 bg-green-400 text-white relative group">
              <span className="pr-8">Download Resume</span>
              <span className="bg-green-400 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-8 duration-300">
                <FaDownload />
              </span>
            </button> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
