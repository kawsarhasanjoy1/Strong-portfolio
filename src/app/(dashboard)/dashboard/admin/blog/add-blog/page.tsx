/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import FileUpload from "@/component/Forms/FileUpload";
import PForm from "@/component/Forms/PForm";
import PInput from "@/component/Forms/PInput";
import { blogDefaultValue } from "@/defaultValues/defaultValues";
import useHostImage from "@/hook/useHosImage";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const page = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const textValue = content.replace(/<[^>]+>/g, ""); // Strips HTML tags from content
  const [createBlog] = useCreateBlogMutation();
  const HandleToSubmit = async (values: FieldValues) => {
    const image = await useHostImage(values?.image);
    const Blog = {
      ...values,
      description: content,
      image: image?.display_url,
    };
    console.log(Blog);
    const res = await createBlog(Blog).unwrap();
    console.log(res);
    if (res.success) {
      toast.success(res?.message);
    }
  };
  return (
    <div>
      <PForm
        onSubmit={HandleToSubmit}
        // resolver={zodResolver(BlogSchema)}
        defaultValues={blogDefaultValue}
      >
        <div className="">
          <div className=" bg-white shadow-md rounded-lg p-6 h-full space-y-10">
            <div className=" space-y-2">
              <div className=" ">
                <label htmlFor="Project Name font-bold text-black">
                  Blog Name
                </label>
                <PInput
                  name="name"
                  className=" w-full"
                  placeHolder="Enter your project description"
                  type="text"
                />
              </div>

              <div>
                <JoditEditor
                  ref={editor}
                  value={content}
                  // onBlur={(newContent) => setContent(newContent)}
                  onChange={(newContent) => setContent(newContent)}
                />
              </div>

              <div className=" ">
                <label htmlFor="Project Name font-bold text-black">
                  Project Image
                </label>
                <FileUpload type="file" name="image" className="" />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" bg-green-500 px-10 py-2 text-white font-bold uppercase rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </PForm>
    </div>
  );
};

export default page;
