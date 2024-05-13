'use client'
import React from "react";
import BlogCart from "../Home/BlogCart/BlogCart";
import Button from "../Button/Button";
import Link from "next/link";
import blogs from "../../../../public/blog.json";
import { useGetBlogQuery } from "@/redux/api/blogApi";
const Blog = () => {
  const {data} = useGetBlogQuery(undefined)
  console.log(data)
  return (
    <div>
      <p className=" text-3xl font-bold text-center pb-16 text-white">
        Recent Blog
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        {data?.data.map((blog:any) => (
          <BlogCart key={blog.id} blog={blog} />
        ))}
      </div>
      <Link href={"/blog"} className=" flex justify-center my-8">
        <Button className=" font-bold w-36">All Blog</Button>
      </Link>
    </div>
  );
};

export default Blog;
