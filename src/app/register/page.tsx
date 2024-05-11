/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import PForm from "@/component/Forms/PForm";
import PInput from "@/component/Forms/PInput";
import { registerDefaultValue } from "@/defaultValues/defaultValues";
import { registerSchema } from "@/validation/user";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useCreateUserMutation } from "@/redux/api/userApi";
import { useRouter } from "next/navigation";
const page = () => {
  const [createUser] = useCreateUserMutation();
  const navigate = useRouter();
  const HandleToRegister = async (values: FieldValues) => {
    try {
      const res = await createUser(values).unwrap();
      if (res.success) {
        toast.success(res?.message);
        navigate.push("/login");
      }
      toast.error(res?.message);
    } catch (err: any) {
      toast.error(err?.message || "Something want wrong");
    }
  };
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
          <h1 className="pb-8  text-2xl font-bold w-[95%] md:w-[100%] mx-auto">
            Member Register
          </h1>
          <PForm
            onSubmit={HandleToRegister}
            defaultValues={registerDefaultValue}
            resolver={zodResolver(registerSchema)}
          >
            <div className="md:w-[70%] w-[95%] mx-auto md:mx-0">
              <div className=" ">
                <PInput
                  className=" rounded-full text-black w-full "
                  type="text"
                  name="username"
                  placeHolder="Enter your name"
                />

                <PInput
                  className=" rounded-full text-black w-full "
                  type="email"
                  name="email"
                  placeHolder="Enter your email"
                />
                <PInput
                  className=" rounded-full text-black w-full"
                  type="password"
                  name="password"
                  placeHolder="Enter your password"
                />
              </div>

              <button className="btn w-full rounded-full  px-6 py-2 my-5 font-medium">
                Submit
              </button>
            </div>
          </PForm>
          <Link href={"/login"}>
            {" "}
            <p className=" absolute bottom-3 hover:text-yellow-500 text-center flex justify-center items-center gap-2 md:w-[40%] w-full md:justify-start text-md  text-black duration-500">
              Login Your Account <FaArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
