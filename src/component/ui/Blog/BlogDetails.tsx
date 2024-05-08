import { TBlog } from "@/types/global";
import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogDetails = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl md:mx-auto text-white space-y-10">
      <figure>
        <Image
          src={blog?.image}
          width={1200}
          height={100}
          alt="blog image"
          className="rounded-xl w-full border md:h-[500px] "
        />
      </figure>
      <div className=" flex justify-between items-center">
        <h1 className=" md:text-4xl my-5 text-start">{blog?.name}</h1>
        <div className=" ">
          <p className="flex items-center justify-center  text-accent  bg-gradient-to-r from-green-400 to-blue-500 w-44 px-2 py-1 rounded-full">
            <FaCalendar className="mr-2" />
            {blog?.date}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h1 className=" text-3xl font-bold my-8">What is {blog.name} ?</h1>
        <p className="text-white md:text-2xl text-[15px] text-justify">
          {blog?.what}
        </p>
        <h1 className=" text-3xl font-bold my-8">Why use {blog.name} ?</h1>
        <p className="text-white md:text-2xl text-[15px] text-justify">
          {blog?.why}
        </p>
        <div className="flex justify-between items-center mt-5 py-5">
          <div className="flex items-center md:text-2xl text-[20px] cursor-pointer">
            <AiFillLike className=" text-white" />
            <span className="mr-1">{blog?.like}</span>
            Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
