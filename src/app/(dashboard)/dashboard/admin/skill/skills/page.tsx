/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import SkillTable from "@/component/Dashboard/Component/SkillTable";
import { useDeleteSkillMutation, useGetSkillQuery } from "@/redux/api/skillApi";
import toast from "react-hot-toast";

const page = () => {
  const [deleteSkill] = useDeleteSkillMutation();
  const { data } = useGetSkillQuery(undefined);

  const HandleToDelete = async (e: any) => {
    const res = await deleteSkill(e).unwrap();
    if (res.success) {
      toast.success(res?.message);
    }
  };
  const HandleToUp = () => {};
  return (
    <div className="w-full mx-auto ">
      <table className=" w-full mx-auto shadow-md border border-gray-100 my-6">
        <thead>
          <tr className="bg-slate-200 text-black border-b-2 shadow-xl rounded-t-md">
            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
            <th className="py-4 px-6 text-lg text-left border-b">Name</th>

            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
        <tbody className=" bg-slate-100 text-black">
          {data?.data?.map((skill: any) => (
            <SkillTable
              HandleToDelete={HandleToDelete}
              HandleToUp={HandleToUp}
              key={skill?._id}
              product={skill}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
