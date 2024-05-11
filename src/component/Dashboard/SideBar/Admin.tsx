import Link from "next/link";
import React from "react";
import { BiBook } from "react-icons/bi";
import { FaBloggerB, FaChessKing, FaSitemap, FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdAddComment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const AdminSidebar = () => {
  return (
    <div>
      <ul className=" text-lg uppercase">
        <Link href={"/dashboard/admin/project/add-project"}>
          {" "}
          <div className={`flex items-center `}>
            <MdAddComment size={13} />
            <li
              className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}
            >
              Add Project
            </li>
          </div>
        </Link>
        <Link href={"/dashboard/admin/project/projects"}>
          {" "}
          <div className={`flex items-center`}>
            <GrProjects size={13} />
            <li
              className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}
            >
              Projects
            </li>
          </div>
        </Link>
        <Link href={"/dashboard/admin/skill/add-skill"}>
          {" "}
          <div className={`flex items-center`}>
            <MdAddComment size={13} />
            <li
              className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}
            >
              Add skill
            </li>
          </div>
        </Link>
        <Link href={"/dashboard/admin/skill/skills"}>
          {" "}
          <div className={`flex items-center`}>
            <FaChessKing size={13} />
            <li
              className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}
            >
              Skills
            </li>
          </div>
        </Link>
        <Link href={"/dashboard/admin/blog/add-blog"}>
          {" "}
          <div className={`flex items-center`}>
            <MdAddComment size={13} />
            <li
              className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}
            >
              Add blog
            </li>
          </div>
        </Link>
        <Link href={"/dashboard/admin/blog/blogs"}>
          {" "}
          <div className={`flex items-center`}>
            <FaBloggerB size={13} />
            <li
              className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}
            >
              Blogs
            </li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
