"use client";
import React from "react";
import BlogCart from "../Home/BlogCart/BlogCart";
import Link from "next/link";
import { useGetBlogQuery } from "@/redux/api/blogApi";

const Blog = () => {
  const { data } = useGetBlogQuery(undefined);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 uppercase">
            Latest <span className="text-green-500">Insights</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">
            Thoughts, Tutorials & Tech Stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data?.data?.slice(0, 2).map((blog: any) => (
            <BlogCart key={blog._id} blog={blog} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/blog">
            <button className="px-10 py-4 bg-gray-900 text-white font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 rounded-2xl shadow-xl active:scale-95">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;