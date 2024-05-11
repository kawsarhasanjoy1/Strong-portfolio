/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ProductTable from "@/component/Dashboard/Component/ProductTable/ProductTable";
import {
  useDeleteProjectMutation,
  useGetProjectQuery,
} from "@/redux/api/projectApi";
import { TPortfolio } from "@/types/global";
import React from "react";
import toast from "react-hot-toast";

const page = () => {
  const [deleteProject] = useDeleteProjectMutation();
  const { data } = useGetProjectQuery(undefined);

  const HandleToDelete = async (e: any) => {
    const res = await deleteProject(e).unwrap();
    if (res.success) {
        toast.success(res?.message)
    }
  };
  const HandleToUp = () => {};
  return (
    <div className="w-full mx-auto ">
      <table className=" w-full mx-auto shadow-md border border-gray-100 my-6">
        <thead>
          <tr className="bg-slate-200 text-black border-b-2 shadow-xl rounded-t-md">
            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Live Link</th>
            <th className="py-4 px-6 text-lg text-left border-b">
              Description
            </th>
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
        <tbody className=" bg-slate-100 text-black">
          {data?.data?.map((product: TPortfolio) => (
            <ProductTable
              HandleToDelete={HandleToDelete}
              HandleToUp={HandleToUp}
              key={product?._id}
              product={product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
