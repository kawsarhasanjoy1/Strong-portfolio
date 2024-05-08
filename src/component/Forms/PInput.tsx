import { TPInput } from "@/types/global";
import React from "react";

const PInput = ({ className, type, name, label, placeHolder }: TPInput) => {
  return (
    <div>
      <label className=" block py-2 text-white" htmlFor={label}>{label}</label>
      <input
        className={`rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none ${className}`}
        type={type}
        name={name}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default PInput;
