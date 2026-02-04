"use client";
import React from "react";
import { TSkill } from "@/types/global";
import Cart from "./Cart";
import Marquee from "react-fast-marquee";
import { useGetSkillQuery } from "@/redux/api/skillApi";

const Skill = () => {
  const { data } = useGetSkillQuery(undefined);

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl font-black tracking-tighter text-gray-900 uppercase">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
            The tools and technologies I master
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            <div className="flex gap-8 py-6 px-4">
              {data?.data?.map((item: TSkill) => (
                <Cart key={item?._id} item={item} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skill;