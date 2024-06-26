'use client'
import { TSkill } from "@/types/global";
import Image from "next/image";
import React from "react";

const Cart = ({ item }: { item: TSkill }) => {
  return (
    <div>
      <div className=" border md:w-48 md:h-48 w-32 h-28  md:pt-10 pt-4 pb-4 font-bold font-mono bg-slate-800  hover:bg-slate-600 rounded-lg hover:transition-width duration-500 ease-in-our shadow-2xl cursor-pointer mx-auto hover:rotate-[360deg] ">
        {" "}
        <Image
          width={10}
          height={10}
          className=" md:w-20 md:h-20 w-10 h-10 object-cover mx-auto rounded-full"
          src={item.image}
          alt={item?.name}
        />
        <p className=" md:text-xl text-md mt-2 text-center text-white">{item.name}</p>
      </div>
    </div>
  );
};

export default Cart;
