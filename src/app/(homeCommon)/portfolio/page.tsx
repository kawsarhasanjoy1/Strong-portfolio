/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import PortfolioCart from "@/component/ui/Home/PortfolioCart/PortfolioCart";
import products from "../../../../public/portfolio.json";
import { useGetBlogQuery } from "@/redux/api/blogApi";
import { TPortfolio } from "@/types/global";

const page = () => {
  const { data } = useGetBlogQuery(undefined);
  return (
    <div>
      <p className=" text-3xl font-bold text-center text-white my-10">
        Portfolio
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
        {data?.data?.map((product:TPortfolio) => (
          <PortfolioCart products={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default page;
