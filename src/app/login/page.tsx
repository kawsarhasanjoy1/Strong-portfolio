"use client";
/* eslint-disable react-hooks/rules-of-hooks */
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
import { FaArrowRight, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleToLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values).unwrap();
      if (res.success && res?.data) {
        const user = jwtDecode(res?.data?.token);
        dispatch(setUser({ user: user, token: res?.data?.token }));
        toast.success(res?.message || "Login Successful!");
        navigate.push("/");
      } else {
        toast.error(res?.message || "Login failed");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] p-4 md:p-8 relative overflow-hidden">
      <div className="fixed top-0 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60 -z-10" />
      <div className="fixed bottom-0 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 -z-10" />

      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2.5rem] shadow-[0_20px_70px_-10px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100">
        <div className="hidden lg:block lg:col-span-5 relative bg-blue-700 overflow-hidden">
          <Image
            fill
            src="https://i.ibb.co/1dSVywt/login.jpg"
            alt="Login Illustration"
            className="object-cover opacity-75 mix-blend-overlay transition-transform duration-1000 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/20 to-transparent p-12 flex flex-col justify-end">
            <h2 className="text-4xl font-black text-white leading-tight">
              Welcome <br />
              <span className="text-blue-300 underline decoration-blue-400 decoration-4 underline-offset-4">
                Back.
              </span>
            </h2>
            <p className="text-blue-100 mt-4 font-medium max-w-xs">
              "Great things are waiting for you inside. Log in to continue your
              journey."
            </p>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 p-8 md:p-20 flex flex-col justify-center relative bg-white">
          <div className="max-w-md w-full mx-auto space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
                <FaLock /> Secure Access
              </div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tighter">
                Member <span className="text-blue-600">Login</span>
              </h1>
              <p className="text-gray-500 font-medium">
                Please enter your credentials to access your dashboard.
              </p>
            </div>

            <PForm
              onSubmit={handleToLogin}
              defaultValues={loginDefaultValue}
              resolver={zodResolver(loginSchema)}
            >
              <div className="space-y-4">
                <div className="space-y-3">
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
                    placeHolder="Password"
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-gray-200 transition-all duration-500 flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  SIGN IN{" "}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </PForm>

            <div className="pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 font-medium text-sm">
                  New to the platform?
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-3 transition-all text-sm uppercase tracking-tighter"
                >
                  Create Account <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Kawsar Hasan
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
