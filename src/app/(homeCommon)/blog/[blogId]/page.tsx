"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import blog from "../../../../../public/blog.json";
import BlogDetails from "@/component/ui/Blog/BlogDetails";
import { TBlog } from "@/types/global";
import { useGetBlogQuery } from "@/redux/api/blogApi";

const page = ({ params }: { params: { blogId: string } }) => {
  const singleBlog = useGetBlogQuery(undefined);
  const filter = singleBlog?.data?.data.filter(
    (item: any) => item?._id === params?.blogId
  );


  return (
    <div>
      {filter?.map((item: TBlog) => (
        <BlogDetails key={item?._id} blog={item} />
      ))}
    </div>
  );
};

export default page;
