import React from "react";
import blog from "../../../../../public/blog.json";
import BlogDetails from "@/component/ui/Blog/BlogDetails";
import { TBlog } from "@/types/global";

const page = ({ params }: { params: { blogId: string } }) => {
  const filter = blog.filter((item) => item?.id === params.blogId);

  return (
    <div>
      {filter.map((item: TBlog) => (
        <BlogDetails key={item?.id} blog={item} />
      ))}
    </div>
  );
};

export default page;
