import React from "react";
import PortfolioCart from "../Home/PortfolioCart/PortfolioCart";
import portfolio from "../../../../public/portfolio.json";
import Link from "next/link";
import Button from "../Button/Button";

const Portfolio = () => {
  return (
    <div>
      <p className=" text-3xl font-bold text-center text-white">Portfolio</p>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
        {portfolio.slice(0, 3).map((product) => (
          <PortfolioCart products={product} key={product?.id} />
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
