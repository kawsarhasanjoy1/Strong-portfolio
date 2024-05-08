'use client'
import { TSkill } from "@/types/global";
import Image from "next/image";
import React from "react";

const Cart = ({ item }: { item: TSkill }) => {
  return (
    <div>
      <div className=" border md:w-48 md:h-48  md:pt-10 pt-4 pb-4 font-bold font-mono bg-slate-800  hover:bg-slate-600 rounded-lg hover:transition-width duration-500 ease-in-our shadow-2xl cursor-pointer mx-auto ">
        {" "}
        <Image
          width={20}
          height={20}
          className=" w-20 h-20 object-cover mx-auto rounded-full"
          src={item.img}
          alt={item?.name}
        />
        <p className=" text-xl mt-2 text-center text-white">{item.name}</p>
      </div>
    </div>
  );
};

export default Cart;
