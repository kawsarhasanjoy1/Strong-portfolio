/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className=" flex flex-col flex-1 justify-center items-center w-full bg-[#2220207a] md:bg-transparent rounded-[50px] ">
      <div className=" space-y-5 -2xl mx-2">
        <div className=" rounded-lg -2xl  text-start flex md:gap-5 gap-3 md:pl-5 pl-3 py-8 text-white">
          <div>
            <p className=" bg-gradient-to-r from-green-400 to-blue-500 md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full text-white">
              <BiPhoneCall size={20} />
            </p>
          </div>
          <div>
            <h1 className=" font-bold font-[Radio Canada,sans-serif] text-xl mb-3 ">
              Phone
            </h1>
            <p className=" hover:text-green-400 duration-500">+8801405951898</p>
          </div>
        </div>

        <div className=" rounded-lg  text-white  text-start flex md:gap-5 gap-3 md:pl-5 pl-3 py-8">
          <div>
            <p className=" bg-gradient-to-r from-green-400 to-blue-500  md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full text-white">
              <AiOutlineMail size={20} />
            </p>
          </div>
          <div>
            <h1 className=" bg-primary-gradient  font-bold font-[Radio Canada,sans-serif] text-xl mb-3 ">
              Email
            </h1>
            <p className=" hover:text-green-400 duration-500 ">
              kawsarhasahjoy342@gmail.com
            </p>
          </div>
        </div>

        <div className=" rounded-lg text-white   text-start flex md:gap-5 gap-3 pl-3 md:pl-5 py-8">
          <div>
            <p className="bg-gradient-to-r from-green-400 to-blue-500 md:w-16 md:h-16 w-10 h-10 flex items-center justify-center rounded-full text-white">
              <FaAddressCard size={30} />
            </p>
          </div>
          <div>
            <h1 className=" font-bold font-[Radio Canada,sans-serif] text-xl mb-3 ">
              Address
            </h1>
            <p className=" hover:text-green-400 duration-500">
              Gouripur,Mymensingh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
