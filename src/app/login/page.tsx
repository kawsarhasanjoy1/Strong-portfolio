import PInput from "@/component/Forms/PInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
      <div className="md:flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%] relative">
        {/* register design side  */}
        <Image
          className=" w-full"
          width={100}
          height={100}
          src={"https://i.ibb.co/1dSVywt/login.jpg"}
          alt=""
        />

        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
          <h1 className="pb-8 text-center text-2xl font-bold ">Member login</h1>
          <form className="flex  w-full flex-col items-center justify-center gap-4">
            <div className=" w-full mx-auto">
              <PInput
                className=" rounded-full text-black w-full md:w-[60%] mx-auto flex justify-center"
                type="text"
                name="name"
                placeHolder="Enter your name"
              />

              <PInput
                className=" rounded-full text-black w-full md:w-[60%] mx-auto flex justify-center"
                type="email"
                name="email"
                placeHolder="Enter your email"
              />
            </div>

            <button className="btn w-[80%] rounded-full  px-6 py-2 font-medium  md:w-[60%]">
              Submit
            </button>
          </form>
          <Link href={"/register"}>
            {" "}
            <p className=" absolute bottom-3 hover:text-yellow-500 text-center flex justify-center items-center gap-2 md:w-[40%] w-full text-md  text-black duration-500">
              Create Your Account <FaArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
