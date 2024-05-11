"use client";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/fetures/userSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleHeader = () => {
    setIsOpen(!isOpen);
  };
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();
  const isAdmin = user?.role == "admin";
  return (
    <div className=" z-20 fixed w-full uppercase">
      <div className=" flex px-3 text-black font-semibold max-w-[1280px] text-[16px]  bg-[#feffff] w-full h-14 mx-auto shadow-2xl justify-between">
        <div className=" flex ">
          <Link href={"/"}>
            <p className=" flex items-center gap-1 text-[32px]">
              {/* <p className=" text-xl flex items-center mb-3">Winter</p> */}
              <Image
                className=" flex items-center size-16"
                src="https://i.ibb.co/925C7fH/4873163-removebg-preview.png"
                alt=""
                width={20}
                height={20}
              />
            </p>
          </Link>
        </div>

        <div className=" w-full  md:z-0 z-20 flex justify-center">
          <div className=" absolute right-2 top-2">
            <span onClick={HandleHeader} className="md:hidden">
              {isOpen ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
            </span>
          </div>
          <ul
            className={` md:flex  items-center justify-end  h-14  gap-10 py-2 absolute  md:space-y-0 space-y-4 ${
              isOpen
                ? "bg-[#feffff] z-10 left-0 top-[58px] w-full h-screen px-5 transition-all delay-100 duration-600 shadow-2xl"
                : "-left-[450px] h-screen md:h-14 md:left-auto "
            }`}
          >
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>

            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/about"}>About</Link>
            </li>

            <li className="group  rounded-full flex  cursor-pointer flex-col">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="group  rounded-full flex  cursor-pointer flex-col">
              {isAdmin ? (
                <Link href={`/dashboard/${isAdmin ? "admin" : ""}/project/add-project`}>
                  Dashboard
                </Link>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
        {user ? (
          <div className=" flex justify-center items-center">
            <button
              onClick={() => dispatch(logOut(""))}
              className=" btn rounded-full"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className=" flex justify-center items-center">
            <Link href={"/login"}>
              <button className=" btn rounded-full">login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
