import { TPInput } from "@/types/global";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const PInput = ({ className, type, name, label, placeHolder }: TPInput) => {
  const { control } = useFormContext();
  return (
    <div>
      <label className=" block py-2 text-white" htmlFor={label}>
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            className={` border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none ${className}`}
            type={type}
            placeholder={placeHolder}
          />
        )}
      />
    </div>
  );
};

export default PInput;
