'use client'
import { useGetBlogQuery } from "@/redux/api/blogApi";
import { TBlog } from "@/types/global";
import React from "react";
import BlogCart from "../Home/BlogCart/BlogCart";

const MainBlog = () => {
  const { data } = useGetBlogQuery(undefined);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
      {data?.data?.map((item: TBlog) => (
        <BlogCart key={item?._id} blog={item} />
      ))}
    </div>
  );
};

export default MainBlog;
