import { TBlog } from "@/types/global";
import dateFormeter from "@/utils/dateFormeter";
import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogDetails = ({ blog }: { blog: TBlog }) => {
  const date = dateFormeter(blog?.createdAt);
  return (
    <div className="card w-full bg-base-100 shadow-xl md:mx-auto text-white space-y-10 md:px-10 px-3">
      <figure>
        <Image
          src={blog?.image}
          width={1200}
          height={100}
          alt="blog image"
          className="rounded-xl w-full md:h-[500px]"
        />
      </figure>
      <div className=" flex justify-between items-center">
        <h1 className=" md:text-4xl my-5 text-start">{blog?.name}</h1>
        <div className=" ">
          <p className="flex items-center justify-center  bg-gradient-to-r from-green-400 to-blue-500 w-44 px-2 py-1 rounded-full text-white animate-pulse">
            <FaCalendar className="mr-2" />
            {date}
          </p>
        </div>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>
      <div className="">
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
