/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import FileUpload from "@/component/Forms/FileUpload";
import PForm from "@/component/Forms/PForm";
import PInput from "@/component/Forms/PInput";
import { portfolioDefaultValue } from "@/defaultValues/defaultValues";
import useHostImage from "@/hook/useHosImage";
import { useCreateProjectMutation } from "@/redux/api/projectApi";
import { projectSchema } from "@/validation/project";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const page = () => {
  const [createProject] = useCreateProjectMutation();
  const HandleToSubmit = async (values: FieldValues) => {
    const image = await useHostImage(values?.image);
    const project = {
      ...values,
      image: image?.display_url,
    };
    const res = await createProject(project).unwrap();
    if (res?.success) {
      toast.success(res?.message);
    }
  };
  return (
    <div>
      <PForm
        onSubmit={HandleToSubmit}
        resolver={zodResolver(projectSchema)}
        defaultValues={portfolioDefaultValue}
      >
        <div className="">
          <div className=" bg-white shadow-md rounded-lg p-6 grid gap-6 h-full">
            <div className=" space-y-2">
              <div className=" ">
                <label htmlFor="Project Name font-bold text-black">
                  Project Name
                </label>
                <PInput
                  name="name"
                  className=" w-full"
                  placeHolder="Enter your project name"
                  type="text"
                />
              </div>

              <div className=" ">
                <label htmlFor="Project Name font-bold text-black">
                  Project live link
                </label>
                <PInput
                  name="liveLink"
                  className=" w-full"
                  placeHolder="Enter your project live link"
                  type="text"
                />
              </div>
              <div className=" ">
                <label htmlFor="Project Name font-bold text-black">
                  Project Github link
                </label>
                <PInput
                  name="githubLink"
                  className=" w-full"
                  placeHolder="Enter your project github link"
                  type="text"
                />
              </div>
              <div className=" ">
                <label htmlFor="Project Name font-bold text-black">
                  Project description
                </label>
                <PInput
                  name="description"
                  className=" w-full h-24"
                  placeHolder="Enter your project description"
                  type="text"
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
