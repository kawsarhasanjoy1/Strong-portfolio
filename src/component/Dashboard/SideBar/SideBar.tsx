"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AdminSidebar from "./Admin";
import { logOut } from "@/redux/fetures/userSlice";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const user = useAppSelector((store) => store.auth.user);
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }

  const handleToLogout = () => {
    dispatch(logOut(""));
    navigate.push("/login");
  };

  return (
    <div className="font-[Inter]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex justify-between items-center bg-white border-b px-6 py-4 lg:hidden shadow-sm">
             <h2 className="text-xl font-black text-blue-600 tracking-tighter">DASHBOARD</h2>
            <label htmlFor="my-drawer-2" className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <HiOutlineMenuAlt3 size={24} className="text-gray-800" />
            </label>
          </div>
        </div>

        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

          <aside className="w-80 min-h-full bg-white border-r border-gray-100 flex flex-col">
            <div className="relative overflow-hidden p-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10" />

              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="relative p-1 bg-white/10 rounded-full backdrop-blur-md">
                  <div className="avatar">
                    <div className="w-20 h-20 rounded-full border-2 border-blue-400/50">
                      <Image
                        width={80}
                        height={80}
                        unoptimized 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="Profile"
                        className="bg-blue-100"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full shadow-lg"></div>
                </div>

                <div className="text-center">
                  <span className="inline-block px-3 py-0.5 bg-blue-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
                    {user?.role || "Member"}
                  </span>
                  <h2 className="text-xl font-black tracking-tight uppercase leading-tight">
                    {user?.name || "Anonymous"}
                  </h2>
                  <p className="text-xs text-blue-200 font-medium truncate max-w-[200px] mt-1 opacity-80">
                    {user?.email}
                  </p>
                </div>

                <button
                  onClick={handleToLogout}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300"
                >
                  <BsBoxArrowInRight size={16} />
                  Sign Out
                </button>
              </div>
            </div>
            <div className="flex-1 py-6">
               <AdminSidebar />
            </div>

            {/* Bottom Credit */}
            <div className="p-6 border-t border-gray-50">
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest text-center">
                    System Ver 2.0.4
                </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SideBar;