/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";

const ContactInfo = () => {
  const infoItems = [
    {
      icon: <BiPhoneCall size={24} />,
      title: "Phone",
      value: "+8801405951898",
      link: "tel:+8801405951898",
    },
    {
      icon: <AiOutlineMail size={24} />,
      title: "Email",
      value: "kawsarhasahjoy342@gmail.com",
      link: "mailto:kawsarhasahjoy342@gmail.com",
    },
    {
      icon: <FaAddressCard size={24} />,
      title: "Address",
      value: "Gouripur, Mymensingh",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {infoItems.map((item, index) => (
        <div 
          key={index} 
          className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <div className="text-start">
            <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
              {item.title}
            </h3>
            <a 
              href={item.link} 
              className="text-gray-800 font-black text-lg hover:text-blue-600 transition-colors duration-300 break-all md:break-normal tracking-tight"
            >
              {item.value}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;