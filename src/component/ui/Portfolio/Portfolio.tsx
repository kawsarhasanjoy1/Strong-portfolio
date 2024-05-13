"use client";
import React from "react";
import PortfolioCart from "../Home/PortfolioCart/PortfolioCart";
import Link from "next/link";
import Button from "../Button/Button";
import { useGetProjectQuery } from "@/redux/api/projectApi";
import { TPortfolio } from "@/types/global";

const Portfolio = () => {
  const { data } = useGetProjectQuery(undefined);
  return (
    <div>
      <p className=" text-3xl font-bold text-center text-white">Portfolio</p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
        {data?.data?.slice(0, 3).map((product: TPortfolio) => (
          <PortfolioCart products={product} key={product?._id} />
        ))}
      </div>
      <Link
        className=" flex justify-center items-center my-20 pt-10 font-bold"
        href={"/portfolio"}
      >
        <Button className="w-44">All product</Button>
      </Link>
    </div>
  );
};

export default Portfolio;
