import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogCart = ({ blog }: any) => {
  return (
    <div className="card w-full bg-base-100 space-y-4 bg-[#2220207a] p-5 rounded-2xl shadow-2xl">
      <figure>
        <Image
          src={blog?.image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-xl h-64"
        />
      </figure>
      <div className="card-body space-y-4">
        <p className="flex items-center justify-center text-accent bg-gradient-to-r from-green-400 to-blue-500 w-44 rounded-full py-1 text-white">
          <FaCalendar className="mr-2" />
          {blog?.date}
        </p>
        <h2 className="card-title text-start">
          {blog?.what.slice(0, 200)}
          <Link
            href={`/blog/${blog?.id}`}
            className=" text-red-400 hover:text-red-600 font-bold block"
          >
            Learn more
          </Link>
        </h2>

        <div className="flex justify-between items-center py-5">
          <div className="avatar items-center">
            <span className=" font-bold text-xl ">{blog?.name}</span>
          </div>

          <div className="flex items-center">
            <AiFillLike className="text-accent text-xl" /> {blog?.like} Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;