import MainBlog from "@/component/ui/MainBlog/MainBlog";

const page = () => {
  return (
    <div>
      <p className=" text-3xl font-bold text-center py-7 text-white">
        All Blog
      </p>
      <div>
        <MainBlog />
      </div>
    </div>
  );
};

export default page;
