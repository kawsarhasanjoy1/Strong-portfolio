"use client";
import SideBar from "@/component/Dashboard/SideBar/SideBar";
import { TChildren } from "@/types/global";
import React from "react";

const layout = ({ children }: TChildren) => {
  return (
    <div className=" md:flex">
      <div>
        <SideBar />
      </div>
      <div className=" w-full px-10">{children}</div>
    </div>
  );
};

export default layout;
