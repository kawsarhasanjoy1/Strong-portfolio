"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React from "react";
import { BsBoxArrowInRight, BsOutlet } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AdminSidebar from "./Admin";
import Button from "@/component/ui/Button/Button";
import { logOut } from "@/redux/fetures/userSlice";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const user = useAppSelector((store) => store.auth.user);
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const handleToLogout = () => {
    dispatch(logOut(""));
    navigate.push("/login");
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className=" flex justify-end text-white bg-gradient-to-r from-green-400 to-blue-500 px-3 py-3 md:hidden">
            <label htmlFor="my-drawer-2" className=" drawer-button md:hidden">
              <HiOutlineMenuAlt3 size={20} />
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
            <ul className="menu p-4  min-h-full bg-gray-100 shadow-2xl text-black space-y-3">
              {/* Sidebar content here */}
              <div className=" bg-gradient-to-r from-green-400 to-blue-500  gap-6 py-3  px-4 flex flex-col justify-center items-center">
                <div>
                  <div className="flex justify-center items-center space-x-2">
                    <div className="avatar">
                      <div className="  rounded-full md:w-16 md:h-16 w-12 h-12">
                        <Image
                          width={20}
                          height={20}
                          src={
                            "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                          }
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" space-y-2">
                  <p className=" text-center bg-red-600 w-24 text-white font-bold py-1 rounded-md mx-auto ">
                    {user?.role}
                  </p>
                  <p className=" text-[16px] uppercase font-bold text-white font-[Rokkitt] text-center">
                    {user?.name}
                  </p>
                  <p className=" text-sm cursor-pointer hover:underline text-white ">
                    {user?.email}
                  </p>
                  <p className=" text-sm mx-auto w-full flex justify-center items-center">
                    <button
                      onClick={handleToLogout}
                      className=" uppercase text-white bg-green-400 hover:bg-slate-400 px-5 py-2 rounded-sm text-sm font-bold flex items-center gap-1"
                    >
                      <BsBoxArrowInRight />
                      sing out
                    </button>
                  </p>
                </div>
              </div>
            </ul>
            {/* Sidebar content here */}
            <AdminSidebar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
