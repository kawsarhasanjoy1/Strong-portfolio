import BlogCart from "@/component/ui/Home/BlogCart/BlogCart";
import blog from "../../../../public/blog.json";

const page = () => {
  return (
    <div>
      <p className=" text-3xl font-bold text-center py-7 text-white">
        All Blog
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        {blog?.map((item) => (
          <BlogCart key={item?.id} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
