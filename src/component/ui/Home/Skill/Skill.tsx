"use client";
import React from "react";
import skill from "../../../../../public/skill.json";
import { TSkill } from "@/types/global";
import Cart from "./Cart";
import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <div>
      <p className=" text-center font-bold text-3xl text-white my-10">
        My Skill
      </p>
      <Marquee>
        <div className="flex gap-6">
          {" "}
          {skill.map((item: TSkill) => (
            <Cart key={item?.num} item={item} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skill;
