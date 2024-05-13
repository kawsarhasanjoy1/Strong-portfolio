"use client";
import React from "react";
import { TSkill } from "@/types/global";
import Cart from "./Cart";
import Marquee from "react-fast-marquee";
import { useGetSkillQuery } from "@/redux/api/skillApi";

const Skill = () => {
  const { data } = useGetSkillQuery(undefined);

  return (
    <div>
      <p className=" text-center font-bold text-3xl text-white my-10">
        My Skill
      </p>
      <Marquee>
        <div className="flex gap-6">
          {" "}
          {data?.data?.map((item: TSkill) => (
            <Cart key={item?._id} item={item} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skill;
