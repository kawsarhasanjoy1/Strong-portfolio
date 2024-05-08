import React from "react";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { RxCardStackMinus } from "react-icons/rx";
import { TbStackFront } from "react-icons/tb";

const Service = () => {
  return (
    <div className=" space-y-10 mt-14">
      <p className=" text-center text-3xl font-bold text-white">Services</p>
      <div className=" text-white grid grid-cols-1 md:grid-cols-3 gap-6 group">
        <div className=" flex flex-col justify-center items-center bg-slate-600 opacity-60 py-10 text-center px-2 text-white rounded-sm space-y-2 group-hover:blur-sm hover:!blur-none group-hover:scale-100 hover:!scale-105 duration-700 ">
          <TbStackFront size={50} />
          <p className=" text-xl font-bold text-white ">Frontend development</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro
            deleniti temporibus ipsam
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center bg-slate-600 opacity-60 py-10 text-center px-2 text-white rounded-sm space-y-2 group-hover:blur-sm hover:!blur-none group-hover:scale-100 hover:!scale-105 duration-700 ">
          <RxCardStackMinus size={50} />
          <p className=" text-xl font-bold text-white ">
            Mern-stack development
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro
            deleniti temporibus ipsam
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center bg-slate-600 opacity-60 py-10 text-center px-2 text-white rounded-sm space-y-2 group-hover:blur-sm hover:!blur-none group-hover:scale-100 hover:!scale-105 duration-700 ">
          <IoFileTrayFullSharp size={50} />
          <p className=" text-xl font-bold text-white ">
            Full-stack development
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro
            deleniti temporibus ipsam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
