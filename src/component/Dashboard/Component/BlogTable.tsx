"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GrTrash } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import { TPortfolio } from "@/types/global";

const BlogTable = ({
  product,
  HandleToUp,
  HandleToDelete,
}: {
  product: any;
  HandleToUp?: any;
  HandleToDelete?: any;
}) => {
  const [open, setOpen] = useState(false);
  const HandleToOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <tr className="hover:bg-gray-50 border-b transition duration-300">
        <td className="py-4 px-4 flex justify-start">
          <Image
            width={100}
            height={100}
            src={product?.image}
            alt=""
            className="h-16 w-16 object-cover bg-gray-300 rounded-full border-4"
          />
        </td>
        <td className="py-4 px-6 border-b  font-semibold">{product?.name}</td>
        <td className="py-4 px-6 border-b  font-semibold">
          {(product?.what).slice(0, 20)}
        </td>

        <td className="py-4 px-6 border-b text-sm shrink-0">
          {(product?.how).slice(0, 20)}
        </td>
        <td className="py-4 px-6 border-b text-end">
          <button
            onClick={() => HandleToDelete(product?._id)}
            className=" rounded-full"
          >
            <GrTrash className="  z-20" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default BlogTable;
