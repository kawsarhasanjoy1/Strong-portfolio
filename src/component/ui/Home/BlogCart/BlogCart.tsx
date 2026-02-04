"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import dateFormeter from "@/utils/dateFormeter";

const BlogCart = ({ blog }: any) => {
  const date = dateFormeter(blog?.createdAt);
  const cleanDescription = blog.description
    ? blog.description.replace(/<[^>]*>/g, "").slice(0, 120) + "..."
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
          <Image
            src={blog?.image}
            fill
            alt="blog image"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter text-blue-600 shadow-sm">
              New Post
            </span>
          </div>
        </div>
        <div className="p-8 md:w-3/5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <FaCalendarAlt className="text-blue-500" />
              {date}
            </div>

            <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
              {blog?.name || "Untitled Blog Post"}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {cleanDescription}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
            <Link
              href={`/blog/${blog?._id}`}
              className="flex items-center gap-2 text-sm font-black text-gray-900 hover:text-blue-600 group/link transition-colors"
            >
              READ MORE{" "}
              <FaArrowRight className="text-[10px] group-hover/link:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-1.5 text-gray-500 font-bold text-xs bg-white px-3 py-1 rounded-full shadow-sm">
              <AiFillLike className="text-blue-500 text-base" />
              {blog?.like || 0}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCart;
