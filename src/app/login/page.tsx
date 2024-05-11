/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import PForm from "@/component/Forms/PForm";
import PInput from "@/component/Forms/PInput";
import { loginDefaultValue } from "@/defaultValues/defaultValues";
import { useLoginUserMutation } from "@/redux/api/userApi";
import { setUser } from "@/redux/fetures/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { loginSchema } from "@/validation/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const handleToLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res.success && res?.data) {
        const user = jwtDecode(res?.data?.token);
        dispatch(setUser({ user: user, token: res?.data?.token }));
        navigate.push("/");
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.log(err);
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
          <h1 className="pb-8 text-2xl font-bold w-[95%] md:w-[100%] mx-auto ">
            Member login
          </h1>
          <PForm
            onSubmit={handleToLogin}
            defaultValues={loginDefaultValue}
            resolver={zodResolver(loginSchema)}
          >
            <div className="md:w-[70%] w-[95%] mx-auto md:mx-0">
              <div className="">
                <PInput
                  className=" rounded-full text-black w-full "
                  type="email"
                  name="email"
                  placeHolder="Enter your email"
                />

                <PInput
                  className=" rounded-full text-black w-full "
                  type="password"
                  name="password"
                  placeHolder="Enter your email"
                />
              </div>

              <button className="btn w-full rounded-full  px-6 py-2 font-medium my-5">
                Submit
              </button>
            </div>
          </PForm>
          <Link href={"/register"}>
            {" "}
            <p className=" absolute bottom-3 hover:text-yellow-500 text-center md:text-start flex justify-center items-center md:justify-start gap-2 md:w-[40%] w-full text-md  text-black duration-500">
              Create Your Account <FaArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
