/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import PortfolioCart from "@/component/ui/Home/PortfolioCart/PortfolioCart";
import { TPortfolio } from "@/types/global";
import { useGetProjectQuery } from "@/redux/api/projectApi";

const page = () => {
  const { data } = useGetProjectQuery(undefined);
  return (
    <div>
      <p className=" text-3xl font-bold text-center text-white my-10">
        Portfolio
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 h-[100%]">
        {data?.data?.map((product:TPortfolio) => (
          <PortfolioCart products={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default page;
