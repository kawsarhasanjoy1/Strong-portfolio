"use client";
import PForm from "@/component/Forms/PForm";
import PInput from "@/component/Forms/PInput";
import { registerDefaultValue } from "@/defaultValues/defaultValues";
import { registerSchema } from "@/validation/user";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { FaArrowRight, FaUserPlus } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useCreateUserMutation } from "@/redux/api/userApi";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [createUser] = useCreateUserMutation();
  const navigate = useRouter();

  const HandleToRegister = async (values: FieldValues) => {
    try {
      const res = await createUser(values).unwrap();
      if (res.success) {
        toast.success(res?.message || "Registration Successful!");
        navigate.push("/login");
      } else {
        toast.error(res?.message || "Registration failed");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] p-4 md:p-8">
      <div className="fixed top-0 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60 -z-10" />
      <div className="fixed bottom-0 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-60 -z-10" />

      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2.5rem] shadow-[0_20px_70px_-10px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
        <div className="hidden lg:block lg:col-span-5 relative bg-blue-600 overflow-hidden">
          <Image
            fill
            src="https://i.ibb.co/1dSVywt/login.jpg"
            alt="Register visual"
            className="object-cover opacity-80 mix-blend-multiply transition-transform duration-1000 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent p-12 flex flex-col justify-end">
            <h2 className="text-4xl font-black text-white leading-tight">
              Start Your <br />
              <span className="text-emerald-400">Extraordinary</span> <br />
              Journey Today.
            </h2>
            <p className="text-blue-100 mt-4 font-medium italic">
              "Join our community of creators and builders."
            </p>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 p-8 md:p-16 flex flex-col justify-center relative">
          <div className="max-w-md w-full mx-auto space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                <FaUserPlus /> Join The Club
              </div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tighter">
                Create <span className="text-blue-600">Account</span>
              </h1>
              <p className="text-gray-500 font-medium">
                Enter your details to register as a new member.
              </p>
            </div>

            <PForm
              onSubmit={HandleToRegister}
              defaultValues={registerDefaultValue}
              resolver={zodResolver(registerSchema)}
            >
              <div className="space-y-5">
                <div className="space-y-4">
                  <PInput
                    className="rounded-2xl border-gray-100 bg-gray-50/50 py-4 px-6 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-black"
                    type="text"
                    name="username"
                    placeHolder="Full Name"
                  />
                  <PInput
                    className="rounded-2xl border-gray-100 bg-gray-50/50 py-4 px-6 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-black"
                    type="email"
                    name="email"
                    placeHolder="Email Address"
                  />
                  <PInput
                    className="rounded-2xl border-gray-100 bg-gray-50/50 py-4 px-6 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-black"
                    type="password"
                    name="password"
                    placeHolder="Create Password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  REGISTER NOW{" "}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </PForm>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-500 font-medium text-sm text-center lg:text-left">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 font-black hover:underline underline-offset-4"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>

          <p className="absolute bottom-6 right-8 text-[10px] font-bold text-gray-300 uppercase tracking-widest hidden md:block">
            © {new Date().getFullYear()} Kawsar Hasan Joy
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
