"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import dateFormeter from "@/utils/dateFormeter";
import { useEffect, useRef } from "react";

const BlogCart = ({ blog }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  const date = dateFormeter(blog?.createdAt);
  const blogV = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 2 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  let extractedValues: any[] = [];
  if (typeof window !== "undefined") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.description, "text/html");
    const paragraphTags = doc.querySelectorAll("p");
    extractedValues = Array.from(paragraphTags).map((tag) => tag.textContent);
  }

  return (
    <motion.div
      variants={blogV}
      animate={controls}
      ref={ref}
      initial="hidden"
      className="card w-full bg-base-100 space-y-4 bg-[#2220207a] p-5 rounded-2xl shadow-2xl"
    >
      <figure>
        <Image
          src={blog?.image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-xl h-64"
        />
      </figure>
      <div className="card-body space-y-4 ">
        <p className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 w-44 rounded-full py-1 text-white">
          <FaCalendar className="mr-2" />
          {date}
        </p>
        <h2 className=" text-start">
          {extractedValues.map((value, index) => (
            <div key={index}>{value?.slice(0, 100)}</div>
          ))}
          <Link
            href={`/blog/${blog?._id}`}
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
    </motion.div>
  );
};

export default BlogCart;
