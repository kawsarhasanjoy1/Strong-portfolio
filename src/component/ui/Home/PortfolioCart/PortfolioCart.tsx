import { TPortfolio } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../Button/Button";
import { FaArrowRight } from "react-icons/fa";
const image = "https://askbootstrap.com/preview/eatsie/assets/img/logo.svg";

const PortfolioCart = ({ products }: { products: TPortfolio }) => {
  return (
    <div
      className={`relative border border-gray-200 rounded-lg shadow  bg-gray-800 dark:border-gray-700 hover:-translate-y-2 duration-1000  hover:transition-colors hover:delay-300 hover:duration-500  mt-20 pb-7 h-full text-white`}
    >
      <div>
        <div>
          <div className="mx-auto ">
            <div>
              <div className="relative max-w-full h-60 overflow-hidden">
                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                  <Image
                    width={100}
                    height={150}
                    src={products.image}
                    alt="image"
                    className="w-full object-cover object-top "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-5 mt-5 md:px-4 mx-2">
            <h1 className=" text-start font-bold md:text-2xl text-xl">
              {products?.name}
            </h1>
            <p className="text-start mt-3">{products?.description.slice(0,200)}</p>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 w-full flex justify-between">
        <a target="_blank" href={products?.githubLink}>
          <Button className=" w-full flex justify-center items-center gap-2 font-bold px-5">
            Github link <FaArrowRight />
          </Button>
        </a>
        <a href={products?.liveLink} target="_blank">
          <Button className=" w-full flex justify-center items-center gap-2 font-bold px-5">
            Live link <FaArrowRight />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCart;
