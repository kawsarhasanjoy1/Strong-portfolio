"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineRead,
  AiOutlineLogout,
  AiOutlineLogin,
  AiOutlineDashboard,
} from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/fetures/userSlice";
import Container from "../Containert/Container";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <AiOutlineHome size={22} /> },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: <AiOutlineProject size={22} />,
    },
    { name: "Blog", href: "/blog", icon: <AiOutlineRead size={22} /> },
    { name: "About", href: "/about", icon: <AiOutlineUser size={22} /> },
    { name: "Contact", href: "/contact", icon: <AiOutlineMail size={22} /> },
  ];

  if (!mounted) return null;

  return (
    <>
      <header className="fixed  left-1/2 -translate-x-1/2 z-50 w-full hidden md:block">
        <div className="bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-md ">
          <Container>
            <div className=" flex justify-between items-center py-2">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="https://i.ibb.co/925C7fH/4873163-removebg-preview.png"
                  alt="logo"
                  width={40}
                  height={40}
                  priority
                />
              </Link>

              <nav className="bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50">
                <ul className="flex items-center">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`px-5 py-2 rounded-full text-[12px] font-bold tracking-widest transition-all duration-500 flex items-center
                        ${
                          isActive
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-500 hover:text-black"
                        }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex items-center gap-3">
                {user ? (
                  <button
                    onClick={() => dispatch(logOut(""))}
                    className="bg-red-50 text-red-600 px-5 py-2 rounded-full text-[11px] font-extrabold hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    EXIT
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="bg-black text-white px-6 py-2 rounded-full text-[11px] font-extrabold hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all"
                  >
                    JOIN
                  </Link>
                )}

                {isAdmin && (
                  <Link
                    href="/dashboard/admin/project/add-project"
                    className="p-2 bg-blue-600 text-white rounded-full hover:rotate-12 transition-transform"
                  >
                    <AiOutlineDashboard size={20} />
                  </Link>
                )}
              </div>
            </div>
          </Container>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <div className="bg-[#111]/90 backdrop-blur-xl rounded-[2.5rem] px-6 py-4 flex justify-between items-center shadow-2xl border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex flex-col items-center ${isActive ? "text-blue-400" : "text-gray-400"}`}
              >
                {link.icon}
                {isActive && (
                  <span className="absolute -top-1 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></span>
                )}
              </Link>
            );
          })}

          <div className="w-[1px] h-6 bg-white/20 mx-1"></div>

          {user ? (
            <button
              onClick={() => dispatch(logOut(""))}
              className="text-red-400"
            >
              <AiOutlineLogout size={24} />
            </button>
          ) : (
            <Link href="/login" className="text-green-400">
              <AiOutlineLogin size={24} />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
