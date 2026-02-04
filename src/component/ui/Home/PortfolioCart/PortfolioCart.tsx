"use client";
import { TPortfolio } from "@/types/global";
import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioCart = ({ products }: { products: TPortfolio }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="h-full w-full transition-transform duration-[6000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-16rem)]">
          <Image
            width={500}
            height={700}
            src={products.image}
            alt={products.name}
            className="w-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
          {products?.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
          {products?.description}
        </p>

        <div className="mt-auto flex gap-4">
          <a
            href={products?.githubLink}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 text-gray-700 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            <FaGithub className="text-lg" /> Code
          </a>
          <a
            href={products?.liveLink}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-50 text-blue-600 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCart;
