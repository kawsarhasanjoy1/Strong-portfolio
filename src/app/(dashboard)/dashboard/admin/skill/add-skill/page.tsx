/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import FileUpload from "@/component/Forms/FileUpload";
import PForm from "@/component/Forms/PForm";
import PInput from "@/component/Forms/PInput";
import { skillDefaultValue } from "@/defaultValues/defaultValues";
import useHostImage from "@/hook/useHosImage";
import { useCreateProjectMutation } from "@/redux/api/projectApi";
import { useCreateSkillMutation } from "@/redux/api/skillApi";

import { skillSchema } from "@/validation/skill";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const page = () => {
  const [createSkill] = useCreateSkillMutation();
  const HandleToSubmit = async (values: FieldValues) => {
    const image = await useHostImage(values?.image);
    const Skill = {
      ...values,
      image: image?.display_url,
    };
    const res = await createSkill(Skill).unwrap();
    console.log(res)
    if (res.success) {
      toast.success(res?.message);
    }
  };
  return (
    <div>
      <PForm
        onSubmit={HandleToSubmit}
        resolver={zodResolver(skillSchema)}
        defaultValues={skillDefaultValue}
      >
        <div className="">
          <div className=" bg-white shadow-md rounded-lg p-6 h-screen space-y-10">
            <div className=" space-y-2">
              <div className=" ">
                <label htmlFor="Project Name font-bold text-black">
                  Skill Name
                </label>
                <PInput
                  name="name"
                  className=" w-full"
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
