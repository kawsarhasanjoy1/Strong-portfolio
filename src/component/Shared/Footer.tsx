import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import EInput from "../Forms/EInput";
import { TiLocationArrowOutline } from "react-icons/ti";
import Image from "next/image";
import Container from "../Containert/Container";

const Footer = () => {
  return (
    <div className="">
      <Container>
        {" "}
        <div className=" py-10 space-y-10 shadow-2xl bg-[#feffff]">
          <div className=" grid grid-cols-1 md:grid-cols-3 justify-center items-center space-y-6 md:space-y-0">
            <div className=" text-center md:text-start">
              <div className=" relative">
                <EInput
                  placeHolder="Enter your email"
                  className=" rounded-sm"
                  name="email"
                  type="email"
                />
                <TiLocationArrowOutline
                  size={25}
                  className=" absolute top-2 md:right-48 right-28 cursor-pointer"
                />
              </div>
            </div>
            <div className=" flex gap-7 justify-center ">
              <Link className=" hover:text-red-500 duration-500 " href={"/"}>
                Home
              </Link>
              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/portfolio"}
              >
                Portfolio
              </Link>
              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/skill"}
              >
                Skill
              </Link>

              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/about"}
              >
                About
              </Link>
              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
            <div className=" flex gap-5 text-white justify-center md:justify-end">
              <Link href={"/"} className="">
                <FaFacebook className=" bg-[#3b5998] duration-500 w-8 h-8 p-2 rounded-full" />
              </Link>
              <Link href={"/"} className="">
                <FaTwitter className=" bg-[#0d6efd] duration-500 w-8 h-8 p-2 rounded-full" />
              </Link>
              <Link href={"/"} className="">
                <LiaLinkedin className=" bg-[#0d95fde2] duration-500 w-8 h-8 p-2 rounded-full" />
              </Link>
              <Link href={"/"} className="">
                <FaGithub className=" bg-green-500 duration-500 w-8 h-8 p-2 rounded-full" />
              </Link>
            </div>
          </div>
          <hr className=" w-[95%] mx-auto" />
          <div className=" grid grid-cols-1 md:grid-cols-3 justify-center items-center space-y-10 md:space-y-0">
            <div className=" flex gap-7 justify-center md:justify-start">
              <Link className=" hover:text-red-500 duration-500 " href={"/"}>
                Home
              </Link>
              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/portfolio"}
              >
                Portfolio
              </Link>
              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/skill"}
              >
                Skill
              </Link>

              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/about"}
              >
                About
              </Link>
              <Link
                className=" hover:text-red-500 duration-500 "
                href={"/contact"}
              >
                Contact
              </Link>
            </div>
            <div className=" flex items-center justify-center text-xl font-semibold text-red-600">
              Developer portfolio
            </div>
            <div>
              <p className=" text-black text-center md:text-end">
                &copy; 2024 developed by baby care All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
