import { TPInput } from "@/types/global";
import React from "react";

const EInput = ({ className, type, name, placeHolder, label }: TPInput) => {
  return (
    <div>
      
      <input
        className={`rounded-lg border bg-slate-200  bg-transparent px-4 py-2 text-[#000000] focus:outline-none ${className}`}
        type={type}
        name={name}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default EInput;
