import { TChildren } from "@/types/global";
import React from "react";

const Container = ({ children }: TChildren) => {
  return <div className=" max-w-7xl mx-auto overflow-hidden">{children}</div>;
};

export default Container;
