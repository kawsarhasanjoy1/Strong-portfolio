"use client";
import React from "react";
import PortfolioCart from "../Home/PortfolioCart/PortfolioCart";
import Link from "next/link";
import { useGetProjectQuery } from "@/redux/api/projectApi";
import { TPortfolio } from "@/types/global";

const Portfolio = () => {
  const { data } = useGetProjectQuery(undefined);

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 uppercase">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">
            Bringing ideas to life with code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.data?.slice(0, 3).map((product: TPortfolio) => (
            <PortfolioCart products={product} key={product?._id} />
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <Link href="/portfolio">
            <button className="px-10 py-4 bg-white border-2 border-gray-900 text-gray-900 font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-gray-200 active:scale-95">
              Explore All Works
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;